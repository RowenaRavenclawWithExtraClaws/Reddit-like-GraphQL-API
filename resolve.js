'use strict'

const database = require('./database');

let resolver = {
    users: async () => {
        let users = await database.fetchUsers();
        let output = []

        users.forEach(user => {
            output.push({
                username: user.username,
                displayname: user.displayname,
                email: user.email,
                userpassword: user.userpassword,
                datecreated: user.datecreated,
                age: user.age,
                about: user.about,
            });
        });

        return output;
    },

    createUser: async (userInfo) => {
        await database.createUser(userInfo.info);

        return {
            username: userInfo.info.username,
            displayname: userInfo.info.displayname,
            email: userInfo.info.email,
            userpassword: userInfo.info.userpassword,
            age: userInfo.info.age,
            about: userInfo.info.about,
        }
    }
};

exports.resolver = resolver;