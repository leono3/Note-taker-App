const fs = require('fs');
const { v4: uuidV4 } = require('uuid');
const path = require('path');

module.exports = {
    getNotes: (req, res) => {
        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
            if (err) {
                return res.status(400).json({ err });
            }
            else {
                if (data) {
                    res.json(JSON.parse(data))
                }
            }
        })
    },

    addNotes: (req, res) => {
        const notes = req.body;
        if (notes.text.trim().length > 0) {
            //Creates unique ID for new notes
            notes.id = uuidV4();
            fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
                if (err) {
                    return res.status(400).json({ err });
                }
                else {
                    if (data) {
                        const jsonNotes = JSON.parse(data);


                        // console.log(data);

                        //WRONG IF HAHA IF NO DATA THEN DONT WRITE DUMBASS

                        //.unshift adds to top of the array 
                        jsonNotes.unshift(notes);
                        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(jsonNotes), (err, data) => {
                            if (err) {
                                return res.status(400).json({ err });
                            }
                            else {
                                res.json(notes);
                            }
                        });
                    }
                    else {
                        res.json('You have no notes')
                    }
                };
            })
        }
    },

    delNotes: (req, res) => {
        //destructure id from req.params
        const { id } = req.params
        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
            if (err) {
                return res.status(400).json({ err });
            }

            const notes = JSON.parse(data);
            let deletedNote
            notes.forEach((note, index) => {
                if (note.id === id) {
                    notes.splice(index, 1);
                    deletedNote = notes[index];
                }

            });

            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
                if (err) {
                    return res.status(400).json({ err });
                }
                else {
                    const response = {
                        status: 'success',
                        body: deletedNote,
                    };

                    res.json(response);
                }

            })
        })
    },

}