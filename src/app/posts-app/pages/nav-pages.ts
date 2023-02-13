export const navPages: page[] = [
    {
        icon: 'home',
        name: 'Home',
        route: 'home'
    },
    {
        icon: 'phone',
        name: 'Phone',
        route: 'phone'
    },
    {
        icon: 'info',
        name: 'Info',
        route: 'info'
    }
]

interface page {
    icon: string,
    name: string,
    route: string,
    subpages?: page[]
}