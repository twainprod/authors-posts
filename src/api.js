const { default: Axios } = require("axios");

const instance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const myAPI = {
    getAuthors() {
        return instance.get('users');
    },
    getPosts(currentUser) {
        return instance.get(`posts/?userId=${currentUser}`);
    }
}