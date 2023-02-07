import { MovieContextProvider } from '../../context/movie.provider';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    return (
        <>
            <MovieContextProvider>
                <Layout>
                    <AppRoutes></AppRoutes>
                </Layout>
            </MovieContextProvider>
        </>
    );
}
