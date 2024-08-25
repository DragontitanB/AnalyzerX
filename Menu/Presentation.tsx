import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button, Avatar, Card, Title } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../Type';

const ProfileScreen = () => {
  // Hook de navegación con los tipos de rutas definidos
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ImageBackground 
      source={{ uri: '../IMG/FotoFormal2.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            {/* Imagen de perfil */}
            <Avatar.Image 
              size={150} 
              source={require('../IMG/FotoFormal2.jpg')} 
              style={styles.avatar} 
            />
            {/* Nombre completo */}
            <Title style={styles.name}>Bryan Daniel Quiñones Garcia</Title>
            {/* Botón para navegar a la pantalla de tabla de multiplicar */}
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('Multiplication Table')} 
              style={styles.button}
            >
              Multiplication Table
            </Button>
            {/* Botón para navegar a la pantalla de análisis de números */}
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate('Number Analysis')} 
              style={styles.button}
            >
              Number Analysis
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
  },
});

export default ProfileScreen;
