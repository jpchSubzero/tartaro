module.exports = (req, res, next) => {
    console.log('res: ' + res);
    res.header('Content-Range', 'posts 0-20/20');
    next();
}