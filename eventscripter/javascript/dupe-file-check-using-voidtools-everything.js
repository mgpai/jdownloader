/*
    dupe check using voiodtools everything 
    Trigger : A Download started
*/

var name = link.name;
var size = link.bytesTotal;

try {
    var json = JSON.parse(getPage("http://localhost/?s=" + name + "&j=1&size_column=1"));

    json.results.some(function(result) {
        return name == result.name && size == result.size;
    }) && (link.enabled = false);
} catch (e) {};