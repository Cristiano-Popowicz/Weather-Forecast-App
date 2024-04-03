import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@__tests__/utils/customRender";
import { Search } from "@screens/Search";
import { api } from "@services/api";

describe("Screen: Search", () => {
  it("should show city options", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });
    render(<Search />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => screen.findByText(/são paulo/i));

    expect(option).toBeTruthy();
  });
});
