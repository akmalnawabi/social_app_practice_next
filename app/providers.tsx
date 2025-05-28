"use client";

import { ThemeProvider } from "next-themes";


interface Providers {
    children: React.ReactNode
}

export default function Providers({ children }: Providers) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
                {children}
        </ThemeProvider>
    )
}