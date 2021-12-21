export const getOneMonthAgoReleaseDate = () => {
  let date = new Date();
  date.setMonth(date.getMonth() - 1);
  let formattedDate = date.toJSON().slice(0, 10);

  return formattedDate;
};

export const dateToYearOnly = (date) => date.slice(0, 4);

export const capitalizeFirstLetter = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const randomize = (data) => Math.floor(Math.random() * data.length);

export const truncate = (text, n) =>
  text?.length > n ? text.substr(0, n - 1) + "..." : text;

export const convertMapToList = (data) => {
  const list = [];

  Object.keys(data).forEach((o) => {
    let nested = {
      title: o,
      innerData: data[o],
    };
    list.push(nested);
  });
  return list;
};

export function timeConvert(num) {
  const toHours = num / 3600;
  var hours = Math.floor(toHours);
  var minutes = Math.ceil((toHours % 1) * 60);
  return `${hours}hrs : ${minutes}mins`;
}
