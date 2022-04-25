import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
jest.mock("../Button/Button", () => () => <p>tested button element</p>);

describe("Modal", () => {
  let props;
  beforeEach(() => {
    props = {
      click: jest.fn(),
      closeButton: true,
      header: "header",
      actions: "actions",
      text: "text",
    };
  });
  it("test modal func, use props:click", () => {
    const { getByTestId } = render(<Modal {...props} />);
    fireEvent.click(getByTestId("closeModal"));
    expect(props.click).toHaveBeenCalledTimes(1);
  });
  it("test stopPropagation func", () => {
    const mockedOnStepClick = jest.fn();
    const { getByRole } = render(<Modal />);
    const elTest = getByRole("modalBox");
    elTest.onclick = mockedOnStepClick;
    fireEvent.click(elTest);
    expect(mockedOnStepClick).toHaveBeenCalledTimes(1);
  });
  it("testing render Button comp, use props:closeButton", () => {
    const { getByRole } = render(<Modal {...props} />);
    expect(getByRole("textBox")).toHaveTextContent(/tested button element/i);
  });
  it("test similar props, use props:header,actions,text", () => {
    const { getByRole, getByTestId, getByText } = render(<Modal {...props} />);
    expect(getByRole("heading")).toBeInTheDocument();
    expect(getByText("text")).toHaveTextContent("text");
    expect(getByTestId("closeModal")).toBeInTheDocument("actions");
  });
});
