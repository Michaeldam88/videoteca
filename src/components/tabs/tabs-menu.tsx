import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import { Link } from 'react-router-dom';

export function TabsMenu() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <nav className="tabs">
            <ul className="tabs__list">
                <li className="tabs__element">
                    <Link to={'/home'}>{'Videoteca'}</Link>
                </li>

                <li className="tabs__element">
                    <Link to={'/favorites'}>{'Favoritos'}</Link>
                </li>
            </ul>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </nav>
    );
}
