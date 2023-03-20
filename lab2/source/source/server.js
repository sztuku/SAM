const express = require('express')

const app = express()




function audioCancel(){
  var url = window.location.href
  var search_params = url.searchParams;
  search_params.set('audioFile', 'cancel.mp3');
}


app.get('/', (req, res,next) => {


   res.set("Content-Type", "text/html");
    
    res.write("Witam w aplikacji Hello World Player<br>");
  if(req.query.videoFile){
	res.write("<video width='320' height='240' id='videoPlayer' controls><source src='" + req.query.videoFile + "' type='video/mp4'></video><br>");
	res.write("<script>function videoCancel(){const elem = document.getElementById('videoPlayer');elem.setAttribute('src', 'cancel.mp4');}</script>");
	res.write("<button type='button' onclick='videoCancel()' id='videoCancel'>Cancel Video</button><br>");
  }
  
  if(req.query.audioFile){
	res.write("<audio controls id='audioPlayer'><source='" + req.query.audio +"'/></audio><br>");
	res.write("<script>function audioCancel(){const elem = document.getElementById('audioPlayer');elem.setAttribute('src', 'cancel.mp3');}</script>");
	res.write("<button type='button' onclick='audioCancel()' id='audioCancel'>Cancel Audio</button><br>");
  }
  
 if(req.query.imgFile){
	res.write(" <img src='" + req.query.imgFile +"' id='posterImage'><br>");
  }
  
  
 
  
  res.end();
  
})



app.listen(4080)
