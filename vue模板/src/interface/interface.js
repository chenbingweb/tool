//接口配置文件
let _interface = {
    //用户登录 ok
    login: '/user/get-access-token',
    //获取验证码 ok
    getCode: '/user/get-verify-code',
    //注册 ok
    sign: '/user/register',
    //获取首页banner ok
    getBanner: '/banner/list',
    //获取菜品排行 ok
    foodRange: "/food/rank",
    //获取附近店铺 ok
    getNearShop: '/restaurant/list',
    //获取推荐菜品 ok
    recommontFood:'/food/recommend',
    //设置餐厅id ok
    setRestaurantId: '/user/change-restaurant',
    //获取餐厅详情信息（菜品，分类等信息） ok
    getResDetailInfo: '/restaurant/detail',
    //添加购物车 ok
    addCart: '/cart/set-quantity',
    //获取购物车列表 ok
    getCartList: '/restaurant/cart',
    //获取菜品详情信息 ok
    getResDetail: '/food/detail',
    //获取点赞状态
    getThumbs: '/getThumbs',
    //点赞 ok
    doThumbs: '/food/vote',
    //获取标签列表 ok
    getMarkList: '/tag/list',
    //支付 ok
    wxPay: '/order/create',
    //确认支付 ok
    confirmPayment:'/order/confirm-payment',
    //待支付 ok
    prepay:'/order/prepay',
    //清除购物车 ok
    clearCart: '/cart/clear',
    //获取订单列表 ok
    getOrderlist: '/order/list',
    //获取订单详情 ok
    getOrderDetail: '/order/detail',
    //取消订单
    cancelOrder: '/order/cancel',
    //获取消费统计列表
    getNoteList: "/user/consume-log",
    //保存生日信息
    saveInfo: '/user/update'
}
export { _interface }
