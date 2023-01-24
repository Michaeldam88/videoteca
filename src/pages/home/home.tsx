export default function Home() {
    return (
        <main className="home">
            <div className="home__search-container">
                <span className="material-symbols-outlined">saved_search</span>
                <input
                    className="home__search"
                    type="text"
                    placeholder="Buscar"
                />
            </div>
            <span className="material-symbols-outlined">filter_alt</span>
        </main>
    );
}
