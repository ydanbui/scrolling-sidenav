const sections = document.querySelectorAll('.faq__topic')
const navlist = document.querySelectorAll('.sidebar__item')
const indicator = document.querySelector('.sidebar__indicator')

// Controls when the intersection observer fires by default it's right when element comes into view
let options = {
    //rootMargin: '-10% 0px -60% 0px',
    rootMargin: '-17% 0px -70% 0px',
    threshold: 0
}

// Create new intersection observer
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        // If one of the sections intersects
        if (entry.isIntersecting) {
            // Loop through the sidebar links 
            navlist.forEach(item => {
                // Check if for the sidebar link that matches the section that's observed
                if (item.dataset.scroll == entry.target.dataset.scroll) {
                    // Style the correct sidebar link
                    item.classList.add('active')
                    indicator.style.top = item.dataset.position
                } else {
                    // Remove styling from all other sidebar links
                    item.classList.remove('active')
                }
            })
            // entry.target.style.backgroundColor = 'black'
            console.log(entry.target.dataset.scroll, 'int')
        } else {
            // entry.target.style.backgroundColor = "pink"
            console.log(entry.target.dataset.scroll, 'not')
        }
    })
}, options)

// Call observe method on observer, passing in each section we want to observe
sections.forEach(section => {
    observer.observe(section)
})

// Add click event listener on each sidebar link
navlist.forEach(item => {
    item.addEventListener('click', (e) => {
        // Scrolling animation to faq section 
        e.preventDefault()
        document.querySelector(item.dataset.scroll).scrollIntoView({
            behavior: 'smooth'
        })

        // Functionality so clicking on sidebar link doesn't style each link

        // Remove styling of active link
        navlist.forEach(topic => {
            topic.classList.remove('active')
        })

        // Change indicator position to position of clicked link
        indicator.style.top = item.dataset.position

        // Add active styling to clicked link
        item.classList.add('active')

        // Unobserve faq sections so sidebar styling won't change when page scrolls to anchor
        sections.forEach(section => {
            observer.unobserve(section)
        })

        // After a delay, reobserve FAQ sections
        setTimeout(() => {
            sections.forEach(section => {
                observer.observe(section)
            })
        }, 500)


    })
})
