const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
    await next();
    if (clearHash(req.user.id)) console.log("CLEARED CACHE");
}