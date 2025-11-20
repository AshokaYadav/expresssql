const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = students.map(s => s.name).join(', ');
    res.send("Students: " + name);
});

router.post('/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log(id)
    const student = students.find(s => s.id == id);
    if (!student) {
        return res.send('Student not found');
    }

    res.send("student: " + student.name);
// Response: "Course: Frontend, Description: HTML, CSS, JS, React" i want this one over here..
});


module.exports = router;
