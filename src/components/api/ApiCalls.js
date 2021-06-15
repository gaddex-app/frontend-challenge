import axios from 'axios';
export async function getNewReleased(token) {
    return axios.get(`https://api.spotify.com/v1/browse/new-releases`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    })
}
export async function getFeatured(token) {
    return axios.get(`https://api.spotify.com/v1/browse/featured-playlists`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    })
}
export async function getCategories(token) {
    return axios.get(`https://api.spotify.com/v1/browse/categories`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    })
}
