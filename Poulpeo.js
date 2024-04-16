Array.prototype.diff = function (arr) {
    return this.filter(obj1 => !arr.some(obj2 => JSON.stringify(obj1) === JSON.stringify(obj2)));
}

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

const {JSDOM} = require("jsdom");
const {WebhookClient, EmbedBuilder} = require('discord.js');

let memory = null;
let sent = [];
//const webhook = new WebhookClient({url: "webhook url"});
const embed = new EmbedBuilder()
    .setFooter({
        text: "SpacePlug Monitor",
        iconURL: "https://media.discordapp.net/attachments/1213437304379539516/1213506627282411520/Logo_SpacePlug_Rouge.png"
    })
    .setColor(0xF81944)
    .setAuthor({name: "Poulpeo Promotion Code"});

setInterval(async () => {
    let request = 'ASOS'; // a changer avk la request du bot
    const response = await fetch(`https://www.poulpeo.com/async/search/?q=${request}`);
    const jsonString = JSON.parse(await response.text());
    if(!(jsonString[0] === undefined))
    {
        let url = jsonString[0]['merchant_url'];
        let merchant_page = await fetch(url)
        const parsedHTML = new JSDOM(await merchant_page.text());
        let jsonResult = parsedHTML.window.document.querySelectorAll("main.-grid");
        await sleep(100000);
    }
    const products = [];


}, 10);