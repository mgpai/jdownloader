/*
    move extracted files from sub-folders
    trigger: archive extraction finished
*/    

var baseFolder = archive.extractToFolder || archive.folder;

archive.extractedFilePaths.forEach(function(filePath) {
    filePath.parent != baseFolder && filePath.moveTo("c:/my folder");
})