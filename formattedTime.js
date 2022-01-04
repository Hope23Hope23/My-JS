export default (min) => {
    const addNull = '0';
    const houre = (Math.floor(min / 60)) % 24;
    const minut = min % 60;
    const resultHoure = houre < 10 ? addNull + houre : houre;
    const resultMinute = minut < 10 ? addNull + minut : minut;
    return `${resultHoure}:${resultMinute}`;
  };