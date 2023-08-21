var scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '30px';
scrollTopBtn.style.right = '30px';
scrollTopBtn.style.display = 'none';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.background = 'none';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.setAttribute('data-aos', 'fade-up');
document.body.appendChild(scrollTopBtn);

var arrowImage = document.createElement('img');
arrowImage.src = '/TestPage/img/arrow.png';
arrowImage.style.width = '40px';
arrowImage.style.height = '40px';
arrowImage.setAttribute('data-aos', 'fade-up');
scrollTopBtn.appendChild(arrowImage);

window.addEventListener('scroll', function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    var footer = document.querySelector(".footer");
    var footerRect = footer.getBoundingClientRect();
    var navbar = document.querySelector(".navbar");
    var navbarRect = navbar.getBoundingClientRect();

    // Show the button if scroll position is greater than 450px
    if (window.scrollY > 450) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }

    // Adjust the bottom position to avoid overlapping with the footer
    var arrowBottom = window.innerHeight - footerRect.top + 20;
    if (footerRect.top < window.innerHeight) {
        scrollTopBtn.style.bottom = arrowBottom + "px";
    } else {
        scrollTopBtn.style.bottom = "30px";
    }

    // Hide the button if it overlaps with the navbar
    if (navbarRect.bottom > 0 && scrollTopBtn.getBoundingClientRect().top < navbarRect.bottom) {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "A Wieland holding company.";
    const element = document.getElementById("typedText");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 30);
        }
    }

    typeText();
});

$(document).ready(function() {
    // Reference to the mega menu parent element
    const megaMenuParent = $('.mega-dropdown');
  
    // Reference to the mega menu
    const megaMenu = $('.mega-menu');
  
    // Handle hovering over the mega menu parent
    megaMenuParent.on('mouseenter', function() {
      megaMenu.show(); // Show the mega menu
    });
  
    // Handle moving the cursor out of the mega menu parent
    megaMenuParent.on('mouseleave', function() {
      megaMenu.hide(); // Hide the mega menu
    });
  });
  