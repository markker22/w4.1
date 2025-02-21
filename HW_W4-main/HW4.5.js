const express = require("express")
const app = express()

const news = [
    { id: 1, title: 'Tech Innovation', category: 'Technology' },
    { id: 2, title: 'AI Breakthrough', category: 'Technology' },
    { id: 3, title: 'Space Exploration', category: 'Science' },
    { id: 4, title: 'Climate Change', category: 'Environment' },
    { id: 5, title: 'Stock Market Trends', category: 'Finance' },
    { id: 6, title: 'Healthy Eating', category: 'Health' },
    { id: 7, title: 'New Movie Releases', category: 'Entertainment' },
    { id: 8, title: 'Travel Destinations', category: 'Travel' },
    { id: 9, title: 'Fitness Tips', category: 'Health' },
    { id: 10, title: 'Health Tips', category: 'Health' }
]

app.get('/news', (req, res) => {
    res.json(news)
})

app.listen(3000, () =>{
    console.log('Server is running on http://localhost:3000')
})