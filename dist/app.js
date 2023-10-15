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
    //{ link: 'https://www.youtube.com/embed/"VIDEOID"?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist="VIDEOID"', title: 'TITLE' },

    { link: 'https://www.youtube.com/embed/tTbpoaOmPtQ?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=tTbpoaOmPtQ', title: 'CT Smoke' },
    { link: 'https://www.youtube.com/embed/PSBv8fxvS10?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=PSBv8fxvS10', title: 'GeT_Left Smoke' },
    { link: 'https://www.youtube.com/embed/2Zo0YHx8Gx8?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=2Zo0YHx8Gx8', title: 'UpperMid to Window Smoke' },
    { link: 'https://www.youtube.com/embed/Og1NU4UA4Fg?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=Og1NU4UA4Fg', title: 'Underpass to Cat Smoke' },
    { link: 'https://www.youtube.com/embed/QgTLPDdUfdY?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=QgTLPDdUfdY', title: 'GeT_RiGhT Smoke' },
    { link: 'https://www.youtube.com/embed/yrVBNHSWYEQ?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=yrVBNHSWYEQ', title: 'Market Window Smoke' },
    { link: 'https://www.youtube.com/embed/fk-NPxkWS_8?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=fk-NPxkWS_8', title: 'Window Smoke' },
    { link: 'https://www.youtube.com/embed/dOCdLL9J0Cw?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=dOCdLL9J0Cw', title: 'Cat Smoke' },
    { link: 'https://www.youtube.com/embed/o_AqVvKNV6E?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=o_AqVvKNV6E', title: 'Connector Smoke' },
    { link: 'https://www.youtube.com/embed/onVZcwCvx2A?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=onVZcwCvx2A', title: 'Jungle Smoke' },
    { link: 'https://www.youtube.com/embed/cBM32QV2nGs?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&vq=hd1080&playlist=cBM32QV2nGs', title: 'Stairs Smoke (Align right side of logo on bottom of screen)' },

];

let shuffledLinks=shuffleArray(originalIframeLinks);
let currentIndex=0;

const mirageMap=document.getElementById("mirageMap");
const mirageMapSmall=document.getElementById("mirageMapSmall");
const prevButton=document.getElementById('prevButton');
const nextButton=document.getElementById('nextButton');
const iframeContainer=document.getElementById('iframeContainer');
const removeCheckbox=document.getElementById('removeCheckbox');
const removedVideosListTitle=document.getElementById('removedVideosListTitle');
const removedVideosList=document.getElementById('removedVideosList');
const dontShowAgainCheckbox=document.getElementById('dontShowAgainCheckbox');
const finishedArrayModal=document.getElementById('finishedArrayModal');
const iKnowThisLineupDiv=document.getElementById('iKnowThisLineup');

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
    updateRemovedVideosListVisibility(); // Call the function after modifying the list
}

prevButton.addEventListener('click', () => {
    if (removeCheckbox.checked) {
        const removedVideo=shuffledLinks[currentIndex];
        removedVideosList.innerHTML+=`<li class="removedVideos cursor-pointer underline text-light-text text-center" id="${removedVideo.title}" title="Add back to end of shuffle" onclick="addVideoBackToShuffle('${removedVideo.link}', '${removedVideo.title}')">${removedVideo.title}</li>`;
        shuffledLinks.splice(currentIndex, 1);
        currentIndex=Math.max(currentIndex-1, 0);
        updateRemovedVideosListVisibility(); // Call the function after modifying the list
    } else {
        currentIndex=(currentIndex-1+shuffledLinks.length)%shuffledLinks.length;
    }
    removeCheckbox.checked=false;
    updateIframe();
});

nextButton.addEventListener('click', () => {
    if (removeCheckbox.checked) {
        const removedVideo=shuffledLinks[currentIndex];
        removedVideosList.innerHTML+=`<li class="removedVideos cursor-pointer underline text-light-text text-center" id="${removedVideo.title}" title="Click to add back to end of shuffle" onclick="addVideoBackToShuffle('${removedVideo.link}', '${removedVideo.title}')">${removedVideo.title}</li>`;
        shuffledLinks.splice(currentIndex, 1);
        updateRemovedVideosListVisibility(); // Call the function after modifying the list
    }
    // Check if there are list elements inside the removedVideosList
    if (removedVideosList.children.length>0) {
        // Remove the "hidden" class if there are list elements
        removedVideosList.classList.remove('hidden');
        removedVideosListTitle.classList.remove('hidden');
        removedVideosListTitle.classList.add('flex');
    }
    currentIndex=(currentIndex+1)%shuffledLinks.length;
    removeCheckbox.checked=false;
    updateIframe();
});

function updateRemovedVideosListVisibility() {
    if (removedVideosList.children.length>0) {
        removedVideosList.classList.remove('hidden');
        removedVideosListTitle.classList.remove('hidden');
        removedVideosListTitle.classList.add('flex');
    } else {
        removedVideosList.classList.add('hidden');
        removedVideosListTitle.classList.add('hidden');
        removedVideosListTitle.classList.remove('flex');
    }
}

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

//"Don't Show this again checkbox" event lisenter
dontShowAgainCheckbox.addEventListener('change', function () {
    if (dontShowAgainCheckbox.checked) {
        // Save the state in localStorage so it persists across page reloads
        localStorage.setItem('dontShowModal', 'true');
    } else {
        // Remove the state from localStorage
        localStorage.removeItem('dontShowModal');
    }
})
//"Don't Show this again checkbox" div event listener
iKnowThisLineupDiv.addEventListener('click', function () {
    // Toggle the state of the removeCheckbox
    removeCheckbox.checked=!removeCheckbox.checked;
});

// Function to show the "finishedArrayModal"
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
    removeCheckbox.checked=false; //Uncheck the "I know this lineup" checkbox
}

// Event listener for the "CLOSE" button in the "Finished Array Modal"
finishedArrayModal.querySelector('button').addEventListener('click', function () {
    resetShuffle();
    removedVideosList.classList.add('hidden');
    removedVideosListTitle.classList.add('hidden');
    removedVideosListTitle.classList.remove('flex');
});


// Event listener for the "I know this lineup" checkbox
removeCheckbox.addEventListener('change', function () {
    if (removeCheckbox.checked) {
        if (shuffledLinks.length===1) {
            toggleFinishedArrayModal();
        }
    }
});

// Event listener for the "I know this lineup" div
iKnowThisLineupDiv.addEventListener('click', function () {
    if (removeCheckbox.checked) {
        if (shuffledLinks.length===1) {
            toggleFinishedArrayModal();
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
