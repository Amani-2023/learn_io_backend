const Articles = require('../models/artticlesModel');

exports.createArticle = async(req, res) => {
    const article = new Articles({
        title: req.body.title,
        body: req.body.body,
        conclusion: req.body.conclusion,
        createdAt: new Date() // Add the current date and time
    });

    try {
        const savedArticle = await article.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


exports.updateArticle = async(req, res) => {
    try {
        const updatedArticle = await Articles.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteArticle = async(req, res) => {
    try {
        const deletedArticle = await Articles.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getAllArticles = async(req, res) => {
    try {
        const articles = await Articles.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}