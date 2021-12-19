const monthName = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

let date = new Date()
// const {user} = JSON.parse(localStorage.getItem('auth'))

const NavData = [
    {
        navMenuText: 'Settings',
        title: 'Settings',
        icon: "fas fa-cog fa-spin clickable__setting__icon",
        subNav: [
            {
                navMenuText: 'Logo setting',
                icon: "fas fa-cog",
                title: 'Logo setting',
                path:'/settings/logo-setting'
            },
            {
                navMenuText: 'Footer setting',
                icon: "fas fa-cog",
                title: 'Logo setting',
                path:'/settings/footer-setting'
            },
            {
                navMenuText: 'Color setting',
                icon: "fas fa-cog",
                title: 'Footer setting',
                path:'/settings/color-theme'
            },
            {
                navMenuText: 'Logo setting',
                icon: "fas fa-cog",
                title: 'Logo setting',
                path:'/settings/logo-settings'
            }
        ]
    },
    {
        navMenuText: 'Home',
        title: 'Home',
        icon: "fas fa-home",
        path:'/'
    },
    {
        navMenuText: 'Employee',
        title: 'Employee',
        icon: "fas fa-users",
        nav_info_class: "nav-info-icon employee",
        path:'/employee-list'
    },
    {
        navMenuText: 'Clients',
        title: 'Clients',
        icon: "fas fa-users",
        path:'/all-clients'
    },
    {
        navMenuText: 'Stock',
        title: 'Stock',
        icon: "fas fa-box-open clickable__icon",
        subNav: [
            {
                navMenuText: "Stock Status",
                icon: "fas fa-box-open",
                title: 'Stock Status',
                path:'/stock'
            },
            {
                navMenuText: "Deactivate Products",
                icon: "fas fa-box-open",
                title: 'Deactivate Products',
                path:'/deactivate-products'
            },
            {
                navMenuText: "Import Invoice",
                icon: "fas fa-file-invoice-dollar",
                title: 'Import Invoice',
                path:"/all-import-invoices"
            },
            {
                navMenuText: "Company",
                icon: "fas fa-building",
                title: 'Company',
                path:"/supplier-companies"
            },
            {
                navMenuText: "Category",
                icon: "far fa-arrow-alt-circle-right",
                title: 'Category',
                path:'/product-categories'
            }
        ]
    },
    {
        navMenuText: 'Sales',
        icon: "fas fa-dollar-sign clickable__icon",
        title: 'Sales info',
        subNav: [
            {
                navMenuText: `Sales in ${date.getFullYear()}`,
                icon: "fas fa-dollar-sign",
                title: `Sales in ${date.getFullYear()}`,
                path:'/sales/current-year-sales'
            },
            {
                navMenuText: `Sales in ${monthName[date.getMonth()]}`,
                icon: "fas fa-dollar-sign",
                title: `Sales in ${monthName[date.getMonth()]}`,
                path: `/sales/${monthName[date.getMonth()]}/${date.getFullYear()}`
            },
            {
                navMenuText: "Today's Sales",
                icon: "fas fa-dollar-sign",
                title: "Today's Sales",
                path: `/sales/today`
            },
            {
                navMenuText: "Today's Cash Sales",
                icon: "fas fa-dollar-sign",
                title: "Today's Cash Sales",
                path:'/sales/cash-sales'
            },
            {
                navMenuText: "Today's Due Sales",
                icon: "fas fa-dollar-sign",
                title: "Today's Due Sales",
                path: "/sales/today's-due-sales"
            }
        ]
    },
    {
        navMenuText: 'Expenses',
        icon: "fas fa-dollar-sign clickable__icon",
        title: 'Expenses',
        subNav: [
            {
                navMenuText: `Expenses in ${date.getFullYear()}`,
                icon: "fas fa-dollar-sign",
                title: `Expenses in ${date.getFullYear()}`,
                path:'/expenses/current-year-expenses'
            },
            {
                navMenuText: `Expenses in ${monthName[date.getMonth()]}`,
                icon: "fas fa-dollar-sign",
                title: `Expenses in ${monthName[date.getMonth()]}`,
                path:`/expenses/expenses/${monthName[date.getMonth()]}/${date.getFullYear()}`
            },
            {
                navMenuText: "Today's Expenses",
                icon: "fas fa-dollar-sign",
                title:  "Today's Expenses",
                path:"/expenses/today's expenses"
            }
        ]
    },
    {
        navMenuText: 'Income',
        title: 'Income',
        icon: "fas fa-dollar-sign",
        path:'/income/current-year-income',
    },
    {
        navMenuText: 'Task List',
        title: 'Task List',
        icon: "fas fa-clock",
        path:'/task-list'
    },
    {
        navMenuText: 'Messages',
        title: 'Messages',
        nav_info_class: "nav-info-icon message",
        icon: "fas fa-envelope",
        path:'/messages'
    },
    {
        navMenuText: 'Mail',
        title: 'Mail',
        icon: "fas fa-envelope-open-text",
        nav_info_class: "nav-info-icon employee",
        path:'/mail',
        subNav: [
            {
                navMenuText: 'Sent',
                icon: "fas fa-paper-plane",
                title:  "Sent",
                path:'/mail/sent'
            },
            {
                navMenuText: 'Drafts',
                icon: "fas fa-file-download",
                title:  "Drafts",
                path: '/mail/drafts'
            }
        ]
        
    },
    {
        navMenuText: 'Notifications',
        title: 'Notifications',
        icon: "fas fa-bell",
        nav_info_class: "nav-info-icon message",
        path:'/notifications'
    },
    {
        navMenuText: 'Profile',
        title: 'Profile',
        icon: "fas fa-address-card",
        path: `/profile/`
    },

]
export default NavData