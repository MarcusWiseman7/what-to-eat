const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/WhatToEat');

    const cardSchema = new mongoose.Schema({
        title: { type: String, required: true },
        pic: {
            public_id: { type: String, trim: true },
            secure_url: { type: String, trim: true },
        },
        instructions: [{ type: String, lowercase: true, trim: true }],
        ingredients: [{ type: String, lowercase: true, trim: true }],
    });

    const Card = mongoose.model('Card', cardSchema);

    const userScema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    });

    const User = mongoose.model('User', userScema);
}

main().catch((err) => console.warn(err));
