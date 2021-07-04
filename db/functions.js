const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
//
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Input{ 
    readNotes() {
        return readFileAsync("db/db.json", "utf8")
    }

    writeNotes(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    grabNotes() {
        return this.readNotes()
        .then((notes) => {
            let notesArray 
            try{
                notesArray = [].concat(JSON.parse(notes))
            } catch(error) {
                notesArray=[]
            }
            return notesArray;
        })
    } 
    addNotes(note) {
        const { title, text } = note 
        if(!title || !text) {
            throw new Error('Required Entry: Title and Text')
        }
        const newNote = {title, text, id:uuidv4()}
        return this.grabNotes() 
        .then((notes) => [...notes, newNote])
        .then((updateNotes) => this.writeNotes(updateNotes))
        .then(() => newNote)
    }

    deleteNotes(id) {
        return this.grabNotes()
           .then((notes) => notes.filter((note) => note.id !== id)) 
           .then((filteredNotes) => this.writeNotes(filteredNotes)) 
    }
}


module.exports = new Input();