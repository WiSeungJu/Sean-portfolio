"use client";

import React, { createContext, useContext, useState } from 'react';

export type ViewMode = 'marketing' | 'po';

interface ViewModeContextType {
    mode: ViewMode;
    setMode: (mode: ViewMode) => void;
    toggleMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<ViewMode>('marketing'); // Default to Marketing view

    const toggleMode = () => {
        setMode((prev) => (prev === 'marketing' ? 'po' : 'marketing'));
    };

    return (
        <ViewModeContext.Provider value={{ mode, setMode, toggleMode }}>
            {children}
        </ViewModeContext.Provider>
    );
};

export const useViewMode = () => {
    const context = useContext(ViewModeContext);
    if (context === undefined) {
        throw new Error('useViewMode must be used within a ViewModeProvider');
    }
    return context;
};
