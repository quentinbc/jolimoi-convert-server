/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import bodyParser from 'body-parser';
dotenv.config();


/**
 * App Variables
 */
if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const API_ROOT: string = process.env.API_ROOT as string;

const app = express();


/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors({
	origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(API_ROOT, routes);
app.use(errorHandler);
app.use(notFoundHandler);


/**
 * Server Activation
 */
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
