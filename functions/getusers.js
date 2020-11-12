const axios = require('axios');
exports.handler = function (event, context, callback) {
    const API_URL = 'https://api.github.com/users';
    const API_CLIENT_ID = '1539e13a1b4b8bd65d6d';
    const API_CLIENT_SECRET = '';
    const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;
    // Send user response
    const send = body => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        });
    }
    // Perform API call
    const getUsers = () => {
        axios.get(URL)
            .then(res => send(res.data))
            .catch(err => send(err));
    }
    // Make sure methode is GET
    if (event.httpMethode == 'GET') {
        // RUN
        getUsers();
    }
    // callback(null, {
    //     statusCode: 200,
    //     body: 'Hello World'
    // });
}