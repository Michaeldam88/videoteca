import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context/movie.context';

export function TabsMenu() {
    const [value, setValue] = useState(0);

    const { activeOperation, setActiveOperation } = useContext(MovieContext);

    useEffect(() => {
        if (activeOperation === 'popular') setValue(0);
    }, [activeOperation]);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        if (newValue === 1) setActiveOperation('favorites');
        setValue(newValue);
    };

    return (
        <div className="container">
            <nav className="tabs">
                <Tabs
                    value={value}
                    variant="fullWidth"
                    onChange={handleChange}
                    centered
                >
                    <Tab
                        label={
                            <span
                                role="button"
                                className="tabs__movie material-symbols-outlined"
                            >
                                movie_filter
                            </span>
                        }
                        to="/home"
                        component={Link}
                    />
                    <Tab
                        label={
                            <span
                                role="button"
                                className="tabs__star material-symbols-outlined"
                            >
                                hotel_class
                            </span>
                        }
                        to="/favorites"
                        component={Link}
                    />
                </Tabs>
            </nav>
        </div>
    );
}
