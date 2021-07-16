export const convertTime = (timestamp) => {
  let h = new Date(timestamp).getHours();
  let m = new Date(timestamp).getMinutes();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  return h + ":" + m;
};

export const convertDate = (timestamp) => {
  let today = new Date(timestamp).getHours();
  let month = new Date(timestamp).getMonth() + 1;
  let year = new Date(timestamp).getFullYear();
  return `${today}/${month}/${year}`;
};
