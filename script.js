const skillIcon = [
    {title: 'HTML', icon: 'html5'},
    {title: 'CSS', icon: 'css3'},
    {title: 'Javascript', icon: 'javascript'},
    {title: 'Tailwind CSS', icon: 'tailwindcss'},
    {title: 'React', icon: 'react'},
]

const projectsArray = [
    {   id: 1,
        name: 'Tenzies', 
        image: 'https://firebasestorage.googleapis.com/v0/b/twitter-clone-b81d2.appspot.com/o/posts%2F4DtOBcPKAOc3csmJMmmo%2Fimage?alt=media&token=77059622-d601-4948-b80f-a77887f6db12',
        link: 'https://tenzies-react.vercel.app',
        techStack: ['React JS, Tailwind CSS']
    },
    {   id: 2,
        name: 'Pinterest Lite', 
        image: 'https://firebasestorage.googleapis.com/v0/b/twitter-clone-b81d2.appspot.com/o/posts%2FOD4iSNz29IIWI0yNQ0Au%2Fimage?alt=media&token=2f0cd6ef-869b-4b63-8923-524fa8bda0f0',
        link: 'https://pinterest-lite.netlify.app',
        techStack: ['React JS', 'Tailiwind CSS', 'Sanity IO']
    },
    {   id: 3,
        name: 'Twitter Lite', 
        image: 'https://firebasestorage.googleapis.com/v0/b/twitter-clone-b81d2.appspot.com/o/posts%2FREjGWrjt8YiTknqCxUto%2Fimage?alt=media&token=89414efe-9566-4142-8c69-acdfb2547452',
        link: 'https://twitter-lite-version.vercel.app',
        techStack: ['Next JS', 'Tailwind CSS', 'Firebase']
    },
    {   id: 4,
        name: 'Tesla UI Clone', 
        image :'https://firebasestorage.googleapis.com/v0/b/twitter-clone-b81d2.appspot.com/o/posts%2FgXd98HwCdRZtR9J6HJP0%2Fimage?alt=media&token=524a8085-e173-4da6-ab8a-a5d3724af98f',
        link: 'https://tesla-clone-with-react.vercel.app',
        techStack: ['React JS', 'Redux', 'Styled Components']
    },
    {   id: 5,
        name: 'Search and Filter Movie', 
        image: 'https://firebasestorage.googleapis.com/v0/b/twitter-clone-b81d2.appspot.com/o/posts%2FrKi1sxNpYPQcHNC8rLEM%2Fimage?alt=media&token=d320bcd5-c572-445e-8eec-55ced699268b',
        link: 'https://search-filter-movie.vercel.app',
        techStack: ['React JS', 'Tailwind CSS', 'TMDB API']
    },
]


const pasteIcon = skillIcon.map(({title, icon}) => {
    const skillWrapper = document.createElement('li')

        skillWrapper.innerHTML = `
                <i class="devicon-${icon}-plain colored" title="${title}"></i>
        `

        return skillWrapper
    })

const skillGroup = document.querySelector('.skill-group')
pasteIcon.forEach((icon) => {
    skillGroup.append(icon)
})

const pasteProject = projectsArray.map(({id, name, image, link, techStack}) => {
    const myDiv = document.createElement('div')

    myDiv.innerHTML = `
        <div class="slide">
            <div class="slide-img img-${id}" style="background-image: url(${image})">
                <a href="${link}" target="_blank" rel="noreferrer">See details</a>
            </div>
            <br>
            <div>
                <h3>${name}</h3>
                <p>${techStack.join(', ')}</p>
            </div>
        </div>
    `
    return myDiv
})

const mySlider = document.querySelector('.my-slider')
pasteProject.forEach((project) => {
    mySlider.append(project)
})

// Add Active toggle class
const navBtn = document.querySelectorAll('.nav-link');

navBtn.forEach(li => {
    li.addEventListener("click", () => {
        navBtn.forEach(el => el.classList.toggle('active'));
    })
})


let slider = tns({
    container: '.my-slider',
    "slideBy": 1,
    "speed": 400,
    "nav": false,
    controlsContainer: ".controls",
    prevButton: '.prev',
    nextButton: '.next',
    autoplay: true,
    autoplayButtonOutput: false,
    responsive: {
        1024: {
            "items": 2,
            gutter: 10
        },
        768: {
            "items": 2,
            gutter: 5
        },
        0: {
            "items": 1
        }
    }

})