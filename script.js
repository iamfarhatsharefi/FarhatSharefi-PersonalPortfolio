document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const navLinksItems = navLinks.querySelectorAll('a');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID "${id}" not found.`);
    }
  };

  menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
      menuIcon.innerHTML = '&#9776;';
    } else {
      navLinks.style.display = 'flex';
      menuIcon.innerHTML = '&times;';
    }
  });

  navLinksItems.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSectionId = link.getAttribute('href').substring(1);
      scrollToSection(targetSectionId);
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
        menuIcon.innerHTML = '&#9776;';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.getElementById('logo');
  const logoText = 'MEHR';
  logoElement.textContent = logoText;
  const myName = '<h2 class ="hello">Hello there,<span class="highlight">I`m</span></h2>';
  const myIntro = ` I’m a passionate <span class="highlight">web development</span> student and <span class="highlight">A Junior Web Developer</span> from <span class = "highlight">Afghanistan</span>. My journey in technology began with a Bachelor’s degree in Software Engineering, which provided me with a strong foundation in computer science. I’m constantly 
  <span class ="highlight">eager</span> to expand my knowledge and skills, which is why I’m also currently enrolled in a Python class to further deepen my programming expertise.
Beyond coding, I am enthusiastic about collaborating with others and sharing knowledge. I believe in the power of teamwork and am always open to new ideas and perspectives. My goal is to not only build functional and aesthetically pleasing web applications but also to make a positive impact through my work.`;
  const headline = document.getElementById('headline');
  const intro = document.getElementById('intro');
  headline.innerHTML = myName;
  intro.innerHTML = myIntro;
  document.querySelectorAll('.highlight').forEach((element) => {
    element.style.fontWeight = 'bold';
    element.style.color = '#F9A826';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const aboutContent = {
    description: `
  I am Mehria Saqibi, a dedicated and passionate junior web developer with a Bachelor's degree in Computer Science. Over the past few years, I have cultivated a diverse skill set and a deep understanding of various facets of technology through a range of professional experiences.<br>
  My technical expertise spans across web development,where I specialize in creating elegant and efficient web solutions. I am proficient in HTML, CSS, and JavaScript, and continuously strive to expand my knowledge by learning new technologies and best practices. My projects reflect a commitment to quality and a keen eye for detail, ensuring that every solution I develop is both functional and aesthetically pleasing.
    `,
    
    skills: [
      {  image: 'images/html-5 2.png', name: 'HTML', alt: 'HTML' },
      {  image: 'images/css-3 2.png', name: 'Css', alt: 'CSS' },
      {  image: 'images/java-script 2.png', name: 'JavaScript', alt: 'JavaScript' },
    ],
    certifications: [
      { title: 'Responsive Web Design', image: 'images/responsive.png', link: 'https://link-to-certificate1' },
      { title: 'Java Script', image: 'images/js.png', link: 'https://link-to-certificate2' },
      // Add more certifications as needed
    ],
  };

  const dynamicHeadlines = [
    'About Me',
    'Junior Web Developer'
  ];


  const headlineContainer = document.getElementById('dynamic-headlines');
  dynamicHeadlines.forEach(headlineText => {
    const headline = document.createElement('h2');
    headline.innerHTML = `<span class="highlight"></span>
    <span class="highlight">${headlineText}</span>`;
    headlineContainer.appendChild(headline);
  });
  const aboutContentDiv = document.getElementById('about-content');
  const skillsExperiencesDiv = document.getElementById('skills-experiences');
  const certificationContentDiv = document.getElementById('certification-content');

  // Populate description
  const descriptionSpan = document.createElement('span');
  descriptionSpan.innerHTML = aboutContent.description;
  aboutContentDiv.appendChild(descriptionSpan);

  // Populate skills
  aboutContent.skills.forEach((skill) => {
    const skillSpan = document.createElement('span');
    skillSpan.textContent = skill.name;
    const skillImage = document.createElement('img');
    skillImage.src = skill.image;
    skillImage.alt = skill.alt;
    skillsExperiencesDiv.appendChild(skillSpan);
    skillsExperiencesDiv.appendChild(skillImage);
  });

  // Populate certifications
  aboutContent.certifications.forEach((cert) => {
    const certDiv = document.createElement('div');
    const certTitle = document.createElement('h4');
    certTitle.textContent = cert.title;
    const certLink = document.createElement('a');
    certLink.href = cert.link;
    certLink.target = '_blank';
    const certImage = document.createElement('img');
    certImage.src = cert.image;
    certImage.alt = cert.title;
    certLink.appendChild(certImage);
    certDiv.appendChild(certTitle);
    certDiv.appendChild(certLink);
    certificationContentDiv.appendChild(certDiv);
  });
  
  // Add the "My Skills" heading with icon dynamically
  const skillsHeading = document.createElement('h3');
  skillsHeading.innerHTML = `My<span class="highlight"> Skills:</span>`;
  const skillsArrow = document.createElement('i');
  skillsArrow.className = 'bx bx-chevron-down';
  skillsArrow.id = 'skills-arrow';
  
  skillsHeading.appendChild(skillsArrow);
  skillsExperiencesDiv.parentElement.insertBefore(skillsHeading, skillsExperiencesDiv);
   
  document.querySelectorAll('.highlight').forEach((element) => {
    element.style.fontWeight = 'bold';
    element.style.color = '#F9A826';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const projects = [
  {
    title: 'Survey Form',
    shortDescription: "The form is designed to gather feedback about an English Program. It starts with a title and description explaining the purpose of the survey.",
    longDescription: "Welcome to the English Program Survey Form project description! This survey form is part of an initiative to gather feedback and insights from participants enrolled in our English program. The aim is to enhance the program's effectiveness, relevance, and overall learning experience based on community feedback.",
    image: 'photo/survey-form.png',
    screenshots: ['images/survey-form.png'],
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://iamfarhatsharefi.github.io/Survey-Form/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Survey-Form/pulls',
  },
  {
    title: 'Technical Documentation Page',
    shortDescription: "This project is a Technical Documentation Page dedicated to HTML, showcasing fundamental concepts and syntax.",
    longDescription: "The Technical Documentation Page project on HTML is a meticulously crafted resource designed to educate and empower learners and developers in mastering Hypertext Markup Language (HTML). Built entirely using HTML for structure and CSS for styling, this webpage serves as a comprehensive guide covering essential HTML concepts, tags, attributes, and best practices.",
    image: "photo/documentation-page.png",
    screenshots: ['photo/documentation-page.png'],
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://iamfarhatsharefi.github.io/Technical-documentation/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Technical-documentation/pulls',
  },
  {
    title: 'Product Landing Page',
    shortDescription: "This project is a Product Landing Page dedicated to the Gucci brand, showcasing their luxury fashion products. Created with HTML, styled using CSS",
    longDescription: "The Product Landing Page project focused on the Gucci brand offers a captivating digital experience that celebrates the essence of luxury fashion. Crafted with HTML for structure, CSS for styling, and JavaScript for dynamic elements, this webpage serves as a virtual gateway to explore Gucci's prestigious line of products.",
    image: 'photo/landing page.png',
    screenshots: ['photo/landing page.png'],
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://iamfarhatsharefi.github.io/product-landing-page/',
    sourceLink: 'https://github.com/iamfarhatsharefi/product-landing-page/pulls',
  },
  {
    title: 'Personal Portfolio Webpage',
    shortDescription: "My Personal Portfolio Webpage is a showcase of my skills and projects in web development. Built with HTML, CSS",
    longDescription: "The Personal Portfolio Webpage represents a culmination of my journey and achievements in web development, designed to introduce visitors to my skills, projects, and professional profile. Developed using HTML, CSS, and JavaScript, this interactive webpage serves as a comprehensive hub where potential employers, clients, or collaborators can explore my capabilities and contributions to the field.",
    image: 'photo/portfolio.png',
    screenshots: ['photo/portfolio.png'],
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://iamfarhatsharefi.github.io/personal-portfolio/',
    sourceLink: 'https://github.com/iamfarhatsharefi/personal-portfolio/pulls',
  },
  {
    title: 'Palindrome Checker',
    shortDescription: "Palindrome Checker is a web application designed to determine whether a given string is a palindrome. Developed using HTML, CSS, and JavaScript",
    longDescription: "Palindrome Checker is an innovative web application developed to determine whether a given string is a palindrome, meaning it reads the same forwards and backwards. This project is built using HTML, CSS, and JavaScript, demonstrating my proficiency in front-end web development and interactive design.",
    image: 'photo/picture1.png',
    screenshots: ['photo/picture1.png'],
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveLink: 'https://iamfarhatsharefi.github.io/PalindromeChecker/',
    sourceLink: 'https://github.com/iamfarhatsharefi/PalindromeChecker/pulls',
  },
  {
    title: 'Roman Numeral Converter ',
    shortDescription: "Roman Numeral Converter is a web application designed to convert numbers between Roman numerals and Arabic numerals. ",
    longDescription: "Roman Numeral Converter is a versatile web application designed to convert numbers between Roman numerals and Arabic numerals with ease. Developed using HTML, CSS, and JavaScript, this project showcases my ability to create practical, interactive web tools that offer a seamless user experience.",
    image: 'photo/roman.png',
    screenshots: ['photo/roman.png'],
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveLink: 'https://iamfarhatsharefi.github.io/Roman-Numeral-Converter/ ',
    sourceLink: 'https://github.com/iamfarhatsharefi/Roman-Numeral-Converter/pulls',
  },
  {
    title: 'Telephone Number Validator',
    shortDescription: "Telephone Number Validator is a web application designed to verify the validity of telephone numbers.",
    longDescription: "Telephone Number Validator is a robust web application developed to verify the validity of telephone numbers, ensuring they meet specific formatting criteria. Built using HTML, CSS, and JavaScript, this project showcases my skills in creating practical, interactive web applications that deliver a seamless user experience.",
    image: 'photo/picture3.png',
    screenshots: ['photo/picture3.png'],
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveLink: 'https://iamfarhatsharefi.github.io/TelephoneNumberValidator/',
    sourceLink: 'https://github.com/iamfarhatsharefi/TelephoneNumberValidator/pulls',
  },
  {
    title: 'Cash Register',
    shortDescription: "Cash Register is a web application designed to calculate the change due for various transactions. Developed using HTML, CSS, and JavaScript",
    longDescription: "Cash Register is a sophisticated web application designed to handle cash transactions by calculating the change due with precision. This project, developed using HTML, CSS, and JavaScript, exemplifies my skills in building practical and interactive financial tools that offer a seamless user experience.",
    image: 'photo/picture4 cash register.png',
    screenshots: ['photo/picture4.png'],
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveLink: 'https://iamfarhatsharefi.github.io/Cash-Register/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Cash-Register/pulls',
  },
  {
    title: 'Pokeman Search App',
    shortDescription: "Pokémon Search App is a web application that allows users to search for and view detailed information about various Pokémon. ",
    longDescription: "Pokémon Search App is an engaging web application designed to provide users with detailed information about their favorite Pokémon. Built using HTML, CSS, and JavaScript, this project highlights my skills in developing dynamic, interactive web applications that offer a seamless user experience.",
    image: 'photo/picture 5.png',
    screenshots: ['photo/picture 5.png'],
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveLink: 'https://iamfarhatsharefi.github.io/Pokeman-search-App/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Pokeman-search-App/pulls',
  },
];

  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');
    projectCard.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <button class="see-more-btn" data-index="${index}">See More</button>`;
    worksSection.appendChild(projectCard);
    const seeMoreBtn = projectCard.querySelector('.see-more-btn');
    seeMoreBtn.addEventListener('click', () => openProjectPopup(index));
  });
  closeBtn.addEventListener('click', () => {
    projectPopup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === projectPopup) {
      projectPopup.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  const validateForm = () => {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      errorMessage.textContent = 'Please fill out all fields.';
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return false;
    }

    if (emailInput.value !== emailInput.value.toLowerCase()) {
      errorMessage.textContent = 'Email must be in lowercase.';
      return false;
    }
    errorMessage.textContent = '';
    return true;
  };
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  nameInput.value = formData.name || '';
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => {
      formData[input.name] = input.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    });
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim().toLowerCase(),
        message: messageInput.value.trim(),
      };
      const formUrl = 'https://formspree.io/your_form_id_here';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };
      fetch(formUrl, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          successMessage.textContent = 'Message sent successfully!';
          successMessage.style.display = 'block';
          successMessage.style.color = 'green';
          contactForm.reset();
          localStorage.removeItem('formData');
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        })
        .catch(() => {
          // eslint-disable-next-line no-alert
          alert('There was an issue sending your message. Please try again later.');
        });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const socialIconsData = [
      { img: 'images/GitHub.png', name: 'GitHub', url: 'https://github.com' },
      { img: 'images/fb.png', name: 'Facebook', url: 'https://facebook.com' },
      { img: 'images/linkedin.png', name: 'LinkedIn', url: 'https://linkedin.com' },
      { img: 'imagesWhtsApp.ng', name: 'WhatsApp', url: 'https://whatsapp.com' },
    ];
    const createSocialIcon = ({ img, name, url }) => {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.className = 'social-icon';
      const imgElement = document.createElement('img');
      imgElement.src = img;
      imgElement.alt = name;
      const span = document.createElement('span');
      span.textContent = name;
      a.appendChild(imgElement);
      a.appendChild(span);
      return a;
    };
    const socialIconsHomeDesktop = document.getElementById('social-icons-home-desktop');
    const socialIconsMobileAbout = document.getElementById('social-icons-mobile-about');
    const socialIconsMobileProjects = document.getElementById('social-icons-mobile-projects');
    const socialIconsMobileWorks = document.getElementById('social-icons-mobile-works');
    const socialIconsMobileContact = document.getElementById('social-icons-mobile-contact');
    const socialIconsMobileFooter = document.getElementById('social-icons-mobile-footer');
    socialIconsData.forEach((iconData) => {
      const iconElement = createSocialIcon(iconData);
      socialIconsHomeDesktop.appendChild(iconElement.cloneNode(true));
      socialIconsMobileAbout.appendChild(iconElement.cloneNode(true));
      socialIconsMobileProjects.appendChild(iconElement.cloneNode(true));
      socialIconsMobileWorks.appendChild(iconElement.cloneNode(true));
      socialIconsMobileContact.appendChild(iconElement.cloneNode(true));
      socialIconsMobileFooter.appendChild(iconElement.cloneNode(true));
    });
  });
   // New certificates section code
   const certificationContentDiv = document.getElementById('certification-content');
   const certifications = [
     // ... list of certifications as in the previous instructions ...
   ];
 
   certifications.forEach((cert) => {
     const certDiv = document.createElement('div');
     const certTitle = document.createElement('h4');
     certTitle.textContent = cert.title;
     const certLink = document.createElement('a');
     certLink.href = cert.link;
     certLink.target = '_blank';
     const certImage = document.createElement('img');
     certImage.src = cert.image;
     certImage.alt = cert.title;
     certLink.appendChild(certImage);
     certDiv.appendChild(certTitle);
     certDiv.appendChild(certLink);
     certificationContentDiv.appendChild(certDiv);
   });
 });
 document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const navLinksItems = navLinks.querySelectorAll('a');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID "${id}" not found.`);
    }
  };

  menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
      menuIcon.innerHTML = '&#9776;';
    } else {
      navLinks.style.display = 'flex';
      menuIcon.innerHTML = '&times;';
    }
  });

  navLinksItems.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSectionId = link.getAttribute('href').substring(1);
      scrollToSection(targetSectionId);
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
        menuIcon.innerHTML = '&#9776;';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.getElementById('logo');
  const logoText = 'FARHAT';
  logoElement.textContent = logoText;
  const myName =<h2 class="hello">Hello there, <span class="highlight">I’m Farhat Sharefi</span></h2>;
  const myIntro = `I’m a passionate <span class="highlight">web development</span> student and <span class="highlight">Junior Web Developer</span> from <span class="highlight">Afghanistan</span>. My journey in technology includes being a dedicated student at the <span class="highlight">Kick Start Foundation</span>, where I am honing my web development and coding skills. In addition, I am pursuing my passion for <span class="highlight">graphic design</span> at Kabul University.
  I am deeply interested in helping and collaborating with others. I believe in the power of teamwork and am always eager to share knowledge and embrace new ideas. My goal is to not only create functional and visually appealing web applications but also to make a positive impact through my work.`;
  const headline = document.getElementById('headline');
  const intro = document.getElementById('intro');
  headline.innerHTML = myName;
  intro.innerHTML = myIntro;
  document.querySelectorAll('.highlight').forEach((element) => {
    element.style.fontWeight = 'bold';
    element.style.color = '#F9A826';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const aboutContent = {
    description: `
  I am Farhat Sharefi, a dedicated and passionate junior web developer and graphic design student at Kabul University. Over the past few years, I have cultivated a diverse skill set and a deep understanding of various facets of technology through a range of professional experiences.<br>
My technical expertise spans across web development, where I specialize in creating elegant and efficient web solutions. I am proficient in HTML, CSS, and JavaScript, and continuously strive to expand my knowledge by learning new technologies and best practices. My projects reflect a commitment to quality and a keen eye for detail, ensuring that every solution I develop is both functional and aesthetically pleasing. Additionally, I have experience teaching graphic design, which has further honed my ability to communicate complex concepts clearly and effectively. I am always eager to collaborate with others and contribute to innovative projects.
    `,
    
    skills: [
      {  image: 'photo/html-5 2.png', name: 'HTML', alt: 'HTML' },
      {  image: 'photo/css-3 2.png', name: 'Css', alt: 'CSS' },
      {  image: 'photo/java-script 2.png', name: 'JavaScript', alt: 'JavaScript' },
    ],
    certifications: [
      { title: 'Responsive Web Design', image: 'photo/responsive design.png', link: 'https://link-to-certificate1' },
      { title: 'Java Script', image: 'photo/java script.png', link: 'https://link-to-certificate2' },
      // Add more certifications as needed
    ],
  };

  const dynamicHeadlines = [
    'About Me',
    'Junior Web Developer'
  ];


  const headlineContainer = document.getElementById('dynamic-headlines');
  dynamicHeadlines.forEach(headlineText => {
    const headline = document.createElement('h2');
    headline.innerHTML = `<span class="highlight"></span>
    <span class="highlight">${headlineText}</span>`;
    headlineContainer.appendChild(headline);
  });
  const aboutContentDiv = document.getElementById('about-content');
  const skillsExperiencesDiv = document.getElementById('skills-experiences');
  const certificationContentDiv = document.getElementById('certification-content');

  // Populate description
  const descriptionSpan = document.createElement('span');
  descriptionSpan.innerHTML = aboutContent.description;
  aboutContentDiv.appendChild(descriptionSpan);

  // Populate skills
  aboutContent.skills.forEach((skill) => {
    const skillSpan = document.createElement('span');
    skillSpan.textContent = skill.name;
    const skillImage = document.createElement('img');
    skillImage.src = skill.image;
    skillImage.alt = skill.alt;
    skillsExperiencesDiv.appendChild(skillSpan);
    skillsExperiencesDiv.appendChild(skillImage);
  });

  // Populate certifications
  aboutContent.certifications.forEach((cert) => {
    const certDiv = document.createElement('div');
    const certTitle = document.createElement('h4');
    certTitle.textContent = cert.title;
    const certLink = document.createElement('a');
    certLink.href = cert.link;
    certLink.target = '_blank';
    const certImage = document.createElement('img');
    certImage.src = cert.image;
    certImage.alt = cert.title;
    certLink.appendChild(certImage);
    certDiv.appendChild(certTitle);
    certDiv.appendChild(certLink);
    certificationContentDiv.appendChild(certDiv);
  });
  
  // Add the "My Skills" heading with icon dynamically
  const skillsHeading = document.createElement('h3');
  skillsHeading.innerHTML = `My<span class="highlight"> Skills:</span>`;
  const skillsArrow = document.createElement('i');
  skillsArrow.className = 'bx bx-chevron-down';
  skillsArrow.id = 'skills-arrow';
  
  skillsHeading.appendChild(skillsArrow);
  skillsExperiencesDiv.parentElement.insertBefore(skillsHeading, skillsExperiencesDiv);
   
  document.querySelectorAll('.highlight').forEach((element) => {
    element.style.fontWeight = 'bold';
    element.style.color = '#F9A826';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: 'Survey Form',
      shortDescription: "The form is designed to gather feedback about an English Program. It starts with a title and description explaining the purpose of the survey.",
      longDescription: "Welcome to the English Program Survey Form project description! This survey form is part of an initiative to gather feedback and insights from participants enrolled in our English program. The aim is to enhance the program's effectiveness, relevance, and overall learning experience based on community feedback.",
      image: 'photo/survey-form.png',
      screenshots: ['images/survey-form.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://iamfarhatsharefi.github.io/Survey-Form/',
      sourceLink: 'https://github.com/iamfarhatsharefi/Survey-Form/pulls',
    },
    {
      title: 'Technical Documentation Page',
      shortDescription: "This project is a Technical Documentation Page dedicated to HTML, showcasing fundamental concepts and syntax.",
      longDescription: "The Technical Documentation Page project on HTML is a meticulously crafted resource designed to educate and empower learners and developers in mastering Hypertext Markup Language (HTML). Built entirely using HTML for structure and CSS for styling, this webpage serves as a comprehensive guide covering essential HTML concepts, tags, attributes, and best practices.",
      image: "photo/documentation-page.png",
      screenshots: ['photo/documentation-page.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://iamfarhatsharefi.github.io/Technical-documentation/',
      sourceLink: 'https://github.com/iamfarhatsharefi/Technical-documentation/pulls',
    },
    {
      title: 'Product Landing Page',
      shortDescription: "This project is a Product Landing Page dedicated to the Gucci brand, showcasing their luxury fashion products. Created with HTML, styled using CSS",
      longDescription: "The Product Landing Page project focused on the Gucci brand offers a captivating digital experience that celebrates the essence of luxury fashion. Crafted with HTML for structure, CSS for styling, and JavaScript for dynamic elements, this webpage serves as a virtual gateway to explore Gucci's prestigious line of products.",
      image: 'photo/landing page.png',
      screenshots: ['photo/landing page.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://iamfarhatsharefi.github.io/product-landing-page/',
      sourceLink: 'https://github.com/iamfarhatsharefi/product-landing-page/pulls',
    },
    {
      title: 'Personal Portfolio Webpage',
      shortDescription: "My Personal Portfolio Webpage is a showcase of my skills and projects in web development. Built with HTML, CSS",
      longDescription: "The Personal Portfolio Webpage represents a culmination of my journey and achievements in web development, designed to introduce visitors to my skills, projects, and professional profile. Developed using HTML, CSS, and JavaScript, this interactive webpage serves as a comprehensive hub where potential employers, clients, or collaborators can explore my capabilities and contributions to the field.",
      image: 'photo/portfolio.png',
      screenshots: ['photo/portfolio.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://iamfarhatsharefi.github.io/personal-portfolio/',
      sourceLink: 'https://github.com/iamfarhatsharefi/personal-portfolio/pulls',
    },
    {
      title: 'Palindrome Checker',
      shortDescription: "Palindrome Checker is a web application designed to determine whether a given string is a palindrome. Developed using HTML, CSS, and JavaScript",
      longDescription: "Palindrome Checker is an innovative web application developed to determine whether a given string is a palindrome, meaning it reads the same forwards and backwards. This project is built using HTML, CSS, and JavaScript, demonstrating my proficiency in front-end web development and interactive design.",
      image: 'photo/picture1.png',
      screenshots: ['photo/picture1.png'],
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveLink: 'https://iamfarhatsharefi.github.io/PalindromeChecker/',
      sourceLink: 'https://github.com/iamfarhatsharefi/PalindromeChecker/pulls',
    },
    {
      title: 'Roman Numeral Converter ',
      shortDescription: "Roman Numeral Converter is a web application designed to convert numbers between Roman numerals and Arabic numerals. ",
      longDescription: "Roman Numeral Converter is a versatile web application designed to convert numbers between Roman numerals and Arabic numerals with ease. Developed using HTML, CSS, and JavaScript, this project showcases my ability to create practical, interactive web tools that offer a seamless user experience.",
      image: 'photo/roman.png',
      screenshots: ['photo/roman.png'],
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveLink: 'https://iamfarhatsharefi.github.io/Roman-Numeral-Converter/ ',
      sourceLink: 'https://github.com/iamfarhatsharefi/Roman-Numeral-Converter/pulls',
    },
    {
      title: 'Telephone Number Validator',
      shortDescription: "Telephone Number Validator is a web application designed to verify the validity of telephone numbers.",
      longDescription: "Telephone Number Validator is a robust web application developed to verify the validity of telephone numbers, ensuring they meet specific formatting criteria. Built using HTML, CSS, and JavaScript, this project showcases my skills in creating practical, interactive web applications that deliver a seamless user experience.",
      image: 'photo/picture3.png',
      screenshots: ['photo/picture3.png'],
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveLink: 'https://iamfarhatsharefi.github.io/TelephoneNumberValidator/',
      sourceLink: 'https://github.com/iamfarhatsharefi/TelephoneNumberValidator/pulls',
    },
    {
      title: 'Cash Register',
      shortDescription: "Cash Register is a web application designed to calculate the change due for various transactions. Developed using HTML, CSS, and JavaScript",
      longDescription: "Cash Register is a sophisticated web application designed to handle cash transactions by calculating the change due with precision. This project, developed using HTML, CSS, and JavaScript, exemplifies my skills in building practical and interactive financial tools that offer a seamless user experience.",
      image: 'photo/picture4 cash register.png',
      screenshots: ['photo/picture4.png'],
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveLink: 'https://iamfarhatsharefi.github.io/Cash-Register/',
      sourceLink: 'https://github.com/iamfarhatsharefi/Cash-Register/pulls',
    },
    {
      title: 'Pokeman Search App',
      shortDescription: "Pokémon Search App is a web application that allows users to search for and view detailed information about various Pokémon. ",
      longDescription: "Pokémon Search App is an engaging web application designed to provide users with detailed information about their favorite Pokémon. Built using HTML, CSS, and JavaScript, this project highlights my skills in developing dynamic, interactive web applications that offer a seamless user experience.",
      image: 'photo/picture 5.png',
      screenshots: ['photo/picture 5.png'],
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveLink: 'https://iamfarhatsharefi.github.io/Pokeman-search-App/',
      sourceLink: 'https://github.com/iamfarhatsharefi/Pokeman-search-App/pulls',
    },
  ];
  const worksSection = document.getElementById('works');
  const projectPopup = document.getElementById('project-popup');
  const closeBtn = document.getElementById('close-btn');

  const openProjectPopup = (index) => {
    const project = projects[index];
    document.getElementById('popup-title').textContent = project.title;
    document.getElementById('popup-description').textContent = project.description;
    // Highlighted: Dynamically generate and insert images
    document.getElementById('popup-images').innerHTML = project.screenshots.map((src) => (
      `<img src="${src}" alt="${project.title} Screenshot",>`
    )).join('');
    document.getElementById('popup-image').src = project.image;
    document.getElementById('live-link').href = project.liveLink;
    document.getElementById('source-link').href = project.sourceLink;
    projectPopup.style.display = 'block';
  };

  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');
    projectCard.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <button class="see-more-btn" data-index="${index}">See More</button>`;
    worksSection.appendChild(projectCard);
    const seeMoreBtn = projectCard.querySelector('.see-more-btn');
    seeMoreBtn.addEventListener('click', () => openProjectPopup(index));
  });
  closeBtn.addEventListener('click', () => {
    projectPopup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === projectPopup) {
      projectPopup.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  const validateForm = () => {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      errorMessage.textContent = 'Please fill out all fields.';
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return false;
    }

    if (emailInput.value !== emailInput.value.toLowerCase()) {
      errorMessage.textContent = 'Email must be in lowercase.';
      return false;
    }
    errorMessage.textContent = '';
    return true;
  };
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  nameInput.value = formData.name || '';
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => {
      formData[input.name] = input.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    });
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim().toLowerCase(),
        message: messageInput.value.trim(),
      };
      const formUrl = 'https://formspree.io/your_form_id_here';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };
      fetch(formUrl, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          successMessage.textContent = 'Message sent successfully!';
          successMessage.style.display = 'block';
          successMessage.style.color = 'green';
          contactForm.reset();
          localStorage.removeItem('formData');
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        })
        .catch(() => {
          // eslint-disable-next-line no-alert
          alert('There was an issue sending your message. Please try again later.');
        });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const socialIconsData = [
      { img: 'photo/GitHub.png', name: 'GitHub', url: 'https://github.com' },
      { img: 'photo/fb.png', name: 'Facebook', url: 'https://facebook.com' },
      { img: 'photo/linkedin.png', name: 'LinkedIn', url: 'https://linkedin.com' },
      { img: 'photoWhtsApp.ng', name: 'WhatsApp', url: 'https://whatsapp.com' },
    ];
    const createSocialIcon = ({ img, name, url }) => {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.className = 'social-icon';
      const imgElement = document.createElement('img');
      imgElement.src = img;
      imgElement.alt = name;
      const span = document.createElement('span');
      span.textContent = name;
      a.appendChild(imgElement);
      a.appendChild(span);
      return a;
    };
    const socialIconsHomeDesktop = document.getElementById('social-icons-home-desktop');
    const socialIconsMobileAbout = document.getElementById('social-icons-mobile-about');
    const socialIconsMobileProjects = document.getElementById('social-icons-mobile-projects');
    const socialIconsMobileWorks = document.getElementById('social-icons-mobile-works');
    const socialIconsMobileContact = document.getElementById('social-icons-mobile-contact');
    const socialIconsMobileFooter = document.getElementById('social-icons-mobile-footer');
    socialIconsData.forEach((iconData) => {
      const iconElement = createSocialIcon(iconData);
      socialIconsHomeDesktop.appendChild(iconElement.cloneNode(true));
      socialIconsMobileAbout.appendChild(iconElement.cloneNode(true));
      socialIconsMobileProjects.appendChild(iconElement.cloneNode(true));
      socialIconsMobileWorks.appendChild(iconElement.cloneNode(true));
      socialIconsMobileContact.appendChild(iconElement.cloneNode(true));
      socialIconsMobileFooter.appendChild(iconElement.cloneNode(true));
    });
  });
   // New certificates section code
   const certificationContentDiv = document.getElementById('certification-content');
   const certifications = [
     // ... list of certifications as in the previous instructions ...
   ];
 
   certifications.forEach((cert) => {
     const certDiv = document.createElement('div');
     const certTitle = document.createElement('h4');
     certTitle.textContent = cert.title;
     const certLink = document.createElement('a');
     certLink.href = cert.link;
     certLink.target = '_blank';
     const certImage = document.createElement('img');
     certImage.src = cert.image;
     certImage.alt = cert.title;
     certLink.appendChild(certImage);
     certDiv.appendChild(certTitle);
     certDiv.appendChild(certLink);
     certificationContentDiv.appendChild(certDiv);
   });
 });
