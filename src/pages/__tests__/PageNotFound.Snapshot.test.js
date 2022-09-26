import React from "react";
import PageNotFound from "../PageNotFound";
import renderer from "react-test-renderer";

it("Renders correctly", () => {
	const tree = renderer.create(<PageNotFound />);
	expect(tree).toMatchSnapshot();
});
