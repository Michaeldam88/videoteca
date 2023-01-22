
import { Menu } from '../menu/menu';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Menu></Menu>            
            <main>{children}</main>
        </>
    );
}
