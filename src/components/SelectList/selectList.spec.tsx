import { SelectList } from "@components/SelectList";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("Component: SelectList", () => {
  it("should return the selected city", () => {
    const data = [
      { id: "1", name: "Uberlândia", latitude: 123, longitude: 321 },
      { id: "2", name: "Cascavel", latitude: 456, longitude: 654 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/cascavel/i);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[1]);
  });

  it("should not show options when data is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
