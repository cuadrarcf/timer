const { showAlert } = require("./alerts");
const { logText } = require("./log");
// let cant = process.argv.slice(2);

const [nodeP, dirP, timeP] = process.argv;

let cant = timeP || 30;

logText(`${cant} minutes.`, 'Soft');

logText(cant, 'Electronic');
const TIMER = setInterval(() => {
  if (--cant === 0) {
    showAlert('Time done', `past ${cant} minutes` );
    logText(cant, 'Electronic');
    logText(`Timer Done!!!`, 'Soft');
    clearInterval(TIMER);
  } else {
    logText(cant, 'Electronic');
  }

}, 1000 * 60);

