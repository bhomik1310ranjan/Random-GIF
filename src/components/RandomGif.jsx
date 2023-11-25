import useGif from "../hooks";
import components from "./index.js";

function RandomGif() {
    const [gif, getGif, loading, error] = useGif();

    return (
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md flex flex-col items-center gap-y-5 p-3 md:p-6">
            <h2 className="font-medium text-xl tracking-wider">Random GIF</h2>
            {loading ? (
                <components.Loader />
            ) : error ? (
                <components.Error errorMessage={error} />
            ) : (
                <img src={gif} alt="Random GIF" className="w-full rounded-md" />
            )}
            <button
                type="button"
                onClick={getGif}
                className="w-full text-lg text-white tracking-wider bg-violetBlue border border-violetBlue rounded-md hover:text-black hover:bg-transparent transition-colors duration-300 px-4 py-1.5"
            >
                Generate
            </button>
        </div>
    );
}

export default RandomGif;
