export const menuPages: page[] = [
    {
        icon: 'home',
        name: 'Home',
        route: 'home'
    },
    {
        icon: 'phone',
        name: 'Phone',
        route: ""
    },
    {
        icon: 'info',
        name: 'Info',
        route: ''
    }
]

interface page {
    icon: string,
    name: string,
    route: string,
    subpages?: page[]
}