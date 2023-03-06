const express = require('express')

const app = express()

app.get('/', (req, res) => {
    
    const url=new URL(window.location.href)
    if(url.searchParams.has('videoFile'))
    {
        const video=url.searchParams.get('videoFile')
        res.send(video)
    }else if(url.searchParams.has('audioFile'))
    {
        const audio=url.searchParams.get('audioFile')
        res.send(audio)
    }
})



app.listen(4080)
