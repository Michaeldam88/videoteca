import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Favorites = lazy(() => import('../../pages/favorites/favorites'));
const Home = lazy(() => import('../../pages/home/home'));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path={''} element={<Home />}></Route>
                <Route path={'/home'} element={<Home />}></Route>
                <Route path={'/favorites'} element={<Favorites />}></Route>
                <Route
                    path={'*'}
                    element={<Navigate to="" replace></Navigate>}
                ></Route>
            </Routes>
        </Suspense>
    );
}
