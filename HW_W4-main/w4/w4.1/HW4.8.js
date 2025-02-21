const express = require('express')
const app = express()

const events = [
    { id: 1, name: 'Tech Meetup', date: '2025-02-15' },
    { id: 2, name: 'Startup Pitch Day', date: '2025-02-20' },
    { id: 3, name: 'AI Conference', date: '2025-02-25' },
    { id: 4, name: 'Music Concert', date: '2025-03-01' },
    { id: 5, name: 'Food Festival', date: '2025-03-05' },
    { id: 6, name: 'Marathon Run', date: '2025-03-08' },
    { id: 7, name: 'Film Screening', date: '2025-03-09' },
    { id: 8, name: 'Book Fair', date: '2025-03-10' },
    { id: 9, name: 'Science Expo', date: '2025-03-12' },
    { id: 10, name: 'Art Festival', date: '2025-03-10' }
];

app.get('/events/:id', (req, res) => {
    const event = events.find((item) => item.id == req.params.id)
    if(!event){
        return res.json({message : "Event not found"})
    }
    res.json(event)
})

app.listen(3000, () =>{
    console.log('Server is running on http://localhost:3000')
})