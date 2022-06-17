/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import ConvertService from "./convert.service";
import { Result } from "./convert.interface";
import SSEService from "../../services/sse";


/**
 * Router Definition
 */
export const convertRouter = express.Router();


convertRouter.get("/sse/", async (req: Request, res: Response) => {
	try {
		SSEService.init(req, res);
	} catch (e: any) {
		res.status(500).send(e.message);
	}
});

convertRouter.get("/sse/toroman/:numberStr", async (req: Request, res: Response) => {
	try {
		const result: Result = ConvertService.toRoman(req.params.numberStr);
		console.log("SSE result", result);
		SSEService.push(result);
	} catch (e: any) {
		res.status(500).send(e.message);
	}
});

