document.addEventListener('DOMContentLoaded', () =>{


    let dataElements = document.querySelectorAll("#billededata div");
    console.log(dataElements)
    
    let dataArray = [];
    
    let image = document.querySelector(".imgDisplay")
    let imageIndex = 0;
    let next = document.querySelector("#nextImage")
    let previous = document.querySelector("#previous")
    
    dataElements.forEach((dataElement, index) => {
    
    
        dataArray.push(dataElement.dataset.url)
        
        // image.src =  dataArray[index]
    
    });
    
    image.src =  dataArray[imageIndex]
    
    next.addEventListener("click", function(){
       
        imageIndex++
        
        if (imageIndex >= dataArray.length){
            imageIndex = 0
        }
        console.log(imageIndex)
        image.src =  dataArray[imageIndex]
    
     })
    previous.addEventListener("click", function(){
       
        imageIndex--
        
        if (imageIndex < 0){
            imageIndex = dataArray.length -1
        }
        console.log(imageIndex)
        image.src =  dataArray[imageIndex]
       
        
     })
    // imgSrc.src =  dataArray[1]
    
    
    
    
    
    console.log(dataArray)
    console.log(dataArray[1])
    
    // dataElements.innerHTML = dataArray.innerHTML
    
    
    });