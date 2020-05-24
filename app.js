navigator.getUserMedia=navigator.getUserMedia || navigator.webkitGetUserMedia;
const video=document.querySelector('#video');
const audio=document.querySelector('#audio');
const canvas=document.querySelector('#canvas');
const content=document.querySelector('#2d');

let model;

handTrack.startVideo(video).then(status =>{
    if(status){
        navigator.getUserMedia({video:{}},stream=>{
          video.srcObject=stream;
        },
        err => console.log(err));
    }
})
function runDetection(){
  
}

handTrack.load().then(lmodel => {
    model=lmodel;
    // detect objects in the image.
    // model.detect(img).then(predictions => {
    //   console.log('Predictions: ', predictions); 
    // });
  });