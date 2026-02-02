"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, Translation } from '@/data/translations';

interface LanguageContextType {
    language: Language;
    t: Translation;
    toggleLanguage: () => void;
    playSfx: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('ko'); // Default to Korean

    useEffect(() => {
        // Check localStorage or browser preference if needed
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'ko' || savedLang === 'en')) {
            setLanguage(savedLang);
        }
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const newLang = prev === 'ko' ? 'en' : 'ko';
            localStorage.setItem('language', newLang);
            return newLang;
        });
    };

    const playSfx = () => {
        // Placeholder for click sound effect if desired
    }

    const value = {
        language,
        t: translations[language],
        toggleLanguage,
        playSfx
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
