import React from "react";
import Message from "../Message";
import renderer from "react-test-renderer";

it("Renders correctly", () => {
	const tree = renderer.create(
		<Message isMe={true} message="Hi" sender="Test User" />
	);

	expect(tree).toMatchSnapshot();
});
