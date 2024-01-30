
function changeBackground(element, direction) {
    const parentElement = element.closest('.projects__up_right');
    const imgElement = parentElement.querySelector('.projects__up_right-img');
    const currentIndex = parseInt(imgElement.dataset.currentIndex) || 1;
    // const maxIndex = 3; // Change this to the total number of images

    let newIndex;
    if (direction === 'left') {
        if(currentIndex === 1){
            newIndex = 0
        }else if(currentIndex === 2){
            newIndex = 1

        } else if (currentIndex === 0){
            newIndex = 2
        }
    } else if (direction === 'right') {
        if(currentIndex === 1){
            newIndex = 2
        }else if(currentIndex === 2){
            newIndex = 0

        } else if(currentIndex === 0){
            newIndex = 1
            
        }
    }
    console.log(newIndex);
    const imageURL = `url(../img/services/photo-${newIndex}.png)`;
    imgElement.style.backgroundImage = imageURL;
    imgElement.dataset.currentIndex = newIndex;
}