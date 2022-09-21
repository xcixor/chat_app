import { renderHook } from "@testing-library/react";

import useLocalStorage from "../useLocalStorage";

const TEST_KEY = "id";
const TEST_VALUE = "random-id";
const PREFIXED_KEY = "chat-";

describe("useLocalStorage", () => {
	it("should set localStorage with initial value", () => {
		renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));
		expect(
			JSON.parse(localStorage.getItem(`${PREFIXED_KEY}${TEST_KEY}`))
		).toEqual(TEST_VALUE);
	});

	it("returns set value if initial value is function", () => {
		const newValue = "New Value";
		localStorage.setItem(
			`${PREFIXED_KEY}${TEST_KEY}`,
			JSON.stringify(newValue)
		);
		renderHook(() => useLocalStorage(TEST_KEY, jest.fn()));
		expect(
			JSON.parse(localStorage.getItem(`${PREFIXED_KEY}${TEST_KEY}`))
		).toEqual(newValue);
	});
});
