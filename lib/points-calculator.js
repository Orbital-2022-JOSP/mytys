var cron = require('node-cron');

const task = cron.schedule('0 3 * * *', () => {
    const data = {
        key: process.env.AUTH_KEY
    }
    fetch(
        "/api/points/recalculate", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
}, {
    timezone: "Asia/Singapore"
});

task.start();