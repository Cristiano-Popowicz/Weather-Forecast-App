import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

import { useCity } from '@hooks/useCity';
import { CityProps, getCityByNameService } from '@services/getCityByNameService';
import { WeatherResponseProps, getWeatherByCityService } from '@services/getWeatherByCityService';

import { Loading } from '@components/Loading';
import { NextDays } from '@components/NextDays';
import { SelectList } from '@components/SelectList';
import { WeatherToday } from '@components/WeatherToday';
import { WeatherDetails } from '@components/WeatherDetails';
import { NextDetails } from '@components/Details';
import { DayProps } from '@components/Day';


export function Dashboard() {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);
  const [isWeatherLoading, setWeatherIsLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherResponseProps>({} as WeatherResponseProps);

  const { city, handleChanceCity, cityIsLoading } = useCity();

  const [selectedDay, setSelectedDay] = useState<DayProps | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  function handlePressItem(day: DayProps) {
    setSelectedDay(day);
    setShowDetails(true);
  }

  function handleSelect(value: CityProps) {
    handleChanceCity(value);
    setSearch('');
    setCities([]);
  }

  async function getWeatherDetails() {
    if (!city) {
      return;
    }

    setWeatherIsLoading(true);

    const { latitude, longitude } = city;
    const response = await getWeatherByCityService({ latitude, longitude });

    setWeather(response);
    setWeatherIsLoading(false);
  }

  async function getCities(city: string) {
    setIsSearching(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsSearching(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    getCities(search)
    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  useEffect(() => {
    getWeatherDetails();
  }, [city]);

  if (isWeatherLoading || cityIsLoading || !city) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {!showDetails && (
        <View style={styles.content}>
          <SelectList
            data={cities}
            value={search}
            onChange={setSearch}
            onPress={handleSelect}
            isLoading={isSearching}
            placeholder="Buscar local"
          />
          <Text>Teste</Text>
          <View style={{ marginBottom: 8 }} />
          <WeatherToday city={city.name} weather={weather.today.weather} />
          <View style={{ marginBottom: 8 }} />        
          <WeatherDetails data={weather.today.details} />
          <View style={{ marginBottom: 8 }} />
          <NextDays
            data={weather.nextDays}
            onPressItem={handlePressItem}
            selectedDay={selectedDay}
          />       
        </View>
      )}
      {showDetails && selectedDay && (
        <>
          <TouchableOpacity onPress={() => setShowDetails(false)}>
            <View style={{ marginBottom: 15, marginLeft: 5 }}>
              <FontAwesome name="angle-left" size={38} color="#fff" />
            </View>
          </TouchableOpacity>
          <NextDetails city={city.name} data={selectedDay} />
        </>
      )}
    </View>
  );
}
