/*
    Move extracted files
    Trigger: Archive extraction finished
*/

archive.extractedFilePaths.forEach(function(filePath) {
    filePath.moveTo("c:\\my folder");
})