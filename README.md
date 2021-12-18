
<h2>
  Personal Portfolio
  <a href="https://rodrigo-arenas.github.io/portfolio" target="_blank">Website</a>
</h2>

This is my website to resume my work as a data scientist.
The page mainly uses React and react-bootstrap and is inspired by open-source components.

Feel free to use this project as a template, and please give a small credit by linking back to this project.
If you found this project helpful, consider giving it a 
[star](https://github.com/rodrigo-arenas/portfolio/stargazers) [⭐](https://github.com/rodrigo-arenas/portfolio/stargazers)

**[Live Demo](https://rodrigo-arenas.github.io/portfolio/)**

<img src="./src/assets/images/website.gif" alt="demo">


## Installation Guide

* Fork the project 
  ```
  https://github.com/rodrigo-arenas/portfolio/fork
  ```
* Clone your fork
  ```
  git clone https://github.com/{yourusername}/portfolio.git
  ```
* Install the packages
  ```
  npm install
  ```
* Start the project
  ```
  npm start
  ```

## Customize your information

All the content (text, icons, links, etc.) are configured in the `assets` folders,
it has two kinds:

### Configs:

There is one configuration file per page or main component, for example if you want
to modify the footer icons and hyperlinks, go to the footerConfig.js file

![footer](src/assets/images/footer.png)

Here, you can modify all the values but keep the key's names, structure and className the same; 
you can also add new values to the configs containing a list.


### Images:

This folder is meant to keep images that are displayed over some routes, like the blogs and projects.
For example, inside the projectsConfig.js file, the list of projects has a property called "image":

![projects_config.png](src/assets/images/projects_config.png)

You can set any valid href for the `<a/>` tag as an image URL or, like in the above image, 
an image from the `assets/images` folder.

![projects_images](projects_images.png)


### Set Google Analytics track (Optional):

Take the `.env.example` file, put your tracking id in the 
variable `REACT_APP_TRACKING_ID` and rename the file to `.env`
