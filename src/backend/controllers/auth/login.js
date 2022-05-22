import userService from '../../services/user.service.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

export default {
    async login (req, res) {
        const account = await userService.authenticate(req.body.username, req.body.password);
        res.send(
            {
                user_data: {
                    _id: account._id,
                    name: account.name,
                    username: account.username,
                    avata: account.avata,
                    role: account.role
                },
                token: jwt.sign({account}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '2 days'}),
                account
            })
    }
}
