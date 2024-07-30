import type { Request, Response, NextFunction } from 'express';
import payload from 'payload';

export const ProductSearchHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const searchQuery = req.query.q as string;
    console.log(`Received search query: ${searchQuery}`);

    const results = await payload.find({
      collection: 'products',
      where: {
        title: {
          contains: searchQuery,
        },
      },
    });

    console.log(`Results found: ${JSON.stringify(results, null, 2)}`);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error during search:', error);
    next(error);
  }
};
