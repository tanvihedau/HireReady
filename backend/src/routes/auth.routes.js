const {Router} = require('express')
const authRouter = Router()
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')
  /**
   * @route POST /api/auth/register
   * @description Register new user
   * @access Public
   */
authRouter.post('/register', authController.registerUserController)
/**
 * @route POST /api/auth/login
 * @description Login user with email and password
 * @access Public
 */
authRouter.post('/login', authController.loginUserController)

/**
 * @route GET /api/auth/logout
 * @description Logout user by blacklisting the token and clearing the cookie
 * @access Private`
 */     
authRouter.get('/logout', authController.logoutUserController)

/**
 * @route GET /api/auth/get-me
 * @description Get logged in user details
 * @access Private
 */
authRouter.get('/get-me', authMiddleware.authUser, authController.getMeController)


module.exports = authRouter