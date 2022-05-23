const { json } = require('express/lib/response');
const fetch = require('node-fetch');
const URLrequest='https://torre-counting-cards-in-done.herokuapp.com/count';
let squads = ['Talent', 'Work'];
const squadsToFetch=['Talent','Genome','Work', 'UGG', 'Platform', 'Algorithms','Applicants']
const urlToFetch = [`${URLrequest}/${squadsToFetch[0]}`, `${URLrequest}/${squadsToFetch[1]}`,
                     `${URLrequest}/${squadsToFetch[2]}`, `${URLrequest}/${squadsToFetch[3]}`,
                     `${URLrequest}/${squadsToFetch[4]}`, `${URLrequest}/${squadsToFetch[5]}`,
                     `${URLrequest}/${squadsToFetch[6]}`]

let squadsResult = [];
const returningAllSquads = async (req, res) =>{
    for(const squad of squads){
        let endpointSquadResponse = await fetch(`${URLrequest}/${squad}`)
                .then(res=>res.json())
                .then(res=> JSON.parse(res))

        squadsResult.push(endpointSquadResponse['cardsCounting']);
                
    }
    res.status(200).json(JSON.stringify(squadsResult[0]));
    squadsResult=[];
}


const fetchAllSquads = async(req, res)=>{
    let jsonArray = await Promise.all(urlToFetch.map(url => fetch(url)))
    .then(async (res) => {
        return Promise.all(
            res.map(async (data) =>{
                let typeJson= await data.json();
                console.log(111,JSON.parse(typeJson));
                return JSON.parse(typeJson);
            })
        )
    })

    let tempArraySquads = JSON.parse(JSON.stringify(jsonArray));

    let allSquadsrightFormat = [];
    const deleteInitialCopyCardsCounting= tempArraySquads.map(card =>{
      allSquadsrightFormat=[...allSquadsrightFormat, ...card.cardsCounting]
    });
  

    console.log(allSquadsrightFormat);
    let jsonResponse= allSquadsrightFormat;
    res.json(JSON.stringify(allSquadsrightFormat));

    const apiWebhookZapier = 'https://hooks.zapier.com/hooks/catch/3321237/bf9f8se/'
    const triggerZapier = await fetch(apiWebhookZapier, request(jsonResponse))
    console.log(triggerZapier)
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


module.exports={returningAllSquads,fetchAllSquads};