import React from "react";
import MessageForm from "../MessageForm";
import renderer from "react-test-renderer";

it("Renders correctly", () => {
	const tree = renderer.create(<MessageForm onMessageSubmit={jest.fn()} />);
	expect(tree).toMatchSnapshot();
});
