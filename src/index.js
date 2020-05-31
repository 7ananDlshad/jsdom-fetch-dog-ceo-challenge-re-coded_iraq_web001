console.log('%c HI', 'color: firebrick');
//Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let divImage = document.getElementById("dog-image-container");
fetch(imgUrl).then(function(response){
  return response.json();
}).then(function(json) {
  let imgDiv = document.getElementById("dog-image-container");
  for(const element of json.message){
    let imge=document.createElement('img');
    imge.setAttribute('element');
    imgDiv.appendChild(imge);
  }
});
//Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'