/* mobile menu */
const clicked = document.querySelector('#clicked');
const toolbar = document.querySelector('header');
const clickedP = document.querySelector('.clicked-p');
const navLinks = document.querySelectorAll('.clicked-ul li');
function mobileMenu() {
  clicked.classList = 'clicked';
}
function hideMobileMenu() {
  clicked.classList = 'not-cliked';
}

toolbar.addEventListener('click', mobileMenu);
clickedP.addEventListener('click', hideMobileMenu);
navLinks.forEach((element) => {
  element.addEventListener('click', hideMobileMenu);
});
/* End of mobile menu */

/*  Begin projects */
const projects = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essent`,
    image: 'images/projects/project-1.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    links: { live: '#', source: '#' },
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essent`,
    image: 'images/projects/project-2.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    links: { live: '#', source: '#' },
  },
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essent`,
    image: 'images/projects/project-3.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    links: { live: '#', source: '#' },
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essent`,
    image: 'images/projects/project-4.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    links: { live: '#', source: '#' },
  },
];
const works = document.querySelector('.works');
// eslint-disable-next-line no-plusplus
for (let index = 0; index < projects.length; index++) {
  // eslint-disable-next-line object-curly-newline
  const {
    name, description, image, technologies,
  } = projects[index];
  const pSection = document.createElement('section');
  const pClasses = document.createAttribute('class');
  let classReverse = '';
  if ((index + 1) % 2 === 0) {
    classReverse = 'reverse';
  }
  pClasses.value = `grid-items project-1 fonts ${classReverse}`;
  pSection.setAttributeNode(pClasses);
  const img = document.createElement('img');
  const imgClasses = document.createAttribute('class');
  imgClasses.value = 'project-img';
  img.setAttributeNode(imgClasses);
  const imgId = document.createAttribute('id');
  imgId.value = `project-${index + 1}`;
  img.setAttributeNode(imgId);
  const imgSrc = document.createAttribute('src');
  imgSrc.value = image;
  img.setAttributeNode(imgSrc);
  const imgAlt = document.createAttribute('alt');
  imgAlt.value = `Project-${index + 1}`;
  img.setAttributeNode(imgAlt);
  pSection.appendChild(img);
  // creating detail div
  const cdiv = document.createElement('div');
  const cdivClass = document.createAttribute('class');
  cdivClass.value = 'details';
  cdiv.setAttributeNode(cdivClass);
  const titles = `<div class="titles">
              <h3 class="project-title">${name}</h3>
              <ul class="canopy">
                <li>CANOPY</li>
                <li class="bullets"><span class="dot"></span></li>
                <li class="o-li">Back End Dev</li>
                <li class="bullets"><span class="dot"></span></li>
                <li class="o-li">2015</li>
              </ul>
            </div>`;
  const text = `<p>${description}</p>`;
  let li = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    li += `<li> ${technologies[i]} </li>`;
  }
  const ul = `<ul class="categories hex"> ${li} </ul>`;

  const seeBtn = `<div class="see-project">
              <a href="#"
                ><button type="button" class="hex project-details" data-project="${index}">
                  See Project
                </button></a
              >
            </div>`;
  cdiv.innerHTML = titles + text + ul + seeBtn;

  pSection.appendChild(cdiv);

  works.appendChild(pSection);
}
const seeProject = document.querySelectorAll('.project-details');
const main = document.querySelector('#main');
function closePopup() {
  document.querySelector('#main').classList.remove('main');
  document.querySelector('#popup').classList.remove('popup');
  document.querySelector('#popup').classList.add('hidden-popup');
}
seeProject.forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('#popup').classList.remove('hidden-popup');
    document.querySelector('#popup').classList.add('popup');
    main.classList = 'main';
    // eslint-disable-next-line operator-linebreak, object-curly-newline
    const { name, descriptions, image, technologies, links } =
      projects[element.dataset.project];
    const pTitles = `<div class="p-title">
        <div class="p-main-title">
          <h3 class="p-h3">${name}</h3>
          <p id="btn-close">X</p>
        </div>
        <ul class="p-canopy">
          <li>CANOPY</li>
          <li class="p-bullets"><span class="p-dot"></span></li>
          <li class="o-li">Back End Dev</li>
          <li class="p-bullets"><span class="p-dot"></span></li>
          <li class="o-li">2015</li>
        </ul>
      </div>

      <img
        class="p-project-img"
        id="project-${Number(element.dataset.project) + 1}"
        src="${image}"
        alt="Project-1"
      />`;
    let li = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < technologies.length; i++) {
      if (i >= 3) {
        li += `<li class="categories-li mibele-hidden"> ${technologies[i]} </li>`;
      } else {
        li += `<li class="categories-li"> ${technologies[i]} </li>`;
      }
    }
    const { live, source } = links;
    const detailss = `<div class="desktop">
        <p class="p-text">
          ${descriptions}
        </p>
        <div class="desktop-right">
          <ul class="p-categories hex">
          ${li}
          </ul>
          <div class="p-see-project">
            <a href="${live}"><button type="button" class="btn-see hex">
              <span class="btn-text">See live</span
              ><img alt="Live" src="images/socials/live.png" />
            </button></a>
            <a href="${source}"><button type="button" class="btn-see hex">
              <span class="btn-text">See Source</span
              ><img alt="Live" src="images/socials/github.png" />
            </button></a>
          </div>
        </div>
      </div>`;
    document.querySelector('#popup').innerHTML = pTitles + detailss;
    document.querySelector('#btn-close').addEventListener('click', closePopup);
  });
});

function showMessage(message) {
  const msg = document.querySelector('small');
  msg.innerText = message;
}

function showError(message) {
  showMessage(message);
}

function showSuccess() {
  showMessage('');
}

function validateEmail(input, invalidMsg) {
  const emailRegex = /[A-Z]/;

  const email = input.value.trim();
  if (emailRegex.test(email)) {
    return showError(invalidMsg);
  }
  return true;
}

const EMAIL_INVALID = 'Please enter your email address in lower case';
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector("input[type='email']");
  const emailValid = validateEmail(email, EMAIL_INVALID);
  if (emailValid) {
    showSuccess();
    form.submit();
  }
});