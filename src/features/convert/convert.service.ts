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

	/*
		Next commented part is not in the demand, you can delete it or use it to add a new feature : 
		- convert roman number to arabic number
		- switch convert between arabic > roman and roman > arabic
	*/

	/*
		switch convert between arabic > roman and roman > arabic
	*/
	// public convertNumber(value: string): Result {
	// 	let str: string = value;
	// 	let mode: string = "toRoman";

	// 	str = str.replace(/[, ]+/g, "").trim();

	// 	if (!this.isNumber(str)) {
	// 		for (let c = 0; c < str.length; c++) {
	// 			let chr: string = str.charAt(c).toLowerCase();
	// 			if (
	// 				chr != "i" &&
	// 				chr != "v" &&
	// 				chr != "x" &&
	// 				chr != "l" &&
	// 				chr != "c" &&
	// 				chr != "d" &&
	// 				chr != "m"
	// 			) {
	// 				return this.returnResult(1, "Only the letters IVXLCDM, please", "");
	// 			}
	// 		}
	// 		mode = "fromRoman";
	// 	}

	// private isNumber(str: string): boolean {
	// 	if (typeof str !== 'string') {
	// 		return false;
	// 	}
	// 	if (str.trim() === '') {
	// 		return false;
	// 	}
	// 	return !Number.isNaN(Number(str));
	// }

	// 	if (mode == "toRoman") {
	// 		return this.toRoman(str);
	// 	}
	// 	else {
	// 		return this.toArabic(str);
	// 	}
	// }

	/* 
		Convert roman number to arabic number
	*/

	// public toArabic(strNum: string): Result {
	// 	if (this.checkRomanInput(strNum)) {
	// 		let arabic = 0;
	// 		let last_digit = 1000;
	// 		for (let i = 0; i < strNum.length; i++) {
	// 			let digit = 0;
	// 			if (strNum.charAt(i) == "I") {
	// 				digit = 1;
	// 			}
	// 			if (strNum.charAt(i) == "V") {
	// 				digit = 5;
	// 			}
	// 			if (strNum.charAt(i) == "X") {
	// 				digit = 10;
	// 			}
	// 			if (strNum.charAt(i) == "L") {
	// 				digit = 50;
	// 			}
	// 			if (strNum.charAt(i) == "C") {
	// 				digit = 100;
	// 			}
	// 			if (strNum.charAt(i) == "D") {
	// 				digit = 500;
	// 			}
	// 			if (strNum.charAt(i) == "M") {
	// 				digit = 1000;
	// 			}
	// 			if (last_digit < digit) {
	// 				arabic -= 2 * last_digit;
	// 			}
	// 			last_digit = digit;
	// 			arabic += last_digit;
	// 		}
	// 		return this.returnResult(0, "", arabic.toString(10));
	// 	} else {
	// 		return this.returnResult(0, "", strNum);
	// 	}
	// }

	// private checkRomanInput(strNum: string) {
	// 	for (let k = 0; k < strNum.length; k++) {
	// 		if (
	// 			strNum.charAt(k) != "I" &&
	// 			strNum.charAt(k) != "V" &&
	// 			strNum.charAt(k) != "X" &&
	// 			strNum.charAt(k) != "L" &&
	// 			strNum.charAt(k) != "C" &&
	// 			strNum.charAt(k) != "D" &&
	// 			strNum.charAt(k) != "M"
	// 		) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// }

}

export default new ConvertService();