import TablePagination from '@mui/material/TablePagination';
import React, { useContext, useEffect } from 'react';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Search } from '../../components/search/search';
import { MovieContext } from '../../context/movie.context';

export default function Home() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const { getPopularMovies, movies } = useContext(MovieContext);

    useEffect(() => {
        getPopularMovies();
    }, [getPopularMovies]);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <main className="home">
            <div className="container flex-column">
                <Search></Search>
                <h1 className="home__title">Peliculas Populares</h1>
                <ul className="movies-list">
                    {movies.map((element) => (
                        <MovieCard key={element.id} movie={element} />
                    ))}
                </ul>

                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                {/* {modal ? (
                <div className="modal">
                    {modal}
                </div>
            ) : null} */}
            </div>
        </main>
    );
}
