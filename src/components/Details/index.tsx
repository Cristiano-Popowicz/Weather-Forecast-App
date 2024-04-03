import { ImageBackground, Text, View } from 'react-native';
import dayjs from 'dayjs';
import { styles } from './styles';

import { isDayTime } from '@utils/isDayTime';
import { weatherIcons } from '@utils/weatherIcons';
import { DayProps } from '@components/Day'

type Props = {
    city: string;
    data: DayProps;
};
  

export function NextDetails({ city, data }: Props) {
    const Icon = data.icon;
  
    return (
      <ImageBackground style={styles.container}>
        <View>
          <Text style={styles.city}>
            {city}
          </Text>

          <Text style={styles.day}>
            {data.formattedDay}
        </Text>
        </View>
  
        <View style={styles.footer}>
          <View style={styles.details}>  
            <Text style={styles.temperature}>
              Mínima {data.min}  Máxima {data.max}
            </Text>
  
            <Text style={styles.minMax}>
              {data.weather}
            </Text>
          </View>
  
          {Icon && <Icon width={160} height={160} />}
        </View>
      </ImageBackground>
    );
}
  