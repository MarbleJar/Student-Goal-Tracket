// File for Express server

// Import Express
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

app.listen(PORT, () => console.log('SERVER UP AND RUNNING'));