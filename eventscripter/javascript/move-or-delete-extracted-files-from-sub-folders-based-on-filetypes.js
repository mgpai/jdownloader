/*
    move or delete extracted files from sub-folders based on filetypes
    trigger: archive extraction finished
*/

var baseFolder = archive.extractToFolder || archive.folder;

var exts = {
    delete: ["inf"],
    move: ["jpg", "jpeg"]
}

archive.extractedFilePaths.forEach(function(filePath) {
    var ext = filePath.extension;

    if (exts.delete.indexOf(ext) > -1) {
        filePath.delete();
    } else if (exts.move.indexOf(ext) > -1) {
        filePath.parent != baseFolder && filePath.moveTo("c:/my folder");
    }
})