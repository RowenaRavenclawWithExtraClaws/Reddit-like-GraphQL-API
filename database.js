'use strict'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function generateRandomUserID() {
    return '';
}

let createUser = async (userData) => {
    await prisma.user.create({
        data: {
            id: generateRandomUserID(),
            username: userData.username,
            displayname: userData.displayname,
            username: userData.username,
            email: userData.email,
            userpassword: userData.userpassword,
            datecreated: Date.now().toString(),
            age: (userData.hasOwnProperty('age')) ? userData.age : null,
            about: (userData.hasOwnProperty('about')) ? userData.about : null
        }
    });

    console.log('user has ben created');
}