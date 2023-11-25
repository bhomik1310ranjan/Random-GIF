import components from "./components";

function App() {
    return (
        <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-[url('./assets/background.svg')] bg-no-repeat bg-cover bg-center">
            <div className="w-11/12 md:w-10/12 max-w-3xl mx-auto py-8 flex flex-col items-center gap-y-6">
                <h1 className="text-3xl tracking-wider px-5 py-1.5">
                    RANDOM GIFS
                </h1>
                <components.RandomGif />
                <components.GifByTag />
            </div>
        </div>
    );
}

export default App;
