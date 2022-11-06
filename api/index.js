const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/products', function (req, res) {
  const page = parseInt(req.query.page ?? 0)
  const limit = parseInt(req.query.count ?? 15)
  if (limit <= 0) {
    return res.send('error')
  }
  const products = require('../assets/data/products.json')

  const result = {
    data: [],
    total: products.length,
    page,
    count: limit,
    total_page: Math.round(products.length / limit)
  }
  for (let i = (limit * page); i <= (((limit * page)) + limit); i++) {
    result.data.push(products[i])
  }
  // return products
  res.send(result)
})

export default {
  path: '/api',
  handler: app
}
