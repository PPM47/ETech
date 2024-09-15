import React from 'react';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { Product, Product as ProductType } from '../../../../payload/payload-types';
import { fetchDoc } from '../../../_api/fetchDoc';
import { recfetchDoc } from '../../../_api/recfetchDoc';
import { Blocks } from '../../../_components/Blocks';
import { ProductHero } from '../../../_heros/Product';
import { computeRecommendations } from '../../../_utilities/recommendationLogic';

export const dynamic = 'force-dynamic';

export default async function Product({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode();

  let product = null;

  try {
    product = await fetchDoc<Product>({
      collection: 'products',
      slug,
      draft: isDraftMode,
    });
    // console.log("Fetched product:", product);
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound(); // Handle the error as needed
  }

  if (!product) {
    notFound();
  }

  // Ensure product has id or _id
  if (!product.id && !product._id) {
    throw new Error("Fetched product does not have a valid id or _id");
  }

  // Fetch all products
  let allProducts = [];
  try {
    allProducts = await recfetchDoc<Product>('products');
    // console.log("Fetched all products:", allProducts);
  } catch (error) {
    console.error("Error fetching all products:", error);
    // Handle the error as needed
  }

  // Ensure allProducts is populated and has the correct structure
  if (!Array.isArray(allProducts)) {
    throw new Error("Fetched products data is not an array");
  }
  // console.log("all related prodcts", product.relatedProducts);
  // Compute recommendations based on product ID
  let recommendations = [];
  try {
    recommendations = computeRecommendations(allProducts, product.id);
    // console.log("Computed recommendations:", recommendations);
  } catch (error) {
    console.error("Error computing recommendations:", error);
    // Handle the error as needed
  }

  return (
    <>
      <ProductHero product={product} />
      <Blocks
        disableTopPadding
        blocks={[
          {
            blockType: 'recommendedProducts',
            blockName: 'Recommended Product',
            relationTo: 'products',
            introContent: [
              {
                type: 'h4',
                children: [
                  {
                    text: 'Recommended Products for You',
                  },
                ],
              },
            ],
            docs: recommendations, // Pass the computed recommendations here
          },
        ]}
      />
      <Blocks
        disableTopPadding
        blocks={[
          {
            blockType: 'relatedProducts',
            blockName: 'Related Product',
            relationTo: 'products',
            introContent: [
              {
                type: 'h4',
                children: [
                  {
                    text: 'Related Products',
                  },
                ],
              },
            ],
            docs: product.relatedProducts,
          },
        ]}
      />
      
    </>
  );
}
