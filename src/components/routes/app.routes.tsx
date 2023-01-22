import { Navigate, Route, Routes } from 'react-router-dom';
import { Favorites } from '../../pages/favorites/favorites';
import { Home } from '../../pages/home/home';

export function AppRoutes() {
    return (
        <Routes>
            <Route path={''} element={<Home />}></Route>
            <Route path={'/home'} element={<Home />}></Route>
            <Route path={'/favorites'} element={<Favorites />}></Route>
            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
