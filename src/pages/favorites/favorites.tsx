import TablePagination from '@mui/material/TablePagination';
import React, { useContext } from 'react';
import { MovieContext } from '../../context/movie.context';

export default function Favorites() {
    const { user } = useContext(MovieContext);

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
        <main className="favorites">
            <div className="container flex-column">
                <h1 className="favorites__title">Tus favoritos</h1>
                {user ? (
                    <ul className="movies-list">
                        <li>Pelis</li>
                    </ul>
                ) : (
                    <ul className="movies-list">
                        <li>
                            <p className="favorites__no-logged">
                                Haz login para visualizar tus favoritos
                            </p>
                        </li>
                    </ul>
                )}

                <TablePagination
                    rowsPerPageOptions={[{ label: '10', value: 10 }]}
                    labelRowsPerPage={'Peliculas por pagina'}
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </main>
    );
}
