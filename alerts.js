const notifier = require("node-notifier");

function showAlert(title, message) {
  notifier.notify({
    title,
    message
  });
}

module.exports = {
  showAlert
};
