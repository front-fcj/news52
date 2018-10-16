//控制器的选择
//实现了cb函数
//要的结果就是数据库操作返回的结果

const m_user = require('../models/m_user');

//渲染登录页
exports.showSignin = (req,res) =>{
    res.render('signin.html');
};





//登录表单请求
exports.handleSignin = (req,res) => {
    //获取表单数据
    const body = req.body;
    m_user.checkEmail(body.email, (err,data) => {
        if (err) {
            return res.send({
                code: 500,
                message:'服务器错误'
            });
        }
        if (!data[0]) {
            return res.send({
                code:1,
                message:'邮箱不存在'
            });
        }
        if (data[0].password != body.password) {
            return res.send({
                code:2,
                message:'密码错误'
            });
        }
        res.send({
            code:200,
            message:'验证通过'
        });
    });
}