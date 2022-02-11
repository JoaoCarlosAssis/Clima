const handleFormatEpoch = (epoch: number) => {
  return Number(epoch + "000");
};

export const handleFormatDate = (epoch: number) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date(handleFormatEpoch(epoch));
  const day = currentDate.getUTCDate();
  const month = months[currentDate.getUTCMonth()];
  const dayOfTheWeek = daysOfTheWeek[currentDate.getUTCDay()];

  return `${dayOfTheWeek}, ${day} ${month}`;
};
