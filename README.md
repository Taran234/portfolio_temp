# Developer Portfolio 

# Getting Started :dart:
### Fork and Clone the repo

#### To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone hhttps://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git
cd developer-portfolio
```
### Install packages from the root directory
```
npm install
```
#### or
```
yarn install
```
### Start the development server
```
npm start
```
#### or
```
yarn start
```
<br />

# Folder Structure :open_file_folder:

```bash
├── LICENSE   
├── README.md        
├── package-lock.json
├── package.json     
├── public
│   ├── _redirects   
│   ├── favicon.ico  
│   ├── favicon.png
│   ├── favicon512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── assets
│   │   ├── fonts
│   │   │   └── Bestermind
│   │   │       └── BestermindRegular.ttf
│   │   ├── pdf
│   │   │   └── resume.pdf
│   │   └── svg
│   │       ├── about
│   │       ├── contacts
│   │       ├── education
│   │       ├── experience
│   │       ├── projects
│   │       ├── skills
│   │       ├── social
│   │       └── testimonials
│   ├── components
│   │   ├── About
│   │   │   ├── About.css
│   │   │   └── About.js
│   │   ├── Achievements
│   │   │   ├── Achievements.css
│   │   │   └── Achievements.js
│   │   │   └── AchievementCard.js
│   │   ├── BackToTop
│   │   │   ├── BackToTop.css
│   │   │   └── BackToTop.js
│   │   ├── Blog
│   │   │   ├── Blog.css
│   │   │   ├── Blog.js
│   │   │   └── SingleBlog
│   │   │       ├── SingleBlog.css
│   │   │       └── SingleBlog.js
│   │   ├── Contacts
│   │   │   ├── Contacts.css
│   │   │   └── Contacts.js
│   │   ├── Education
│   │   │   ├── Education.css
│   │   │   ├── Education.js
│   │   │   └── EducationCard.js
│   │   ├── Experience
│   │   │   ├── Experience.css
│   │   │   ├── Experience.js
│   │   │   └── ExperienceCard.js
│   │   ├── Footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.js
│   │   ├── Landing
│   │   │   ├── Landing.css
│   │   │   └── Landing.js
│   │   ├── Navbar
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.js
│   │   ├── Projects
│   │   │   ├── Projects.css
│   │   │   ├── Projects.js
│   │   │   └── SingleProject
│   │   │       ├── SingleProject.css
│   │   │       └── SingleProject.js
│   │   ├── Services
│   │   │   ├── Services.css
│   │   │   ├── Services.js
│   │   │   └── SingleService
│   │   │       ├── SingleService.css
│   │   │       └── SingleService.js
│   │   ├── Skills
│   │   │   ├── Skills.css
│   │   │   └── Skills.js
│   │   ├── Testimonials
│   │   │   ├── Testimonials.css
│   │   │   └── Testimonials.js
│   │   └── index.js
│   ├── contexts
│   │   └── ThemeContext.js
│   ├── data
│   │   ├── aboutData.js
│   │   ├── achievementData.js
│   │   ├── blogData.js
│   │   ├── contactsData.js
│   │   ├── educationData.js
│   │   ├── experienceData.js
│   │   ├── headerData.js
│   │   ├── projectsData.js
│   │   ├── servicesData.js
│   │   ├── skillsData.js
│   │   ├── socialsData.js
│   │   ├── testimonialsData.js
│   │   └── themeData.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Blog
│   │   │   ├── BlogPage.css
│   │   │   └── BlogPage.js
│   │   ├── Main
│   │   │   └── Main.js
│   │   ├── Project
│   │   │   ├── ProjectPage.css
│   │   │   └── ProjectPage.js
│   │   └── index.js
│   ├── reportWebVitals.js
│   ├── theme
│   │   ├── images.js
│   │   └── theme.js
│   └── utils
│       ├── ScrollToTop.js
│       └── skillsImage.js
└── yarn.lock
```
<br />

# Usage :joystick:
### Customize your details for each component in `src/data` [folder](https://github.com/hhhrrrttt222111/developer-portfolio/tree/master/src/data).

Eg:
```javascript
export const headerData = {
    name: '-- YOUR NAME --',
    title: '-- YOUR TITLE --',
    desciption:'-- DESCRIPTION --',
    image: '-- IMAGE --',
    resumePdf: ''
}

// You can also import image and PDF from assets as shown below

import resume from '../assets/pdf/resume.pdf'
import profileImg from '../assets/png/profileImg'

export const headerData = {
    name: '-- YOUR NAME --',
    title: '-- YOUR TITLE --',
    desciption:'-- DESCRIPTION --',
    image: profileImg,
    resumePdf: resume
}
```

#### Data for each component is divided into respective files.
>#### Set website theme in [`src/data/themeData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/themeData.js) and choose your favourite font from [`src/App.css`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/App.css)

> #### About You - [`src/data/aboutData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/aboutData.js)

> #### Education details - [`src/data/educationData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/educationData.js) 

> #### Enter your Projects - [`src/data/projectsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/projectsData.js)

> #### Add your Skills - [`src/data/skillsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/skillsData.js)

> #### Experience - [`src/data/experienceData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/experienceData.js)

> #### Achievements - [`src/data/achievementData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/achievementData.js)

> #### Services - [`src/data/servicesData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/servicesData.js)

> #### Testimonials - [`src/data/testimonialsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/testimonialsData.js)

> #### Your Blogs and Articles - [`src/data/blogData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/blogData.js)

> #### Contact Details - [`src/data/contactsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/contactsData.js)

> #### Social Media Profiles - [`src/data/contactsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/socialsData.js)

```javascript
// EXAMPLE
export const educationData = [
    {
        id: 1,
        institution: '-- INSTITUTION NAME --',
        course: '-- COURSE NAME --',
        startYear: '2017',
        endYear: '2019'
    },
    //
]
```

### Instructions and format for each section can be found inside the data files.
<br />



# SEO :spider:
### Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. 
### Add the below code snippet to `public/index.html` with your site info. This step is not mandatory

<br />

```html
    <meta name="description" content="--- SITE DESCRIPTION ---" />
    <meta property="og:image" content="--- YOUR IMAGE ---">
    <meta property="og:site_name" content="--- YOUR NAME ---"/>
    <meta property="og:title" content="--- YOUR NAME ---"/>
    <meta property="og:url" content="--- YOUR SITE URL ---"/>
    <meta property="og:type" content="website"/>
    <meta property="og:description" content="--- SITE DESCRIPTION ---"/>
    <meta property="og:locale" content="---  ---">
    <meta property="og:image" content="--- YOUR IMAGE ---"/>
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <meta itemprop="name" content="--- YOUR NAME ---"/>
    <meta itemprop="url" content="--- YOUR SITE URL ---"/>
    <meta itemprop="description" content="--- SITE DESCRIPTION ---"/>
    <meta itemprop="thumbnailUrl" content=""/>
    <link rel="image_src" href="--- YOUR IMAGE ---"/>
    <meta itemprop="image" content="--- YOUR IMAGE ---"/>
    
    <meta name="twitter:site" content="@--- YOUR TWITTER USERNAME ---">
    <meta name="twitter:creator" content="@--- YOUR TWITTER USERNAME ---">
    <meta name="twitter:url" content="--- YOUR SITE URL ---"/>
    <meta name="twitter:title" content="--- YOUR NAME ---">
    <meta name="twitter:description" content="--- SITE DESCRIPTION ---">
    <meta name="twitter:image" content="--- YOUR IMAGE ---">
    <meta name="twitter:card" content="summary"/>

```

<br />

# Packages Used :package:

| Client Side Packages  |
| :-------------: |
| @material-ui/core  |
| @material-ui/icons  |
| axios |
| react-fast-marquee |
| react-helmet  |
| react-icons  |
| react-reveal |
| react-router-dom  |
| react-router-hash-link  |
| react-slick  |
| slick-carousel |
| validator |


<br />


