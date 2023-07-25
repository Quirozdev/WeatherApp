export function formatDate(date) {
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day < 10 ? '0' + day : day}/${
    month < 10 ? '0' + month : month
  }/${year} ${hours}:${minutes}`;
}

export function parseDate(dateStr) {
  const dateArr = dateStr.split('-');
  const year = dateArr[0];
  // 0 indexed months
  const month = dateArr[1] - 1;
  const day = dateArr[2];
  return new Date(year, month, day);
}
