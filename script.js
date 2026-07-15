/* ==========================================================================
   Project: Ibrahim Samir - Portfolio Web Application
   Script File: script.js
   Description: Fully responsive interactivity including Preloader, Theme Switching,
                Scroll Reveal Observer, Portfolio Filtering, Modal Details Popup,
                Interactive Services Quote Estimator, FAQ Accordion & WhatsApp Integration.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. PRELOADER & LOADING SCREEN
  // ------------------------------------------------------------------------
  const loadingScreen = document.getElementById('loading-screen');
  const loaderFill = document.querySelector('.loader-bar-fill');
  const loaderPercent = document.querySelector('.loader-text');

  if (loadingScreen && loaderFill) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          loadingScreen.classList.add('hidden');
          initScrollReveal();
          animateSkills();
        }, 300);
      }
      loaderFill.style.width = `${progress}%`;
      if (loaderPercent) loaderPercent.textContent = `${progress}% LOADING CREATIVITY`;
    }, 60);
  } else {
    initScrollReveal();
  }

  // ------------------------------------------------------------------------
  // 2. STICKY HEADER & NAVBAR SCROLL EFFECT
  // ------------------------------------------------------------------------
  const header = document.querySelector('.header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ------------------------------------------------------------------------
  // 3. THEME TOGGLER (DARK / LIGHT MODE)
  // ------------------------------------------------------------------------
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('ibrahim_theme') || 'dark';

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }

  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ibrahim_theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'light') {
      themeToggle.innerHTML = `
        <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/></svg>
      `;
    } else {
      themeToggle.innerHTML = `
        <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25m-13.5 0H3m15.364 6.364l-1.591-1.591M6.758 6.758L5.167 5.167m12.728 0l-1.591 1.591M6.758 17.242l-1.591 1.591M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"/></svg>
      `;
    }
  }

  // ------------------------------------------------------------------------
  // 4. MOBILE NAVIGATION DRAWER
  // ------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileClose = document.getElementById('mobile-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileMenu?.classList.add('open');
    mobileOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu?.classList.remove('open');
    mobileOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openMobileMenu);
  mobileClose?.addEventListener('click', closeMobileMenu);
  mobileOverlay?.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ------------------------------------------------------------------------
  // 5. SCROLL REVEAL OBSERVER
  // ------------------------------------------------------------------------
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
  }

  // Animate skill bars when in view
  function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percent');
      if (percentage) {
        bar.style.width = `${percentage}%`;
      }
    });
  }

  // ------------------------------------------------------------------------
  // 6. PORTFOLIO FILTERING SYSTEM
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 7. PROJECT DETAILS MODAL POPUP DATA & HANDLER
  // ------------------------------------------------------------------------
  const modalData = {
    "1": {
      title: "هوية بصرية كاملة - شركة لومينار للتكنولوجيا",
      category: "الهويات البصرية",
      client: "Luminar Tech Solutions",
      year: "2024",
      software: ["Illustrator", "Photoshop", "InDesign"],
      deliverables: ["الشعار الأساسي والفرعي", "الدليل الارشادي للعلامة", "الأوراق الرسمية والكروت", "قوالب السوشيال ميديا"],
      colors: ["#0f172a", "#f59e0b", "#06b6d4", "#f8fafc"],
      description: "بناء هوية بصرية فاخرة وحديثة لشركة متخصصة في الذكاء الاصطناعي والحلول الرقمية. تم تصميم الشعار بأسلوب الهندسة الذهبية ليعكس التقدم والموثوقية، مع لوحة ألوان تجمع بين اللون الكحلي الفاخر والذهبي العصري."
    },
    "2": {
      title: "سلسلة بوسترات - مهرجان أفق السينمائي",
      category: "البوسترات للإعلانات",
      client: "Horizon Film Festival",
      year: "2024",
      software: ["Photoshop", "Lightroom"],
      deliverables: ["بوستر الإعلان الرئيسي", "ملصقات الطرق والفعاليات", "دليل الأفلام المطبوع"],
      colors: ["#050508", "#e11d48", "#38bdf8", "#ffffff"],
      description: "تصميم بوسترات سينمائية ذات طابع درامي ومستقبلي يعتمد على التباين العالي والتيبوجرافي الجريء. حازت السلسلة على إشادة واسعة لتميزها في جذب الجمهور المستهدف وتجسيد روح السينما المستقلة."
    },
    "3": {
      title: "تصميم منيو فاخر - مطعم لا كوزين الراقي",
      category: "تصميم المنيو والمطبوعات",
      client: "La Cuisine Restaurant & Cafe",
      year: "2024",
      software: ["InDesign", "Illustrator"],
      deliverables: ["منيو فاخر جلدي مطبوع", "منيو كيو آر كود تفاعلي", "تصميم كروت الحجز"],
      colors: ["#14110f", "#d4af37", "#f4f1de", "#2b2d42"],
      description: "ابتكار منيو طعام عصري بلمسات من الرقي الفرنسي والأصالة الشرقية. تم تنظيم العناصر بعناية فائقة مع اختيار خطوط فاخرة وتوزيع صور ومكونات الأطباق بأسلوب مريح للعين يُحفّز تجربة العميل."
    },
    "4": {
      title: "حملة سوشيال ميديا - علامة الساعات الملكية VIP",
      category: "تصاميم السوشيال ميديا",
      client: "Royal Chrono Watches",
      year: "2023",
      software: ["Photoshop", "Illustrator"],
      deliverables: ["20 منشور إنستغرام وسناب شات", "تصاميم ستوري متحركة", "بنرات الحملات الإعلانية المدفوعة"],
      colors: ["#0b0e14", "#d97706", "#1e293b", "#ffffff"],
      description: "إخراج حملة بصرية متكاملة لمنصات التباصل الاجتماعي تسلط الضوء على فخامة الساعات والدقة السويسرية. تم استخدام توزيع إضاءات احترافي وظلال ناعمة تجعل المنتج يتصدر المشهد."
    },
    "5": {
      title: "كروت أعمال فاخرة - جولدلاين للاستشارات",
      category: "كروت الأعمال والمطبوعات",
      client: "GoldLine VIP Consulting",
      year: "2023",
      software: ["Illustrator", "Photoshop"],
      deliverables: ["كارت عمل معدني بارز", "ختم العلامة الذهبي", "مغلفات فاخرة"],
      colors: ["#090a0f", "#e2b714", "#1e2430", "#ffffff"],
      description: "تصميم كروت VIP بأسلوب Luxury Minimal بلمسات التذهيب البارز (Gold Foil) على الورق الأسود الفاخر المخملي، ليترك انطباعًا فورياً بالاحترافية والثقة من اللقاء الأول."
    },
    "6": {
      title: "تصميم بنرات إعلانية - منصة أكاديمية المستقبل",
      category: "البنرات الإعلانية",
      client: "Future Academy Platform",
      year: "2023",
      software: ["Photoshop", "Figma"],
      deliverables: ["بنرات الموقع الإلكتروني", "بنرات منصات جوجل الإعلانية", "تصاميم المعارض المباشرة"],
      colors: ["#0f172a", "#10b981", "#3b82f6", "#ffffff"],
      description: "تصميم بنرات إعلانية عالية التحويل (High-Converting Banners) للمنصات الرقمية والمعارض، تم الاعتماد فيها على كول تو أكشن واضح وألوان جذابة تحقق أعلى معدل انقر ونقر."
    }
  };

  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalClient = document.getElementById('modal-client');
  const modalYear = document.getElementById('modal-year');
  const modalSoftware = document.getElementById('modal-software');
  const modalDescription = document.getElementById('modal-description');
  const modalDeliverables = document.getElementById('modal-deliverables');
  const modalColors = document.getElementById('modal-colors');
  const modalCanvasContainer = document.getElementById('modal-canvas-container');
  const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const data = modalData[id];

      if (!data) return;

      if (modalTitle) modalTitle.textContent = data.title;
      if (modalCategory) modalCategory.textContent = data.category;
      if (modalClient) modalClient.textContent = data.client;
      if (modalYear) modalYear.textContent = data.year;
      if (modalDescription) modalDescription.textContent = data.description;

      // Software list
      if (modalSoftware) {
        modalSoftware.innerHTML = data.software.map(s => `<span class="software-tag">${s}</span>`).join(' ');
      }

      // Deliverables list
      if (modalDeliverables) {
        modalDeliverables.innerHTML = data.deliverables.map(d => `<li>✦ ${d}</li>`).join('');
      }

      // Color swatches
      if (modalColors) {
        modalColors.innerHTML = data.colors.map(c => `<div class="swatch" style="background-color: ${c};" title="${c}"></div>`).join('');
      }

      // Copy SVG canvas from preview wrapper into modal preview
      const previewCanvas = card.querySelector('.project-preview-wrapper').innerHTML;
      if (modalCanvasContainer) {
        modalCanvasContainer.innerHTML = previewCanvas;
      }

      // Dynamic Modal WhatsApp Link
      if (modalWhatsappBtn) {
        const textMsg = encodeURIComponent(`السلام عليكم، شاهدت مشروع "${data.title}" وأرغب في الاستفسار عن تصميم مشروع مشابه.`);
        modalWhatsappBtn.href = `https://wa.me/201015335310?text=${textMsg}`;
      }

      modalOverlay?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  modalClose?.addEventListener('click', () => {
    modalOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  });

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ------------------------------------------------------------------------
  // 8. INTERACTIVE SERVICES QUOTE ESTIMATOR / CALCULATOR
  // ------------------------------------------------------------------------
  const serviceChips = document.querySelectorAll('.service-select-chip');
  const timeChips = document.querySelectorAll('.time-chip');
  const selectedServicesText = document.getElementById('quote-selected-services');
  const selectedTimeframeText = document.getElementById('quote-selected-timeframe');
  const quoteWhatsappBtn = document.getElementById('quote-whatsapp-btn');

  let selectedServices = ["Logo Design & Branding"];
  let selectedTimeframe = "قياسي (5-7 أيام)";

  function updateQuoteSummary() {
    if (selectedServicesText) {
      selectedServicesText.textContent = selectedServices.length > 0 ? selectedServices.join('، ') : "لم يتم التحديد";
    }
    if (selectedTimeframeText) {
      selectedTimeframeText.textContent = selectedTimeframe;
    }

    if (quoteWhatsappBtn) {
      const message = `السلام عليكم الأستاذ إبراهيم سمير، أرغب في طلب تصميم مع التفاصيل التالية:\n\n` +
                      `✦ الخدمات المطلوبة: ${selectedServices.join('، ')}\n` +
                      `✦ مدة التنفيذ المعتمدة: ${selectedTimeframe}\n\n` +
                      `أرجو إفادتي بالتكلفة المحددة وخطوات البدء.`;
      quoteWhatsappBtn.href = `https://wa.me/201015335310?text=${encodeURIComponent(message)}`;
    }
  }

  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      const val = chip.getAttribute('data-value');

      if (chip.classList.contains('selected')) {
        if (!selectedServices.includes(val)) selectedServices.push(val);
      } else {
        selectedServices = selectedServices.filter(s => s !== val);
      }
      updateQuoteSummary();
    });
  });

  timeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      timeChips.forEach(t => t.classList.remove('selected'));
      chip.classList.add('selected');
      selectedTimeframe = chip.getAttribute('data-time') || "قياسي";
      updateQuoteSummary();
    });
  });

  updateQuoteSummary();

  // ------------------------------------------------------------------------
  // 9. FAQ ACCORDION HANDLER
  // ------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const faqHeader = item.querySelector('.faq-header');
    faqHeader?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other accordions
      faqItems.forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 10. CONTACT FORM TO DIRECT WHATSAPP HANDLER
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const service = document.getElementById('form-service')?.value.trim();
    const message = document.getElementById('form-message')?.value.trim();

    if (!name || !message) {
      alert('يرجى ملء الاسم والرسالة أولاً.');
      return;
    }

    const formattedMessage = `السلام عليكم، أنا ${name}\n` +
                             (phone ? `رقم التواصل: ${phone}\n` : '') +
                             (service ? `الخدمة المطلوبة: ${service}\n` : '') +
                             `الرسالة: ${message}`;

    const waUrl = `https://wa.me/201015335310?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, '_blank');
  });

});
