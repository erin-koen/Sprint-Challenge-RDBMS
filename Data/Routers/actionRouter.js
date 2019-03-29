const express = require("express");
const db = require("../dbConfig.js");

const router = express.Router();

router.post('/', async (req, res) => {
    const { description, notes, project_id } = req.body;
    if (notes && description && project_id ){
        try {
            console.log('pre');
            await db('actions').insert(req.body);
            console.log('post');
            res.status(200).send("The action's been added successfully.")
        } catch(err){
            res.status(500).json(err)
        }
    } else {
        res.status(400).send("A task requires a description, notes, and a project_id")
    }
});

module.exports = router;