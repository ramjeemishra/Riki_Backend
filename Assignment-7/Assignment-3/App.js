const express = require("express");

const app = express();

app.get("/student/:id", (req, res) => {
    const studentId = req.params.id;
    const name = req.query.name;
    const course = req.query.course;

    res.send(`
        Student ID: ${studentId}<br>
        Name: ${name}<br>
        Course: ${course}
    `);
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});  