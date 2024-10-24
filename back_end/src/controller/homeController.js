const { json } = require('express');

const getHomepage = (req,res) => {
    res.render('home.ejs')
}
const getSignin = (req,res) => {
    res.render('signin.ejs')
}
const getSignup = (req,res) => {
    res.render('signup.ejs')
}
const Login = (req,res)=>{
    const { username, password, role } = req.body;

    // Xử lý logic đăng nhập ở đây (kiểm tra tài khoản, mật khẩu...)
  
    console.log(`Received login data: Username: ${username}, Password: ${password}, Role: ${role}`);
  
    // Giả định đăng nhập thành công
    res.json({ message: 'Đăng nhập thành công!', username, role });
}


module.exports={
    getHomepage,getSignin,getSignup,Login
}