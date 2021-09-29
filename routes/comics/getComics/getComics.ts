import { Request, Response } from 'express';

export const getComics = (req: Request, res: Response) => {
	return res.send('comics route');
};
