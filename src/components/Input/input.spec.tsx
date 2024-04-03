import { Input } from "@components/Input";
import { render, screen } from "@testing-library/react-native";

describe("Component: Input", () => {
  it("should be rendered without activity indicator", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });

  it("should be rendered with activity indicator", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeTruthy();
  });
});
