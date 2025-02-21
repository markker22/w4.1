const express = require('express')
const app = express()

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@another.com' },
    { id: 3, name: 'Mike Brown', email: 'mike@example.com' },
    { id: 4, name: 'Sarah Johnson', email: 'sarah@another.com' },
    { id: 5, name: 'David Wilson', email: 'david@example.com' },
    { id: 6, name: 'Emily Davis', email: 'emily@another.com' },
    { id: 7, name: 'James Miller', email: 'james@example.com' },
    { id: 8, name: 'Olivia Garcia', email: 'olivia@another.com' },
    { id: 9, name: 'Daniel Martinez', email: 'daniel@example.com' },
    { id: 10, name: 'Sophia Anderson', email: 'sophia@another.com' }
];

app.get('/users/filter', (req, res) => {
    const domain = req.query.domain
    const filteredUsers = users.filter(user => user.email.endsWith(`@${domain}`))
    if (filteredUsers.length === 0) {
        return res.status(404).json({ message: 'No users found with this domain' })
    }
    res.json(filteredUsers)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})