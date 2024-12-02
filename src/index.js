const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.redirect('https://wos.angs.dev/');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
