const express = require('express');
const app = express();
const appPort = 3000;

app.get('', (req, res) => res.send('Hello express world!!!'));

app.listen(appPort, () => {
    console.log(`App started listening on port: ${appPort}`);
});