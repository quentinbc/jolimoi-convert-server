import { Level, Result } from "./convert.interface";

const levels: Level[] = [
	{
		i: "I",
		v: "V",
		x: "X"
	},
	{
		i: "X",
		v: "L",
		x: "C"
	},
	{
		i: "C",
		v: "D",
		x: "M"
	}
];

/*
	Inspired by Rod Pierce v0.83 Algorithm
	https://www.mathsisfun.com/roman-numerals.html
*/

class ConvertService {
	private levels: Level[] = levels;

	/*
		Convert Arabic number base 10 to Roman
	*/

	public toRoman(str: string): Result {
		str = str.replace(/[, ]+/g, "").trim();
		const num: number = parseInt(str, 10);

		if (num === 0) {
			return this.returnResult(0, "", '"nulla" : https://en.wikipedia.org/wiki/Roman_numerals#Zero');
		}

		if (num < 1 || num > 100 || Number.isNaN(Number(num))) {
			return this.returnResult(1, "Only an integer number between 0 and 100, thank you", "");
		}

		let r = "";
		for (let c = 0; c < str.length; c++) {
			r += this.calcDigit(eval(str.charAt(c)), str.length - c - 1);
		}
		return this.returnResult(0, "", r);
	}

	private calcDigit(d: number, l: number) {
		if (l > 2) {
			let str = "";
			for (let m = 1; m <= d * Math.pow(10, l - 3); m++) str += "M";
			return str;
		} else if (d == 1) return this.levels[l].i;
		else if (d == 2) return this.levels[l].i + this.levels[l].i;
		else if (d == 3) return this.levels[l].i + this.levels[l].i + this.levels[l].i;
		else if (d == 4) return this.levels[l].i + this.levels[l].v;
		else if (d == 5) return this.levels[l].v;
		else if (d == 6) return this.levels[l].v + this.levels[l].i;
		else if (d == 7) return this.levels[l].v + this.levels[l].i + this.levels[l].i;
		else if (d == 8) return this.levels[l].v + this.levels[l].i + this.levels[l].i + this.levels[l].i;
		else if (d == 9) return this.levels[l].i + this.levels[l].x;
		else return "";
	}

	private returnResult(errorCode: number, message: string, data: string): Result {
		return {
			errorCode: errorCode,
			message: message,
			data: data
		}
	}
}

export default new ConvertService();