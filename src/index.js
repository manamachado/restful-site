const express = require('express');
const request = require('request-promise-native');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));

app.get('/produtos', async (req, res) => {
  const result = await request.get('http://localhost:3000/api/v1/products');
  const products = JSON.parse(result).data;
  res.render('products', { products });
})

app.listen(3001, () => {
  console.log('\x1b[33m%s\x1b[0m', '========== Server running on port 3001 ==========');
})