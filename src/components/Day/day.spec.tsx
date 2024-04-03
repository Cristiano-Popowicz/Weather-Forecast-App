import { Day } from "@components/Day";
import { render, screen } from "@testing-library/react-native";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should render day component", () => {
    render(
      <Day
        data={{
          day: "18/07",
          min: "30° C",
          max: "34° C",
          icon: clearDay,
          weather: "Céu limpo",
        }}
      />,
    );

    expect(screen.getByText("18/07")).toBeTruthy();
  });
});
