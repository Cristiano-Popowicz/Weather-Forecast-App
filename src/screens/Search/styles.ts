import { theme } from '@styles/theme';
import { Dimensions, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
    padding: 24,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#6B4284'
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 200
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: 15
  },
  brand: {
    color: theme.colors.white
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 20
  },
  scroll: {
    backgroundColor: theme.colors.gray_900
  }
});