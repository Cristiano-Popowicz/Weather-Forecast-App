import { theme } from '@styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    backgroundColor: '#48185b',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    flexDirection: 'row'
    // borderColor: theme.colors.gray_700,
    // borderWidth: 1,
  },
  input: {
    flex: 1,
    color: theme.colors.white,
  }
});