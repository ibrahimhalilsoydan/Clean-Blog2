import express from 'express';
import path from 'node:path';
import Post from './models/Post.js';
import conn from './config/db.js'

const app = express();


//Db bağlantısı
conn();
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
//Form verilerini okumak için (req.body'yi doldurur)
app.use(express.urlencoded({extended:true}))
//JSON verilerini okumak için (API yaparsan lazım olur)
app.use(express.json())





app.get('/', async(req, res) => {
  const posts =await Post.find({})
  res.render('index',{
    posts:posts
  });
});


app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});



app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async(req, res) => {
 await Post.create(req.body)
  res.redirect('/');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(` Express sunucusu çalışıyor: http://localhost:${PORT}`);
});
