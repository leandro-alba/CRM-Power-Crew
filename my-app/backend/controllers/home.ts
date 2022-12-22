const Contacts = require("../Schemas/Contacts");
const Deal = require("../Schemas/Deal");
const Lead = require("../Schemas/Lead");
const User = require("../Schemas/User");
//const Post = require("../models/Post")

module.exports = {
    getIndex: async (_req, res) => {
      try{
        //const posts = await Post.find().populate('user').sort({ createdAt: 'desc' }).lean();
        res.render('index.ejs');//I know we are using react, but dont know what to put here
      }catch (err){
        console.log(err)
      }
    },
  };
  