
function getuser(req,res,next){
   return res.status(200).json({message:"Data fetch SuccessFuly"});
}

module.exports.getuser = getuser;