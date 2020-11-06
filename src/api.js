export const MyAPI = { 
    async getAuthors() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    },
    async getPosts(currentUser) {
        const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/?userID=${currentUser}`);
        const posts = await response2.json();
        return posts;
    }
}
    