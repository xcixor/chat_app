import React from "react";
import Login from "../Login";
import renderer from "react-test-renderer";

it("Renders correctly", () => {
	const tree = renderer.create(<Login onNameSubmit={jest.fn()} />);

	expect(tree).toMatchSnapshot();
});
