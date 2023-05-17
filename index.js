const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index2.html')
})

app.get('/sse', function(req, res) {
    res.header({
        'Content-type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    })

    const interval = setInterval(() => {
        res.write("event:test\ndata:" + (new Date()) + "\n\n")
    }, 2000);
});

// 启动服务器
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});