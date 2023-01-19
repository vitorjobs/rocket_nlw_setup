import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter'

export default function App() {

  // HOOK para salvar o valor das fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold

  })

  // Garantir o carregamento das fontes 
  // Se as fontes não forem carregadas, o APP não inicia
  if (!fontsLoaded) {
    return;
  }


  return (
    <View style={styles.container}>
      <Text>Meu Projeto Mobile novo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'blue'
  }
});
