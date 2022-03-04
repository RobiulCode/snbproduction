const data = [
    {
        name : 'Active Energy',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1796246368',
        section: 'biscuit'
    },
    {
        name : 'Valencia Orange',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1289801426',
        section: 'biscuit'
    },
    {
        name : 'Best Choice',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1485188390',
        section: 'biscuit'
    },
    {
        name : 'Lexus',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1212650148',
        section: 'biscuit'
    },
    {
        name : 'Elachi',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1652348144',
        section: 'biscuit'
    },
    {
        name : 'Fruit Plus Cream',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=216415487',
        section: 'biscuit'
    },
    {
        name : 'Choco Plus Cream',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1802407999',
        section: 'biscuit'
    },
    {
        name : 'Wafer Vanilla',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1326746933',
        section: 'wafer'
    },
    {
        name : 'Wafer Chocolate',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=63503516',
        section: 'wafer'
    },
    {
        name : 'Tiffin Cake Vanilla',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=650008524',
        section: 'cake'
    },
    {
        name : 'Tiffin cake Chocolate',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1701156480',
        section: 'cake'
    },
    {
        name : 'Dry Cake Mini',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1631284518',
        section : 'bakery'
    },
    {
        name : 'Dry cake Family',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=2042393583',
        section : 'bakery'
    },
    {
        name : 'Special Toast',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=69519004',
        section : 'bakery'
        
    },
    {
        name : 'Butter Toast',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=299353968',
        section : 'bakery'
    },
    {
        name : 'Milk Cookies',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1236438375',
        section : 'bakery'
    },
    {
        name : 'Chocolate Cookies',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=847390813',
        section : 'bakery'
    },
    {
        name : 'Butter Cookies',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=305539889',
        section : 'bakery'
    },
    {
        name : 'Special Chanachur',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1560042909',
        section : 'snacks'
    },
    {
        name : 'Jhal Chanachur',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=990588719',
        section : 'snacks'
    },
    {
        name : 'Motor Vaja',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=992071254',
        section : 'snacks'
    },
    {
        name : 'Dal Vaja',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1323268767',
        section : 'snacks'
    },
    {
        name : 'Lachcha Semai',
        url : 'https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=1832145041',
        section:'lachcha'
    }
]
export default data;