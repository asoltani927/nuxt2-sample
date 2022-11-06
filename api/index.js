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
  let products = require('../assets/data/products.json')

  if (req.query.search && req.query.search.length > 0) {
    products = products.filter(item => item.Title.includes(req.query.search))
  }

  const from = (limit * page) + 1
  const to = (((limit * page)) + limit)
  const result = {
    data: [],
    total: products.length,
    page,
    count: limit,
    from,
    to,
    total_page: Math.round(products.length / limit)
  }
  for (let i = from; i <= to; i++) {
    result.data.push(products[i])
  }
  // return products
  res.send(result)
})

app.post('/login', function (req, res) {
  if (req.body.username === 'test' && req.body.password === 'test') {
    return res.send({
      token: 'asjkbrhiu23y4r2893ywksdjfmsdnnfvb234y689234kjwjefwejmbfjghfskjfhbr3k4jb',
      refresh_token: 'aslkdhasdhasdkjahdkjashdkajsdjhvbuytg2398y23423'
    })
  }
  return res.send({})
})

app.get('/user', function (req, res) {
  return res.send({
    name: 'amin',
    photo_uri: 'https://asoltani.ir/wp-content/uploads/2021/02/20180814_191928.png'
  })
})

export default {
  path: '/api',
  handler: app
}
