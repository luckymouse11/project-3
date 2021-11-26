# Project 3 - How Green is Your Plate

<img width="444" alt="greenplate-logo" src="https://user-images.githubusercontent.com/88091835/143428748-43d2b2ac-1a69-49f0-9223-4757d9fe8cdb.png">


## Overview
The third project of GA's Software Engineering Course, a group project to create a MERN stack app with @kate-lab and @mesowa.

The app has been deployed using Heroku and can be viewed <a href="https://greenplate.herokuapp.com/" target="_blank">here</a>

<img width="1099" alt="p3-homepage" src="https://user-images.githubusercontent.com/88091835/143508169-21d7c0c3-f3da-4f93-b37f-f3ae4c016fca.png">

## Brief

- To build a full-stack application with both backend and frontend. 
- Use an Express API to serve data from a Mongo database on the backend.
- The frontend must consume the API and be built with React.

**Timeframe: 8 days**

## Technologies Used

- HTML5
- CSS3
- SASS
- JavaScript ES6
- MongoDB
- Express
- React
- Node.js
- JWT
- Bcrypt
- Git
- Insomnia

## Demonstrations of App Flow

### Register and Login
For users to register and login in order to add recipes to the site.

<img width="589" alt="p3-login" src="https://user-images.githubusercontent.com/88091835/143430107-b0e2d870-3cbf-48cf-8eb9-33b60b734f7f.png">
<img width="593" alt="p3-register" src="https://user-images.githubusercontent.com/88091835/143430109-789b3cbd-1092-43eb-a901-4799e1c4502c.png">

### Index page
Showing cards of all the recipes that have been added by users.

<img width="959" alt="p3-recipeindex" src="https://user-images.githubusercontent.com/88091835/143427364-9828ab60-7b65-468f-8dd4-178b0587d9eb.png">

### Recipe page
Individual recipe page that displays the total envrionmental impact of each factor, as well as key ingredients, links to recipes and a description.

<img width="925" alt="p3-recipeshow" src="https://user-images.githubusercontent.com/88091835/143427365-5be5c172-d1fe-42f9-a5f9-3168f1606b04.png">

### Add a Recipe
Where users can add their own recipes using a form. They can select from a number of key ingredients that will in turn show the total environmental impact of a recipe.

<img width="466" alt="p3-addrecipe" src="https://user-images.githubusercontent.com/88091835/143428692-1590da6e-9c4d-4e9c-98eb-b14ed39e960b.png">

## Process

Upon receiving the project brief, our team started out by brainstorming ideas for project ideas. We ultimately decided that we should create a project that we thought would remain current as well as relevant to our interests. Therefore we went with a vegan recipe website; our personal twist on this website was that we would include the environmental impacts of certain food ingredients.

As this was our first "major" group project we understood that communication and planning would play a crucial part in keeping our project on schedule. We agreed that keeping in contact through Slack made the most sense, whilst we would set up a Trello board to track our progress and update each other on what we may be working on at any point in time.

To get an understanding of what we wanted our website to look like we used Jamboard to create our wireframe.

<img width="910" alt="p3-jamboard" src="https://user-images.githubusercontent.com/88091835/143426930-6f4e4d20-2338-4048-9bb4-b193c96b60a9.png">


### Dividing the workload:

We decided to complete the backend together as we understood that this part would need to be set up correctly before we could move on to the front end. The aim of coding together was to reduce the chances of errors. Once set up it would allow us to distribute the workload easier.

<img width="520" alt="p3-backened router" src="https://user-images.githubusercontent.com/88091835/143438400-3c3d35d8-c961-4f5b-9a29-5bca40f0c85f.png">

My personal contribution to the site was creating the main recipe index page and the individual recipe pages. The use of bootstrap was an effective tool as this allowed me to structure the page a little easier. With the backend set up the bulk of the information could now be "called".

<img width="458" alt="p3-recipeindexcode" src="https://user-images.githubusercontent.com/88091835/143438555-e420ee98-8363-4ad9-92c1-4ab36d7e3b83.png">

Showing the key ingredients from each recipe and the contributing environmental factors was an integral part of the site. 
As this information was to be seeded I had to keep communicating with Kate and Megan to essentially check when I could go ahead with creating the function to show the key ingredients.

<img width="567" alt="p3-multiselect" src="https://user-images.githubusercontent.com/88091835/143438010-a779cb18-7652-4483-922f-68dede14bb21.png">
<img width="415" alt="p3-multiselect2" src="https://user-images.githubusercontent.com/88091835/143438014-b55f72da-11c0-4593-8b4f-785019af2fc0.png">


Once this was done it was then possible to create a function to display the environmental impact as a figure.
 
<img width="952" alt="p3-envimpactmath" src="https://user-images.githubusercontent.com/88091835/143427267-9155f8cd-1aae-4653-a80e-50564c1a700b.png">


## Known errors/bugs
- When creating a recipe, adding an image would not always work. We came to find out that there was a timing issue, not enough time was given between uploading the picture and creating the recipe. To resolve this we would need to create a timer function that would not allow a user to click ahead when uploading an image.

## Wins/ Challenges
### Wins:
- Picking moments and sections to pair code meant that getting through trickier sections was smoother as we could point out any typos or errors.
- The API we chose included a lot of nested information. Being able to extract that information was integral to what we wanted our site to be.
- Developing an understanding of how the backend linked to the frontend with regards to the routes and axios requests.


### Challenges:
- Wrapping our heads around authentication and tying it to the front end for the registration and login component.
- This was the first time we were using Git, therefore we did have some trepidation when it came to merging our branches to the master branch. Through good communication we were able to avoid any major merge conflicts, although we did have a few small issues.

## Future Improvements
- Allow users to view all recipes from a specific user.
- Create a profile page that includes the user's favourite recipes.



## Key Learning

- The importance of good communication; thankfully, as a team, we stayed in constant communication and always made ourselves available whenever we needed to discuss issues we were facing whether code or git related.
- Having a clear plan and setting targets helped the efficiency of the project and gave us a good idea of if we were on track to completing our minimal viable product (MVP).
- Project management, making sure we kept focus on our respective responsibilities with regards to an MVP.

