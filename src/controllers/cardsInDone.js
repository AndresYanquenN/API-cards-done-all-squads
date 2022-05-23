var fetch = require('node-fetch');



const results = async () => {

    const inputData={
        day:"2022-05-17"


    }


    function request(body) {    
        return {
            method: 'POST',
            headers: {
                'Authorization': ' Bearer secret_6ChP3bBJktR1IwHXAb0q5oJAXhboEJNeQ1lM3vCMnLx',
                'Notion-Version': '2021-05-13',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }

    function getSecondsBetweenDates(firstDate, secondDate) {
        let startDate = new Date(firstDate), endDate = new Date(secondDate);
        return (endDate.getTime() - startDate.getTime()) / 1000;
    }

    function convertTZ(date, tzString) {
        return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
    }

    function secondsToHms(seconds) {
        seconds = Number(seconds);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds % 3600 / 60);
        const sec = Math.floor(seconds % 3600 % 60);

        const hDisplay = hours > 0 ? (hours <= 9 ? '0' : '') + hours + ":" : "00:";
        const mDisplay = minutes > 0 ? (minutes <= 9 ? '0' : '') + minutes + ":" : "00:";
        const sDisplay = sec > 0 ? (sec <= 9 ? '0' : '') + sec : "00";
        return hDisplay + mDisplay + sDisplay;
    }

    function addUrlOfInterest(timeForBug, typeOfBug, notionUrl, squad) {
        urlOfInterest.push({
            url: `${typeOfBug}#${secondsToHms(timeForBug)}#${squad}#${notionUrl}`,
        })
    }

    const apiURL = "https://api.notion.com/v1/databases/04b356ab699543a7824fef7294344e5b/query";

    const body = { "filter": { "and": [{ "property": "Stage", "select": { "does_not_equal": "🧹  Chores" } }, { "property": "Stage", "select": { "does_not_equal": "🌟  New functionalities" } }, { "property": "Created at", "date": { "equals": inputData.day } }] } }

    const response = await fetch(apiURL, request(body));
    const jsonResponse = await response.json();

    /* console.log(JSON.stringify(jsonResponse)); */

    /* const jsonResponse =  response.json(); */

    const responseObj = JSON.parse(JSON.stringify(jsonResponse));
    let count = responseObj.results.length;
    let addMoreResults = jsonResponse.has_more;
    let results = responseObj.results
    let totalTiming = 0,
        firstApproachTiming = 0,
        solutionTiming = 0,
        closedBugTiming = 0,
        totalBug = 0,
        totalMediumBugs = 0,
        mediumBugsTiming = 0,
        totalHighBugs = 0,
        highBugsTiming = 0,
        totalHighestBugs = 0,
        highestBugsTimin = 0,
        totalDowntime = 0,
        totalDowntimeBug = 0,
        totalTypos = 0,
        totalTranslations = 0,
        totalNotBug = 0,
        totalAlreadyReported = 0,
        totalPRBug = 0,
        totalPRChore = 0,
        onHold = 0,
        inbox = 0,
        inProgress = 0,
        BugCategoryVisual = 0,
        BugCategoryContentRelated = 0,
        BugCategoryFunctionalBug = 0,
        BugCategoryWorkFlow = 0,
        BugCategorySystemLevel = 0,
        BugSubCategoryEmail = 0,
        BugSubCategoryRedirection = 0,
        BugSubCategoryMaterial = 0,
        BugSubCategoryMissedElement = 0,
        BugSubCategoryBrowserCompatibility = 0,
        BugSubCategoryUnexpectedBehavior = 0,
        BugSubCategoryMisalignment = 0,
        BugSubCategoryNullBehavior = 0,
        BugSubCategoryInconsistency = 0,
        BugSubCategoryWrongBehavior = 0,
        BugSubCategoryUnnecessaryInformation = 0,
        BugSubCategoryMissingFunctionality = 0,
        BugSubCategoryDuplicatedBehavior = 0,
        BugSubCategoryUnnecessaryElement = 0,
        BugSubCategorySentry = 0,
        BugSubCategoryWrongCopy = 0,
        BugSubCategoryWrongColor = 0,
        BugSubCategoryTranslations = 0,
        BugSubCategorySize = 0,
        objBugCategories=0,
        objBugCategoriesAndSubcategories = [
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "content related",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "functional bug",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "visual",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "work flow",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "system level",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "content related",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "functional bug",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "visual",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "work flow",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "system level",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "content related",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "functional bug",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "visual",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "work flow",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "system level",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "content related",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "functional bug",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "visual",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "work flow",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "system level",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "content related",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "functional bug",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "visual",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "work flow",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "system level",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "content related",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "functional bug",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "visual",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "work flow",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "system level",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "content related",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "functional bug",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "visual",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "work flow",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "system level",
                "category": "Bug category",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "email",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "redirection",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "material",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "missed element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "browser compatibility",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "unexpected behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "misalignment",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "null behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "inconsistency",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "wrong behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "unnecessary information",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "missing functionality",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "duplicated behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "unnecessary element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "sentry",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "wrong copy",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "wrong color",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "translations",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Algorithms squad",
                "number": 0,
                "name": "size",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "email",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "redirection",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "material",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "missed element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "browser compatibility",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "unexpected behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "misalignment",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "null behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "inconsistency",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "wrong behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "unnecessary information",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "missing functionality",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "duplicated behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "unnecessary element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "sentry",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "wrong copy",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "wrong color",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "translations",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Applicants acquisition squad",
                "number": 0,
                "name": "size",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "email",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "redirection",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "material",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "missed element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "browser compatibility",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "unexpected behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "misalignment",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "null behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "inconsistency",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "wrong behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "unnecessary information",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "missing functionality",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "duplicated behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "unnecessary element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "sentry",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "wrong copy",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "wrong color",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "translations",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Talent squad",
                "number": 0,
                "name": "size",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "email",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "redirection",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "material",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "missed element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "browser compatibility",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "unexpected behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "misalignment",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "null behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "inconsistency",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "wrong behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "unnecessary information",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "missing functionality",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "duplicated behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "unnecessary element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "sentry",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "wrong copy",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "wrong color",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "translations",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Work squad",
                "number": 0,
                "name": "size",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "email",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "redirection",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "material",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "missed element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "browser compatibility",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "unexpected behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "misalignment",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "null behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "inconsistency",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "wrong behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "unnecessary information",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "missing functionality",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "duplicated behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "unnecessary element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "sentry",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "wrong copy",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "wrong color",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "translations",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "UGG squad",
                "number": 0,
                "name": "size",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "email",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "redirection",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "material",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "missed element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "browser compatibility",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "unexpected behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "misalignment",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "null behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "inconsistency",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "wrong behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "unnecessary information",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "missing functionality",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "duplicated behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "unnecessary element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "sentry",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "wrong copy",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "wrong color",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "translations",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Genome squad",
                "number": 0,
                "name": "size",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "email",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "redirection",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "material",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "missed element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "browser compatibility",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "unexpected behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "misalignment",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "null behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "inconsistency",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "wrong behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "unnecessary information",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "missing functionality",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "duplicated behavior",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "unnecessary element",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "sentry",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "wrong copy",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "wrong color",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "translations",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            },
            {
                "squad": "Platform squad",
                "number": 0,
                "name": "size",
                "category": "Bug subcategory",
                "typeBug":"",
                "priority":""
            }
        ],

        objSquads = [
            {
                "name": "Algorithms squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            },
            {
                "name": "Applicants acquisition squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            },
            {
                "name": "Platform squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            },
            {
                "name": "Platform operations squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            },
            {
                "name": "Genome squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            },
            {
                "name": "Storytelling squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            },
            {
                "name": "Talent squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            },
            {
                "name": "UGG squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            },
            {
                "name": "Work squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            },
            {
                "name": "Access squad",
                "medium": 0,
                "high": 0,
                "highest": 0,
                "mediumTiming": 0,
                "highTiming": 0,
                "highestTiming": 0,
                "solutionTiming": 0,
                "downtime": 0,
                "typo": 0,
                "translation": 0,
                "prbug": 0,
                "prchore": 0,
                "downtimeAnalysis": 0
            }
        ],
        totalDowntimeAnalysisCard = 0,
        downtimeArda = 0,
        downtimeBifrost = 0,
        downtimeBioTorre = 0,
        downtimeExplorer = 0,
        downtimeJedi = 0,
        downtimeJediManager = 0,
        downtimeKratos = 0,
        downtimePathfinder = 0,
        downtimeMesso = 0,
        downtimeNavigator = 0,
        downtimeTorreCo = 0,
        downtimeVader = 0

    var urlOfInterest = [];
    // The url of interest is a variable to attach the notion cards that go further the time limit for each category of bug

    results.map((card, i) => {
        const props = card.properties;
        const createdTime = props["Created at"].created_time,
            firstTimeApproach = typeof props["#BugT - first approach"] == 'undefined' ? 0 : props["#BugT - first approach"].date.start,
            closedTime = typeof props["#BugT - closed time"] == 'undefined' ? 0 : props["#BugT - closed time"].date.start,
            translation = props["#BugT - translation"].checkbox,
            downtime = props["#BugT - downtime"].checkbox,
            typo = props["#BugT - typo"].checkbox,
            priority = typeof props.Priority == 'undefined' ? '' : props.Priority.select.name,
            monitorDown = typeof props["#BugT - monitor down"] == 'undefined' ? '' : props["#BugT - monitor down"].select.name,
            numberOfDowntimes = typeof props["#BugT - number of downtimes"] == 'undefined' ? 0 : props["#BugT - number of downtimes"].number,
            squasdOnCard = props.Squad.multi_select,
            labels = props["Other labels"].multi_select, // here's where we got bug, post-release bug, not a bug, post-release chore, on hold or downtime (could be more than one)
            stage = typeof props.Stage == 'undefined' ? '' : props.Stage.select.name,
            bugCategory = typeof props["Bug category"] == 'undefined' ? '' : props["Bug category"].select.name,
            bugSubCateogory = typeof props["Bug subcategory"] == 'undefined' ? '' : props["Bug subcategory"].select.name;
        //        stageList = props.Stage.select.name


        //


        /* Get Stage */

        let labeledAS ="";
        
        /* Get the type of label */
        if (labels.length >= 1) {
            labels.map((label) => {
                switch (label.name) {
                    case 'Bug':
                        totalBug++;
                        labeledAS='Bug';
                        break;
                    case 'Post-release bug':
                        totalPRBug++;
                        labeledAS='Post-release bug';
                        break;
                    case 'Post-release chore':
                        totalPRChore++;
                        break;
                    case 'Not a bug':
                        totalNotBug++;
                        break;
                    case 'On hold':
                        onHold++;
                        break;
                    case 'Downtime':
                        totalDowntimeAnalysisCard++;
                        break;
                }
            })
        } else {
            let hasOnHoldOrNotABug = 0;
            /** To count it as in progress or not started yet we should validate that it doesn't has not a bug label or is on hold  **/
            labels.map((label) => {
                switch (label.name) {
                    case 'Not a bug':
                        hasOnHoldOrNotABug++;
                        break;
                    case 'On hold':
                        hasOnHoldOrNotABug++;
                        break;
                }
            })
            /** To count it as in progress or not started yet we should validate that it doesn't has not a bug label or is on hold  **/

            if (hasOnHoldOrNotABug == 0) {
                if (stage == '📧  Inbox') {
                    inbox++;
                }

                if (stage == '♻️  In progress' && firstTimeApproach != 0) {
                    inProgress++;
                }
            } else {
                totalAlreadyReported++;
            }
        }


                /* Get the priority */
                let setPriority="";
                if (priority != '') {
                    switch (priority) {
                        case 'Medium':
                            totalMediumBugs++;
                            setPriority="Medium";
                            break;
                        case 'High':
                            totalHighBugs++;
                            setPriority="High";
                            break;
                        case 'Highest':
                            totalHighestBugs++;
                            setPriority="Highest";
                            break;
                    }
                }
                /* By 
                 */

        /* Get Bug category and bug sub category */

        /* console.log(labeledAS); */
        /* console.log(222, props["Bug category"]); */
        /* console.log(card.url); */
        /* console.log(100,bugCategory); */
        /* console.log(200, bugSubCateogory); */
        /* console.log(squasdOnCard); */

        let squadName = squasdOnCard;
        let counterSquad = 0;

        squasdOnCard.map(squad =>{
            if (bugCategory != '') {


                    objBugCategoriesAndSubcategories.filter(squadData => (squadData.name == bugCategory & squadData.category == "Bug category" & squadData.squad ==squad.name ))
                        .forEach(squad => {
                            squad.number++;
                            squad.typeBug = labeledAS;
                            squad.priority=setPriority;
                        });
            }
            if (bugSubCateogory != '') {
                objBugCategoriesAndSubcategories.filter(squadData => (squadData.name == bugSubCateogory & squadData.category == "Bug subcategory" & squadData.squad == squad.name))
                        .forEach(squad => {
                            squad.number++;
                            squad.typeBug=labeledAS;
                            squad.priority=setPriority;
                        });
                    
            }

        })




/*         if (bugSubCateogory != '') {
            objBugCategoriesAndSubcategories.filter(squad => (squad.name == bugSubCateogory & squad.category == "Bug subcategory" & squad.squad == squadName.name))
                .forEach(squad => squad.number++)

        } */


        /* Get the type of label */

        objSquads.map((squad) => {
            let addToSquad = 0;
            squasdOnCard.map((squadOnCard) => {
                if (squadOnCard.name == squad.name) {
                    addToSquad++;
                }
            })

            if (addToSquad > 0) {
                switch (priority) {
                    case 'Medium':
                        squad.medium++;
                        break;
                    case 'High':
                        squad.high++;
                        break;
                    case 'Highest':
                        squad.highest++;
                        break;
                }

                if (labels.length >= 1) {
                    let isDowntimeAnalysis = 0;
                    labels.map((label) => {
                        switch (label.name) {
                            case 'Post-release bug':
                                squad.prbug++;
                                break;
                            case 'Post-release chore':
                                squad.prchore++;
                                break;
                            case 'Downtime':
                                squad.downtimeAnalysis++;
                                isDowntimeAnalysis++;
                                break;
                        }
                    })
                    if (isDowntimeAnalysis >= 1) {
                        switch (monitorDown) {
                            case 'Arda':
                                downtimeArda += numberOfDowntimes;
                                break;
                            case 'Jedi':
                                downtimeJedi += numberOfDowntimes;
                                break;
                            case 'JediManager':
                                downtimeJediManager += numberOfDowntimes;
                                break;
                            case 'Kratos':
                                downtimeKratos += numberOfDowntimes;
                                break;
                            case 'Pathfinder':
                                downtimePathfinder += numberOfDowntimes;
                                break;
                            case 'bio.torre':
                                downtimeBioTorre += numberOfDowntimes;
                                break;
                            case 'Discovery':
                                downtimeTorreCo += numberOfDowntimes;
                                break;
                            case 'Vader':
                                downtimeVader += numberOfDowntimes;
                                break;
                            case 'Navigator':
                                downtimeNavigator += numberOfDowntimes;
                                break;
                            case 'Explorer':
                                downtimeExplorer += numberOfDowntimes;
                                break;
                            case 'Bifrost':
                                downtimeBifrost += numberOfDowntimes;
                                break;
                        }
                    }
                }

                if (translation) {
                    squad.translation++;
                }
                if (downtime) {
                    squad.downtime++;
                }
                if (typo) {
                    squad.typo++;
                }
            }
        })
        /* By squad */
        /* Get the priority */
        /* Calculate timing in seconds */
        if (firstTimeApproach != 0 && closedTime != 0) {
            totalTiming++;
            firstApproachTiming += getSecondsBetweenDates(createdTime, firstTimeApproach);
            solutionTiming += getSecondsBetweenDates(firstTimeApproach, closedTime);
            closedBugTiming += getSecondsBetweenDates(createdTime, closedTime);
            /* according to the priority */
            switch (priority) {
                case 'Medium':
                    mediumBugsTiming += getSecondsBetweenDates(createdTime, closedTime);;
                    break;
                case 'High':
                    highBugsTiming += getSecondsBetweenDates(createdTime, closedTime);;
                    break;
                case 'Highest':
                    highestBugsTimin += getSecondsBetweenDates(createdTime, closedTime);
                    break;
            }

            /* By squad */
            objSquads.map((squad) => {
                let addToSquad = 0;
                squasdOnCard.map((squadOnCard) => {
                    if (squadOnCard.name == squad.name) {
                        addToSquad++;
                    }
                })

                if (addToSquad > 0) {
                    const timeForThisbug = getSecondsBetweenDates(createdTime, closedTime);
                    squad.solutionTiming += getSecondsBetweenDates(firstTimeApproach, closedTime);

                    switch (priority) {
                        case 'Medium':
                            squad.mediumTiming += timeForThisbug;
                            if (timeForThisbug > 14400) { //major to 4 hours
                                addUrlOfInterest(timeForThisbug, "Medium", card.url, squad.name)
                            }
                            break;
                        case 'High':
                            squad.highTiming += timeForThisbug;
                            if (timeForThisbug > 3600) { //major to 1 hour
                                addUrlOfInterest(timeForThisbug, "High", card.url, squad.name)
                            }
                            break;
                        case 'Highest':
                            squad.highestTiming += timeForThisbug;
                            if (timeForThisbug > 900) { //major to 15 minutes
                                addUrlOfInterest(timeForThisbug, "Highest", card.url, squad.name)
                            }
                            break;
                    }
                }
            })
            /* By squad */
            /* according to the priority */
        }
        /* Calculate timing in seconds */



        /* Sum typos, downtime & translation */
        if (translation) {
            totalTranslations++;
        }
        if (downtime) {
            totalDowntime++;
        }
        if (typo) {
            totalTypos++;
        }
        /* Sum typos, downtime & translation */
    })
    const firstApproach = firstApproachTiming > 0 ? Math.floor(firstApproachTiming / totalTiming) : 0;
    const solution = solutionTiming > 0 ? Math.floor(solutionTiming / totalTiming) : 0;
    const closedBug = closedBugTiming > 0 ? Math.floor(closedBugTiming / totalTiming) : 0;
    const medium = mediumBugsTiming > 0 ? Math.floor(mediumBugsTiming / totalMediumBugs) : 0;
    const high = highBugsTiming > 0 ? Math.floor(highBugsTiming / totalHighBugs) : 0;
    const highest = highestBugsTimin > 0 ? Math.floor(highestBugsTimin / totalHighestBugs) : 0;

    /* console.log(objBugCategoriesAndSubcategories); */

    objBugCategories = objBugCategoriesAndSubcategories.filter(item =>{
        return item.number>0
    })

    const datajson = JSON.stringify(objBugCategories);

    

    return datajson






}

module.exports = {results};

