import {Router} from 'express'
import { createWebhook, getMessage } from '../controllers/webhook.controllers.js'

const router = Router()

router.get('/webhook', createWebhook)

router.post('/webhook', getMessage)

router.get('/auth/facebook/callback', (req, res) => {
    res.send('OK')
})

export default router