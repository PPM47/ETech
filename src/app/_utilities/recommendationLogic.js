import natural from 'natural';
// Function to compute the cosine similarity between two vectors
function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, val, i) => sum + val * (vecB[i] || 0), 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
}
export function computeRecommendations(products, productId) {
    console.log("Product ID passed to function:", productId);
    // console.log("Products array:", products);
    // Check if product IDs are correctly populated
    const productIds = products.map((product) => product.id);
    console.log("Available Product IDs:", productIds);

    if (!productId) {
      throw new Error('The productId is undefined. Please check the data source.');
    }

    // Log the entire product array to ensure id is present
    products.forEach(product => {
        console.log(`Product ID: ${product.id}, Title: ${product.title}`);
    });

    const descriptions = products.map((product) => `${product.title} ${product.meta?.description || ''}`.trim());

    const tfidf = new natural.TfIdf();
    descriptions.forEach((desc, i) => tfidf.addDocument(desc, i));

    const currentProductIndex = products.findIndex((product) => product._id === productId || product.id === productId);
    console.log("Current Product Index:", currentProductIndex);

    if (currentProductIndex === -1) {
      throw new Error('Product not found in the products array');
    }

    const currentProductVector = [];
    tfidf.tfidfs(descriptions[currentProductIndex], (i, measure) => {
      currentProductVector.push(measure);
    });

    const similarities = [];

    tfidf.documents.forEach((doc, i) => {
      if (i !== currentProductIndex && descriptions[i]) {
        const otherProductVector = [];
        tfidf.tfidfs(descriptions[i], (j, measure) => {
          otherProductVector.push(measure);
        });

        const similarity = cosineSimilarity(currentProductVector, otherProductVector);
        similarities.push({ index: i, similarity });
      }
    });

    similarities.sort((a, b) => b.similarity - a.similarity);
    const similarProducts = similarities.slice(0, 5).map(({ index }) => products[index]);

    return similarProducts;
}
