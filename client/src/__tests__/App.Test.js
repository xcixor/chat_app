import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import App from "../App";

function renderApp() {
	return render(<App />);
}

describe("App", () => {
	it("should render Login Component if id not set", () => {
		const { getByText } = renderApp();
		getByText("Please Enter your Name");
	});

	it("should render Dashboard Page if id set", () => {
		renderApp();
		const createNewIdBtn = screen.getByText("Create an Id");
		const nameInput = screen.getByTestId("name-input");
		fireEvent.change(nameInput, { target: { value: "Test Input" } });
		const spy = jest.spyOn(createNewIdBtn, "click");
		act(() => {
			createNewIdBtn.click();
			expect(spy).toHaveBeenCalledTimes(1);
		});
		const dashboardElement = screen.getByTestId("chat-room");
		expect(dashboardElement).toBeTruthy();
	});
});
