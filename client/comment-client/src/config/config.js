const config = {
    API_URL: 'http://localhost:3000/',
    getComments_QUERY: 'comments',
    addComment_QUERY: 'comments/add',
    getNewestComment_QUERY: 'comments/getNewest',
    POSTconfig: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    },
    GETconfig: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        method: 'GET',
        mode: 'no-cors',
        withCredentials: true,
        credentials: 'same-origin'
    },
    gravatarURL: 'https://www.gravatar.com/avatar/',
    imageSize: '50'
}

export default config;