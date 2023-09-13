//Small screen functionality
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

    { link: 'https://www.youtube.com/embed/j2qzVCj0BwI?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd720&playlist=j2qzVCj0BwI', title: 'Stairs Smoke from T Roof' },
    { link: 'https://www.youtube.com/embed/C3_cFIGT-ik?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd720&playlist=C3_cFIGT-ik', title: 'SCOOTING IS BETTER THAN SKATEBOARDING' },
    { link: 'https://www.youtube.com/embed/DTUYGgP3jBc?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=DTUYGgP3jBc', title: 'Mirage Jungle and Connector Smoke from T Roof' },
    { link: 'https://www.youtube.com/embed/qkqJdYzkVLk?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=qkqJdYzkVLk', title: 'Mirage Stairs Smoke from Tetris' }
];

let shuffledLinks=shuffleArray(originalIframeLinks);
let currentIndex=0;

const mirageMap=document.getElementById("mirageMap");
const mirageMapSmall=document.getElementById("mirageMapSmall");
const prevButton=document.getElementById('prevButton');
const nextButton=document.getElementById('nextButton');
const iframeContainer=document.getElementById('iframeContainer');
const removeCheckbox=document.getElementById('removeCheckbox');
const removedVideosList=document.getElementById('removedVideosList');
const dontShowAgainCheckbox=document.getElementById('dontShowAgainCheckbox');
const finishedArrayModal=document.getElementById('finishedArrayModal');

function shuffleArray(array) {
    const shuffledArray=[...array];
    for (let i=shuffledArray.length-1; i>0; i--) {
        const j=Math.floor(Math.random()*(i+1));
        [shuffledArray[i], shuffledArray[j]]=[shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function updateButtons() {
    // prevButton.disabled=currentIndex===0;
    // nextButton.disabled=currentIndex===shuffledLinks.length-1;
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
        removedVideosList.innerHTML+=`<li class="removedVideos cursor-pointer underline" id="${removedVideo.title}" title="Add back to end of shuffle" onclick="addVideoBackToShuffle('${removedVideo.link}', '${removedVideo.title}')">${removedVideo.title}</li>`; shuffledLinks.splice(currentIndex, 1);
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
        removedVideosList.innerHTML+=`<li class="removedVideos cursor-pointer underline" id="${removedVideo.title}" title="Click to add back to end of shuffle" onclick="addVideoBackToShuffle('${removedVideo.link}', '${removedVideo.title}')">${removedVideo.title}</li>`;
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

// Check if the "Don't show this again" option is set in localStorage
const dontShowModal=localStorage.getItem('dontShowModal');
// If it's not set or set to false, show the modal
if (!dontShowModal||dontShowModal!=='true') {
    toggleModal('modal-id');
}

//"Don't Show this again checkbox" event lisinter
dontShowAgainCheckbox.addEventListener('change', function () {
    if (dontShowAgainCheckbox.checked) {
        // Save the state in localStorage so it persists across page reloads
        localStorage.setItem('dontShowModal', 'true');
    } else {
        // Remove the state from localStorage
        localStorage.removeItem('dontShowModal');
    }
})

// Function to toggle the "finishedArrayModal"
function toggleFinishedArrayModal() {
    finishedArrayModal.classList.toggle('hidden');
    finishedArrayModal.classList.toggle('flex');
}

// Function to reset the shuffleArray and removedVideosList
function resetShuffle() {
    shuffledLinks=shuffleArray(originalIframeLinks);
    removedVideosList.innerHTML=''; // Clear the removedVideosList
    currentIndex=0;
    updateIframe();
    toggleFinishedArrayModal(); // Hide the "Finished Array Modal"
    // Uncheck the "I know this lineup" checkbox
    removeCheckbox.checked=false;
}

// Event listener for the "Go again!" button in the "Finished Array Modal"
finishedArrayModal.querySelector('button').addEventListener('click', function () {
    resetShuffle();
});


// Event listener for the "I know this lineup" checkbox
removeCheckbox.addEventListener('change', function () {
    if (removeCheckbox.checked) {
        const isLastVideo=currentIndex===shuffledLinks.length-1;
        if (isLastVideo) {
            toggleFinishedArrayModal(); // Show the "finishedArrayModal"
        }
    }
});

// reload page
function reloadPage() {
    location.reload();
}

mirageMap.addEventListener("click", reloadPage);
mirageMapSmall.addEventListener("click", reloadPage);


// localStorage.clear();
