import { Search } from '../../components/search/search';

export default function Home() {
    return (
        <main className="home">
            <Search></Search>
            <h1 className="home__title">Peliculas Populares</h1>
            <ul className="movies-list">
                <li>
                    <img src="" alt="pelicula1" />
                    <div>
                        {' '}
                        <span className="material-symbols-outlined">star</span>
                    </div>
                    <h4>terror</h4>
                    <div>
                        <h2>Film Title</h2>
                        <h3>2012</h3>
                    </div>
                </li>
            </ul>
        </main>
    );
}
