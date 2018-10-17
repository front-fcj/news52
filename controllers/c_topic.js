//话题控制器

//导包
const m_topic = require('../models/m_topic');
const moment = require('moment');
exports.showTopic = (req,res) => {
    m_topic.findAllTopics(function (err,data) {
        if (err) {
            return res.send({
                code:500,
                message:'服务器出错了'
            })
        }
        //在这里写data数据
        res.render('index.html',{
            topics:data,
            user:req.session.user
        });
    });
}
exports.createTopic = (rerq,res) => {
    res.render ('topic/create.html');
};
//处理表单提交

exports.handleCreateTopic = (req,res) => {
    const body = req.body;
    body.createdAt = moment().format();
    body.useId = req.session.user.id;
    m_topic.addTopic(body,(err,data) => {
        if (err) {
            return res.send({
                code:500,
                message:'服务器有报错了'
            })
        }
        //服务器重定向
        res.send({
            code:200,
            message:'新话题添加成功'
        })
    });
}
//渲染话题详情
exports.showDetail = (req,res) => {
    const topicID = req.params.topicID;
    m_topic.findTopicById(topicID,(err,data) => {
        if (err) {
            return res,send({
                code:500,
                message:'服务器总错'
            })
        }
        res.render('topic/show.html',{
            topic:data[0]
        });
    })
}