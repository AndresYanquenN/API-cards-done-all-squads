

const fetch = require('node-fetch');
const cardDone = require('./cardsInDone')


const apiURL = "https://api.notion.com/v1/databases/04b356ab699543a7824fef7294344e5b/query";

const listSquads = ['Applicants acquisition squad','Work squad', 'Talent squad', 'UGG squad', 'Genome squad']


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
const pull_request_merged = "📦 Pull request merged"
const pull_request = "🧐  Pull request"
const done = "✅   Done"
const optimization_analysis = "🏃 Optimization analysis"
const feature_flag_release = "🚩 Feature flag release"

function body(next_cursor, has_more, squadBody, bugOrDone) {
    let content = {
        "filter": {
            "and": [
                {
                    "property": "Stage",
                    "select": {
                        "equals": bugOrDone
                    }
                },
                {
                    "property": "Squad",
                    "multi_select": {
                        "contains": squadBody
                    }
                }
            ]
        }

    }

    let contentCursor = {
        "filter": {
            "and": [
                {
                    "property": "Stage",
                    "select": {
                        "equals": bugOrDone
                    }
                },
                {
                    "property": "Squad",
                    "multi_select": {
                        "contains": squadBody
                    }
                }
            ]
        },
        "start_cursor": next_cursor

    }

    if (has_more) {
        return contentCursor
    } else {
        return content
    }
}





async function requestFunction(squadBody, bugOrDone) {
    const resultTemp = await fetch(apiURL, request(body(next_cursor, result_hash_more, squadBody, bugOrDone)))
        .then(response => response.json())
        .then(response => { return (response) })
/*     console.log(resultTemp);
    console.log(` has_more in request : ${resultTemp.has_more} `) */

    if (resultTemp.has_more) {
        next_cursor = resultTemp.next_cursor
        result_hash_more = resultTemp.has_more
    } else {
        result_hash_more = resultTemp.has_more
    }


    return resultTemp;

}




var result_hash_more = false;
var next_cursor = ''
let workSquadDone = [];
let talentSquadDone = []
let uggSquadDone = []
let genomeSquadDone = []
let totalCards=[]

var SquadsDone = [workSquadDone, talentSquadDone, uggSquadDone, genomeSquadDone]

var result
var trigger = true
function trigger_hash_more(props) {
    if (props) {
        result_hash_more = true
        trigger = true
    } else {
        result_hash_more = false
    }
}


 const getTalentResults = async function (req, res){
    talentSquadDone = []
    let i = 0;
    trigger_hash_more(true);
    while (result_hash_more == true) {
        if (trigger) {
            trigger_hash_more(false)
            trigger = false
        }
        result = await requestFunction(listSquads[0], done)
        totalCards = [...totalCards, ...result.results]
        console.log(101,JSON.stringify(totalCards.length));
        talentSquadDone = [...talentSquadDone, result.results.length]
        i++
    }

    

    let filterCardsHigh = totalCards.filter(card =>{
        let priority = typeof card.properties["Priority"] == undefined? '' : card.properties["Priority"];
        if(priority!='' && typeof priority!='undefined'){
            return priority.select.name == "High"
        }
        
    })

    let filterCardsMedium = totalCards.filter(card =>{
        let priority = typeof card.properties["Priority"] == undefined? '' : card.properties["Priority"];
        if(priority!='' && typeof priority!='undefined'){
            return priority.select.name == "Medium"
        }
        
    })

/*    var filterResult = totalCards.filter((card)=>{
        let highPriorityRegExp = new RegExp('High', 'gi');  
        let priority = typeof card.properties["Priority"] == undefined? '' : card.properties["Priority"];
        if(priority!='' && typeof priority!='undefined'){
            return priority.select.name.match(highPriorityRegExp)
        }
        
    }).map(card =>{
        return card;
    }) */
    
    console.log(100,filterCardsHigh.length);
    console.log(222,totalCards.length);
   
    
    

    return res.status(200).json(totalCards.length)

}

    const saveDataTalent = async function(req, res){
    let datajson= await cardDone.results();
    console.log(datajson);
    res.status(200).json(JSON.parse(datajson))
}




module.exports = {
    getTalentResults,
    saveDataTalent
}


