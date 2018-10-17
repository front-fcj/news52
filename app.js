//这是一个程序入口文件
//1.导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const options = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'msg52'
};
const sessionStore = new MySQLStore(options);

//2.返回app对象
const app = express();

//3.配置包
app.engine('html',require('express-art-template'));

//统一处理静态资源
app.use('/node_modules',express.static('./node_modules'));
app.use('/public',express.static('./public'));

//配置body-parser
app.use(bodyParser.urlencoded({
    extended:false
}));

//配置express-mysql-session
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}))

//使用router
app.use(router);

//4.绑定端口
app.listen(12347,() => {
    console.log('run it');
    
});