import {config} from "dotenv"
config()
import {Configuration, OpenAIApi} from "openai"




function gptRequest(prompt, model="gpt-3.5-turbo"){
    const openai = new OpenAIApi(new Configuration({
        apiKey: process.env.API_KEY
    
    }))
    
    openai.createChatCompletion({
        model: model,
        messages: [{ role:"user", content: prompt}]
    }).then(res => {
        console.log(res)
        const response= res.data.choices[0].message.content
        console.log(response)
        return response
    })
}

function gptFake(){
    console.log(RANDOM_WORDS)
    const position1 = Math.floor(Math.random()*process.env.RANDOM_WORDS.length)
    const position2 = Math.floor(Math.random()*(process.env.RANDOM_WORDS.length-1))+1;
    if(position1==position2) position2=position1-1
    return [process.env.RANDOM_WORDS[position1], process.env.RANDOM_WORDS[position2]]
}

export {gptFake}