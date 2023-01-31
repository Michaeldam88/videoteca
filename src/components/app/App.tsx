import { MovieContextProvider } from '../../context/movie.provider';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    return (
        <>
            <Layout>
                <MovieContextProvider>
                    <AppRoutes></AppRoutes>
                </MovieContextProvider>
            </Layout>
        </>
    );
}
