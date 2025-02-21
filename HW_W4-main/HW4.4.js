const express = require('express')
const app = express()

const products = [
    { id: 101, name: 'Laptop', price: 25000 },
    { id: 102, name: 'Smartphone', price: 15000 },
    { id: 103, name: 'Tablet', price: 12000 },
    { id: 104, name: 'Headphones', price: 3000 },
    { id: 105, name: 'Smartwatch', price: 8000 },
    { id: 106, name: 'Monitor', price: 10000 },
    { id: 107, name: 'Keyboard', price: 2000 },
    { id: 108, name: 'Mouse', price: 1500 },
    { id: 109, name: 'Printer', price: 7000 },
    { id: 110, name: 'Speaker', price: 5000 }
]

app.get('/products/:id', (req, res) => {
    const product = products.find((item) => item.id == req.params.id)
    if (!product) {
        return res.json({ message: "Products not found" })
    }
    res.json(product)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})