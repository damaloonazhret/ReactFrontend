import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export type ReactFC<Props extends Record<PropertyKey, unknown> = {}> = FC<PropsWithChildren<Props>>;

const ThemeProvider: ReactFC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);


    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;