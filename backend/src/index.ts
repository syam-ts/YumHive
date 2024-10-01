import express from 'express'

const app = express();


const PORT: number = 3600;

app.listen(PORT,() => {

    console.log('The server running on port 3600')
});