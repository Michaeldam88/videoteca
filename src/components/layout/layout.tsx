import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { TabsMenu } from '../tabs/tabs-menu';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <TabsMenu></TabsMenu>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
