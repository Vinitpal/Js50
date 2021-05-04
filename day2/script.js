





// document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')`








const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currActive = 1

cars = [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', 
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1471479917193-f00955256257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1448&q=80',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=847&q=80'
]

next.addEventListener('click', () => {
    currActive++
    if(currActive > circles.length) {
        currActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currActive--
    if(currActive < 1) {
        currActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle, index) => {
        if(index < currActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })


    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length-1)/(circles.length-1)*100 + '%'
    document.body.style.backgroundImage = "url('" + cars[currActive-1] + "')"


    if(currActive === 1) {
        prev.disabled = true
    } else if(currActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}