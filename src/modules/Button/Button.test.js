import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";
import Modal from "../Modal/Modal";

describe("Button", () => {
  it(" test button prop text ", () => {
    const { getByText } = render(<Button text="test" />);
    const buttonEl = getByText(/test/i);
    expect(buttonEl).toBeInTheDocument();
  });
  it("test button prop style", () => {
    const { getByRole } = render(<Button backgroundColor="red" />);
    const buttonEl = getByRole("button");
    expect(buttonEl).toHaveStyle("background:red");
  });
  it("test modal func", () => {
    const mockedOnStepClick = jest.fn();
    const { getByRole } = render(<Button onClick={mockedOnStepClick} />);
    fireEvent.click(getByRole("button"));
    expect(mockedOnStepClick).toHaveBeenCalledTimes(1);
  });
});
