/*
    delete orphaned archive info files from cfg/archive folder
    trigger : Any/None (Click "Test Run" button in the main menu of the editor window to run the script)
    Note: Very resource intensive. Use very sparingly, espcecially if the download list is large
*/

var names = [];

getAllFilePackages().forEach(function(package) {
    package.archives.forEach(function(archive) {
        names.push("v2_" + archive.settingsID + ".json");
    })
})

getPath(JD_HOME + "/cfg/archives").children.forEach(function(file) {
    names.indexOf(file.name) == -1 && file.delete();
})