// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const DAY = 24;
const HOUR = 60;
const MINUTE = 60;
const MILLISECOND = 1000;

function unTransMill(date, hours, minutes, seconds, milliseconds,xmasDay) {
  const dDay = xmasDay - date;
  const dDate = Math.floor(dDay/(DAY*HOUR*MINUTE*MILLISECOND));
  const dHour = Math.floor((dDay%(DAY*HOUR*MINUTE*MILLISECOND))/(HOUR*MINUTE*MILLISECOND));
  const dMinute = Math.floor(((dDay%(DAY*HOUR*MINUTE*MILLISECOND))%(HOUR*MINUTE*MILLISECOND))/(MINUTE*MILLISECOND));
  const dSecond = Math.floor((((dDay%(DAY*HOUR*MINUTE*MILLISECOND))%(HOUR*MINUTE*MILLISECOND))%(MINUTE*MILLISECOND))/MILLISECOND);
  console.log(`${dDate}days : ${dHour}hours : ${dMinute}minutes : ${dSecond}seconds remains`);
};


function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const date = new Date();
  unTransMill(
    date,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
    xmasDay
  );
}

function init() {
  setInterval(getTime(),10);
}
init();
