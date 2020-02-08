const sections = document.querySelectorAll('.faq__topic')
const navlist = document.querySelectorAll('.sidebar__item')

let options = {
    rootMargin: '-5% 0px -50% 0px',
    threshold: 0
}

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navlist.forEach(item => {
                if (item.dataset.scroll == entry.target.dataset.scroll) {
                    item.classList.add('active')
                } else {
                    item.classList.remove('active')
                }
            })
            entry.target.style.backgroundColor = 'black'
            console.log(entry.target.dataset.scroll, 'int')
        } else {
            entry.target.style.backgroundColor = "pink"
            console.log(entry.target.dataset.scroll, 'not')
        }
    })
}, options)

sections.forEach(section => {
    observer.observe(section)
})

navlist.forEach(topic => {
    topic.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(topic.dataset.scroll).scrollIntoView({
            behavior: 'smooth'
        })
        // console.log(document.querySelector(topic.dataset.scroll))
    })
})

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 50);
})