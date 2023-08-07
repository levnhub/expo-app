import { StyleSheet, Text, View } from 'react-native';

interface INavbar {
  title: string;
}

export const Navbar = ({ title }: INavbar) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
