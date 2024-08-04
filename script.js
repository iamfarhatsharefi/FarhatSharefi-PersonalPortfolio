const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.nav-links .close-btn');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  closeBtn.style.display = navLinks.classList.contains('show') ? 'block' : 'none';
});
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
  closeBtn.style.display = 'none';
});
  const userData = {
    homeImage: 'images/employe1.png',
    homeTitle: 'Hello there, <span class="color">I`m</span>',
    homeName: 'Farhat Sharefi',
    homeRole: 'I`m a <span class="color">Junior web developer</span>',
    homeDescription: 'I'm Farhat Sharefi, a graphic design student at Kabul University. I have a strong passion for coding and love transforming ideas into beautiful, functional web experiences.',
    aboutImage: 'images/undraw_portfolio_update_re_jqnp 1.png',
    aboutTitle: 'About <span class="color">Me</span>',
    aboutRole: '<span class="color">Junior Developer</span>',
    aboutDescription: 'I'm Farhat Sharefi, a graphic design student with a passion for coding. I’ve studied photography for a year at Baakhtr Institute in Berlin and continue to enhance my skills in web development through my studies at the Kick Start Foundation. With a background in teaching, I enjoy blending creativity with technical expertise to craft meaningful digital experiences.',
    socialIcons: ['images/linkedin.png', 'images/GitHub.png', 'images/fb.png', 'images/WhatsApp.png'],
    skillIcons: ['images/html-5 2.png', 'images/css-3 2.png', 'images/java-script 2.png']
  };
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
homeSection.querySelector("#home-image").src = userData.homeImage;
homeSection.querySelector("#home-title").innerHTML = userData.homeTitle;
homeSection.querySelector("#home-name").textContent = userData.homeName;
homeSection.querySelector("#home-role").innerHTML = userData.homeRole;
homeSection.querySelector("#home-description").textContent = userData.homeDescription;

aboutSection.querySelector("#about-image").src = userData.aboutImage;
aboutSection.querySelector("#about-title").innerHTML = userData.aboutTitle;
aboutSection.querySelector("#about-role").innerHTML = userData.aboutRole;
aboutSection.querySelector("#about-description").textContent = userData.aboutDescription;

const socialIcons = homeSection.querySelectorAll(".social-icons img");
socialIcons.forEach((icon, index) => {
  icon.src = `${userData.socialIcons[index]}`;
});

const skillIcons = aboutSection.querySelectorAll(".about-skills li img");
skillIcons.forEach((icon, index) => {
  icon.src = `${userData.skillIcons[index]}`;
});

const skillNames = aboutSection.querySelectorAll(".about-skills li span.yellow-text");
skillNames.forEach((skill, index) => {
  skill.textContent = userData.skillNames[index];
  skill.style.color = '#ffcc00';
});

const coloredElements = document.querySelectorAll('.color');
coloredElements.forEach(element => {
  element.style.color = '#ffcc00';
});
 const projects = [
  {
    title: 'Personal Portfolio Webpage',
    description: 'My Personal Portfolio Webpage is a showcase of my skills and projects in web development. Built with HTML, CSS',
    image: 'images/portfolio.png',
    longDescription: 'The Personal Portfolio Webpage represents a culmination of my journey and achievements in web development, designed to introduce visitors to my skills, projects, and professional profile. Developed using HTML, CSS, and JavaScript, this interactive webpage serves as a comprehensive hub where potential employers, clients, or collaborators can explore my capabilities and contributions to the field.',
    screenshots: ['images/1 portfolio.png', 'images/portfolio.png', 'images/3 portfolio.png'],
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://iamfarhatsharefi.github.io/personal-portfolio/',
    sourceLink: 'https://github.com/iamfarhatsharefi/personal-portfolio/pulls',
  },
  {
    title: 'Roman Numeral Converter',
    description: 'Roman Numeral Converter is a web application designed to convert numbers between Roman numerals and Arabic numerals.',
    image: 'images/roman.png',
    longDescription: 'Roman Numeral Converter is a versatile web application designed to convert numbers between Roman numerals and Arabic numerals with ease. Developed using HTML, CSS, and JavaScript, this project showcases my ability to create practical, interactive web tools that offer a seamless user experience.',
    screenshots: ['images/RR2.png'],
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/Roman-Numeral-Converter/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Roman-Numeral-Converter/pulls',
  },
  {
    title: 'palindrome-checker',
    description: 'Palindrome Checker is a web application designed to determine whether a given string is a palindrome. Developed using HTML, CSS, and JavaScript',
    image: 'images/Picture1.png',
    longDescription: 'Palindrome Checker is an innovative web application developed to determine whether a given string is a palindrome, meaning it reads the same forwards and backwards. This project is built using HTML, CSS, and JavaScript, demonstrating my proficiency in front-end web development and interactive design.',
    screenshots: ['images/PP2.png'],
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/PalindromeChecker/',
    sourceLink: 'https://github.com/iamfarhatsharefi/PalindromeChecker/pulls',
  },
  {
    title: 'Telephone-Number-Validator',
    description: 'Telephone Number Validator is a web application designed to verify the validity of telephone numbers',
    image: 'images/Picture3.png',
    longDescription: 'Telephone Number Validator is a robust web application developed to verify the validity of telephone numbers, ensuring they meet specific formatting criteria. Built using HTML, CSS, and JavaScript, this project showcases my skills in creating practical, interactive web applications that deliver a seamless user experience.',
    screenshots: ['images/TT2.png'],
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/TelephoneNumberValidator/',
    sourceLink: 'https://github.com/iamfarhatsharefi/TelephoneNumberValidator/pulls',
  },
  {
    title: 'Pokemon-search-App',
    description: '"Pokémon Search App is a web application that allows users to search for and view detailed information about various Pokémon.',
    image: 'images/picture 5.png',
    longDescription: 'Pokémon Search App is an engaging web application designed to provide users with detailed information about their favorite Pokémon. Built using HTML, CSS, and JavaScript, this project highlights my skills in developing dynamic, interactive web applications that offer a seamless user experience.',
    screenshots: ['images/PPP2.png', 'images/PO2.png'],
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/Pokeman-search-App/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Pokeman-search-App/pulls',
  },
];
const projectsContainer = document.getElementById("projects");
projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");
  const titleElement = document.createElement("h2");
  titleElement.classList.add("color");
  titleElement.textContent = project.title;
  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description");
  descriptionElement.textContent = project.description;
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const image = document.createElement("img");
  image.src = project.images[0];
  const viewScreenshotsButton = document.createElement("button");
  viewScreenshotsButton.classList.add("view-screenshots");
  viewScreenshotsButton.textContent = "See More";
  viewScreenshotsButton.addEventListener("click", () => {
    showProjectPopup(project.images, project.longDescription, project.technologies, project.liveLink, project.sourceLink);
  });
  imageContainer.appendChild(image);
  imageContainer.appendChild(viewScreenshotsButton);
  projectElement.appendChild(titleElement);
  projectElement.appendChild(descriptionElement);
  projectElement.appendChild(imageContainer);
  projectsContainer.appendChild(projectElement);
});

const projectPopup = document.querySelector(".project-popup");
const closeButton = document.querySelector(".project-popup .close-button");
const screenshotSlider = document.querySelector(".project-popup .screenshot-slider");
function showProjectPopup(screenshots, longDescription, technologies, liveLink, sourceLink) {
  projectPopup.style.display = "flex";
  screenshotSlider.innerHTML = "";
  screenshots.forEach((screenshot) => {
    const screenshotElement = document.createElement("img");
    screenshotElement.src = screenshot;
    screenshotSlider.appendChild(screenshotElement);
  });
  const longDescriptionElement = document.createElement("p");
  longDescriptionElement.textContent = longDescription;
  screenshotSlider.appendChild(longDescriptionElement);
  const technologiesElement = document.createElement("div");
  technologiesElement.classList.add("technologies");
  technologies.forEach((tech) => {
    const techElement = document.createElement("span");
    techElement.textContent = tech;
    technologiesElement.appendChild(techElement);
  });
  screenshotSlider.appendChild(technologiesElement);
  const liveLink2 = document.createElement("a");
  liveLink2.classList.add("live-link");
  liveLink2.href = liveLink;
  liveLink2.target = "_blank";
  const liveLinkIcon = document.createElement("i");
  liveLinkIcon.classList.add("fas", "fa-external-link-alt");
  liveLink2.appendChild(liveLinkIcon);
  liveLink2.appendChild(document.createTextNode(""));
  screenshotSlider.appendChild(liveLink2);
  const sourceLink2 = document.createElement("a");
  sourceLink2.classList.add("source-link");
  sourceLink2.href = sourceLink;
  sourceLink2.target = "_blank";
  const sourceLinkIcon = document.createElement("i");
  sourceLinkIcon.classList.add("fab", "fa-github");
  sourceLink2.appendChild(sourceLinkIcon);
  sourceLink2.appendChild(document.createTextNode(""));
  screenshotSlider.appendChild(sourceLink2);
}

closeButton.addEventListener("click", () => {
  projectPopup.style.display = "none";
});

const certificateData = [
  {
    title: 'Responsive Web Design',
    url: 'https://www.freecodecamp.org/certification/Farhatsharefi/responsive-web-design" target="_blank',
    imageSrc:'images/responsive.png'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    ur: 'https://www.freecodecamp.org/certification/Farhatsharefi/javascript-algorithms-and-data-structures-v8" target="_blank',
    imageSrc: 'images/js.png'
  }
];
function generateCertificateItems() {
  const certificateDescriptionElement = document.querySelector('.certificate-description');
  const certificateGridElement = document.querySelector('.certificate-grid');
  certificateDescriptionElement.textContent = 'I'm Farhat Sharefi, a graphic design student with a passion for coding. I’ve studied photography for a year at Baakhtr Institute in Berlin and continue to enhance my skills in web development through my studies at the Kick Start Foundation. With a background in teaching, I enjoy blending creativity with technical expertise to craft meaningful digital experiences.';
  certificateData.forEach(certificate => {
    const certificateItem = document.createElement('a');
    certificateItem.href = certificate.url;
    certificateItem.target = '_blank';
    certificateItem.classList.add('certificate-item');

    const certificateImage = document.createElement('img');
    certificateImage.src = certificate.imageSrc;
    certificateImage.alt = certificate.title;

    const certificateTitle = document.createElement('h3');
    certificateTitle.textContent = certificate.title;

    certificateItem.appendChild(certificateImage);
    certificateItem.appendChild(certificateTitle);
    certificateGridElement.appendChild(certificateItem);
  });
}
generateCertificateItems();

const form = document.querySelector('.contact-form');
const emailMessage = document.querySelector('.email-message');
const formspreeUrl = 'https://formspree.io/f/mblroodb';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (email !== email.toLowerCase()) {
    emailMessage.textContent = 'Email must be in lowercase';
    emailMessage.classList.add('error');
    emailMessage.classList.remove('success');
  } else {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('message', message);

    fetch(formspreeUrl, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        emailMessage.textContent = 'Message sent successfully';
        emailMessage.classList.add('success');
        emailMessage.classList.remove('error');
        console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}, Message: ${message}`);
        alert('Message sent successfully!');
      } else {
        emailMessage.textContent = 'Message sent successfully.';
        emailMessage.classList.add('error');
        emailMessage.classList.remove('success');
      }
    })
    .catch(error => {
      emailMessage.textContent = 'Message sent successfully.';
      emailMessage.classList.add('sent');
      emailMessage.classList.remove('success');
      console.error('Error:', error);
    });
  }

  form.reset();
});