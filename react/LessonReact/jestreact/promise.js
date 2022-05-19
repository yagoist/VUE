const axios = require('axios')
const sortArr = (array) => {
    return array
            .filter(item =>Number.isInteger(item))
            .map(String)
} 

const getPromise = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const userId = response.data.map(user => user.id)
    return sortArr(userId)
}


module.exports =getPromise