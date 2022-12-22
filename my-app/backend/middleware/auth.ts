module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/");
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/");
      }
    },
    isLoggedIn: function(req,res,next){
      res.locals.loggedIn = req.isAuthenticated();
      next();
    }
};
  