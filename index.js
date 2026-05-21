import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

app.get('/contact', (req, res) => {
  res.sendFile('contact.html', { root: __dirname });
})

app.get('/about', (req, res) => {
  res.sendFile('about.html', { root: __dirname });
})

app.use((req,res,next) => {
  res.status(404).sendFile('404.html', { root: __dirname });
})

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening to port ${PORT}`)
});