import TablePagination from '@mui/material/TablePagination';
import React from 'react';
import { DetailsModal } from '../../components/details-modal/details-modal';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Search } from '../../components/search/search';

export default function Home() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
            <Search></Search>
            <h1 className="home__title">Peliculas Populares</h1>
            <ul className="movies-list">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </ul>

            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {/* <div className="modal">
                <DetailsModal />
            </div> */}
            
        </main>
    );
}
