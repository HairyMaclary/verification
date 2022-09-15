const express = require('express');
const app = express();
const path = require('path')

const PORT = process.env.PORT || 3000;
const indexFilePath = path.join(__dirname,'/index.html')

console.log(indexFilePath);
//app.get('/',(req, res) => res.send('Hello World'));
app.get('/',(req, res) => res.sendFile(indexFilePath));
app.post('/signin',(req, res) => res.send("trying to verify"));
app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))
