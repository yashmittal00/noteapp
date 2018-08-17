console.log('starting the app');
const fs=require('fs');

//function of reading file
var fetchnotes=()=>{
	
	try{
var file2=fs.readFileSync('notes-data.json');
return JSON.parse(file2);
}
catch (e){
	return [];
}
	
};
//function to write a file
var savenotes=(notes)=>{
var file=JSON.stringify(notes);
fs.writeFileSync('notes-data.json',file);

};

var addnote=(title,body)=>{

var notes=fetchnotes();
var note={title,body};


var duplicatenotes=notes.filter((note)=>{

return note.title===title;


});
if(duplicatenotes.length==0){

notes.push(note);
savenotes(notes);
return note;

}
else{
	console.log('Title exists please use different title');
	
}
};
var getall=()=>{
	
	console.log('listing all note using funstion');

	return fetchnotes();
	};
var read=(title)=>{
	
	
	
	var notes=fetchnotes();
		var filterednotes=notes.filter((note)=>note.title===title);
    return filterednotes[0];
};
var remove=(title)=>{

	//fetch note
	//filter notes ,remove the one with title of argument
	//save new notes arry
	var notes=fetchnotes();
	var filterednotes=notes.filter((note)=>{
note.title!==title;		
});
	savenotes(filterednotes);
	return notes.length !==filterednotes.length;
	};
module.exports={
	
    addnote,
	getall,
	read,
	remove
};