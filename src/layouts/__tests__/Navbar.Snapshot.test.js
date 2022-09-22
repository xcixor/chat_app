import React from "react";
import Navbar from "../Navbar";
import renderer from "react-test-renderer";

it("Renders correctly", () => {
	const tree = renderer.create(<Navbar />);

	expect(tree).toMatchSnapshot();
});
