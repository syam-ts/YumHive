import express from 'express'


const Router = express.Router()

Router.get('/user', userController)