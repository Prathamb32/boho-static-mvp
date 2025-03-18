document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  const authButtons = document.querySelector('.auth-buttons');

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      navLinks.classList.toggle('mobile-nav-active');
      authButtons.classList.toggle('mobile-nav-active');
    });
  }

  // Property card click events
  const propertyCards = document.querySelectorAll('.property-card');
  propertyCards.forEach(card => {
    card.addEventListener('click', function() {
      // In a real app, this would navigate to the property details page
      // For our demo, we'll just show an alert
      const propertyTitle = card.querySelector('.property-title').textContent;
      alert(`You selected: ${propertyTitle}. In the full app, this would navigate to the property details page.`);
    });
  });

  // Authentication demo
  const loginBtn = document.querySelector('#login-btn');
  const registerBtn = document.querySelector('#register-btn');
  const userMenu = document.querySelector('#user-menu');

  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      showAuthModal('login');
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener('click', function() {
      showAuthModal('register');
    });
  }

  // Search functionality
  const searchForm = document.querySelector('#search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = document.querySelector('#search-input').value;
      alert(`You searched for: "${searchInput}". In the full app, this would show filtered properties.`);
    });
  }

  // Message demo
  const messageItems = document.querySelectorAll('.message-item');
  const chatInput = document.querySelector('#chat-input');
  const chatSendBtn = document.querySelector('#chat-send-btn');

  messageItems.forEach(item => {
    item.addEventListener('click', function() {
      messageItems.forEach(el => el.classList.remove('active'));
      this.classList.add('active');

      const sender = this.querySelector('.message-sender').textContent.split('\n')[0].trim();
      document.querySelector('.message-detail h3').textContent = `Chat with ${sender}`;
    });
  });

  if (chatInput && chatSendBtn) {
    chatSendBtn.addEventListener('click', function() {
      sendChatMessage();
    });

    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendChatMessage();
      }
    });
  }

  function sendChatMessage() {
    const messageText = chatInput.value.trim();
    if (messageText) {
      const chatBubble = document.createElement('div');
      chatBubble.className = 'chat-bubble outgoing';
      chatBubble.textContent = messageText;

      document.querySelector('.message-chat').appendChild(chatBubble);
      chatInput.value = '';

      // Simulate a response after a short delay
      setTimeout(() => {
        const responseBubble = document.createElement('div');
        responseBubble.className = 'chat-bubble incoming';
        responseBubble.textContent = getAutoResponse(messageText);
        document.querySelector('.message-chat').appendChild(responseBubble);

        // Scroll to bottom
        const chatContainer = document.querySelector('.message-chat');
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 1000);
    }
  }

  function getAutoResponse(message) {
    const responses = [
      "Thanks for your message! I'll get back to you soon.",
      "Great! Looking forward to hosting you.",
      "I'll check my calendar and confirm with you shortly.",
      "Yes, the property is available for those dates.",
      "I'd be happy to answer any other questions you might have.",
      "The check-in time is 3 PM and check-out is at 11 AM.",
      "Wi-Fi password will be provided upon arrival.",
      "There are great restaurants within walking distance!"
    ];

    // For demo purposes, just return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Dashboard tabs
  const dashboardTabs = document.querySelectorAll('.dashboard-tab');
  if (dashboardTabs.length) {
    dashboardTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const target = this.dataset.target;

        // Hide all content
        document.querySelectorAll('.dashboard-content').forEach(content => {
          content.style.display = 'none';
        });

        // Show selected content
        document.querySelector(`.dashboard-content[data-id="${target}"]`).style.display = 'block';

        // Update active tab
        dashboardTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  // Modal handling
  function showAuthModal(type) {
    // In a real app, this would show a modal dialog
    // For our demo, we'll just show an alert
    if (type === 'login') {
      alert('In the full app, this would open a login modal. For the demo, we'll consider you logged in!');
    } else {
      alert('In the full app, this would open a registration modal. For the demo, we'll consider you registered!');
    }

    // Simulate logged in state
    if (loginBtn && registerBtn && userMenu) {
      loginBtn.style.display = 'none';
      registerBtn.style.display = 'none';
      userMenu.style.display = 'flex';
    }
  }

  // Initialize any sliders or carousels
  initializeSliders();

  function initializeSliders() {
    // This is a simplified slider implementation
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
      const slides = slider.querySelectorAll('.slide');
      const prevBtn = slider.querySelector('.slider-prev');
      const nextBtn = slider.querySelector('.slider-next');

      if (!slides.length) return;

      let currentSlide = 0;

      // Show first slide
      showSlide(currentSlide);

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        });
      }

      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
        });
      }
    });
  }
});
