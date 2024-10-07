import express from 'express'
import { signUp } from '../controllers/userCtrl'


const Router = express.Router()

Router.post('/signup', signUp)




export default Router