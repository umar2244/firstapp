function auth (req ,res ,next){


    res.local.User=req.session.User
    next();
}

module.exports = auth;