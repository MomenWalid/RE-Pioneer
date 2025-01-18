const header = document.querySelector('header')
const sections = document.querySelectorAll('section');
const scrollToTopButton = document.getElementById('scrollTop')
const projects = document.querySelectorAll(".projects .image");



window.onscroll = function (e) {
    // Make the section Active
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            console.log()
            document.querySelector(`#${section.id} .main-title`) ?
                document.querySelector(`#${section.id} .main-title`).classList.add('active') : ''
        } else {
            document.querySelector(`#${section.id} .main-title`) ?
                document.querySelector(`#${section.id} .main-title`).classList.remove('active') : ''
        }
    })

    // Show the Scroll top buuton
    if (window.scrollY > 3000) {
        scrollToTopButton.classList.add('appear')
    } else {
        scrollToTopButton.classList.remove('appear')
    }

    // Make the header fixed 
    if (window.scrollY > 800) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }

}

// Scroll to top
scrollToTopButton.onclick = function (e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
}

// create popup with images

projects.forEach((img) => {

    img.addEventListener("click", (e) => {

        // create over lay element
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";

        // add overlay to body
        document.body.appendChild(overlay);

        // create the popup
        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        // create img
        let popupImage = document.createElement("img");

        popupImage.src = img.children[0].src;

        // add image to popup box
        popupBox.appendChild(popupImage);

        // add popup box to body
        document.body.appendChild(popupBox);

        // create the close span
        let closeButton = document.createElement("span");

        closeButton.className = "close-button";

        let closeButtonText = document.createTextNode("X");

        // add text to closebutton
        closeButton.appendChild(closeButtonText);

        popupBox.appendChild(closeButton);
    });
});

// close the popup

document.addEventListener("click", (e) => {
    if (e.target.className == "close-button") {
        // remove the current popup
        e.target.parentElement.remove();
        // document.querySelector(".popup-box").remove();

        // remove the overlay
        document.querySelector(".popup-overlay").remove();
    }

    if (!e.target.classList.contains("menuButton")) {
        document.querySelector('.links').classList.remove('open')
    }
});



const menuButton = document.querySelector('.menuIcon')

menuButton.onclick = function () {
    document.querySelector('.links').classList.toggle('open')
}

window.onload = () => {
    document.querySelector('body').remove()
}