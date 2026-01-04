import express from 'express';
import path from 'node:path';

const app = express();

app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/about', (req, res) => {
  res.render('about');
});



app.get('/add_post', (req, res) => {
  res.render('add_post');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(` Express sunucusu çalışıyor: http://localhost:${PORT}`);
});
