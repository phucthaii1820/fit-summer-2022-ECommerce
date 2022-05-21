import User from '../models/User.model.js'
import argon2 from 'argon2'


export default{

    //kiểm tra user tồn tại
    async checkExitsUser(username) {
        const user = await User.exists({username});
        return user;
    },

    //tạo mới user
    async createNewUser(username, password) {
        if(!await User.exists({username})){
            const user = await User.create({ username, password: await argon2.hash(password)});
            return user;
        }
        return null;
    },

    //kiểm tra đăng nhập
    async authenticate(username, password) {
        const user = await User.findOne({username}, 'name username password avatar role banned').exec();
        if(await argon2.verify(user.password, password))
            return user;
        return null;
    }
}