import ConvertService from "./convert.service";

describe('Test convert.service.ts : success', () => {

	test('value 0', () => {
		expect(ConvertService.toRoman("0")).toEqual({ "data": "nulla", "errorCode": 0, "message": "" });
	}),
		test('value 1', () => {
			expect(ConvertService.toRoman("1")).toEqual({ "data": "I", "errorCode": 0, "message": "" });
		}),
		test('value 58', () => {
			expect(ConvertService.toRoman("58")).toEqual({ "data": "LVIII", "errorCode": 0, "message": "" });
		})
});

describe('Test convert.service.ts : error', () => {

	test('test with not a number', () => {
		expect(ConvertService.toRoman("145")).toEqual({ "data": "", "errorCode": 1, "message": "Only an integer number between 0 and 100, thank you" });
	}),
		test('more than 100 : 145', () => {
			expect(ConvertService.toRoman("145")).toEqual({ "data": "", "errorCode": 1, "message": "Only an integer number between 0 and 100, thank you" });
		})
});