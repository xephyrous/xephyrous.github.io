// JSON objects degrade their types so quickly when passing between Kotlin and JS,
// So we are required to instead cache the result as a pure json object. (Represented as JsAny on the Kotlin side)
let cachedJSON = "";

/**
 * Digests a team string from the model's response and parses it into a JSON object
 * @param rawString The model's response string containing the team data as JSON
 * @param pureJSON Whether or not the string is pure JSON, or a full model response string
 * @return JSON
 */
function teamDataToJSON(rawString, pureJSON) {
    if (!pureJSON && rawString.indexOf("~||TEAMDATA||~") === -1) {
        return null;
    }

    let teamJSON;
    try {
        if (pureJSON) {
            teamJSON = JSON.parse(rawString);
        } else {
            teamJSON = JSON.parse(
                rawString.substring(
                    rawString.indexOf("~||TEAMDATA||~") + 14,
                )
            );
        }
    } catch (_) { return null; }

    if ( // Validate JSON fields
        !teamJSON.hasOwnProperty("name")
        || !teamJSON.hasOwnProperty("igl")
        || !teamJSON.hasOwnProperty("coach")
        || !teamJSON.hasOwnProperty("members")
        || !teamJSON.hasOwnProperty("roles")
        || !teamJSON.hasOwnProperty("agents")
        || !teamJSON.hasOwnProperty("uuid")
    ) { return null; }

    if ( // Validate field entries
        teamJSON["name"] === ""
        || teamJSON["igl"] === ""
        || teamJSON["coach"] === ""
        || teamJSON["members"].length !== 5
        || teamJSON["roles"].length !== 5
        || teamJSON["agents"].length !== 5
    ) { return null; }

    return teamJSON;
}

/**
 * Loads a JSON object into the local cache
 * @param json The JSON to cache
 */
function cacheJSON(json) {
    cachedJSON = json
    console.log(json)
    // Lord help me if this gets passed invalid JSON, I'm not stopping whatever hell follows
}

/**
 * Clears the local JSON cache
 */
function clearJSONCache() {
    cachedJSON = ""
}

/**
 * Extracts a parameter from cachedJSON and returns it as a string, to be cast on the kotlin side
 * @param key The key of the object to return
 * @return {string} The value stored at key, as a string
 */
function extractJSONObject(key) {
    if (cachedJSON.length === 0) {
        console.warn("JSON needs to be cached before calling an extraction function!");
        return "";
    } // Skill issue, cache the JSON first dumbass, no data for you

    return cachedJSON[key]
}

/**
 * Turns an array into a splittable string to be parsed on the kotlin side
 */
function extractJSONArray(key, commas) {
    if (cachedJSON === "") {
        console.warn("JSON needs to be cached before calling an extraction function!");
        return "";
    } // Skill issue, cache the JSON first dumbass, no data for you

    let arr = [];
    cachedJSON[key].forEach(function(it) {
        if (commas) {
            arr.push(it.replaceAll(",", "~|COMMA|~"));
            return;
        }

        arr.push(it)
    })

    let str = arr.toString().replaceAll("\"", "");
    str.substring(0, str.length - 1);

    return str;
}

export {
    teamDataToJSON,
    extractJSONArray,
    extractJSONObject,
    cacheJSON,
    clearJSONCache,
    cachedJSON
}