const router = require("express").Router();
const { getNotes, addNotes, delNotes } = require("../../controllers/controllers");



router.route('/notes')
    .get(getNotes)
    .post(addNotes);

router.route('/notes/:id')
    .delete(delNotes);



module.exports = router;

