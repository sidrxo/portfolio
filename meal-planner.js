const projectElems = document.querySelectorAll('.project');

function isInViewport(elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

function showProjects() {
    projectElems.forEach(projectElem => {
        if (isInViewport(projectElem)) {
            projectElem.classList.add('show');
        }
    });
}

window.addEventListener('load', showProjects);
window.addEventListener('scroll', showProjects);
.project.show {
	opacity: 1;
	animation: none;
}

@keyframes fade-in {
	from {
		opacity: 0;
		transform: translateY(50px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}