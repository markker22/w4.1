const express = require('express')
const app = express()

const products = [ 
    { id: 1, name: 'Laptop', price: 30000 }, 
    { id: 2, name: 'Smartphone', price: 15000 }, 
    { id: 3, name: 'Tablet', price: 12000 }, 
    { id: 4, name: 'Smartwatch', price: 8000 },
    { id: 5, name: 'Smart TV', price: 20000 },
    { id: 6, name: 'Smart Speaker', price: 4000 },
    { id: 7, name: 'Smart Bulb', price: 600 },
    { id: 8, name: 'Camera', price: 10000 },
    { id: 9, name: 'Gaming Console', price: 15000 },
    { id: 10, name: 'Smart Thermostat', price: 5000 }
]

app.get('/products/search', (req, res) => {
    const { name, minPrice, maxPrice } = req.query

    if (!name && !minPrice && !maxPrice) {
        return res.status(400).json({ message: 'กรุณาใส่คำค้นหาหรือช่วงราคา' })
    }
    let result = products
    if (name) {
        const lowerCaseName = name.toLowerCase()
        result = result.filter(product =>
            product.name.toLowerCase().includes(lowerCaseName)
        )
    }
    if (minPrice) {
        result = result.filter(product =>
            product.price >= parseFloat(minPrice)
        )
    }
    if (maxPrice) {
        result = result.filter(product =>
            product.price <= parseFloat(maxPrice)
        )
    }
    if (result.length === 0) {
        return res.status(404).json({ message: 'No products found matching the criteria' })
    }
    res.json(result)
})

app.listen(3000, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:3000`)
})