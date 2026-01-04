import express from 'express';
import path from 'node:path';



const app = express();
//MIDDLEWARES
app.use(express.static('public'));


app.get('/', (req, res) => {
 
  res.sendFile(path.resolve('temp','index.html'))
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(` Express sunucusu çalışıyor: http://localhost:${PORT}`);
});
