import axios from "axios"
import config from "../Config/Config.js";

/*
    API (Unsplash) que gera as imagens aleatórias
*/
const getImages = async () => {
    const page = Math.floor(Math.random() * 20 + 1);

    const urlImages = config.url + `search/photos?page=${page}&query=Landscape&client_id=${config.clientKey}`;
    
    const res = await axios.get(urlImages);
    const photos = res.data.results.map((image) => ({
        id: image.id,
        alt: image.alt_description,
        thumb: image.urls.thumb,
        url: image.urls.full,
        user: {
            username: image.user.username,
            link: image.user.links.html
        }
    }));

    return photos;
};

export {getImages};