// const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')


// //customize yargs version
yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'add a new snote',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title,argv.body)
    },
    
})

yargs.command({
    command: 'remove',
    describe: 'remove existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (tit) => notes.removeNote(tit.title)
})

yargs.command({
    command: 'read',
    describe: 'read existing note',
    builder: {
        title: {
            describe: 'note detail',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title) 
})


yargs.command({
    command: 'list',
    describe: 'list existing note',
    handler: () => notes.listNote()
        
    
})

yargs.parse()
