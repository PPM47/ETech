import { GRAPHQL_API_URL } from '../shared'; // Adjust the path as needed
import { SEARCHPRO } from '../../app/_graphql/products'; // Adjust the path as needed

export default async function handler(req, res) {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: 'Keyword is required' });
  }

  try {
    const response = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: SEARCHPRO,
        variables: { keyword },
      }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      console.error(errors);
      return res.status(500).json({ error: 'Error fetching products' });
    }

    res.status(200).json(data.Products.docs);
  } catch (error) {
    console.error('Error in searchProducts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}