export const testApiCall = () => {
    return fetch('http://localhost:5000/posts')
        .then(response => {
            return response.json();
    });
}