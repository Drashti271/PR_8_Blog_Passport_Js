import BlogModel from "../models/blog.model.js";

const blogController = {
    addBlogPage(req,res){
        return res.render('./pages/add-blog.ejs');
    },
    async addBlog(req,res){
        try {
            req.body.image = req.file.path;
            let data = await BlogModel.create(req.body);
            console.log("Blog Created",data.id);
            return res.redirect(req.get('Referrer') || '/');
        } catch (error) {
            console.log(error.message);
            return res.redirect(req.get('Referrer') || '/');
        }
    },
    async getAllMyBlogs(req,res){
        try {
            const {id} = res.locals.user;
            const blogs = await BlogModel.find({userId : id});
            console.log(blogs);
            return res.render('./pages/get-all-myblogs.ejs',{blogs});
        } catch (error) {
            console.log(error.message);
            return res.render('./pages/get-all-myblogs.ejs',{blogs:[]});
        }
    },
    async editBlogPage(req,res){
        try {
            const { id } = req.params;
            const blog = await BlogModel.findById(id);

            return res.render('./pages/edit-blog.ejs', { blog });
        } catch (error) {
            console.log(error.message);
            return res.redirect('/get-all-myblogs');
        }
    },
    async updateBlog(req,res){
        try {
            const { id } = req.params;
            let updateData = req.body;

            if (req.file) {
                updateData.image = req.file.path;
            }

            await BlogModel.findByIdAndUpdate(id, updateData);
            console.log("Blog Updated:", id);

            return res.redirect('/get-all-myblogs');
        } catch (error) {
            console.log(error.message);
            return res.redirect('/get-all-myblogs');
        }
    },
    async deleteBlog(req,res){
        try {
            const { id } = req.params;
            await BlogModel.findByIdAndDelete(id);

            console.log("Blog Deleted:", id);
            return res.redirect('/get-all-myblogs');
        } catch (error) {
            console.log(error.message);
            return res.redirect('/get-all-myblogs');
        }
    }
};


export default blogController;