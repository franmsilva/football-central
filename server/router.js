
const router = require('express').Router();
const postController = require('./controllers/post');
const userController = require('./controllers/user');
const authMiddleware = require('./middlewares/auth');



router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/me', authMiddleware, userController.profile);
router.post('/logout', authMiddleware, userController.logout);

// router.get('/', controller.login);

router.post('/createPost', postController.createPost);
router.delete('/deletePost', postController.deletePost);
router.get('/getAllPosts', postController.getAllPosts);
module.exports = router;