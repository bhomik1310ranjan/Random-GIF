import { useState } from "react";
import useGif from "../hooks";
import components from "./index.js";

function GifByTag() {
    const [tag, setTag] = useState("car");
    const [gif, getGif, loading, error] = useGif(tag);

    return (
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md flex flex-col items-center gap-y-5 p-3 md:p-6">
            <h2 className="font-medium text-xl tracking-wider">Search GIF</h2>
            {loading ? (
                <components.Loader />
            ) : error ? (
                <components.Error errorMessage={error} />
            ) : (
                <img
                    src={gif}
                    alt={`${tag} GIF`}
                    className="w-full rounded-md"
                />
            )}
            <input
                type="text"
                placeholder="Search GIF"
                value={tag}
                onChange={(event) => setTag(event.target.value)}
                className="w-full text-lg text-black border border-violetBlue rounded-md focus:outline-none px-3 py-1.5"
            />
            <button
                type="button"
                onClick={() => getGif(tag)}
                className="w-full text-lg text-white tracking-wider bg-violetBlue border border-violetBlue rounded-md hover:text-black hover:bg-transparent transition-colors duration-300 px-4 py-1.5"
            >
                Generate
            </button>
        </div>
    );
}

export default GifByTag;
