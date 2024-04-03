import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { render } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { Routes } from "@routes/index";
import { api } from "@services/api";
import { act, screen, waitFor } from "@testing-library/react-native";

describe("Routes", () => {
  it("should render Search Screen when there is no selected city", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/escolha um local/i));
    expect(title).toBeTruthy();
  });

  it("should render Dashboard Screen when there is a selected city", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });
    const city = {
      id: "1",
      name: "São Paulo",
      latitude: 123,
      longitude: 321,
    };

    await saveStorageCity(city);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(city.name);
    expect(title).toBeTruthy();
  });
});
