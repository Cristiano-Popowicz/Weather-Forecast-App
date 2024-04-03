import { render, screen } from "@testing-library/react-native";

import clearDay from "@assets/clear_day.svg";
import { NextDays } from "@components/NextDays";

describe("Component: NextDays", () => {
  it("should render the component", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30° C",
            max: "34° C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "25° C",
            max: "31° C",
            icon: clearDay,
            weather: "Nublado",
          },
          {
            day: "20/07",
            min: "27° C",
            max: "33° C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "21/07",
            min: "28° C",
            max: "32° C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "22/07",
            min: "34° C",
            max: "38° C",
            icon: clearDay,
            weather: "Chuva",
          },
        ]}
      />,
    );

    expect(screen.getByText("22/07")).toBeTruthy();
  });
});
