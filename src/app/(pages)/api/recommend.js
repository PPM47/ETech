// pages/api/recommend.js

import { recfetchDoc } from '../../_api/recfetchDoc';
import { computeRecommendations } from '../../utils/recommendationLogic';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { productId } = req.body;

  try {
    // Fetch all products
    const products = await recfetchDoc('products');

    // Compute recommendations
    const recommendedProducts = computeRecommendations(products, productId);

    return res.status(200).json({ recommendations: recommendedProducts });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
