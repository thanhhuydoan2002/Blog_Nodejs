class NewsController {

    //[GET] /news
    index(req,res){
        res.render('news')
    }
}

module.exports = new NewsController;

//test on ubuntu 

//ubuntu 20.04 