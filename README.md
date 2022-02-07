# mini
A minimal and nerdy theme for Ghost.


# Getting Started With Development

## Dependencies


[yarn](https://yarnpkg.com/)

[ghost](https://ghost.org/docs/install/local/)

[tailwind](https://tailwindcss.com/docs/installation): this should be installed when you run yarn install below.

## Set up
1. clone the repo into {your ghost dir}/content/themes
2. cd into mini/ and run `yarn install`, this should install all dependencies you need to run the project
3. run `yarn dev`, this will compile all the css files in mini/assets/css/raw and put them in mini/assets/css/built and restart the ghost server. You should only make changes to css files in raw/.
4. run `yarn dev` every time you've made a change and would like to see the change reflected on the page
5. run `yarn build-prod` to package everything up into a zip file in the Release folder.

# Theme Configuration After Deployment
## Name, Title, and Prompt
In the ghost admin page, go to settings => Site Design => Site-wide, you'll be able to find settings for your name and title, these will show up in the nav bar. The terminal prompt name is for the prompt on the home page.

## Routing
In the ghost admin page, go to settings => Labs => Routes and upload mini/routes/routes.yaml. 

```
{your domain name}/ => home.hbs
{your domain name}/blog/ => index.hbs
{your domain name}/resume/ => the resume page you'll create below

```

### Disabling Subscribe Buttton
Ghost admin => settings => membership => customize portal => disable Show Portal Button

## Adding a Resume
Add a new page in the ghost admin and set the page URL to resume, and your resume should show up at {your domain name}/resume/. An example is in mini/assets/md/resume.md

## Links in Nav and Side Menu
Links defined in Primary Navigation under settings => navigation will show up.

# Credits
- Matrix background code is borrowed and modified from [here](https://medium.com/@twineworks/fun-with-html-canvas-build-the-matrix-c87c4bb12487)
- The beautiful [Nord](https://www.nordtheme.com/) theme

# License
MIT, WTFPL
