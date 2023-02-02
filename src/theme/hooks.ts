import {onCleanup} from 'solid-js'

export function createThemePreference() {
    const prefersColorSchemeDarkQuery = window.matchMedia('(prefers-color-scheme: dark)')

    function onThemeChange(event: Pick<MediaQueryListEvent, 'matches'>) {
        const isDark = event.matches
        const theme = isDark ? 'theme-dark' : 'theme-light'
        document.documentElement.classList.remove('theme-light', 'theme-dark')
        document.documentElement.classList.add('std', theme, 'std-background-theme')
    }

    onThemeChange(prefersColorSchemeDarkQuery)

    prefersColorSchemeDarkQuery.addEventListener('change', onThemeChange)

    onCleanup(() => {
        prefersColorSchemeDarkQuery.removeEventListener('change', onThemeChange)
    })
}
