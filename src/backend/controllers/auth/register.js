import userService from '../../services/user.service.js'

export default {
    async register (req, res) {
        const user = await userService.createNewUser(req.body.username, req.body.password);
        console.log(user);
    }
}
