const express = require('express')

const app = express()

app.get('/', (req, res) => {
    
  if(req.query.videoFile){
	res.write("<video width='320' height='240' id='videoPlayer' controls><source src='" + req.query.videoFile + "' type='video/mp4'></video>");
  }
  
  if(req.query.audioFile){
	res.write("<audio controls><source='" + req.query.audio +"'/></audio>");
  }
  res.end();
  
})



app.listen(4080)
