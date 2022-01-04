const reversInt = (num) => {
    const str = String(num);
    let result = '';
    let i = str.length - 1;
    if (str[0] === '-') {
      result += '-';
      for (; i > 0; i -= 1) {
        result += str[i];
      }
    } else {
      for (; i >= 0; i -= 1) {
        result += str[i];
      }
    } return Number(result);
  };
  export default reversInt;