/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import ConvertService from "./convert.service";
import { Result } from "./convert.interface";


/**
 * Router Definition
 */
export const convertRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items/:id
convertRouter.get("/toroman/:numberStr", (req: Request, res: Response) => {
	try {
		const result: Result = ConvertService.toRoman(req.params.numberStr);

		if (result.errorCode === 0) {
			return res.status(200).send(result);
		}

		res.status(404).send(result);
	} catch (e: any) {
		res.status(500).send(e.message);
	}
});
