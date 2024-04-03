import { render, screen } from "@testing-library/react-native";

import dropIcon from "@assets/drop.svg";
import { WeatherItem } from "@components/WeatherItem";

describe("Component: WeatherItem", () => {
  it("should show title and value", () => {
    render(<WeatherItem icon={dropIcon} title="Umidade do ar" value="81%" />);

    const title = screen.getByText(/umidade do ar/i);
    const value = screen.getByText(/81%/i);

    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
