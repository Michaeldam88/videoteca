import TablePagination from '@mui/material/TablePagination';
import React, { useContext, useEffect, useState } from 'react';
import { DetailsModal } from '../../components/details-modal/details-modal';
import { FavoritesCard } from '../../components/favorites-card/favorites-card';
import { MovieContext } from '../../context/movie.context';
import LoadingIndicator from '../../components/loadingIndicator/loadingIndicator';

export default function Favorites() {
    const { user, favorites, getFavoritesList, favoritesList } =
        useContext(MovieContext);
    const [page, setPage] = React.useState(0);    
    const [idDetail, setIdDetails] = useState<number | null>(null);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };    

    useEffect(() => {
        getFavoritesList(favorites.slice(page * 20, page * 20 + 20));
    }, [favorites, page, getFavoritesList]);

    const withFavorites =
        favorites.length > 0 ? (
            <ul className="movies-list">
                {favoritesList.map((element) => (
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
        );

    return (
        <main className="favorites">
            <div className="container flex-column">
                <h1 className="favorites__title">Tus favoritos</h1>

                {user ? (
                    withFavorites
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
                    rowsPerPage={20}                    
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
