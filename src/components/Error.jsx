import errorImage from "../assets/error-image.png";

function Error({ errorMessage }) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={errorImage}
                alt="Error image"
                className="w-full sm:w-10/12"
            />
            <div className="text-lg text-center">{errorMessage}</div>
        </div>
    );
}

export default Error;
