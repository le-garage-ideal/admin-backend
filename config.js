if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongodb = process.env.PERFECT_GARAGE_MONGODB

const backendUsers = new Map();
backendUsers.set(process.env.PERFECT_GARAGE_USERNAME, process.env.PERFECT_GARAGE_PASSWORD);

console.log(`Config loaded. Username=${process.env.PERFECT_GARAGE_USERNAME}`);

const jwtSecret = process.env.PERFECT_GARAGE_JWT_SECRET;

exports.mongodb = mongodb;
exports.backendUsers = backendUsers;
exports.jwtSecret = jwtSecret;
