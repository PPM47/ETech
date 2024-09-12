import { ALLPRODUCTS } from '../_graphql/products';
import { GRAPHQL_API_URL } from './shared';

export const recfetchDoc = async (collection: string): Promise<any[]> => {
    const queryMap = {
      products: {
        query: ALLPRODUCTS,
        key: 'Products',
      },
    };
  
    if (!queryMap[collection]) {
      throw new Error(`Collection '${collection}' not found`);
    }
  
    try {
      const response = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryMap[collection].query }),
      });
  
      const json = await response.json();
  
      if (json.errors) {
        console.error('GraphQL errors:', json.errors);
        throw new Error(json.errors[0]?.message || 'Error fetching docs');
      }
  
      return json.data[queryMap[collection].key]?.docs || [];
    } catch (error) {
      console.error(`Failed to fetch documents for collection '${collection}':`, error);
      throw new Error(`Failed to fetch documents for collection '${collection}'`);
    }
  };
  