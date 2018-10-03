var fs =require('fs');  /*fs=File  System*/
/*fs.writeFile('MyFile.txt','hello content!Ruhul Amin Bin Abul Kasam',function(err){
    if(err)throw err;
    console.log('Saved!');
});*/

fs.appendFile('Myfile.txt','This is my text.cheek this file',function(err){
    if(err)throw err;
    console.console.log('Update');

});