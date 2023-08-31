function selected() {
    var targeted=event.target;
    var clicked=targeted.parentElement;

    var child=clicked.children;
    console.log(child);

    targeted.classList.add("text-gray-600", "bg-gray-50", "border", "border-accent-yellow");
    targeted.classList.remove("text-white", "bg-indigo-600");
}

function selectNew() {
    var newL=document.getElementById("list");
    newL.classList.toggle("hidden");

    document.getElementById("ArrowSVG").classList.toggle("rotate-180");
}

function selectedSmall() {
    var targeted=event.target;
    var clicked=targeted.parentElement;

    var child=clicked.children;

    for (let i=0; i<child.length; i++) {
        if (child[i].classList.contains("text-white")) {
            child[i].classList.remove("bg-indigo-600");
            child[i].classList.add("text-gray-600", "bg-gray-50", "border", "border-white");
        }
    }


    document.getElementById("s1").classList.add("hidden");
    document.getElementById("textClicked").innerHTML=targeted.innerHTML;
    // close dropdown
    var newL=document.getElementById("list");
    newL.classList.toggle("hidden");
    document.getElementById("ArrowSVG").classList.toggle("rotate-180");
}


// Shuffle links

const originalIframeLinks=[
    //link template
    //https://www.youtube.com/embed/'VIDEOID'?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist='VIDEOID'

    { link: 'https://www.youtube.com/embed/j2qzVCj0BwI?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd720&playlist=j2qzVCj0BwI', title: 'Mirage Stairs Smoke from T Roof' },
    { link: 'https://www.youtube.com/embed/C3_cFIGT-ik?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd720&playlist=C3_cFIGT-ik', title: 'SCOOTING IS BETTER THAN SKATEBOARDING' },
    { link: 'https://www.youtube.com/embed/DTUYGgP3jBc?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=DTUYGgP3jBc', title: 'Mirage Jungle and Connector Smoke from T Roof' },
    { link: 'https://www.youtube.com/embed/qkqJdYzkVLk?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=qkqJdYzkVLk', title: 'Mirage Stairs Smoke from Tetris' }
];

let shuffledLinks=shuffleArray(originalIframeLinks);
let currentIndex=0;

const prevButton=document.getElementById('prevButton');
const nextButton=document.getElementById('nextButton');
const iframeContainer=document.getElementById('iframeContainer');
const removeCheckbox=document.getElementById('removeCheckbox');
const removedVideosList=document.getElementById('removedVideosList');

function shuffleArray(array) {
    const shuffledArray=[...array];
    for (let i=shuffledArray.length-1; i>0; i--) {
        const j=Math.floor(Math.random()*(i+1));
        [shuffledArray[i], shuffledArray[j]]=[shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function updateButtons() {
    prevButton.disabled=currentIndex===0;
    nextButton.disabled=currentIndex===shuffledLinks.length-1;
}

function updateIframe() {
    updateButtons();
    iframeContainer.src=shuffledLinks[currentIndex].link;
}

function addVideoBackToShuffle(link, title) {
    shuffledLinks.push({ link, title });
    removedVideosList.removeChild(document.getElementById(title));
}

prevButton.addEventListener('click', () => {
    if (removeCheckbox.checked) {
        const removedVideo=shuffledLinks[currentIndex];
        removedVideosList.innerHTML+=`<li class="removedVideos cursor-pointer" id="${removedVideo.title}" onclick="addVideoBackToShuffle('${removedVideo.link}', '${removedVideo.title}')">${removedVideo.title}</li>`; shuffledLinks.splice(currentIndex, 1);
        currentIndex=Math.max(currentIndex-1, 0);
    } else {
        currentIndex=(currentIndex-1+shuffledLinks.length)%shuffledLinks.length;
    }
    removeCheckbox.checked=false;
    updateIframe();
});

nextButton.addEventListener('click', () => {
    if (removeCheckbox.checked) {
        const removedVideo=shuffledLinks[currentIndex];
        removedVideosList.innerHTML+=`<li class="removedVideos cursor-pointer" id="${removedVideo.title}" onclick="addVideoBackToShuffle('${removedVideo.link}', '${removedVideo.title}')">${removedVideo.title}</li>`;
        shuffledLinks.splice(currentIndex, 1);
    }
    currentIndex=(currentIndex+1)%shuffledLinks.length;
    removeCheckbox.checked=false;
    updateIframe();
});

// Initial load
updateIframe();


// Function to toggle the modal
function toggleModal(modalId) {
    const modal=document.getElementById(modalId);
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}

//Toggle the modal on page load ONLY ONCE (if local storage is not being cleared)
window.onload=function () {
    if (localStorage.getItem("hasCodeRunBefore")===null) {
        toggleModal('modal-id');
        localStorage.setItem("hasCodeRunBefore", true);
    }
}


// localStorage.clear();
