"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/components/sections/sections.module.css';

// Type mapping for params in Next.js 15+ (can be async)
// For client component usage with params, we need to be careful.
// Actually, in Next.js App Router, page props are async by default in server components options. 
// But since we use client context for language, let's make this a client component that receives params.

// NOTE: In Next.js 13/14/15 app dir, params is a Promise in layout but object in page depending on version.
// Let's assume standard { params: { id: string } } for now, but handle potential await if strictly typed as Promise.

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const { t } = useLanguage();
    const project = t.projects.find(p => p.id === resolvedParams.id);

    if (!project) {
        return notFound();
    }

    return (
        <main className={`container ${styles.section}`} style={{ paddingTop: '10rem', minHeight: '100vh', display: 'block' }}>
            <Link href="/" className={styles.buttonSecondary} style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                ← Back to Home
            </Link>

            <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                <header style={{ marginBottom: '4rem', borderBottom: '1px solid hsla(var(--border))', paddingBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em' }}>{project.title}</h1>
                        {/* Optional: Add external link icon if needed here */}
                    </div>

                    <p style={{ fontSize: '1.5rem', color: 'hsl(var(--primary))', fontWeight: 600, marginBottom: '0.5rem' }}>
                        {project.role}
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'hsl(var(--muted-foreground))', fontFamily: 'var(--font-geist-mono)' }}>
                        {project.period}
                    </p>
                </header>

                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Project Summary</h2>
                    <div style={{ padding: '1.5rem', background: 'hsla(var(--card))', borderRadius: '0.75rem', border: '1px solid hsla(var(--border))' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 500 }}>
                            &quot;{project.summary}&quot;
                        </p>
                    </div>
                </section>

                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Key Achievements</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {project.description.map((desc: string, i: number) => (
                            <li key={i} style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '1.1rem', lineHeight: 1.7, color: 'hsl(var(--muted-foreground))' }}>
                                <span style={{ position: 'absolute', left: 0, top: '0.6rem', width: '6px', height: '6px', borderRadius: '50%', background: 'hsl(var(--primary))' }}></span>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Tech Stack & Tools</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {project.tech_stack.map((tag: string, i: number) => (
                            <span key={i} style={{
                                padding: '0.5rem 1rem',
                                background: 'hsla(var(--primary) / 0.1)',
                                color: 'hsl(var(--primary))',
                                borderRadius: '999px',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                fontFamily: 'var(--font-geist-mono)'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
