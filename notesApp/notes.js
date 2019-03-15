
const fs = require('fs')

const getNote = () => {
    return console.log("added your note")
}

const readNote = (title) => {
    const notes = loadNotes();
    for(ele in notes)
        if(notes[ele].title === title)
            console.log(notes[ele].title + " => " +notes[ele].body)
}

const removeNote = (title) => {
    notes = loadNotes();
    newList = notes.filter((note) => note.title != title)
    saveNotes(newList)
}

const listNote = () => {
    notes = loadNotes();
    for(ele in notes)
        console.log(notes[ele].title)
}

const addNote = function(title,body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note)=>{
        return note.title === title
    })

    if(duplicateNotes.length === 0)
    {
        notes.push({
        title: title,
        body: body
    })
    console.log("New Note added")
    saveNotes(notes)
} else console.log("duplicate title found")
}

const saveNotes = (notes) => {
    const  dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.JSON',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return[]
    }
}

module.exports = {
    getNote: getNote,
    addNote: addNote,
    listNote: listNote,
    removeNote: removeNote,
    readNote: readNote
}
