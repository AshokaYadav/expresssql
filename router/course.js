const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// GET all course names
router.get('/', (req, res) => {
    const courseNames = courses.map(c => c.name).join(', ');
    res.send(`Courses: ${courseNames}`);
});

// POST: get course by id
router.post('/:id', (req, res) => {
    const id = Number(req.params.id);

    const course = courses.find(c => c.id === id);

    if (!course) {
        return res.send("Course not found");
    }

    res.send(
        `Response: "Course: ${course.name}, Description: ${course.description}"`
    );
});

module.exports = router;
