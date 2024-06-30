// const express = require('express');
import express from 'express';      
const app = express();

app.get('/', (req, res) => {
    res.send("Online server")
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "What do you get when you cross a snowman and a vampire? Frostbite!"
        },
        {
            id: 2,
            title: "Joke 2",
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 3,
            title: "Joke 3",
            content: "What do you call a fish wearing a crown? A kingfish!"
        },
        {
            id: 4,
            title: "Joke 4",
            content: "Why did the tomato turn red? Because it saw the salad dressing!"
        },
        {
            id: 5,
            title: "Joke 5",
            content: "How do you organize a space party? You planet!"
        }
    ];
    res.send([jokes]);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Running at port http://localhost:${port}`);
})
