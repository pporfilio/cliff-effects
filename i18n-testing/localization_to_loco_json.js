var fs = require("fs");

var TRANSLATION_PATH = "../src/localization/";
var TEMP_PATH = ".localization_temp_files";
var JSON_PATH = "json";
var translation_sources = fs.readdirSync(TRANSLATION_PATH);
translation_sources = translation_sources.filter(el => el.length === 5);
translation_destinations = translation_sources.map(el => el.substring(0, 3) + "json");

try {
    fs.mkdirSync(TEMP_PATH);
} catch (error) { }

for (var i = 0; i < translation_sources.length; ++i) {
    var source = fs.readFileSync(TRANSLATION_PATH + "/" + translation_sources[i], "utf8");
    var lines = source.split("\n");
    lines[0] = "exports.default = {";
    var modified_source = lines.join("\n");
    fs.writeFileSync(TEMP_PATH + "/" + translation_sources[i], modified_source);
}

try {
    fs.mkdirSync(JSON_PATH);
} catch (error) { }

var languages = {}
for (var i = 0; i < translation_sources.length; ++i) {
    var obj = require("./" + TEMP_PATH + "/" + translation_sources[i]);
    obj = arraysToObjects(obj);
    languages[translation_sources[i]] = obj;
}

for (filename in languages) {
    var result = applyTranslations(languages["en.js"], languages[filename]);

    var s = JSON.stringify(result, null, 4);
    fs.writeFileSync(JSON_PATH + "/" + filename.substring(0, 3) + "json", s);
}

function arraysToObjects(obj) {
    if (Array.isArray(obj)) {
        newObj = {};
        for (var i = 0; i < obj.length; ++i) {
            newObj[i] = arraysToObjects(obj[i]);
        }
        return newObj;
    } else if (obj != null && typeof obj === "object") {
        for (var property in obj) {
            obj[property] = arraysToObjects(obj[property]);
        }
    }
    return obj;
}

function applyTranslations(source, translation) {
    console.log(source);
    var result = {};
    if (typeof source === "string" && typeof translation === "string") {
        result[source] = translation;
    } else if (typeof source === "object") {
        for (property in source) {
            console.log(translation);
            if (typeof translation === "object" && property in translation) {
                result[property] = applyTranslations(source[property], translation[property]);
            } else {
                // If the translation doesn't have the same structure as the source, 
                // just "translate" the source to itself
                result[property] = applyTranslations(source[property], source[property]);
            }
        }
    }
    return result;
}

