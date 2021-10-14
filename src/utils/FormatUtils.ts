export const FormatUtils = {
  currency: (num: number | undefined) =>
    typeof num === 'number' ? `$${FormatUtils.number(num, 2)}` : '',
  number: (num: number, decimals = 0) => {
    if (typeof num !== 'number') {
      return '';
    }

    const [integer, decimal] = num.toFixed(decimals).split('.');
    const mod = integer.length % 3;
    let result = '';
    for (let i = 0; i < integer.length; i++) {
      if (i > 0 && (i - mod) % 3 === 0 && i < integer.length - 1) {
        result += ',';
      }
      result += integer[i];
    }

    return decimal !== undefined ? `${result}.${decimal}` : result;
  },
};
