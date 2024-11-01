import { cookies } from 'next/headers'
import { cache } from "react";

const hasHighContrast = cache(() => {
    const cookieStore = cookies()
    return false
});

export function getYakThemeContext() {
    return {
        highContrast: hasHighContrast()
    }
}

declare module "next-yak" {
    export interface YakTheme extends ReturnType<typeof getYakThemeContext> { }
}