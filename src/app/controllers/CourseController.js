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
        const formData = req.body;
        formData.image = 'https://i.ytimg.com/vi/'+formData.videoId+'/sddefault.jpg';
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }
    
}

module.exports = new CourseController();
