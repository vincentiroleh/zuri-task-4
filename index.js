const axios = require('axios');
const fs = require('fs');
const path = require('path');

const URL = "http://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    try {
        const response = await axios.get(URL);
        const data = JSON.stringify(response.data);

        fs.mkdir(path.join(__dirname, 'result'), { recursive: true }, (err) => {
            if (err) return console.error(err);
            const writeStream = fs.createWriteStream('result/post.json');
            writeStream.write(data, 'utf-8');
            writeStream.on('finish', () => console.log('wrote all data to file'))
            writeStream.end();
        })
    } catch (err) {
        console.error(err);
    }
}

getPosts();




console.log('App started');