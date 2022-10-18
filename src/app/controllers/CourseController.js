const Course = require('../models/Course');
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class CourseController {
    

    // show(req,res){
    //     res.send(req.params.slug)
    // }


    //[GET] /courses/:slug
    show(req,res,next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next);
    }

    //[GET] /courses/create
    create(req,res,next){
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req,res,next){
        // res.json(req.body);
        // const formData = req.body;
        req.body.image = 'https://i.ytimg.com/vi/'+req.body.videoId+'/sddefault.jpg';
        const course = new Course(req.body);
        course.save();


        res.send('Saved!')
    }
    
}

module.exports = new CourseController();
