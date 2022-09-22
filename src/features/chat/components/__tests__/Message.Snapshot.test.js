import React from "react";
import Message from "../Message";
import renderer from "react-test-renderer";

it("Renders correctly", () => {
	const message = {
		sender: "Test User",
		sentAt: "5:43",
	};
	const tree = renderer.create(<Message isMe={true} message />);

	expect(tree).toMatchSnapshot();
});
