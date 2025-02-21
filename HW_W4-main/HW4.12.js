const express = require('express')
const app = express()

const events = [
    { id: 1, name: 'Tech Conference', location: 'Bangkok', date: '2025-02-15' },
    { id: 2, name: 'Art Exhibition', location: 'Chiang Mai', date: '2025-03-10' },
    { id: 3, name: 'Music Festival', location: 'Bangkok', date: '2025-02-20' },
    { id: 4, name: 'Food Festival', location: 'Phuket', date: '2025-04-05' },
    { id: 5, name: 'Film Premiere', location: 'Bangkok', date: '2025-05-12' },
    { id: 6, name: 'Fashion Show', location: 'Chiang Mai', date: '2025-06-18' },
    { id: 7, name: 'Startup Pitch', location: 'Bangkok', date: '2025-07-22' },
    { id: 8, name: 'Cultural Fair', location: 'Ayutthaya', date: '2025-08-30' },
    { id: 9, name: 'Marathon', location: 'Bangkok', date: '2025-09-15' }
  ]
app.get('/events/search', (req, res) => {
    const { name, startDate, endDate } = req.query
    if (!name && !startDate && !endDate) {
        return res.status(400).json({ message: 'Please provide a search term or date range.' })
    }
    let result = [...events]
    if (name) {
        const lowerCaseName = name.toLowerCase()
        result = result.filter(event =>
            event.name.toLowerCase().includes(lowerCaseName)
        )
    }
    if (startDate) {
        const start = new Date(startDate)
        result = result.filter(event =>
            new Date(event.date) >= start
        )
    }
    if (endDate) {
        const end = new Date(endDate)
        result = result.filter(event =>
            new Date(event.date) <= end
        )
    }
    if (result.length === 0) {
        return res.status(404).json({ message: 'No events found matching the criteria.' })
    }
    res.json(result)
})

app.listen(3000, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:3000`)
})