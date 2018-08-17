console.log('Welcome write your notes here');
const notes=require('./notes.js');
const fs=require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');

const argv=yargs
	.command('add','Add new Note',{
	title:{
describe:'Titke of note',
demand:true,
	alias:'t'
	}
	
	
	})
.help()
.argv;

//input from user through process in cmd
var command=process.argv[2];
console.log('command:',command);
console.log('Yargs',argv);
if(command=='add')
{
	console.log('adding new node');
	var note=notes.addnote(argv.title,argv.body);
	if(note){
	console.log('note created');
	console.log('Title:',note.title);
	console.log('body:',note.body);
	}
	else{
	console.log('note title already exists');
	}
}
else if(command=='list')
{ 
	
	var allnotes=notes.getall();
	console.log('printing ${allnotes.length} note(s).'.allnotes);

}
else if(command=='read')
{
	
	var note=notes.read(argv.title);
	debugger;
	if(note){
		console.log('note found');
		console.log('Title:',note.title);
	console.log('body:',note.body);
	}
	else{
	
	console.log('note not found');
	}
}
else if(command=='remove')
{
	
	var removednote=notes.remove(argv.title);
var message=removednote ?'note was removed':'note not found';
console.log(message);
	
}
else if(command=='functions')
{
	console.log('ADD A NOTE ,DELETE A NOTE ,SEND A NOTE, LIST ALL NOTES')
	
}
else
{
	console.log('no action performed');
}



/*var user=os.userInfo();
console.log(user);
 fs.writeFile('message.txt', 'Hello Node.js'+user.username, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}
);*/