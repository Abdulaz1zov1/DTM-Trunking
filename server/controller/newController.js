const News = require('../models/news')

exports.CreatPut = {
    add:async(req, res)=>{
        try{
            const {title, description, image} = req.body;
            const news = new News({
                title: req.body.title,
                description: req.body.description,
                image: req.body.image
            })
            news.save()
            res.status(201).json({news})
        }catch(err){
            res.status(400).json({msg: err.message})
        }
    },
    getAll:async(req, res) =>{
        try{
            const ddd = await News.find()
                .sort({date: -1})
            res.status(201).json({ddd})
        }catch(err){}
    },
    getByIDNew:async(req, res) =>{
        try{
            const tugadi = await News.findById({_id: req.params.id})
            await tugadi.save()
            res.status(200).json({tugadi})
        }catch(err){
            res.status(500).json({msg: err.message})
        }
    },
    UpdatePage:async(req, res) =>{
        try{
            const news = await News.findByIdAndUpdate({_id: req.params.id})
            news.title = req.body.title
            news.description = req.body.description
            news.image = req.body.image
            await news.save()
            res.status(201).json({
                success: true,
                data: news
            })
        }
        catch(err){
            res.status(500).json({msg: err.message})
        }
    },
    deleteNews:async(req, res) =>{
        try{
            const news = await News.findByIdAndDelete({_id: req.params.id})
            news.save()
            res.status(200).json({success: true, data: []})
        }catch(err){
            return res.status(404).json({msg: err.message})
        }
    }
}