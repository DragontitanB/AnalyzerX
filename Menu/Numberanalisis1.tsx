import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Card, Title } from 'react-native-paper';

const NumberAnalysisScreen = () => {
  // Estado para almacenar los números ingresados y los resultados
  const [numbers, setNumbers] = useState({ num1: '', num2: '', num3: '' });
  const [result, setResult] = useState({ max: 0, min: 0, avg: 0 });

  // Función para analizar los números
  const analyzeNumbers = () => {
    const { num1, num2, num3 } = numbers;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      const max = Math.max(n1, n2, n3);
      const min = Math.min(n1, n2, n3);
      const avg = (n1 + n2 + n3) / 3;
      setResult({ max, min, avg });
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Number Analysis</Title>
          {/* Entrada de texto para el primer número */}
          <TextInput
            label="Enter first number"
            keyboardType='numeric'
            value={numbers.num1}
            onChangeText={text => setNumbers({ ...numbers, num1: text })}
            style={styles.input}
          />
          {/* Entrada de texto para el segundo número */}
          <TextInput
            label="Enter second number"
            keyboardType='numeric'
            value={numbers.num2}
            onChangeText={text => setNumbers({ ...numbers, num2: text })}
            style={styles.input}
          />
          {/* Entrada de texto para el tercer número */}
          <TextInput
            label="Enter third number"
            keyboardType='numeric'
            value={numbers.num3}
            onChangeText={text => setNumbers({ ...numbers, num3: text })}
            style={styles.input}
          />
          {/* Botón para analizar los números */}
          <Button mode="contained" onPress={analyzeNumbers} style={styles.button}>
            Analyze
          </Button>
          {/* Mostrar los resultados */}
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Max: {result.max}</Text>
            <Text style={styles.resultText}>Min: {result.min}</Text>
            <Text style={styles.resultText}>Average: {result.avg.toFixed(2)}</Text>
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
  },
});

export default NumberAnalysisScreen;
