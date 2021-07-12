import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form tests", () => {
  it("should render", () => {
    expect(render(<Form />)).toBeTruthy();
  });
});
