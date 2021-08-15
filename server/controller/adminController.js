const User = require('../models/user')
const session = require('express-session')


exports.userCreate = {
    register:async(req, res) =>{
        try{
            const {email, password, role} = req.body;

            const user = await User.findOne({email})

            if(user) return res.status(400).json({msg: 'Bu emailda foydalanilga'})

            if(password.length<6) return res.status(400).json({msg: 'password kamida 6 simvol'})

            const userNew = new User({
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            })
            await userNew.save()
            res.status(201).json({
                success: true,
                data: userNew
            })
        }
        catch(err){
            res.status(500).json({msg: err.message})
        }
    },
    gelAll:async(req, res) =>{
        try{
            const user = await User.find()
            .sort({ date: -1 })
            res.status(200).json({user})
        }catch(err){
            return res.status(404).json({msg: err.message})
        }
    }
}



exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body)
  
    // Parolni solishtirish
    if (!email || !password) {
        return res.status(400).send('email or password unavaible')
    }
    const users = await User.findOne({ email: email }).select('password');
    if (!users) {
       return res.status(400).send('user is empty')
    }
    const isMatch = await users.matchPassword(password);
    if (!isMatch) {
       return res.status(400).send('passowr is incorrect')
    }
  
    // Avtorizatsiyadan o'tgan paytda sessiya paydo boladi, ungacha ko'rinmaydi
    const body = await User.findOne({ email: req.body.email })
    req.session.valijon = body
    req.session.save()
    
    console.log(req.session)
  
  
    req.session.isAuth = true
    // res.redirect('/api/all')
    res.status(200).send('success')
    // res.end("tugadi")
  }
