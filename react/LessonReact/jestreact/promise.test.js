const getPromise = require('./promise')
const axios = require('axios')

jest.mock('axios')

describe('getPromise', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                        {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "address": {
                          "street": "Kulas Light",
                          "suite": "Apt. 556",
                          "city": "Gwenborough",
                          "zipcode": "92998-3874",
                          "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                          }
                        },
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org",
                        "company": {
                          "name": "Romaguera-Crona",
                          "catchPhrase": "Multi-layered client-server neural-net",
                          "bs": "harness real-time e-markets"
                        }
                      },
                      {
                        "id": 2,
                        "name": "Ervin Howell",
                        "username": "Antonette",
                        "email": "Shanna@melissa.tv",
                        "address": {
                          "street": "Victor Plains",
                          "suite": "Suite 879",
                          "city": "Wisokyburgh",
                          "zipcode": "90566-7771",
                          "geo": {
                            "lat": "-43.9509",
                            "lng": "-34.4618"
                          }
                        },
                        "phone": "010-692-6593 x09125",
                        "website": "anastasia.net",
                        "company": {
                          "name": "Deckow-Crist",
                          "catchPhrase": "Proactive didactic contingency",
                          "bs": "synergize scalable supply-chains"
                        }
                      },
                      {
                        "id": 3,
                        "name": "Clementine Bauch",
                        "username": "Samantha",
                        "email": "Nathan@yesenia.net",
                        "address": {
                          "street": "Douglas Extension",
                          "suite": "Suite 847",
                          "city": "McKenziehaven",
                          "zipcode": "59590-4157",
                          "geo": {
                            "lat": "-68.6102",
                            "lng": "-47.0653"
                          }
                        }
                }
            ]
        }
    })
    test('çorrect', async () => {
        axios.get.mockReturnValue(response)
        const data = await getPromise()
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toEqual(['1', '2', '3'])
        expect(data).toMatchSnapshot()
    })
    

})
