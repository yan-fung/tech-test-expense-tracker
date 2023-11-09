import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ExpenseTracker from "../components/ExpenseTracker";

describe("ExpenseTracker component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ExpenseTracker />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
