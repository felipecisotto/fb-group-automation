const service = require('../services/PostsService');

const postForGroups = async (req, res, next) => {
    const { email, message, groups } = req.body;
    await service.postMessage(email,message, groups);
    res.json({message: "POST new tea"}); // dummy function for now
};

module.exports = {postForGroups};
