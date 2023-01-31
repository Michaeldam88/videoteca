import TablePagination from '@mui/material/TablePagination';
import React, { useContext, useEffect, useState } from 'react';
import { DetailsModal } from '../../components/details-modal/details-modal';
import { FilterModal } from '../../components/filter-modal/filter-modal';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Search } from '../../components/search/search';
import { MovieContext } from '../../context/movie.context';

export default function Home() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const { getPopularMovies, movies, filterModal } = useContext(MovieContext);

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

    const [filter, setFilter] = useState('default');
    const [idDetail, setIdDetails] = useState<number | null>(null);

    return (
        <main className="home">
            <div className="container flex-column">
                <Search filter={filter}></Search>
                <h1 className="home__title">
                    {filter === 'default'
                        ? 'Peliculas Populares'
                        : `Resultado de ${filter}`}
                </h1>
                <ul className="movies-list">
                    {movies.map((element) => (
                        <MovieCard
                            key={element.id}
                            movie={element}
                            setIdDetails={setIdDetails}
                        />
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

                {filterModal === true ? (
                    <div className="modal">
                        <FilterModal filter={setFilter}></FilterModal>
                    </div>
                ) : null}

                {idDetail !== null ? (
                    <div className="modal">
                        <DetailsModal
                            id={idDetail}
                            setIdDetails={setIdDetails}
                        ></DetailsModal>
                    </div>
                ) : null}
            </div>
        </main>
    );
}
