const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3006;

app.use(bodyParser.json());

let staff = [
    { id: 1, name: 'John Doe', role: 'Housekeeping', isAvailable: true },
    { id: 2, name: 'Jane Smith', role: 'Receptionist', isAvailable: false },
    { id: 3, name: 'Emily Johnson', role: 'Chef', isAvailable: true }
];

// Endpoint para verificar la disponibilidad de un miembro del personal
app.get('/checkAvailability/:name', (req, res) => {
    const name = req.params.name;
    const member = staff.find(s => s.name === name);
    if (member) {
        res.json({ name: member.name, role: member.role, isAvailable: member.isAvailable });
    } else {
        res.status(404).send('Staff member not found');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`StaffAvailabilityService is running on port ${port}`);
});
