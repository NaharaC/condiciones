const img = document.getElementById("image-1");

img.addEventListener("click", () => {
    if(!img.classList.contains("bordered")){
        img.classList.add("bordered")
    }else {
        img.classList.remove("bordered")
    }

})