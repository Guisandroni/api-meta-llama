

const llamaApi = require('./llama-api')

const text = 'Helo, how are you?';
const modelo = 'llama-base';

llamaApi.post('/language-modeling/generate',{
    text:text,
    model:model,
    max_tokens:100,
}).then(response =>{
    console.error(error)
})

