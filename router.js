//路由模块  作用：处理分发 找到请求对应处理函数
//1.导包
const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

//2.获取路由对象express.Router();
const router = express.Router();

//3.router.get() 渲染登录页请求
router.get('/signin',c_user.showSignin)
    .post('/signin',c_user.handleSignin)
    .get('/',c_topic.showTopic)
    .get('/topic/create',c_topic.createTopic)
    .post('/createTopic',c_topic.handleCreateTopic)
    .get('/topic/:topicID',c_topic.showDetail)
    .get('/signout',c_user.handleSignout);

//4.导出router
module.exports = router;