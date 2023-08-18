var scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '30px';
scrollTopBtn.style.right = '30px';
scrollTopBtn.style.display = 'none';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.background = 'none';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.setAttribute('data-aos', 'fade-up'); // Add this line
document.body.appendChild(scrollTopBtn);

var arrowImage = document.createElement('img');
arrowImage.src = '/img/arrow.png'; // Adjust the path to the location of your image
arrowImage.style.width = '40px'; // Adjust the size to fit your design
arrowImage.style.height = '40px';
arrowImage.setAttribute('data-aos', 'fade-up'); // Add this line
scrollTopBtn.appendChild(arrowImage);

window.addEventListener('scroll', function() {
    if (window.scrollY > 450) {
        scrollTopBtn.style.display = 'block';
        AOS.refresh(); // Add this line
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener("scroll", function () {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    var footer = document.querySelector(".footer");
    var footerRect = footer.getBoundingClientRect();
    var arrowBottom = window.innerHeight - footerRect.top + 20;
  
    if (footerRect.top < window.innerHeight) {
      scrollTopBtn.style.bottom = arrowBottom + "px";
    } else {
      scrollTopBtn.style.bottom = "20px";
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const text = "A Wieland holding company.";
    const element = document.getElementById("typedText");
    let index = 0;
  
    function typeText() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 30); // Speed of typing effect
      }
    }
  
    typeText();
  });

