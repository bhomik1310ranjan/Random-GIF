import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

function useGif(tag) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${config.giphyAPIKey}`;

    const [gif, setGif] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getGif = async (tag) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(tag ? `${url}&tag=${tag}` : url);
            setGif(response.data.data.images.downsized_large.url);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getGif(tag);
    }, []);

    return [gif, getGif, loading, error];
}

export default useGif;
