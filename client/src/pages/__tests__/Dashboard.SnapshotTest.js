import React from "react";
import Dashboard from "../Dashboard";
import renderer from "react-test-renderer";

it("Renders correctly", () => {
	const tree = renderer.create(<Dashboard id="random-string" />);

	expect(tree).toMatchSnapshot();
});
