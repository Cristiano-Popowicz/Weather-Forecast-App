import { CityProvider } from "@contexts/CityContext";
import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";

describe("Context: CityContext", () => {
  it("should change selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "São Paulo",
          latitude: 123,
          longitude: 321,
        }),
      ),
    );

    expect(result.current.city?.name).toBe("São Paulo");
  });
});
