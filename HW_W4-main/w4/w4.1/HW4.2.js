const express = require('express')
const app = express()

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' },
    { id: 6, name: 'Diana Evans', email: 'diana@example.com' },
    { id: 7, name: 'Ethan Green', email: 'ethan@example.com' },
    { id: 8, name: 'Fiona Harris', email: 'fiona@example.com' },
    { id: 9, name: 'George Clark', email: 'george@example.com' },
    { id: 10, name: 'Hannah Lewis', email: 'hannah@example.com' }
]

app.get('/users/:id', (req, res) => {
    const user = users.find((item) => item.id == req.params.id)
    if (!user) {
        return res.json({ message: "User not found" });
    }
    res.json(user)
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})