
const galleryList = document.querySelectorAll(".box-22");

//Select and find the modal
var myModal = new bootstrap.Modal(document.getElementById("thumbnailModal"), {

});


console.log(galleryList);

for(let i =0; i < galleryList.length; i++){

    galleryList[i].addEventListener("click", ()=>{
   

        //img data
        const img = galleryList[i].getAttribute("data-bg");
        const title  = galleryList[i].getAttribute("data-title");


        //find the img element to change
        document.querySelector("#thumbnailModal img").src = img;
        document.querySelector("#exampleModalLabel").innerHTML= title;
  
        myModal.show();
    })
}