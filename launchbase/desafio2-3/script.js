const modalOverlay = document.querySelector('.modaloverlay')
const posts = document.querySelectorAll('.post')
const maximize = document.querySelector('.modal')

for (let post of posts) {
    post.addEventListener('click', function () {
        const postId = post.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${postId}`


    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
    maximize.classList.remove('maximize')
})

document.querySelector('.full-screem').addEventListener('click', function(){
    if (maximize.classList.contains('maximize') == true) {
        maximize.classList.remove('maximize')
    } 
    else {
        maximize.classList.add('maximize')
    }    
})
