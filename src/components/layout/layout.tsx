import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Tabs } from '../tabs/tabs';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <Tabs></Tabs>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
