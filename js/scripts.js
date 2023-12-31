function createScrollTopButton() {
    var scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '30px';
    scrollTopBtn.style.right = '30px';
    scrollTopBtn.style.display = 'none';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.background = 'none';
    scrollTopBtn.style.cursor = 'pointer';
    document.body.appendChild(scrollTopBtn);
  
    var arrowImage = document.createElement('img');
    arrowImage.src = '/TestPage/img/arrow.png';
    arrowImage.style.width = '40px';
    arrowImage.style.height = '40px';
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
  }
  
  $(document).ready(function() {
    const megaMenuParent = $('.mega-dropdown');
    const megaMenu = $('.mega-menu');
    megaMenu.hide();
    megaMenuParent.on('click', function() {
      megaMenu.toggle();
    });

    megaMenuParent.on('mouseenter', function() {
      megaMenu.show();
    });
    //the menu opens when u hover over the parent element i want it to stay open for a second even when i am no longer hovering over the parent element
    megaMenuParent.on('mouseover', function() {
      megaMenu.show();
    });
    //the menu closes when u leave the parent element i want it to stay closed for a second even when i am no longer hovering over the parent element
    megaMenuParent.on('mouseleave', function() {
      megaMenu.hide();
    });

    
  });



window.onload = function() {
  displayArticles();
}

function addArticle() {
  let imageUrl = document.getElementById('imageUrl').value;
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;

  let newsArticles = JSON.parse(localStorage.getItem('newsArticles') || '[]');

  let article = {
    imageUrl: imageUrl,
    title: title,
    description: description,
  };

  newsArticles.push(article);

  localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
  console.log('Article added:', article);

  displayArticles();
}

function displayArticles() {
  const newsSection = document.getElementById('news-section');
  newsSection.innerHTML = '';
  const newsArticles = JSON.parse(localStorage.getItem('newsArticles') || '[]');
  const isAdminPage = window.location.href.includes('news-admin.html');

  newsArticles.forEach((article, index) => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('col-md-4');
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src = article.imageUrl;
    img.classList.add('card-img-top');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = article.title;
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = article.description;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    if (isAdminPage) {
      const removeButton = document.createElement('button');
      removeButton.classList.add('btn', 'btn-danger');
      removeButton.textContent = 'Remove Article';
      removeButton.addEventListener('click', function() {
        removeArticle(index);
      });
      cardBody.appendChild(removeButton);
    }

    card.appendChild(img);
    card.appendChild(cardBody);
    newsItem.appendChild(card);
    newsSection.appendChild(newsItem);
  });
}

function removeArticle(index) {
  let newsArticles = JSON.parse(localStorage.getItem('newsArticles') || '[]');
  if (index >= 0 && index < newsArticles.length) {
    newsArticles.splice(index, 1);
    localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
    console.log('Article removed at index:', index);
    displayArticles();
  }
}


let slideIndex = 1;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides[slideIndex].style.opacity = 1;
  slideIndex++;
}
 const element = document.getElementById("typedText");
const text = element.textContent;  // Get existing text from HTML
element.textContent = "";  // Clear it out to start the typing effect
let index = 0;

function typeText() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 30);
  }
}
typeText();
function setInfoBoxPosition() {
  const infoBoxes = document.querySelectorAll('.info-box');
  const windowWidth = window.innerWidth;

  const horizontalMargin = windowWidth * 0.05; // 5% of window width

  infoBoxes.forEach((infoBox) => {
    infoBox.style.marginLeft = `${horizontalMargin}px`;
    infoBox.style.marginRight = `${horizontalMargin}px`;

    if (windowWidth >= 1024) {
      infoBox.style.top = '20px';
      infoBox.style.right = `${horizontalMargin}px`;
      infoBox.style.bottom = 'auto';
      infoBox.style.left = 'auto';
    } else if (windowWidth >= 768) {
      infoBox.style.top = 'auto';
      infoBox.style.right = `${horizontalMargin}px`;
      infoBox.style.bottom = '20px';
      infoBox.style.left = 'auto';
    } else {
      infoBox.style.top = 'auto';
      infoBox.style.right = 'auto';
      infoBox.style.bottom = '20px';
      infoBox.style.left = `${horizontalMargin}px`;
    }
  });
}

// Initial setting
setInfoBoxPosition();

// Update on resize
window.addEventListener('resize', setInfoBoxPosition);
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const url = button.getAttribute('data-url');
          if (url) {
              window.location.href = url; // This will redirect the browser to the URL specified in the data-url attribute
          }
      });
  });
});

setInterval(showSlides, 5000);

// Add an event listener to the "Add Article" button
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addArticle);

  function showDownloads(category) {
  document.getElementById('download-title').innerText = `${category} Downloads`;

  let downloadLinks = [];

  switch (category) {
    case 'Certificates':
      downloadLinks = [
        '14001_UM_engl.pdf',
        'Certificate2.pdf',
      ];
      break;
    case 'Catalogues':
      downloadLinks = [
        'Catalogue1.pdf',
        'Catalogue2.pdf',
      ];
      break;
    case 'JunctionBox Configurator':
      downloadLinks = [
        'test.zip',
        'Configurator2.zip',
      ];
      break;
    case 'General Conditions Of Sale':
      downloadLinks = [
        'Conditions1.pdf',
      ];
      break;
    default:
      break;
  }

  let downloadList = document.getElementById('download-list');
  downloadList.innerHTML = '';

  for (let link of downloadLinks) {
    let listItem = document.createElement('li');

    let downloadContainer = document.createElement('div');
    downloadContainer.className = 'download-container';

    // File Info and Icon
    let fileInfo = document.createElement('div');
    fileInfo.className = 'file-info';

    let fileIcon = document.createElement('img');
    fileIcon.className = 'file-icon';
    fileIcon.src = getFileIcon(link);
    fileIcon.width = 24;
    fileIcon.height = 24;

    let fileName = document.createElement('span');
    fileName.innerText = link;

    fileInfo.appendChild(fileIcon);
    fileInfo.appendChild(fileName);

    // Download button
    let anchor = document.createElement('a');
    anchor.className = 'btn';
    anchor.href = `downloads/${link}`;
    anchor.innerText = `Download`;
    anchor.target = '_blank';

    downloadContainer.appendChild(fileInfo);
    downloadContainer.appendChild(anchor);
    listItem.appendChild(downloadContainer);
    downloadList.appendChild(listItem);
  }
}

function getFileIcon(filename) {
  let ext = filename.split('.').pop().toLowerCase();
  let icon = '';
  switch (ext) {
    case 'pdf':
      icon = 'img/pdf-icon.png';
      break;
    case 'zip':
      icon = 'img/zip-icon.png';
      break;
      case 'mp4':
      icon = 'img/mp4-icon.png';
      break;
      case 'xls':
      icon = 'img/xls-icon.png';
      break;
    // Add more file types and icons here
    default:
      icon = '';
      break;
  }
  return icon;
}


