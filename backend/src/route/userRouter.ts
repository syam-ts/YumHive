import express from 'express'
import { signUp } from '../controllers/userCtrl'


const Router = express.Router()

Router.post('/user/signup', signUp)



export default Router