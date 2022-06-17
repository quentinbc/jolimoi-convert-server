import { createSession } from "better-sse";
import { Result } from "../features/convert/convert.interface";


class SSEService {
	private session: any;

	public async init(req: any, res: any) {
		this.session = await createSession(req, res);
	}

	public push(result: Result): Result {
		console.log("SSE push", result);
		return this.session.push(result);
	}
}

export default new SSEService();