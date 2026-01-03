import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog title',
    description: 'Blog description',
  };

  res.json(blog);
});

app.listen(PORT, () => {
  console.log(` Express sunucusu çalışıyor: http://localhost:${PORT}`);
});
