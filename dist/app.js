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

const iframeLinks = [
    'https://www.example.com/page1',
    'https://www.example.com/page2',
    'https://www.example.com/page3'
    // Add more iframe URLs as needed
  ];

  const shuffleButton = document.getElementById('shuffleButton');
  const iframeContainer = document.getElementById('iframeContainer');

  let currentIndex = 0;

  shuffleButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % iframeLinks.length;
    iframeContainer.src = iframeLinks[currentIndex];
  });

  // Initial load
  iframeContainer.src = iframeLinks[currentIndex];