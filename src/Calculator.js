import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  const [result, setResult] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumberPress = num => {
    if (result === '0') {
      setResult(num.toString());
    } else {
      setResult(result + num.toString());
    }
  };

  const handleClear = () => {
    setResult('0');
    setCurrentValue('');
    setOperator(null);
    setPreviousValue(null);
  };

  const handleOperatorPress = op => {
    if (operator) {
      calculate();
    } else {
      setPreviousValue(result);
    }
    setCurrentValue('');
    setOperator(op);
  };

  const calculate = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(result);
    let resultValue;
    if (operator === '+') {
      resultValue = prev + current;
    } else if (operator === '-') {
      resultValue = prev - current;
    } else if (operator === '*') {
      resultValue = prev * current;
    } else if (operator === '/') {
      resultValue = prev / current;
    }
    setResult(resultValue.toString());
    setOperator(null);
    setPreviousValue(resultValue.toString());
  };

  const handleEqualsPress = () => {
    if (operator) {
      calculate();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonOne}
          onPress={() => handleClear()}>
          <Text style={styles.buttonTextOne}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOne}>
          <Text style={styles.buttonTextOne}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOne}
          onPress={() => handleOperatorPress('%')}>
          <Text style={styles.buttonTextOne}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handleNumberPress(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handleNumberPress(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handleNumberPress(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handleNumberPress(4)}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handleNumberPress(5)}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handleNumberPress(6)}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handleNumberPress(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handleNumberPress(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handleNumberPress(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperatorPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#2C3335',
            borderRadius: 80,
            height: 60,
            width: 140,
            margin: 10,
            padding: 10,
            elevation: 4,
            marginLeft: 25,
            elevation: 7,
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => handleNumberPress(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonTwo}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEqualsPress()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 5,
  },
  resultText: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
    paddingRight: 30,
    paddingTop: 150,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonText: {
    fontSize: 37,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 100,
    height: 70,
    width: 70,
    margin: 5,
    padding: 10,
    elevation: 4,
  },
  buttonOne: {
    backgroundColor: '#99AAAB',
    borderRadius: 100,
    height: 70,
    width: 70,
    margin: 5,
    padding: 10,
    elevation: 4,
  },
  buttonTwo: {
    backgroundColor: '#2C3335',
    borderRadius: 100,
    height: 70,
    width: 70,
    margin: 5,
    padding: 10,
    elevation: 4,
  },
  buttonTextOne: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },
});
