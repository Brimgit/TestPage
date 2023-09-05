// Utility Function to Create Element with attributes
function createElement(tag, attributes = {}, ...children) {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key => element[key] = attributes[key]);
    children.forEach(child => element.appendChild(child));
    return element;
  }
  
  // Scroll Top Button Logic
  function createScrollTopButton() {
    const scrollTopBtn = createElement('button', { id: 'scrollTopBtn', className: 'scroll-top-btn' });
    const arrowImage = createElement('img', { src: '/TestPage/img/arrow.png', className: 'arrow-image' });
    
    scrollTopBtn.appendChild(arrowImage);
    document.body.appendChild(scrollTopBtn);
  
    window.addEventListener('scroll', function() {
      const scrollTopBtn = document.getElementById("scrollTopBtn");
      const footer = document.querySelector(".footer");
      const footerRect = footer.getBoundingClientRect();
      const navbar = document.querySelector(".navbar");
      const navbarRect = navbar.getBoundingClientRect();
  
      if (window.scrollY > 450) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
  
      let arrowBottom = window.innerHeight - footerRect.top + 20;
      scrollTopBtn.style.bottom = footerRect.top < window.innerHeight ? `${arrowBottom}px` : '30px';
  
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
  
  // Typed Text Logic
  function typeText() {
    const text = "A Wieland holding company.";
    const element = document.getElementById("typedText");
    let index = 0;
  
    function appendCharacter() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(appendCharacter, 30);
      }
    }
    appendCharacter();
  }
  
  // jQuery MegaMenu Logic
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

  
  // News Articles Logic
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
  
  // Initializers
  document.addEventListener("DOMContentLoaded", function() {
    createScrollTopButton();
    typeText();
  });
  
  $(document).ready(setupMegaMenu);
  
  window.onload = function() {
    displayArticles();
  }
  