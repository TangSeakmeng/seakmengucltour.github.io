const htmlTag = document.querySelector('html')
const bodyTag = document.querySelector('body')
const myNav = document.querySelector('.for-nav')
const navElement = document.querySelector('header .for-nav nav')
const sidebar = document.querySelector('#sidebarMenu')

// const myEle = document.querySelector('.for-nav nav a')

let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight)
    return Math.floor(dec * 10)
}

addEventListener('scroll', () => {
    myNav.style.setProperty('background', scrolled() > 0.4 ? 'orange' : 'none')
    myNav.style.setProperty('top', scrolled() > 0.4 ? '0px' : '')
    navElement.style.setProperty('top', scrolled() > 0.4 ? '25px' : '')
    sidebar.style.setProperty('top', scrolled() > 0.4 ? '40px' : '')
})