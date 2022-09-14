const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const indexFilePath = path.join(__dirname,'/index.html')

console.log(indexFilePath);
//app.get('/',(req, res) => res.send('Hello World'));
app.get('/',(req, res) => res.sendFile(indexFilePath));
app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))
