export const formatTimeByDate = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour < 12 ? '오전 ' : '오후 '}` + (hour % 12).toString() + ':' + `${minute < 10 ? '0' : null}` + minute.toString();
};
