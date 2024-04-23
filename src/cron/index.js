const scheduleDaily = require('./daily');
const scheduleWeekly = require('./weekly');

function initializeCronJobs() {
    scheduleDaily();
    scheduleWeekly();
}

module.exports = initializeCronJobs;