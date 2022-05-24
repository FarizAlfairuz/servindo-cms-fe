export const getTime = (date, option) => {
  const currentTime = new Date(date);
  const day =
    currentTime.getDate() < 10
      ? `0${currentTime.getDate()}`
      : currentTime.getDate();
  const month =
    currentTime.getMonth() + 1 < 10
      ? `0${currentTime.getMonth()}`
      : currentTime.getMonth();
  const year = currentTime.getFullYear();
  const hours =
    currentTime.getHours() < 10
      ? `0${currentTime.getHours()}`
      : currentTime.getHours();
  const minutes =
    currentTime.getMinutes() < 10
      ? `0${currentTime.getMinutes()}`
      : currentTime.getMinutes();

  if (option === 'date') {
    return `${day}-${month}-${year}`;
  }
  return `${hours}:${minutes}`;
};
