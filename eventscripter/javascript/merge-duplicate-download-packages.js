/*
    Merge duplicate download packages
    Trigger : Download controller started
*/    

var items = {};

getAllFilePackages().forEach(function(package) {
    var key = package.name + package.downloadFolder;

    try {
        var afterLinkID = items[key].afterLinkID;
        var destPackageID = items[key].destPackageID
        var linkIds = package.downloadLinks.map(function(link) {
            return link.UUID;
        })

        callAPI("downloadsV2", "moveLinks", linkIds, afterLinkID, destPackageID);
        items[key].afterLinkID = linkIds.pop();
    } catch (e) {
        items[key] = {
            destPackageID: package.UUID,
            afterLinkID: package.downloadLinks.pop().UUID
        }
    }
})