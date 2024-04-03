import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Day, DayProps } from '@components/Day';
import { styles } from './styles';

interface Props {
  data: DayProps[];
  onPressItem: (data: DayProps) => void;
  selectedDay: DayProps | null;
}

export function NextDays({ data, onPressItem, selectedDay }: Props) {
  return (
    <View style={styles.container}>
      {data.map((day) => (
        <TouchableOpacity
          key={day.day}
          onPress={() => onPressItem(day)}
        >
          <Day data={day} />
        </TouchableOpacity>
      ))}
    </View>
  );
}