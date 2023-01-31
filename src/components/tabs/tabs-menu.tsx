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
                            <span className="tabs__movie material-symbols-outlined">
                                movie_filter
                            </span>
                        }
                        to="/home"
                        component={Link}
                    />
                    <Tab
                        label={
                            <span className="tabs__star material-symbols-outlined">
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
