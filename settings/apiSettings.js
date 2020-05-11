const readDb = require('../db/readDbFile');
const writeDb = require('../db/writeDbFile');

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    const db = readDb;
    res.json(db);
  });


  app.post("/api/notes", function (req, res) {
    const uuid = uuidv1();
    const newNote = req.body;
    newNote.id = uuid;

    let db = readDb;

    db.push(newNote);

    writeDb(db);

    res.json(db);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const db = readDb;
    const deleteId = req.params.id;

    for (let i = 0; i < db.length; i += 1) {
      if (db[i].id === deleteId) {
        db.splice(i, 1);
        break;
      }
    }
    res.json(db);
  });
}
