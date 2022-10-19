/*
    sort download packages by bytes remaining
    Trigger : Toolbar button pressed
*/

if (name == "Sort packages") {
    var desc = getProperty("desc", false);

    getAllFilePackages().filter(function(package) {
        return !package.finished;
    }).sort(function(a, b) {
        var a = getBytesRemaining(a);
        var b = getBytesRemaining(b);

        return desc ? b - a : a - b;
    }).reverse().forEach(function(package) {
        callAPI("downloadsV2", "movePackages", [package.UUID], -1);
    })

    if (desc) {
        setProperty("desc", false, false);
    } else {
        setProperty("desc", true, false);
    }
}

function getBytesRemaining(package) {
    return package.bytesTotal - package.bytesLoaded;
}