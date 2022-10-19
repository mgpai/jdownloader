/*
    export files
*/

var repo = "/jd/"

var items = callAPI("config", "get",
    "org.jdownloader.extensions.eventscripter.EventScripterConfig",
    "cfg/org.jdownloader.extensions.eventscripter.EventScripterExtension",
    "Scripts"
)

items.forEach(function(item) {
    if (item.enabled) {
        var name = item.name
        var script = items.script;
        var json = getPath(repo + name + ".eventscripter");
        var js = getPath(repo + name + ".js");
        
        json.delete();
        js.delete();
        
        writeFile(json, JSON.stringify(item, null, 4), false);
        writeFile(js, item.script, false);
    }
})

items = callAPI("config", "get",
    "org.jdownloader.controlling.packagizer.PackagizerSettings", null, "RuleList"
)

items.forEach(function(item) {
    if (item.enabled) {
        var packagizer = getPath(repo + item.name + ".packagizer");
        
        packagizer.delete();

        writeFile(packagizer, JSON.stringify(item, null, 4), false);
    }
})