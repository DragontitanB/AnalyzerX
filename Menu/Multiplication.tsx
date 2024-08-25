import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, TextInput, Button, Text } from 'react-native-paper';

const MultiplicationTableScreen = () => {
  // Estado para almacenar el número ingresado y los resultados
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<string[]>([]);

  // Función para calcular la tabla de multiplicar
  const calculateTable = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      const table = [];
      for (let i = 1; i <= 14; i++) {
        table.push(`${num} x ${i} = ${num * i}`);
      }
      setResult(table);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Multiplication Table</Title>
          {/* Entrada de texto para el número */}
          <TextInput
            label="Enter a number"
            keyboardType='numeric'
            value={number}
            onChangeText={setNumber}
            style={styles.input}
          />
          {/* Botón para calcular la tabla de multiplicar */}
          <Button mode="contained" onPress={calculateTable} style={styles.button}>
            Calculate
          </Button>
          {/* Mostrar los resultados */}
          <View style={styles.resultContainer}>
            {result.map((line, index) => (
              <Text key={index} style={styles.resultText}>{line}</Text>
            ))}
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default MultiplicationTableScreen;
