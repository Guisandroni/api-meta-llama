const axios = require('axios')

const apiEndpoint = ('https://api.llama.dev/model')

const apiKey = ('')

const llamaApi = axios.create({
    baseURL:apiEndpoint,
    headers:{
        'authorization':`Bearer ${apiKey}`,
        'content-type':'application/json',

    },
})

module.exports = llamaApi;

