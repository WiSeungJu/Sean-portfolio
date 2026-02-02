"use client";

import React from 'react';

import { useViewMode } from "@/context/ViewModeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { mode } = useViewMode();

    return (
        <div data-mode={mode} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
