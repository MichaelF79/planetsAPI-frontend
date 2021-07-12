import React from "react";
import { render } from "@testing-library/react";
import Table from "./Table";

describe("Table tests", () => {
  it("should render", () => {
    expect(render(<Table />)).toBeTruthy();
  });
});
