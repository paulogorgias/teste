export const navigation = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
        variant: 'info',
        text: 'NEW'
        }
    },
    {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
        {
        name: 'Login',
        url: '/pages/login',
        icon: 'icon-star'
    }]}
];
