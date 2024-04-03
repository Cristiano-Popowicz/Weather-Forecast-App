import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import Logo from "@assets/logo.svg";
import { styles } from "./styles";

import { useCity } from "@hooks/useCity";
import {
  CityProps,
  getCityByNameService,
} from "@services/getCityByNameService";

import { SelectList } from "@components/SelectList";

export function Search() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);

  const { handleChanceCity } = useCity();

  async function getCities(city: string) {
    setIsLoading(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  return (
    <ScrollView>
      <View
        style={styles.container}
      >
        <Logo width={186} height={80} />

        <View style={styles.content}>
          <Text style={styles.title}>
            <Text style={styles.brand}>
              Boas vindas ao{'\n'}
              Previsão do Tempo Linx
            </Text>
          </Text>

          <Text style={styles.subtitle}>
            Escolha um local para ver a previsão do tempo
          </Text>

          <SelectList
            data={cities}
            onChange={setSearch}
            isLoading={isLoading}
            onPress={handleChanceCity}
            placeholder="Buscar local"
          />
        </View>
      </View>
    </ScrollView>
  );
}
