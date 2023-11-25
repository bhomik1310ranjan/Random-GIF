function Loader() {
    return (
        <div className="flex flex-col items-center gap-y-2 py-2.5">
            <div className="w-20 aspect-square rounded-full border-8 border-t-violetBlue border-r-violetBlue border-l-violetBlue border-b-hanBlue animate-spin"></div>
            <div className="text-lg tracking-wider">Loading...</div>
        </div>
    );
}

export default Loader;
