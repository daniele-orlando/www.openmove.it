export const Routes = {
    Home: {
        pattern: '/',
        link: () => '/',
    },
    Classes: {
        pattern: '/corsi',
        link: () => '/corsi',
    },
    Contacts: {
        pattern: '/contatti',
        link: () => '/contatti',
    },
} satisfies Record<string, {
    pattern: string,
    link(...args: Array<number | string>): string,
}>
