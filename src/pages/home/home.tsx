import TablePagination from '@mui/material/TablePagination';
import React, { useContext, useEffect, useState } from 'react';
import { DetailsModal } from '../../components/details-modal/details-modal';
import { FilterModal } from '../../components/filter-modal/filter-modal';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Search } from '../../components/search/search';
import { MovieContext } from '../../context/movie.context';
import LoadingIndicator from '../../components/loadingIndicator/loadingIndicator';

export default function Home() {
    
    const { movies, filterModal, page, setPage, totPages } =
        useContext(MovieContext);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };    

    const [filter, setFilter] = useState('default');
    const [idDetail, setIdDetails] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);    
    
    return (
        <main className="home">
            <div className="container flex-column">
                <Search filter={filter}></Search>
                <h1 className="home__title">
                    {filter === 'default'
                        ? 'Peliculas Populares'
                        : `Resultado de ${filter}`}
                </h1>

                {movies.length > 0 ? (
                    <ul className="movies-list">
                        {movies.map((element) => (
                            <MovieCard
                                key={element.id}
                                movie={element}
                                setIdDetails={setIdDetails}
                            />
                        ))}
                    </ul>
                ) : (
                    <p className="home__no-results">Sin resultados</p>
                )}

                <LoadingIndicator />

                <TablePagination
                    rowsPerPageOptions={[{ label: '20', value: 20 }]}
                    labelRowsPerPage={'Peliculas por pagina'}
                    component="div"
                    count={totPages}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={20}                    
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
