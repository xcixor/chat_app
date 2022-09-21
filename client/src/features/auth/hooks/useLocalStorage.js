import { useEffect, useState } from "react";

const PREFIX = "chat-";

export default function useLocalStorage(key, initialValue) {
	const preFixedKey = PREFIX + key;
	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(preFixedKey);
		if (jsonValue != null && jsonValue != "undefined") return JSON.parse(jsonValue);
		if (typeof initialValue === "function") {
			return initialValue();
		} else {
			return initialValue;
		}
	});
	useEffect(() => {
		localStorage.setItem(preFixedKey, JSON.stringify(value));
	}, [preFixedKey, value]);
	return [value, setValue];
}
