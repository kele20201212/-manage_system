const menuList = [
    {
        title:'首页',
        key:'/admin/home',
    },{
        title:'Ui',
        key:'admin/ui',
        children:[
            {
                title:'按钮',
                key:'/admin/ui/buttons',
            },
            {
                title:'弹窗',
                key:'/admin/ui/modals',
            }
        ]
    }
];

export default menuList;