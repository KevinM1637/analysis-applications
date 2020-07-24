module.exports = {
    title: 'Documentation for Aanlysis apps',
    description: 'Click the button below for the guide for the applications, or click the top right for the Design Guide.',



    themeConfig:{
        nav:[
            {text: 'Home', link: '/'},
            {text: 'User Guide', link: '/guide/'},
            {text: 'Design Guide', link: '/design/'},

            
        ],
        sidebar: {
            '/guide/': [
                '',
                'Daily',
                'Monthly Risk',
                'Yearly TPV',
            ],
            '/design/': [
                '',
                'Design Principle',
                'read and save',
            ],

        }
    }
}