import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";
import App from "../App";

function renderApp() {
	return render(<App />, { wrapper: MemoryRouter });
}

describe("App", () => {
	it("should render Login Component if id not set", () => {
		const { getByText } = renderApp();
		getByText("Please Enter your Name");
	});

	it("should render History Page", () => {
		renderApp();
		const nameInput = screen.getByTestId("name-input");
		fireEvent.change(nameInput, { target: { value: "Test Input" } });
		const createNewIdBtn = screen.getByText("Create an Id");
		const spy = jest.spyOn(createNewIdBtn, "click");
		let scrollIntoViewMock = jest.fn();
		window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
		act(() => {
			createNewIdBtn.click();
			expect(spy).toHaveBeenCalledTimes(1);
		});
		const historyLink = screen.getByText(/View Chat History/i);
		const spyLink = jest.spyOn(historyLink, "click");
		act(() => {
			historyLink.click();
			expect(spyLink).toHaveBeenCalledTimes(1);
		});
		expect(screen.getByText(/history/i)).toBeTruthy();
	});
});
