export default function Home() {
    return (
        <main className="home">
            <div className="home__search-container">
                <div className="home__search-box">
                    <span className="material-symbols-outlined">
                        saved_search
                    </span>
                    <input
                        className="home__search"
                        type="text"
                        placeholder="Buscar"
                    />
                </div>
                <span className="home__filter material-symbols-outlined">
                    filter_alt
                </span>
            </div>
        </main>
    );
}
