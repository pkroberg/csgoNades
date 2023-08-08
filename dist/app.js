function selected() {
    var targeted = event.target;
    var clicked = targeted.parentElement;

    var child = clicked.children;
    console.log(child);

    for (let i = 0; i < child.length; i++) {
        if (child[i].classList.contains("text-gray-600")) {
            console.log(child[i]);
            child[i].classList.add("text-light-text", "bg-indigo-600");
            child[i].classList.remove("text-gray-600", "bg-gray-50", "border", "border-accent-yellow");
        }
    }

    targeted.classList.add("text-gray-600", "bg-gray-50", "border", "border-accent-yellow");
    targeted.classList.remove("text-white", "bg-indigo-600");
}

function selectNew() {
    var newL = document.getElementById("list");
    newL.classList.toggle("hidden");

    document.getElementById("ArrowSVG").classList.toggle("rotate-180");
}

function selectedSmall() {
    var targeted = event.target;
    var clicked = targeted.parentElement;

    var child = clicked.children;

    for (let i = 0; i < child.length; i++) {
        if (child[i].classList.contains("text-white")) {
            child[i].classList.remove("bg-indigo-600");
            child[i].classList.add("text-gray-600", "bg-gray-50", "border", "border-white");
        }
    }

    // targeted.classList.remove("text-gray-600", "bg-gray-50", "border", "border-white");

    document.getElementById("s1").classList.add("hidden");
    document.getElementById("textClicked").innerHTML = targeted.innerHTML;
    // close dropdown
    var newL = document.getElementById("list");
    newL.classList.toggle("hidden");
    document.getElementById("ArrowSVG").classList.toggle("rotate-180");
}


// Shuffle links

const originalIframeLinks = [
    //iframe links
    'https://gfycat.com/ifr/darktalkativefieldmouse?hd=1&speed=2',
    'https://gfycat.com/ifr/brilliantviciousbullfrog?hd=1&speed=2',
    'https://gfycat.com/ifr/youngpoisedcattle?hd=1&speed=2',
    'https://gfycat.com/ifr/grandiosebriskhawk?hd=1&speed=2',
    'https://gfycat.com/ifr/secretevilblueshark?hd=1&speed=2',
    'https://gfycat.com/ifr/embarrassedmedicalgemsbok?hd=1&speed=2'
];

let shuffledLinks = shuffleArray(originalIframeLinks);
let currentIndex = 0;

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const iframeContainer = document.getElementById('iframeContainer');

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === shuffledLinks.length - 1;
}

function updateIframe() {
    updateButtons();
    iframeContainer.src = shuffledLinks[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + shuffledLinks.length) % shuffledLinks.length;
    updateIframe();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % shuffledLinks.length;
    updateIframe();
});

// Initial load
updateIframe();
