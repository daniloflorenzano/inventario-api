import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config'

interface IPayload {
	id: string;
	iat: number;
	exp: number;
}

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.sendStatus(401);
	}

	const token = authorization.replace('Bearer', '').trim();

	try {
		const data = jwt.verify(token, process.env.SECRET);

		const { id } = data as IPayload;

        req.userId = id;

        return next();
	} catch {
		return res.sendStatus(401);
	}
};
