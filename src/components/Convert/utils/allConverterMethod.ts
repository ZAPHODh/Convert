export const allConverterMethod = {
  TEXT_TO_BINARY: (string: string): string =>
    string
      .split('')
      .map(function (char) {
        return char.charCodeAt(0).toString(2);
      })
      .join(' '),
  BINARY_TO_TEXT: (binary: string): string =>
    binary
      .split(' ')
      .map(function (elem) {
        return String.fromCharCode(parseInt(elem, 2));
      })
      .join(''),
  DECIMAL_TO_BINARY: (number: string): string => {
    const toNumber = Number(number);
    return (toNumber >>> 0).toString(2);
  },
  BINARY_TO_DECIMAL: (binary: string): string => parseInt(binary, 2).toString(),
  HEXADECIMAL_TO_BINARY: (hex: string): string => parseInt(hex, 16).toString(2),
  BINARY_TO_HEXADECIMAL: (binary: string): string =>
    parseInt(binary, 2).toString(16),
  HEXADECIMAL_TO_DECIMAL: (hex: string): string => parseInt(hex, 16).toString(),
  DECIMAL_TO_HEXADECIMAL: (decimal: string): string => {
    const number = Number(decimal);
    return number.toString(16);
  },
  TEXTO_TO_BINARIO: (string: string): string =>
    string
      .split('')
      .map(function (char) {
        return char.charCodeAt(0).toString(2);
      })
      .join(' '),
  BINARIO_TO_TEXTO: (binary: string): string =>
    binary
      .split(' ')
      .map(function (elem) {
        return String.fromCharCode(parseInt(elem, 2));
      })
      .join(''),
  DECIMAL_TO_BINARIO: (number: string): string => {
    const toNumber = Number(number);
    return (toNumber >>> 0).toString(2);
  },
  BINARIO_TO_DECIMAL: (binary: string): string =>
    parseInt(binary, 2).toString(),
  HEXADECIMAL_TO_BINARIO: (hex: string): string =>
    parseInt(hex, 16).toString(2),
  BINARIO_TO_HEXADECIMAL: (binary: string): string =>
    parseInt(binary, 2).toString(16),
};
