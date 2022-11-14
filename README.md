
# Tech Companies Quiz
This is a website for a trivia quiz about tech companies. The aim of this website to test the awareness  of the users knowledge of tech comapanies in a engaging way whilst making them aware of facts they might not have known before. This website consists of a landing page and container that contains 20 questions that apear in sucession ending with a score feedback. 
<img src="assets/images/responsive.png"/>

The deployed website can be viewed here. [TECH COMPANIES QUIZ](https://kaltun-dev.github.io/CI-Quiz-App/index.html).

# Table of contents
1. [UX ](##UX)
2. [Technologies](##Technologies)
3. [Existing features](##ExistingFeatures)
4. [Testing](##Testing)
5. [Bugs and solutions](##ProjectBugsandSolutions)
6. [deployment](##Deployment)
7. [credits](##Credits)

## UX
 ### User Stories
 + As a user, I want to…
 1.	be able to navigate the website easily.
 2.	be able to what the quiz is about before playing
 3.	be able to look the rules of the quiz and how to play.
 4.	be able to know how many questions there will be.
 5.  be able to know my score during and after playing the quiz.
 6.  be offered various questions that can be easy as well as challenging.
 + As a site owner, I want…
 1.	the quiz to be clear and informative.
 2.	the total number of questions to be neigher too short that they become easy nor too lenghty to end up being challenging.
 3.	the website to be simple to navigate.
 4.  the user get a feedback on their total score. 

 ### 1. Strategy 
 * Project Purpose
    *    To provide the target user with informative and fun quiz questions .
    * 	 to keep users up to date with current facts in tech and tech comapnies.

 ### 2. Scope
 * I wanted a simple, straightforward UX experience.
 * I wanted a bright fun color scheme.
 * I wanted my content to be clear for all users. 
 * I wanted a site that is visually appealing on most devices.
 * I wanted a detailed information and rules about the quiz..

 ### 3. Structure
 *	A clickable logo at the top of the page outlining what the website is about. 
 *	A clear layout is in place to ensure users can immediately start the quiz.
 *	The top part of the page is containing an introductory bio and a rules section..
 *	The middle section has a form to input name and a submit button to submit their name.
 *	A text prompting to enter their name if they didnt, for the quiz to start. .
 *	At the bottom of the page is the footer section with clickable social media icons.

 ### 4. Skeleton
 Wireframes created with Balsamiq. The project was developed from initial wireframes and more modifications were made during the development. 

 Balsamic wireframe links for the website.

 ### Large screen
 * [Home page](ithub.com/kaltun-dev/CI-Quiz-App/blob/main/assets/images/wireframe1.png) and [quiz Area](hhttps://github.com/kaltun-dev/CI-Quiz-App/blob/main/assets/images/wireframe3.png)
 <img src="assets/images/wireframe1.png"/>
 <img src="assets/images/wireframe3.png"/>

 ### Small screen
 * [Home page](https://github.com/kaltun-dev/CI-Quiz-App/blob/main/assets/images/wireframe2.png) and [quiz area](https://github.com/kaltun-dev/CI-Quiz-App/blob/main/assets/images/wireframe4.png)
 <img src="assets/images/wireframe2.png"/>
 <img src="assets/images/wireframe4.png"/>


 ### 5. Surface
 * Colours

 we have paid a lot of attention to the color scheme. And used 3 colors throught the website. we've chosen orange for its vividness and black and white to contrast with the orange. 

 <img src="assets/images/hex-colors.png" height="200px">
 
 * Font Selection
 * Google font
 we've used Cormorant Garamond for the main font, and Lora as a backup font for this website. Both fonts are from the Serif font family. This was done to enhance the formalness and the seriousness of the topic, since this quiz is about tech comapanies.
 * The fonts are from [Google Fonts](https://fonts.google.com/).

## Technologies

 The technologies used in this project were HTML, CSS and JavaScript. The HTML was used to create the structure of the page, the CSS was used to style the page and the JavaScript was used to make the entire quiz function.

 * HTML5
 * CSS3
 * JavaScript
 * GitHub

## Existing Features 

  ### Main home page consisting of four main sections.

  <img src="assets/images/quiz-web8.png">
  ### Bio area
  1. A little bio section for the user that contains a brief four lines of text pertaining to the aim of the quiz.
  <img src="assets/images/quiz-web1.png">

  2. A quiz rules button that leading to a pop up section that displays the rules of the quix, how to play, the total number of questuons and the score.

  <img src="assets/images/quiz-web2.png">

  3. A form input for users name, once user submits name then the start button will apear, else if name is not submited then an alert text to enter name will apear bellow the form.
  <img src="assets/images/quiz-web3.png">

  ### Quiz Area 

 1. score displaying area at the top of the quiz. Which shows the number of pointes thus far. Each correct answer equals to one point out of 20 questions.
 <img src="assets/images/quiz-web9.png">

  2. Question text area, which shows 20 questions one after the after the other in random order. Each time the page is refreshed questions are shown in a diferent order
  <img src="assets/images/quiz-web4.png">

 3. Underneath the questions are four answer buttons and one next button. Once an answer is chosen, the correct answer button will turn green, and the all the incorrect answer buttons will turn red. This is helpful as it shows the user all the incorrect questions if they do the quiz again.
 <img src="assets/images/quiz-web4.png">

  ### Score displaying area at the end of the game.

  1.At the end of the quiz users will get a personalised text showing their score and preif words of encouragement. Aditionaly there is a restart button, which takes users to the start home page and resets all, name, score and questions.
 <img src="assets/images/quiz-web7.png">
 
 ### Footer area
 1. Very simple footer section at the bottom of the page which contains 3 social media links. One for twitter, one for linkedin and one for github.
 <img src="assets/images/quiz-web6.png">

## Testing

 ### Automated tests

  + HTML

 This website passed the w3c html validation. There were several errors but they have all been fixed. [W3C validator](https://validator.w3.org/).

  Validation results:
  <img src="assets/images/html-validation.png">

  + CSS

 During the testing, one error and one warning was found and corrected and thus passing through the official wc css validation  [W3C validator](https://jigsaw.w3.org/css-validator/). 

 validation results
 <img src="assets/images/css-validation.png">

 + JavaScript
 Jshint was used for the javascript validation. There were over 40 warnings but eventually everything was corrected and website passed through the jshint validation. [Jshhint validator](https://jshint.com/)
 <img src="assets/images/jshint-validation.png">

 ### Manual Testing

   + Desktop

 Everything is working good Mozilla Firefox, Google Chrome, labtop and large tablet screen . Page loads and all of the page features are working.

   + Mobile
 
 Tested with Samsung s21, Samsung s22, Galaxy tab s8 ultra, and iPhone XR. It is responsive as intended.

   +  chrome dev tools lighthouse

 <img src="assets/images/lighthouse.png">

 As it's shown on the image, the the accessibilty score is 90/100. This is due the form on the page. IF form id is removed then form wont connect the javascript functions and hence this issue coudnt be fixed.  .

 + Mozila dev tools.
 Testing on all devices on mozila is good too. 

## Future Features
 1. I would like to add different levels to the quiz.
 2. I would also like to add a current question out of the total questions counter on top of the quiz.
 3. I would also like to add different questions from all topics.
 4. I would also like to add a feature where a group of questions can play against each other. 
 5. i would like to add images and sounds to some of the questions so that it can be engaging for types of players.
 6. I would like to be able to give users the option to select the langauge they prefer so that anyone can play no matter what language they speak.

## Project Bugs and Solutions:
 No known bugs now. But there were quite few problems at every stage. Whenever a problem was fixed another woud apear. Here are some.

 Problems and bugs

 * Problem 1
 array sytax was wrong and it was returning 250 errors 
 fix: fixed array sysntax problem, it was missing = operator at the begining"


 * Problem 2
 questions werent showing on the questions container.
 fix: I was using getelmentbyid eventhough i didnt use id selctor but a class selector.


 * Problem 3

 answerbuttons were overflowing the center div container.
 solution: styled new buttons, made body wider vh, increased container width and height and styled bottons with with flex column direction.

 * Problem 3
 score wasn't showing at the end event though the statements were there. 
 fix: After a call with a tutor i've realised i was putting the statments in the wrong function.


 * Problem 4
 Input button was still displaying after re-start.
 fix: added classlist to hide on the reset function.

 * Problem 5
 I tried to implement different levels feature before quiz starts, so users can have multiple options, from easy to hard.Unfortunetly this problem was complicated and took over 5 days to sort. I used google, stack overflow, course tutors and slack but nothing worked. In the end after trying over more than 20 ways to solve it, I managed to actually do solve it. However due to the emmense time this took, the fact that the submition deadline was closing by, and also due to the fact that although i managed to make 3 diffrent levels with various lengths of queastions, they still werent random because I was using the slice method to devide the questions. 
 fix: In the end i've decided to drop the feature as it was wasting a lot of time, giving a lot of stress and it wasnt metioned in the course guidlines.

 * Problem 6

 After the previous problem took place, I decided to revert back to an old commit before the whole levels incident when the code was still working and showing all 20 questions. fortunetly things where going well and I even started the read me but soon  i realised a big major problem. I coudnt push the newly written code to the live github site. eventually afer googling and I understood that I coudn not push code because I was on branch. and only you can push from branch main.
 fix: After trying 10 different git commands from slack overflow my mentor helped me walk through the problem and how to go back to branch maain. 

 * Problem 7

 After going back to branch main I had to start coding from beggining, thankfully I coppied my code on my noted before the first commit ever happened, but unfortunetly I could only see the html and css code on the local and the live site. The javascript fuctions and the butttons where'nt doing anything. the site was not interactive at all.
 fix: I kept checking and going back the javascript to see if anything is broken and if I messed up the event handelers in any way. After some googling, I realised that after the code was restored to main branch, the javascript link at the bottom the html document was using absolute link for some reason. I change the link to reletive and everthing was working.

 * Some other problems included:
 1: css validation warning for incorrectly linked google fonts.
 2: css validation error for lack of px value.
 3: Jshint 50 plus warnings on for lack of semi colon.
 4: Jshint warning on .5 decimal point use. change it to 0.5 instead.
 5: background image was linking to local browser but not live site. Used reletive file path. 

## Deployment

 The website was deployed to GitHub pages. 
 
 * The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab; 
  - From the source section drop-down menu, select the Master Branch;
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
 The live link can be found [here](https://kaltun-dev.github.io/CI-Quiz-App/index.html).

 ### Forking the GitHub Repository:

 By forking the GitHub Repository you will be able to make a copy of the original repository on your own GitHub account allowing you to view and/or make changes without affecting the original repository by using the following steps:
 1. Log in to GitHub and locate the [GitHub Repository]https://github.com/kaltun-dev/CI-Quiz-App)
 2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
 3. You should now have a copy of the original repository in your GitHub account.

 ### Making a Local Clone

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/kaltun-dev/CI-Quiz-App)
 2. Under the repository name, click "Clone or download".
 3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
 4. Open Git Bash
 5. Change the current working directory to the location where you want the cloned directory to be made.
 6. Type `git clone`, and then paste the URL you copied in Step 3.
 ```
 $ git clone https://github.com/kaltun-dev/CI-Quiz-App
 ```
 7. Press Enter. Your local clone will be created.

## Credits 

 ### Content

 All content was written using sources and background information from: 

 - Google search engine.

 - [Britannica](https://www.britannica.com/quiz/tech-companies)


 ### Media

 - The background image is from google images.
 - The icons are from [font Awesome](https://fontawesome.com/)
 ### Work based in other code

 + [W3 Schools](https://www.w3schools.com/) - used daily for variety of problems and for deeper understanding of javascript concepts and some old html and css concepts too. specially wit the form input and the media quearies..
 + [Stack overflow ](https://stackoverflow.com/) - stack overflow used daily for every problem, specially the code for sizing length of the content div and footer div.
 + [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1084s) - For the code for the quiz logic, questions arrays, asighning questions and answers to buttons and clearing the buttons functions. 


 ### Acknowledgements

 -	To the Code Institute for the course material, lectures and their grounded guidlines for the project.  

 -	To the Slack community for being so helpful, informative and inspiring

 - To [W3schools](https://www.w3schools.com/) and [Stack overflow ](https://stackoverflow.com/) for general reference regarding sytax, tags, elements and everything in between.
 - To my mentor Brian Bohare for supporting me, and encouraging me not to give up when everyhing got too hectic and overloaded with pressure at home and with studies. 










