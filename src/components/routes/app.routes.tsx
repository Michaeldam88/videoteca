import { Navigate, Route, Routes } from 'react-router-dom';
import { Agencias } from '../../pages/agencias/agencias';
import { EditarAgencia } from '../../pages/editarAgencia/editarAgencia';
import { EditarTarifa } from '../../pages/editarTarifa/editarTarifa';
import { Home } from '../../pages/home/home';
import { Login } from '../../pages/login/login';
import { NuevaAgencia } from '../../pages/nuevaAgencia/nuevaAgencia';
import { NuevaTarifa } from '../../pages/nuevaTarifa/nuevaTarifa';

export function AppRoutes() {
    return (
        <Routes>
            <Route path={''} element={<Home />}></Route>
            <Route path={'/home'} element={<Home />}></Route>
            <Route path={'/agencias'} element={<Agencias />}></Route>
            <Route path={'/nueva-agencia'} element={<NuevaAgencia />}></Route>
            <Route path={'/nueva-tarifa'} element={<NuevaTarifa />}></Route>
            <Route path={'/editar-agencia'} element={<EditarAgencia />}></Route>
            <Route path={'/editar-tarifa'} element={<EditarTarifa />}></Route>
            <Route path={'/login'} element={<Login/>}></Route>
            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
