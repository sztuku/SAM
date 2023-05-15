const express = require('express')

const app = express()




function audioCancel(){
  var url = window.location.href
  var search_params = url.searchParams;
  search_params.set('audioFile', 'cancel.mp3');
}


app.get('/', (req, res,next) => {


   res.set("Content-Type", "text/html");
   res.write("<style>table, td, tr {  border: 1px solid black;}</style>");

    
    res.write("Witam w aplikacji Hello World Player<br>");
  if(req.query.videoFile){
	res.write("<video width='320' height='240' id='videoPlayer' src='" + req.query.videoFile + "' type='video/mp4' controls> </video><br>");
	res.write("<script>function videoCancel(){const elem = document.getElementById('videoPlayer');elem.setAttribute('src', 'cancel.mp4');}</script>");
	res.write("<button type='button' onclick='videoCancel()' id='videoCancel'>Cancel Video</button><br>");

  res.write("<button type='button' onclick='addElement(this)' id='videoAdd' src='" + req.query.videoFile +"'>Add Video</button><br>");


  }
  
  if(req.query.audioFile){
	res.write("<audio controls id='audioPlayer' src='" + req.query.audio +"' controls></audio><br>");
	res.write("<script>function audioCancel(){const elem = document.getElementById('audioPlayer');elem.setAttribute('src', 'cancel.mp3');}</script>");
	res.write("<button type='button' onclick='audioCancel()' id='audioCancel'>Cancel Audio</button><br>");

  res.write("<button type='button' onclick='addElement(this)' id='audioAdd' src='" + req.query.audio +"'>Add Audio</button><br>");

  }
  
 if(req.query.imgFile){
	res.write(" <img src='" + req.query.imgFile +"' id='posterImage'><br>");

  res.write("<button type='button' onclick='addElement(this)' src='" + req.query.imgFile +"' id='imgAdd'>Add Image</button><br>");

  }
  

  res.write("<table id='playlist_table'> <tr> <th>No.</td><th>URL</td><th>Type</td><th>Action</td> </tr></table><br></br>");
  var script=`<script>
                function addElement(el) {  
                  var table = document.getElementById('playlist_table');  
                  var row = table.insertRow();  
                  var cell1 = row.insertCell(0);  
                  var cell2 = row.insertCell(1);  
                  var cell3 = row.insertCell(2);
                  var cell4 = row.insertCell(3);  
                  cell1.innerHTML = table.rows.length-1; 
                  cell2.innerHTML = el.getAttribute('src');
                  if(el.getAttribute('id')=='videoAdd'){
                    cell3.innerHTML = 'Video';
                  }
                  if(el.getAttribute('id')=='audioAdd'){
                    cell3.innerHTML = 'Audio';
                  }
                  if(el.getAttribute('id')=='imgAdd'){ 
                    cell3.innerHTML = 'Image';
                  }
                  
                  cell4.innerHTML="<input type='button' class='removeRowButton' value='Delete' onclick='deleteRow(this)'><input type='button' class='moveRowUpButton' value='Up' onclick='moveUp(this)'><input type='button' class='moveRowDownButton' value='Down' onclick='moveDown(this)'>"

                 

                }
                function deleteRow(o) {
                  var p=o.parentNode.parentNode;
                      p.parentNode.removeChild(p);
                 }
                 function moveUp(o) {
                  var row = o.parentNode.parentNode;
                  sibling = row.previousElementSibling;
                  parent = row.parentNode;
                  var newEl=parent.insertBefore(row, sibling);
                  if(newEl.rowIndex===0)
                  {
                    sibling = newEl.previousElementSibling;
                    parent = newEl.parentNode;
                   parent.insertBefore(newEl, sibling);
                  }
                 }


                  function moveDown(o) {
                    var row = o.parentNode.parentNode;
                    if(row.rowIndex===row.parentNode.rows.length-1)
                    {
                      sibling = row.parentNode.rows[1]
                      parent = row.parentNode;
                      parent.insertBefore(row, sibling);
                      
                    }else{
                      sibling = row.nextElementSibling;
                      parent = row.parentNode;
                      parent.insertBefore(sibling, row);
                    }
                 }
                </script>`

  res.write(script)
  
 
  
  res.end();
  
})



app.listen(4080)
