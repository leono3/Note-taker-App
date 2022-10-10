const express = require('express');
const path = require('path');
const routes = require('./Routes');
const app = express();

//const { v4: uuidV4 } = require('uuid');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


const PORT = process.env.port || 3001;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// app.get('/api/notes', (req, res) => {
//     fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
//         if (err) {
//             return res.status(400).json({ err });
//         }
//         else {
//             res.json(JSON.parse(data))
//         }
//     })

// });

app.post('/api/notes', (req, res) => {
    // const notes = req.body;
    // if (notes.text.trim().length > 0) {
    //     fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    //         if (err) {
    //             return res.status(400).json({ err });
    //         }

    //         const jsonNotes = JSON.parse(data);

            
    //         console.log(data);
           



    //         jsonNotes.push(notes);
    //         fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(jsonNotes), (err, data) => {
    //             if (err) {
    //                 return res.status(400).json({ err });
    //             }
    //             else {
    //                 res.json(notes);
    //             }
    //         });
    //     });

    // }
});

// app.delete('/api/notes/:id', (req, res) => {
//     const id = req.params.id;
//     if (notes.text.trim().length > 0) {
//         fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
//             if (err) {
//                 return res.status(400).json({ err });
//             }

//             const jsonNotes = JSON.parse(data);
//             console.log(data);
           



//             jsonNotes.push(notes);
//             fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(jsonNotes), (err, data) => {
//                 if (err) {
//                     return res.status(400).json({ err });
//                 }
//                 else {
//                     res.json(notes);
//                 }
//             });
//         });

//     }
// });


app.listen(PORT, () => console.log(`connected to PORT ${PORT}`));