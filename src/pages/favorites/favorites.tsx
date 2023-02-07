import TablePagination from '@mui/material/TablePagination';
import React, { useContext, useEffect, useState } from 'react';
import { DetailsModal } from '../../components/details-modal/details-modal';
import { FavoritesCard } from '../../components/favorites-card/favorites-card';
import { MovieContext } from '../../context/movie.context';
import LoadingIndicator from '../../loadingIndicator/loadingIndicator';

export default function Favorites() {
    const { user, favorites, getFavoritesList, favoritesList } =
        useContext(MovieContext);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);
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

    useEffect(() => {
        getFavoritesList(favorites.slice(page * 20, page * 20 + 20));  
        console.log("nada",favorites);      
    }, [favorites, page, getFavoritesList]);
    
    return (
        <main className="favorites">
            <div className="container flex-column">
                <h1 className="favorites__title">Tus favoritos</h1>

                {user ? (
                    favorites.length > 0 ? (
                        <ul className="movies-list">
                            {favoritesList
                                
                                .map((element) => (
                                    <FavoritesCard
                                        key={'favorites' + element.id}
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
                <LoadingIndicator />
                <TablePagination
                    rowsPerPageOptions={[{ label: '20', value: 20 }]}
                    labelRowsPerPage={'Peliculas por pagina'}
                    component="div"
                    count={favorites.length}
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
