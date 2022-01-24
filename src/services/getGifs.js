const apiKey = 'ZQAsg96yoB0d1XX7OyJrcbS32xAaDRz7'

export default function getGifs({keyword } = {}) {

const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en` 

return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
    const {data = []} = response 
    const gifs = data.map(image => {
    //image.images.downsized.url
    const {images, title, id} = image
    const {url} = images.downsized
    return {title, id, url}
    })
    return gifs
 })
}
