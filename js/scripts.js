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
  
  document.addEventListener("DOMContentLoaded", function() {
    createScrollTopButton();
  
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
  
    displayArticles();
  }
  function displayArticles() {
    let newsSection = document.getElementById('news-section');
    newsSection.innerHTML = '';
  
    let newsArticles = JSON.parse(localStorage.getItem('newsArticles') || '[]');
  
    newsArticles.forEach((article, index) => {
      let newsItem = document.createElement('div');
      newsItem.className = 'col-md-4';
  
      let card = document.createElement('div');
      card.className = 'card';
  
      let img = document.createElement('img');
      img.src = article.imageUrl;
      img.className = 'card-img-top';
  
      let cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      let cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.innerText = article.title;
  
      let cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.innerText = article.description;
  
      let removeButton = document.createElement('button');
      removeButton.className = 'btn btn-danger';
      removeButton.innerText = 'Remove Article';
      removeButton.addEventListener('click', function() {
        removeArticle(index);
      });
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(removeButton);
  
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
      displayArticles();
    }
  }
  
  document.addEventListener('DOMContentLoaded', displayArticles);
  
    