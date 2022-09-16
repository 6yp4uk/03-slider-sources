let slideindex = 0
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')

const mainSlaid = document.querySelector('.main-slide')
const mainSlaidcount = mainSlaid.querySelectorAll('div').length
//console.log(mainSlaidcount)

//sidebar.style.top = `-100vh`
sidebar.style.top = `-${(mainSlaidcount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction){
    if (direction==='up'){
        console.log('индекс до итерации'+ slideindex)
        slideindex++
        console.log('индекс 1 '+ slideindex)
        console.log('количество  '+ mainSlaidcount)
        if (slideindex === mainSlaidcount)
        {
             slideindex = 0
        }
    } else if (direction==='down'){
        console.log('индекс до итерации'+ slideindex)
        slideindex--
        console.log('индекс '+ slideindex)
        if(slideindex < 0){
            slideindex = mainSlaidcount -1 
        }
    }
    const height = container.clientHeight
    console.log('индекс 2 '+ slideindex)
    mainSlaid.style.transform = `translateY(-${slideindex*height}px)`
    sidebar.style.transform = `translateY(${slideindex*height}px)`
    console.log('высота '+ height)
    console.log('смещение '+ height*slideindex)
}



