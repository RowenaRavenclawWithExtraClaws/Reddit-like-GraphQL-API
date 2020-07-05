'use strict'

const { PrismaClient } = require('@prisma/client');
const generator = require('./idGenerator');

const prisma = new PrismaClient();

let createUser = async (userData) => {
    await prisma.user.create({
        data: {
            id: generator.generateRandomID(9),
            username: userData.username,
            displayname: userData.displayname,
            email: userData.email,
            userpassword: userData.userpassword,
            datecreated: Date.now().toString(),
            age: (userData.hasOwnProperty('age')) ? userData.age : null,
            about: (userData.hasOwnProperty('about')) ? userData.about : null
        }
    });

    console.log('user has ben created');
}

let fetchUsers = async () => {
    let users = await prisma.user.findMany();

    return users;
}

exports.createUser = createUser;
exports.fetchUsers = fetchUsers;