# <Text-Editor-PWA>

## Description
User Story <br>
AS A developer <br>
I WANT to create notes or code snippets with or without an internet connection <br>
SO THAT I can reliably retrieve them for later use <br>
Acceptance Criteria <br>
GIVEN a text editor web application <br>
WHEN I open my application in my editor <br>
THEN I should see a client server folder structure <br>
WHEN I run `npm run start` from the root directory <br>
THEN I find that my application should start up the backend and serve the client <br>
WHEN I run the text editor application from my terminal <br>
THEN I find that my JavaScript files have been bundled using webpack <br>
WHEN I run my webpack plugins <br>
THEN I find that I have a generated HTML file, service worker, and a manifest file <br>
WHEN I use next-gen JavaScript in my application <br>
THEN I find that the text editor still functions in the browser without errors <br>
WHEN I open the text editor <br>
THEN I find that IndexedDB has immediately created a database storage <br>
WHEN I enter content and subsequently click off of the DOM window <br>
THEN I find that the content in the text editor has been saved with IndexedDB <br>
WHEN I reopen the text editor after closing it <br>
THEN I find that the content in the text editor has been retrieved from our IndexedDB <br>
WHEN I click on the Install button <br>
THEN I download my web application as an icon on my desktop <br>
WHEN I load my web application <br>
THEN I should have a registered service worker using workbox <br>
WHEN I register a service worker <br>
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets <br>
WHEN I deploy to Heroku <br>
THEN I should have proper build scripts for a webpack application <br>

Starter code: https://utah.bootcampcontent.com/utah-coding-bootcamp/UofU-VIRT-FSF-PT-02-2023-U-LOLC/-/tree/main/01%20-%20Class%20Content/19-PWA/02-Challenge/Develop 

The motivation behind this project was to build a text editor that utilized the different aspects of PWA programming. 
I built this project to put the lessons into practice that I learned in this section. I created a text editor that has a client and a server component, front and back end, I am using a webpack to bundle my files, and I have database storage created with IndexedDB.
I learned how to use service workers, webpack, and IndexedDB. I learned how to use the package.json's to use the commands to open the parts of the project that I need. 


## Installation
Open the project from github and initiate an 'npm i' when the dependencies have installed run 'npm run start'
## Usage
Follow the steps in the acceptance criteria. 
## License
MIT License