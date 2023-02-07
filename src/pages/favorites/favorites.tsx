import TablePagination from '@mui/material/TablePagination';
import React, { useContext, useState } from 'react';
import { DetailsModal } from '../../components/details-modal/details-modal';
import { FavoritesCard } from '../../components/favorites-card/favorites-card';
import { MovieContext } from '../../context/movie.context';

export default function Favorites() {
    const { user, favorites, getDetails, details} = useContext(MovieContext);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [idDetail, setIdDetails] = useState<number | null>(null);

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

    const moviesList = favorites.map((element) => {    
        //no le puedo activar porque va en loop    
        //getDetails(element)
        return details;
    });

    console.log(moviesList);

    return (
        <main className="favorites">
            <div className="container flex-column">
                <h1 className="favorites__title">Tus favoritos</h1>

                {user ? (
                    favorites.length > 1 ? (
                        <ul className="movies-list">
                            {moviesList.map((element) => (
                                <FavoritesCard
                                    key={"favorites" + element.id}
                                    movie={element}
                                    setIdDetails={setIdDetails}
                                />
                            ))}
                        </ul>
                    ) : (
                        <p className="home__no-results">
                            ¡Todavía no tienes películas favoritas!
                        </p>
                    )
                ) : (
                    <p className="favorites__no-logged">
                        Haz login para visualizar tus favoritos
                    </p>
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
