function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnim = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnim.top + "px", 
        "left": itemPosNewAnim.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
}

$(document).ready(function(){
    setTimeout(function(){ test(); });
    // Set "About" as the active section
    activateLink(document.querySelector('#nav-about .nav-link'));
});
$(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function(){ test(); });
});

function activateLink(element) {
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');
    navItems.forEach((item) => {
        item.classList.remove('active');
    });

    // Add active class to the clicked nav item
    element.parentElement.classList.add('active');

    // Scroll to section
    const url = element.getAttribute('data-url');
    document.querySelector(url).scrollIntoView({ behavior: 'smooth' });

    // Update hori-selector position
    var activeItemNewAnim = $(element).parent();
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnim = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnim.top + "px", 
        "left": itemPosNewAnim.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
}
document.getElementById("downloadButton").addEventListener("click", function() {
    // Start downloading the PDF file
    const link = document.createElement('a');
    link.href = 'asset/pdf/MD.Mostafizur Rahman CV.pdf'; // Replace with the actual path to your PDF
    link.download = 'MD.Mostafizur Rahman CV.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    
    // Remove the link after download
    document.body.removeChild(link);
    
    // Trigger a function after the PDF is downloaded
    link.addEventListener('click', function() {
        afterDownload();
    });
});

function afterDownload() {
    alert("PDF Downloaded!"); // Replace this with your desired action
}



const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);

// Initial check to show boxes already in view
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}









// Get the button, form, and close elements
const openFormBtn = document.getElementById('openFormBtn');
const popupForm = document.getElementById('popupForm');
const closeFormBtn = document.getElementById('closeFormBtn');
const contactForm = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Open the form with animation
openFormBtn.addEventListener('click', () => {
    popupForm.classList.remove('fade-out');
    popupForm.style.display = 'flex';
});

// Close the form with animation
closeFormBtn.addEventListener('click', () => {
    popupForm.classList.add('fade-out');
    setTimeout(() => {
        popupForm.style.display = 'none';
    }, 500); // Match this with the fadeOut animation duration
});

// Close the form when clicking outside the form container with animation
window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.classList.add('fade-out');
        setTimeout(() => {
            popupForm.style.display = 'none';
        }, 500); // Match this with the fadeOut animation duration
    }
});

// Handle form submission
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission

    // Hide the form and show the thank you message
    contactForm.style.display = 'none';
    thankYouMessage.style.display = 'block';
});



