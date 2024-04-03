import { StyleSheet } from 'react-native';
import { theme } from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#48185b',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    // borderColor: theme.colors.gray_700, 
    // borderWidth: 1
  }
});