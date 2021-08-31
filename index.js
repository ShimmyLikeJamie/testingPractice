function capitalize(string) {
  let str = string.toLowerCase();
  return str[0].toUpperCase() + str.substr(1, str.length);
}

function reverseString(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    result += string[string.length - (i + 1)];
  }
  return result;
}

let calculator = {
  add: function (...values) {
    let result = 0;
    for (let i = 0; i < values.length; i++) {
      result += values[i];
    }
    return result;
  },
  subtract: function (...values) {
    if (values.length == 0) {
      return 0;
    } else {
      let result = values[0];
      for (let i = 1; i < values.length; i++) {
        result -= values[i];
      }
      return result;
    }
  },
  multiply: function (...values) {
    if (values.length == 0) {
      return 0;
    } else {
      let result = values[0];
      for (let i = 1; i < values.length; i++) {
        result *= values[i];
      }
      return result;
    }
  },
  divide: function (...values) {
    if (values.length == 0) {
      return 0;
    } else {
      let result = values[0];
      for (let i = 1; i < values.length; i++) {
        result /= values[i];
      }
      return result;
    }
  },
};

function caesarCipher(str, rot) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let letterToNum = {};
  let numToLetter = {};
  for (let i = 1; i <= alphabet.length; i++) {
    numToLetter[i] = alphabet[i - 1];
    letterToNum[alphabet[i - 1]] = i;
  }
  str = str.toLowerCase();
  result = '';
  for (let i = 0; i < str.length; i++) {
    if (/[^a-z]/.test(str[i]) == true) {
      result += str[i];
    } else {
      let num = (letterToNum[str[i]] + rot) % 26;
      if (num == 0) {
        num = 26;
      } else if (num < 0) {
        num = 26 + num;
      }
      result += numToLetter[num];
    }
  }
  return result;
}

function analyze(arr) {
  if (arr.length == 0) {
    return {};
  }
  let sum = 0;
  let min = null;
  let max = null;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min || min == null) {
      min = arr[i];
    }
    if (arr[i] > max || max == null) {
      max = arr[i];
    }
  }
  return {
    "average": sum / arr.length,
    "length": arr.length,
    "min": min,
    "max": max,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyze,
};
