const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
// const indexFilePath = path.join


//app.get('/',(req, res) => res.send('Hello World'));
app.get('/',(req, res) => res.sendFile('index.html', {root: __dirname });
app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))
