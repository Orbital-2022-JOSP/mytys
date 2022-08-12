![](https://lh4.googleusercontent.com/ggtS5SfoOXyIGyV2FINQ2AbaryKi8zkaanktrIdFFu_p6ENTBRujoK6cCREyAiVSzMWFsdVKztmZwbR3sTmCjz4d0gyZGfsVRx2AOFKdaKBIyNJTwjFw9z7Ls_VNDp9qIjcQ7a7CULNnTm4nQXmvamM)

# MYTYS
## Motivation
We notice in Singapore that education is becoming more and more rigorous with children from less fortunate houses falling more and more behind due to the prevalence and reliance on external tuition.

Many students seek to have their answers graded on the spot while having access to a large library of past year papers for them to practice. We all know that physical past year papers cost money and take up space at home. Furthermore, they are manually graded and do not provide much explanation other than the answers to questions in the paper. Online websites that provide auto-grading for local past year papers are hard to find, and they do not support a relatively large library of papers. Similarly, they lack explanations and may not be user-friendly.

As a result, most parents are willing to pay a large sum of money for tuition because it best supports the learning process for their children.
## Aim
We hope to make the learning process for children fun and engaging, showing them that it is possible to do well within the Singapore education system without the need for external tuition which can be expensive.

We hope to also bridge the education divide between less fortunate students and their more fortunate counterparts by giving them near tuition-like experience at no cost. We also hope to put the minds of parents of such children so that they will be able to deterministic, reproducible results without the need for expensive tuition.
## User Stories & Interviews
1.  As a student, I wish to practice what I learn in school in a fun and engaging way
2.  As a student, I wish to look for alternative explanations to problems I have trouble with from school.
3.  As a parent, I wish for my child to join an environment where he/she can learn even without the need for tuition
4.  As a parent, I wish to see what areas my child is struggling with to see what I can do to help
5.  As a tutor, I wish to give back to verified less fortunate students for altruistic purposes.
6.  As a potential Non-Profit Organisation(NPO) that wishes to work with less fortunate students, I want to be able to use this platform to check on the progress of the students.
## Project Scope
### General Overview
MyTYS is an interactive, user-friendly website for students to be able to practice what they have learned in school through on-site questions and challenges. Through an automated marking system for MCQ questions, as well as marking done by onboarded tutors for open-ended or short answer questions, students can obtain immediate feedback for their questions.

Through additional features such as a kahoot style quiz, students have the opportunity to appear on the on-site leaderboards depending on their level of performance. In addition, they will be able to check for their weaker topics, as well as performance statistics on their own profile page.

Additional features will be discussed in detail in the section below.
### Features
#### Student-centric features
1.  Interactive platform for students to practice questions
-   This platform offers questions from math and science subjects for students to practice and provides multiple question types (MCQ, open-ended, short-answers) by using a sample library of collated questions.
-   Development of CRUD API routes for question and worksheet entity.

2.  Kahoot game-style answering quiz, leaderboard, and point-scoring system
-   By developing of Quizlet / Kahoot style answering system, we attempt to implement weekly quizzes which would result in the accumulation of points for the student.
-   There will be a daily leaderboard integrated into the platform, which displays the top 3 students for that week

3.  Student Profile
-   Student performance statistics will be published on this profile page. Student development will also be tracked using a linear regression model.
-   Some statistics to be included:
-   Number of days logged in/consistency of participation
-   Number of questions/papers completed
-   Graph of student’s score over time (considering past and present data)

#### Tutor-centric features
1.  Seamless tutor onboarding system and platform for tutor to mark scripts
-   Through the development of an automatic grading and score system, students can receive an immediate report regarding completed questions/assessments (for MCQ questions)
-   We will also integrate a platform for onboarded tutors to mark scripts (for open-ended or short answer questions), whereby scripts will be disseminated to tutors on the platform. A notification will be sent to students once their scripts are marked.

2.  Platform for tutors/students to submit questions/papers
-   Students and tutors will be able to submit questions through a portal, with their respective answers (if available), supplementing the existing questions in the question library.
-   These questions/papers will be filtered through an automatic filter system to filter questions into their question types.
# Project Poster
![](https://lh6.googleusercontent.com/wuDXyJUjUHrmtBPvwiDX_1DQf3Dr4_eBnnvWibW17tyLKBb7r6Vk1r36fJep7ZBtaTfkSwguovV24l4Yce9MHcRqaptpNV_lmUiEFctWWdmM-J8wBJj15uc7I9_hhbZycGem5J80oar7sLt9TJLVe8w)
# Relevant Diagrams
To be able to allow readers to understand how we have structured the design of our website, we have come up with a basic activity diagram as well as a more comprehensive, in-depth user-flow diagram.
## Activity Diagram
![](https://lh3.googleusercontent.com/oJ1q9gjp0_TfkNNUhFiImIR6aXuU-7mEhrEayKNmdIxoFTScs-by2WZL1jioL6mN-73gAV-AV_w5WFLNw-Wbiqi88HSqq7mH2DeHdfTbV90LXyqZQwXskpYfwnsPf3xzs_O3Oe0_NVL4tQBrWqHagGI)
This basic activity diagram serves to illustrate how a potential student can navigate the website after login.

Upon login, the student will be directed to the home page, where the learning process, stats or even mailing list options can be viewed and accessed.

The student can also access the leaderboard, the course page and the quiz page under the NavBar of the website. The main feature of our website is the gamified question-and-answer system, which can be accessed under the quiz page or the courses page.

The main differentiating factor between the quiz page and the courses page is that the courses page provides questions filtered by topics and difficulty, while the quiz page provides questions of varying difficulties and of differing topics.
## Userflow Diagram
![](https://lh3.googleusercontent.com/lY7_X3e1gELGvmPx3jBMWZRWfyZ5OQ2hoiDDgiP741xfdnwP-Z_Jj6e2JBGYDt9sVJPRHz9P02kfi3rGVWWuk9AD4k-SSBG31MUiN1M76OripYgDgb7cHE67gWpKmwVSYldEakiXJe6iCOJxpW0L_Gg)

This Userflow diagram represents the path that a potential user would take when navigating the website. This diagram was developed before we worked on our features, and as a result, represents the ideal interaction that a user has with our website. This unfortunately also meant that not all the features we stated here were eventually implemented, such as the tutor platform or onboarding system and the quiz completion level of each student.

As the diagram above is very comprehensive, here is a brief summary of the important components of the diagram:

Starting from the Website landing page (Bottom left hand corner of page above), the user can navigate to the different tabs on the NavBar, such as FAQ, About us, etc. Clicking on the sign in button leads the user to the sign in page, whereby the logic for the registration process is charted out in the diagram. After logging in, the user is determined to be a student or a tutor.

As a student, the user can view past results, profile, access quizzes, courses as well as the weekly leaderboard. Under Indivdual practice quiz, there are more details on the logic relating to the user quiz attempt.  

As a tutor, the user can view assigned students, mark their assessments and view their scores. Unfortunately, we were not able to implement the tutor-side features for this milestone.
## Project information
Throughout the 3 milestones, we have included and developed multiple features for the MyTYS website. Here is a breakdown of the development process of these features from Milestone 1 to Milestone 3.

### Milestone 1
-   Website front-end design: Firstly, we implemented the rough UI and design of our MyTYS website, with basic card components and information blocks. At this point in the development, the NavBar was not able to redirect to other pages, and the only functioning page was the Home page. The Quiz and Courses were also not developed yet.

![](https://lh3.googleusercontent.com/3nKAYvpc1-MBbOOlfOme3xl-_kqwv9i0BY2-NALV6toodwQCmbAHxZ9hHfmZaGrL-vCg0aWyQFdvS6Jn8W06y3xkal64gw0xhRCvoQ8PtDXA0ha5LjbW9GlVwStNaVAyIzLqTih2X_Ub-gK-rzKFehc)

-   Introduction of user registration and login: The basic login and registration feature was implemented at this point of the development.

### Milestone 2
In Milestone 2, as we were unsatisfied with the whole website design submitted in Milestone 1 and sought for a more aesthetically appealing option, we decided to re-style the entire website using appropriate components. In this iteration of development, the main website was pieced together, where we linked the necessary pages together.

Improved authentication system

As compared to the previous milestone, we improved our login process using auth0 integrated with gmail sign in.

![](https://lh5.googleusercontent.com/nfHIQ7_uza31czQyCclnLKF08EF5fF-odkv4ymozHhwp4FL7VD9b4FjoACztUMKwk6_aEZRwBXwan7DFNiLi6YVDZpZjsf1gkp_-M2ukL4KskVnH-dbixN3g6XT_qeouZCfCrLl9dDdOpLrSkbyQwn0)

Home Page

![](https://lh4.googleusercontent.com/RilMAcaHXSAiBrmXGj3zKE9KmwaFBJ8ia3zfBvTTjnRiOwtUhvqUjPa1EjZPybnDqnroGhwdURo3YmiuAbEBuYfL55KQl6yHDNYC1tGnhJpXkjykGDu-YrvGZe1BPnFBIY10S7BnrO2Y3QGU7COg538)

The home page is the first page users get directed to when they visit the MYTYS website. The main components of the home page are as follows:

1.  The Enroll component - where users are given a summary of what MYTYS offers and the option to enroll immediately
2.  A mailing list for interested users to subscribe to our mailing lists
3.  A step-by-step component - informing users how to learn using MYTYS
4.  MYTYS user statistics
    
About Us Page

![](https://lh3.googleusercontent.com/Y6n-2Mee_53dsKJjPhJVd1ACQTlltGzKT-aQUhGEmehY0sOhh1roMQXmnHACUSYhWMJQVHffvwq0Yo27zE20_NCA5sUm9qc8iAlgCb6jJEqqqyRiP0Rxr65dos3lJ0LfRwAepUB0MjM06cf4AvA_3gk)

The About Us Page is a page for users who are interested to find out more information regarding MYTYS, such as the staff and management, certain statistics, and a summary about what MYTYS does and its objectives.

How It Works Page

![](https://lh3.googleusercontent.com/MXIjxIvVMH_Zmx_jlLsnd2qgeQxIvn2_-oXCIcl31edZtb1i7wKp__KvndrjYRkUQXloh78_76HMBmkKS5sAtAYhotmKI0OaBGkv6zPEAteZ1V-9zY6d3wXp7X5mNC8FyfhZzywfcwsm6X7G9lChQD4)  

The How It Works page provides users a summary of the steps taken to fully utilise the features and services that MYTYS offers in their learning. Furthermore, the testimonials written by existing and past students of MYTYS can be browsed from this page.

LeaderBoard

![](https://lh5.googleusercontent.com/HpAzz2S7M2KTsGLPKwcNlEdDs8zADeGICNmBzAN-JWp2Ws6rk7oCkSSZK9yAlowZFQXDazODv99uf0YOye1MlL0Ong3DI2YVdT_ltJNKq54Ll7Elyi8Yw0U7eXOQimLXLxr7X71SEcKdPS5e2Lz9wds)

Depending on the number of quizzes a student completes in a week and the scores of these quizzes, the student has the opportunity to be featured in the weekly MYTYS LeaderBoard. We hope this provides an incentive for students to be diligent in doing the quizzes and to score well in them.

Question Answering Page

The question answer page is the page that students visit to practice questions, in the form of a kahoot-style interactive quiz. In place of simple MCQ options, students are presented with cards, which shows if they have the correct answer if they select the correct answer.

A green box and answer reasoning will be displayed as shown below if the student selects the correct answer.

![](https://lh4.googleusercontent.com/4UuwC861f-PWi2Pz5g33swkyY2RV2YIHA56qWI-GsL4FiH4__d5ue1AgZdefhXfwUp1jQpDJjn877idHGw7aKjhbGW5FdnNedJCJaBRPXQYn9XKk78CL_mb18E4DQHBvJAotF3e-vuvC0EMynx78NXw)

If a student selects a wrong answer, a red outline emerges around the box and the answer reasoning will be displayed, as shown below.

![](https://lh6.googleusercontent.com/puq4mHJDxCn2d9avtaK087fRrFWDz5gNUVOcrF8gJ3k9-SfGlHr0SY8Y5fTizgeJ4pshzHDYDN4FeMfswl60qgrs6iNBd2QhWm9AqtFmTTS9clpMYSzHpJjidTgGq9g7Bql6In_m8E2Kp20VdATkwzM)

Admin Page - Questions

![](https://lh4.googleusercontent.com/9xmlSvC0d-0ohGN-cYCLU5yHftdzGR5P2kOZTzybGwRFXEOPpgL-HV_fEBA0idbcRQUWtw3ksGQHALvfqXSvoMNavjNcTuBg0KEUnKBJYBhQMwXOxWnA0RJ5LuuKzHIBdLByOzXvLgC5pGWfHEbvQ0E)

The Admin Page is used to manage the questions database, and is especially useful if the admin seeks to delete the question in the case where it is irrelevant, update a question if there are mistakes, or create a new question, which will be covered below. All in all, it provides a convenient way to manage the current questions in the database.

Admin Page - Creating a new Question

![](https://lh5.googleusercontent.com/TUX8CcRhJKkpwmZFy2fVz51Y5602ssF_gmb_Ib4jHZRlie9pe19s_zoygIZSfRTZseRTEcMwiPeriPgWf9LVWcZXdCBRP2pKNwQKML-9JB1i0u0_eURymayGuMKgGy2jcFYf7NNjV0kooMAtqkisKjI)

This page allows for the creation of a question by the admin, whereby the admin can easily pick the required components for each question topic and question type, as well as fill in the necessary fields required for the publishing of the question. The question will then be created in the database as well.

### Milestone 3

In milestone 3, we improved some of the existing features, and also improved the question bank for our questions. We spent the bulk of the time implementing new test cases and conducting testing, as well as dealing with security vulnerabilities of our website. For testing and reducing security vulnerabilities, we will further elaborate on them below after the features section.

Courses Page

![](https://lh6.googleusercontent.com/aUEBP0bU2EXnWUvQevbUISe0f4gSe-_m_UGCMh_ukpxWQaXHkOyhEItB72NwgbfErX2L4ufSa-ruARfJNwVOm1DP8210MSXT3HeRHbaK7068YagQvyue_di1xiJlNRWneVMcPC49BxRLbCgSQUai9_c)

The Courses page offers the various quizzes and practices MYTYS offers at various levels, condensed into courses for convenient and easy selection. From topical to full-paper style quizzes, students can maximise their learning from these courses.

The main improvement we had on this page as compared to the previous milestone was that the courses are now interactive, where it is now clickable and easily enrolled, where students can begin answering a question relating to that course topic and level of difficulty.

Quiz Page

Under the Quiz page, students will be redirected to a question page where they can answer questions. The main differentiating factor between the quiz page and the subjects page is that the subjects page groups questions into courses based on their level of difficulty and their topics tested. The quiz page on the other hand, provides a non-ending set of questions (limited by the number of questions in our database) with varying levels of difficulty and varying topics for students to practice. Each time students click on the quiz page, it refreshes and displays a random question.

We believe that such a feature would be helpful for students who may not have the time to embark on a new course or would prefer not to commit to a course, as the quiz page would still provide them a series of questions to practice on the go.

![](https://lh6.googleusercontent.com/lNfayBELBMuCD0cRLWVbGFsGC7h2xqYQ5UGengU4XK0Uy_EVGZ1pw5woRiLbwk6B3l9-T2UhZEEyVS9dxnT3o5haiPH6-EXCEPjoxeW0IHu_svnnkmppFhrrUsGdho_JhHjOt1IbhC32HuTwjDKoXB4)

Furthermore, we have appended our database with questions which have a short answer question style, which means that students using our website can gain exposure to answering more types of questions. For example, the short answer style of questions has been added to our database, different from our convention mcq question style.

![](https://lh5.googleusercontent.com/GrwhCsH6H5RpEsCMNHQGo61gFE-f9YTlv4WqyYJ2RxSxSHG7vNyGgPMcAolS95DFA-oKS2lm7EZc8bSMwWDFCGHv3tIL8o9Szni3hpYDpMK4k6k2wucrbEBbx2sHi6dBQl9cXPyixXOvmiF8nZV7B4o)

Preventing unauthenticated users from accessing courses

We have also improved our userflow logic, whereby we have barred unauthenticated users from accessing our courses. To be able to access our courses and materials, the user would first be required to sign in or create an account on our website.

In the case where an unauthenticated user navigates from mytys.io -> courses -> anyCourse -> Get started, the below warning message would appear, and a prompt to log in would also be displayed. This makes sure that only authenticated users can access our courses, and our questions would not be publicly distributed.

![](https://lh5.googleusercontent.com/5HNtv__nCexjLCt5xV-Oigpn9VEIPi-i5actDrfiBG00Igh98dF__ojdQ5rpoysTNDwTzArnHrOQsoEO6soc0NiKHQUFzMLJ6Y2v371fLDwXMhZzNWPEEtft2ixzi3ah16USeJAGk4iCBe1z1YCac7A)

Loading component

In order to ensure a smooth user experience, we have implemented a loading component that would be displayed while a page is loading. For example, when navigating to the courses page, the loading component will be displayed while the relevant course data is being fetched from our database.

![](https://lh6.googleusercontent.com/kt-Q7UnPOE416xmJwSh7GKdtWRoS_RU9K_3bErIERlQl9wih9Jj2hJQHD307XxnQdIZOKEv9FmxFC83cicigoobeGX4MuZaXEth51JEsqt7swxf_yRa6M2fZII4SZkpXuiDHvr-yaGCEXdJKS4Y_lMk)

### Constraints in our features

This portion of the documentation serves the purpose of discussing the limitations in some of our features as well as the features that have not been developed.

1.  Users are not able to submit questions currently:
Currently, only the admin of the MyTYS website can submit new questions, while students are not able to. We hope to be able to enable users to be able to undertake this action, whereby only after the admin approves the question will the question be successfully added into the question database.

2.  Small number of courses available currently:

There is a small number of courses available on the course page of MyTYS, which may not be very useful currently for students seeking to practice certain topics. In addition, the questions provided in the quiz page are generally math questions catered to primary school students only. These 2 limitations are due to the question database not having sufficient questions. We hope to be able to add more questions into the database in the future.

3.  Tutor onboarding feature and tutor marking platform:

Unfortunately, due to the lack of time, we were unable to implement the tutor onboarding feature and tutor marking platform. We prioritised the student-centric features first and focused on MCQ and short answer question types where an immediate answer can be shown rather than essay/ long-answer questions, where a tutor is manually required to grade the work. While the tutor-centric features would have made the website more holistic in its appeal to both students and tutors, we believe that these tutor features can be slowly added on, as MyTYS can still function with only the MCQ and short-answer question types as manual grading is not necessary yet.

# Testing

MYTYS currently employs the Jest library to test our frontend react components along with Insomnia to test our backend api code.

![](https://lh6.googleusercontent.com/QklP-ksZFPhHJ-_9w5BgOKxZ6yuTIAVlhrAREfEH8-TQ_0CjFyg9Z3d9LmXPrgGn0WSca9nuPSqH6ipSTijaOmF8eGR_-6XSZ2qi6uBH-BJBEq_k1Dr3XmKE3itsbaK5oiUk4VOxDPCBnEspzRbKfZA)

We also have a custom github actions workflow which will run jest tests on pull request so that our developers can check if any changes result in broken codebase.

![](https://lh4.googleusercontent.com/k1uBKQtezNEabI6pe4wHxgFKUD9iwqqntCih2kzHUG_VIt4PGrWZNQhbg7NbnWyn7hj5BdavTgvDcjzcYNZBhbnHct-JHIrt_VX9c0U3usIw97_bAspCjK4GTHch0_OK-BYIDgILpVtBA1UeIVeGqsE)

# API Testing
Happy test refers to test whereby all the data provided to the api is correct.

Question Model

Tests (Create):

1.  Happy Test
    

API Endpoint: “/api/questions/”, POST Method

Input:

{

"title": "Find the ratio of 80 g to 4 kg 80 g.",  
"description": "",  
"difficulty": 40,  
"explanation": "First, convert 4kg 80g to grams, which will yield the result 4080g. 80/4080 = 1/51",  
"questionTopics": [  
"62c2d9294f226059702694a0"  
],  
"questionTypes": [  
"62b5d398305eff87905d7c2f"  
],  
"subject": "math",  
"questionType": "mcq",  
"mcqCorrectAnswer": {  
"text": "1:51"  
},  
"mcqOptions": [  
{"text": "1:8"},  
{"text": "1:50"},  
{"text": "1:51"},  
{"text": "1:60"}  
],  
"oeCorrectAnswer": [""]  
}

Expected Output: 201 Created

Actual Output: 201 Created

![](https://lh4.googleusercontent.com/6ZKaWPyhT-jcEhqjoXsQcA8ZR9vpxMfemj3Gt4u3AVjJcgW-vuyIu2rDXbEDm9twq6xTGfv5s6q5eCOpJqULJ1p6MKU1hrSrCnRlVDHqvBtk2CFRYQpwNfyYGhrKV-78XG9BVq6wUN1PiuLreh-uYg)

2.  No title is provided
    

API Endpoint: “/api/questions/”, POST Method

Input:

{  
"title": "",  
"description": "",  
"difficulty": 40,  
"explanation": "First, convert 4kg 80g to grams, which will yield the result 4080g. 80/4080 = 1/51",  
"questionTopics": [  
"62c2d9294f226059702694a0"  
],  
"questionTypes": [  
"62b5d398305eff87905d7c2f"  
],  
"subject": "math",  
"questionType": "mcq",  
"mcqCorrectAnswer": {  
"text": "1:51"  
},  
"mcqOptions": [  
{"text": "1:8"},  
{"text": "1:50"},  
{"text": "1:51"},  
{"text": "1:60"}  
],  
"oeCorrectAnswer": [""]  
}

  

Expected Output: 400 Bad Request

Actual Output:

![](https://lh5.googleusercontent.com/EZm9Dxy2EqRDZY2w5vvJdhMMLnP2pZHSL_8f544ui3QFWnPldJONgP_Xl-6huE1Y8bgadveQZ3bZhk_O2uuMZSH2jykN8Kk9zdLHyq0eE2E_CVLWdRckZ67zJYL8zlUJHTFSuhzJ8ZLyvSE_Rlsu5Tw)

  

3.  No difficulty is provided
    

API Endpoint: “/api/questions/”, POST Method

Input:

{  
"title": "Find the ratio of 80 g to 4 kg 80 g.",  
"description": "",  
"difficulty": null,  
"explanation": "First, convert 4kg 80g to grams, which will yield the result 4080g. 80/4080 = 1/51",  
"questionTopics": [  
"62c2d9294f226059702694a0"  
],  
"questionTypes": [  
"62b5d398305eff87905d7c2f"  
],  
"subject": "math",  
"questionType": "mcq",  
"mcqCorrectAnswer": {  
"text": "1:51"  
},  
"mcqOptions": [  
{"text": "1:8"},  
{"text": "1:50"},  
{"text": "1:51"},  
{"text": "1:60"}  
],  
"oeCorrectAnswer": [""]  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh4.googleusercontent.com/FSjNMwFT3pvi2e5n7l7RTOBYHaOR0ijRBVVlpQa49tlrH4Vm39g2WXf-Kva1VdZgU5PfNNLQt1uTlfVCF4TAQP7zrtdjWB-sPutGzJpCCtTYk_oRZjrrm26LhA6-InjWW4uSlDNVk1IHmpXhi_uoalY)

  

4.  No explanation
    

API Endpoint: “/api/questions/”, POST Method

Input:

{  
"title": "Find the ratio of 80 g to 4 kg 80 g.",  
"description": "",  
"difficulty": 40,  
"explanation": "",  
"questionTopics": [  
"62c2d9294f226059702694a0"  
],  
"questionTypes": [  
"62b5d398305eff87905d7c2f"  
],  
"subject": "math",  
"questionType": "mcq",  
"mcqCorrectAnswer": {  
"text": "1:51"  
},  
"mcqOptions": [  
{"text": "1:8"},  
{"text": "1:50"},  
{"text": "1:51"},  
{"text": "1:60"}  
],  
"oeCorrectAnswer": [""]  
}

  

Expected Output: 400 Bad Request

Actual Output:

![](https://lh6.googleusercontent.com/inh3yQNLtnNuwqgMIMWItnGbU7bLilMGv4grmifmQtVjXZ5IXxa13p8ZdwWxPJOQsZij2xrq3uTEtuo3KZEgrKNCNjt8bYhw9v3WtNt0-MA8APSmaio-2nNNvdjOBh2KeJm6w0o5ZUJIUw9F94Sgtes)

  

5.  No subject
    

API Endpoint: “/api/questions/”, POST Method

Input:

{  
"title": "Find the ratio of 80 g to 4 kg 80 g.",  
"description": "",  
"difficulty": 40,  
"explanation": "First, convert 4kg 80g to grams, which will yield the result 4080g. 80/4080 = 1/51",  
"questionTopics": [  
"62c2d9294f226059702694a0"  
],  
"questionTypes": [  
"62b5d398305eff87905d7c2f"  
],  
"subject": "",  
"questionType": "mcq",  
"mcqCorrectAnswer": {  
"text": "1:51"  
},  
"mcqOptions": [  
{"text": "1:8"},  
{"text": "1:50"},  
{"text": "1:51"},  
{"text": "1:60"}  
],  
"oeCorrectAnswer": [""]  
}

  

Expected Output: 400 Bad Request

Actual Output:

![](https://lh5.googleusercontent.com/IZt7lOo9iRRVbb0BOxIOobVbOqcjsKfyuWdsH6HLxvEyYDkw80TJrRJXeRcdcsiYa6OmCEdDyqHeV6dfclbDboxF3Qoz-0QMWGjKC8WmeYr7tf9CsxxNhcAix4nFk24QrpRdmza13JIWP5qsfKIkI60)

  

6.  Get all questions
    

API Endpoint: “/api/questions/”, GET Method

Input: N.A

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh4.googleusercontent.com/cfRiAF6EA1QQRYoNx05vNx-TnEPmkthx4EPX48KTfTuwbhSfBFB-wUHdjPb7ZnBLOv6bwIfuIOvVj9A2MRWdDz9JrQKEmAB3OJd29NYW8tiJCZJL2kaObNucGFW4tdkSUXuNdQsm1PbphyzBEG6v1rk)

  

7.  Get all questions by single question types
    

API Endpoint: “/api/questions/type/62b5d398305eff87905d7c2f”,

GET Method

Input: N.A

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh5.googleusercontent.com/oaFog0oBt8NlEdCDxaE3IZZ5rBIm-DcX5KnRpUk7Y26UM8O-R-PP4pEtWDdAYNH82xrkm6TMO9LIqXsnhq26DEc56mnASJHLxNQ3HDv-4ztUjZqT_Mf0ROvJOh8qLMZG3IKYsLoNQ0UMtnaFN8hR16g)

  

8.  Get all questions by single question topic
    

API Endpoint: “/api/questions/topic/62c2d9294f226059702694a0”, GET Method

Input: N.A

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh5.googleusercontent.com/Y-kizRSUk0tuG3tcY7Rrp8Rw9jvfJngqTQyzZaY6AXbHcPYR324rOmmvLKRQt27v1aYfsS7y4B0D-BoMyPDNeCNz3OWCI3Cgb0dZrrSlpxAeAflxhzxF9zFNV8AwqlPdQV8P3HcW0pn-OZz7LvBM-qI)

  

9.  Get one question
    

API Endpoint: “/api/questions/62c2d9804f226059702694b0”,

GET Method

Input: N.A

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/Qh43nX_XXLKOL_NmccGBzi1gfLiv76beS7QInajMeSFR8nk4Si0yRed1xdCzMRnJbNuGzqSG2GPPOmeuurMl8Zo0w6udvi5a1MZBrMogd_zzYFOYFxJNqjLlaljWcnaouvX0f24Zx6sRJOoIWLk2p7U)

  

10.  Get random question id
    

API Endpoint: “/api/questions/random”, GET Method

Input: N.A

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/9tPJsRPFVmNk3dCu9axFM_jO-wnMGMrlC9nfHscxFHfFItFPQTEsoauKmX2gYocSlBAPzLRxB90OI1aCmxn5NgMPxIlywXysDIS-gdw-BcNBelpQDPvuMBX4r_WZTh6pFASx_a8Wro935mMkEZkJ-zw)

  

11.  Title changes when given new title
    

API Endpoint: “/api/questions/62c2d9804f226059702694a2”,

POST Method

Input:

{  
"title": "Find the ratio of 80 g to 4 kg.",  
"description": "",  
"difficulty": 40,  
"explanation": "First, convert 4kg 80g to grams, which will yield the result 4080g. 80/4080 = 1/51",  
"questionTopics": [  
"62c2d9294f226059702694a0"  
],  
"questionTypes": [  
"62b5d398305eff87905d7c2f"  
]  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/yb-g1FCKgL13h8jCHEqwDsSqyyrEwbkYbOyy_3jHQCYEerI6OJwI_9OfnvhFul8FmBYEGA4S5tkiNyw3Tl4V8nHSzrKOguhOF25DcE_boSoGdJtIWAGaQdq2I3did57bSsJQk8_CJ3sHOvfhRX-Y_Q)

  

12.  Difficulty changes when given new difficulty
    

API Endpoint: “/api/questions/62c2d9804f226059702694a2”,

POST Method

Input:

{  
"title": "Find the ratio of 80 g to 4 kg 80 g.",  
"description": "",  
"difficulty": 45,  
"explanation": "First, convert 4kg 80g to grams, which will yield the result 4080g. 80/4080 = 1/51",  
"questionTopics": [  
"62c2d9294f226059702694a0"  
],  
"questionTypes": [  
"62b5d398305eff87905d7c2f"  
]  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh4.googleusercontent.com/VuSY7wTFHUZZ1LPrrL2u53xbYBGwNdS4w3-b6LT8CnIXs-K6w5p5sKxYAh0piMMvLSOt0HkDgC1bObuICQPK_8sHMYWTG86Ei7mGuw3Rl9HnhDvkVmagWxHPzUb5kfAyQEvYBYE3O3CRS32VEEEvtQ)

  

13.  Explanation changes when given new explanation
    

API Endpoint: “/api/questions/62c2d9804f226059702694a2”,

POST Method

Input:

{  
"title": "Find the ratio of 80 g to 4 kg 80 g.",  
"description": "",  
"difficulty": 40,  
"explanation": "First, convert 4kg 80g to grams, which will yield the result 4080g. 80:4080 = 1:51",  
"questionTopics": [  
"62c2d9294f226059702694a0"  
],  
"questionTypes": [  
"62b5d398305eff87905d7c2f"  
]  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh5.googleusercontent.com/7oscaND-K6Uf4sPZkFyw_q7bctrNCuXsbzOqCYGdyQmFGa9rhEGytb_3tGYp9jXj6ebkBTmjxRVJWp1UPGSAL91fjs6MsH4pqp6zxqLFI-frN9f4Ti0xm6f54WVmUr8fnsn0pgyhcjEOU9PNoeiZ_Q)

  

14.  Subject changes when given new subject
    

API Endpoint: “/api/questions/62c2d9804f226059702694a2”,

POST Method

Input:

{  
"title": "Find the ratio of 80 g to 4 kg 80 g.",  
"description": "",  
"difficulty": 40,  
"explanation": "First, convert 4kg 80g to grams, which will yield the result 4080g. 80/4080 = 1/51",  
"questionTopics": [  
"62c2d9294f226059702694a0"  
],  
"questionTypes": [  
"62b5d398305eff87905d7c2f"  
],  
"subject": "science"  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/n5nUzQag1VAiMfYfVyIFPTiR1Cbtl31I3yZIE2xH8j8FRRA8_BwKzvP7oU8Kxz_-3noFnX15II9oCJCzLqMC4P3lRXXwlFfW-0THQO_tvqnoJBXuvPapQflxmiUAhnzYATiD6_rKtjmXxQF3mIp8_A)

  
  

15.  Question is deleted
    

API Endpoint: “/api/questions/62de1c2d983b726e020d107f”,

DELETE Method

Input: N.A

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/vVLumSzGvXWMRlLj8IbFgwlOOkcdjxhLy2KjCotfXsVCuGxHfyZ3bVfYoottn-60a2TlLaMFGjDfoiOFOupuS4QFJUQxwm2WVh5NkGVDzZfNJvY2BnBdUzel5ne1WL4OOO23bCr1Jeq1YEQn2OpP9NE)

  

MCQ Option Model

Tests:

1.  Happy test
    

API Endpoint: “/api/questionOptions/”, POST Method

Input:

{  
"text": "1:15",  
"questionId": "62de65917e7e9a97685efc57"  
}

  

Expected Output: 201 Created

Actual Output: 201 Created

![](https://lh6.googleusercontent.com/xzUzvqX8XKvUsR2GqEtNGIF0rGFEEQ26ezO2WcN3MBwdBneBrCIcGIBW_BpGLH7kXQgtsavW98iojDiXOPn_ozowK5VpKe20lqL_JOv5yug8HyaLqHxIdKVpIsJ0nBoal0rxfS-t6qNu9uj1QY1uXtU)

  

2.  Missing question id
    

API Endpoint: “/api/questionOptions/”, POST Method

Input:

{  
"text": "1:15",  
"questionId": ""  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh6.googleusercontent.com/jO722iCy4toYcH6tz-AGllL10ZnzAMXQrKXn2qXvR2UdxNi2c2UuFV_ye3Y3eTcUXLImDpvLPR6vCcfgjU-bqoTaFZCtPkZI7e3OicAb7Y0Pq1yfk0KQCMo6fu25DaHsgo6OKgUCyOpU66QRQA1SCTQ)

  

3.  Missing text
    

API Endpoint: “/api/questionOptions/”, POST Method

Input:

{  
"text": "",  
"questionId": "62de65917e7e9a97685efc57"  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh3.googleusercontent.com/FWgUDL3JEWQqZ7GTVsLacaHeq8tquW8ZmqwWpL-zjoalZBpyysAYps7XMGEWnHXaIVE18JfPufpPIuSt5uz3xuWNI_f3uIbfI5WhCXf-Gni1rc3ZJClLBLxOFLI-VPBVRg6McUc_uvjYL37ZHSBiAOs)

  

4.  Question id changes when given new question id
    

API Endpoint: “/api/questionOptions/62de67297e7e9a97685efc64”, PUT Method

Input:

{  
"text": "1:15",  
"questionId": "62de65917e7e9a97685efc75"  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh4.googleusercontent.com/3j4ROphoaM9EVJ1bVLK9oDsN2d7fMpnV1nxnyomQXqQibbK7BRDzmGnNiv6FrsUxdDQlZL7Pxgrba9CXKYyCDX2sRu23YQWMe2J-cwUVOSjLFoqn4Ka-dmNS5_TuJpmw0_eESpZxUvd4zUi73C8v-pk)

  

5.  Name changes when given new name
    

API Endpoint: “/api/questionOptions/62de67297e7e9a97685efc64”, PUT Method

Input:

{  
"text": "1:30",  
"questionId": "62de65917e7e9a97685efc57"  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh4.googleusercontent.com/3j4ROphoaM9EVJ1bVLK9oDsN2d7fMpnV1nxnyomQXqQibbK7BRDzmGnNiv6FrsUxdDQlZL7Pxgrba9CXKYyCDX2sRu23YQWMe2J-cwUVOSjLFoqn4Ka-dmNS5_TuJpmw0_eESpZxUvd4zUi73C8v-pk)

  

6.  View All Question Options
    

API Endpoint: “/api/questionOptions”, GET Method

Input: N.A

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh3.googleusercontent.com/1UC-zqBObCFjywJPtiClg6yqpYy24EovGq_VQstnoiRE02x_Vn9UjSZzP-er_1t8sANl58B2T9YeW2mugeJpeiHQGbc_9TOwZo-Gj6tgXu7tbmaVuP4KczUjDVfUKVNDRHyXlXWMVVJaHqYtRjYbk4E)

  

7.  Delete
    

API Endpoint: “/api/questionOptions/62de3101c99f599063ec0c9a”, DELETE Method

Input: N.A

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh3.googleusercontent.com/CHRQS97szZ6G49_Eoej8OV5dVcFsdnbjfHLxuUScJ-g-GSp_PRAj9c8hwFvfyuRGdq1rWxgg3wN6RJrUHuFN3GY5yfZ_dFqFs7h2S_87s28xc8hN98jyTh25R6JZzYU1CaGRVquXn5np8HE23LarzcM)

  

Question Topic Model

Tests:

1.  Happy test
    

API Endpoint: “/api/questionTopics/”, POST Method

Input:

{  
"name": "algebra"  
}

  

Expected Output: 201 Created

Actual Output: 201 Created

![](https://lh3.googleusercontent.com/lo6YF_Ovl3-VrxC_hOxdetD25kycQUcOPgkjmqreltv6l_IFVyiCfwG_oAjYtGVl3_X7kOKrlBpSjQnYyphIb0f67zgnOMcLZ5458sN7YCSLwQBCZ28M6MBdkwG8jmGno_YFdYF0Nu_xd4sAhPQyETk)

  

2.  Missing name
    

API Endpoint: “/api/questionTopics/”, POST Method

Input:

{  
"name": ""  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh4.googleusercontent.com/Rznc6Ny30paKac1G74f-ZjNZRXYa7Nh8nluoJbY2NvJRj7_UhLRy07GKxdE5umf060dvQfGXL2PlAPCpLOn6YuYiepRZCy3Fv8CwyASz3-N2r59p_XYVyYwyRlnzq2ZwvStEEP2kysesScBNkVNORHE)

  

3.  Name changes when given a new name
    

API Endpoint: “/api/questionTopics/62de2eedc99f599063ec0c8b”, PUT Method

Input:

{  
"name": "calculus"  
}

  

Expected Output: 200 OK

Actual Output:

![](https://lh6.googleusercontent.com/10iDXueqsqVszd_KPtJX7koFs_3u6dnJYHhF7xyehrpRcM4WmcElM9qJl9pVBBeX5qSg635teIAv0tY4C2fgWXR4I8M00voQ35N_YbTFk5vtGpCAdTdQ2hDecawY64EqV2SO2wUh7Sr08FjKVBuPA6Y)

4.  View all Question Topics
    

API Endpoint: “/api/questionTopics”, GET Method

Input: N.A.

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/ggQ1B7vPqxlMzX16ccXxi0B1MePwDq1f7B-7BQpjcEaZ15BtI29eDMH3NL_uI9e94wZso5CWoRAdytROD9UjmGkIdurIIaBv18eC3gbxDg3wLx715VZQ-3SRL1eS3CPp4SJn0IIu1CUti7nnSbEN6EU)

  

  

Question Type Model

Tests:

1.  Happy test
    

API Endpoint: “/api/questionTypes/”, POST Method

Input:

{  
"name": "pattern recognition"  
}

  

Expected Output: 201 Created

Actual Output: 201 Created

![](https://lh4.googleusercontent.com/WeBWy49ejlEwTiay1mS3CBlu9Kl_e37O5IlmKdpdeQzPN0D-jJQpUDcAKPj-DIuJsI0UPvBCNQ8cLk79jGLhGsfZMP41dOUsKEDJNioiBMqjpLPcokTkCiRqoQ7lwGTg2_4sf5fjLb26_2hk6xwzPEk)

  

2.  Missing name
    

API Endpoint: “/api/questionTypes/”, POST Method

Input:

{  
"name": ""  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh3.googleusercontent.com/shYX2HLLo2hLFcdQvS4tyaIM0oz7oB-SiSXA2vSbu6RDrExtQaqbCNx5w5Z5uY8LyoUt5Na-TgRi62-vGJrofp_lVg0KtOqc_yyEjF5P2rwU4jatP1jXw9xbRjOUI5DUuGKSzBI_1JLVTjS2SfyD3fE)

  

3.  Name changes when given a new name
    

API Endpoint: “/api/questionTypes/62de2fdac99f599063ec0c95”, PUT Method

Input:

{  
"name": "application"  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh3.googleusercontent.com/eaPD0wFDVCuTJYPIx1zma02CyF79MlRuTtSe7IiyC7S-uMjw28LefQdgraKJHwyUv6byftg_vcQUVouZaz2LZTTwVb8Go5RDFT2ElByjWiwEH8C6cRffifZ-7lpVsF01NL4aW5Ufr7BYhffzUHcvcTg)

  

4.  View all Question Types
    

API Endpoint: “/api/questionTypes”, GET Method

Input: N.A.

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/RaKfrN9ZJvnSezsG1LyG6QkLDRE5tG7OzUS3CdR2mAhscelK88TvdvCSsgE5zDePqUuc6EZ9RVbntzC60LgaGGYLv3cJN1J7HfrsZgQ-Itcg9huK6ygXZLi23pDnGWToQSmMY4dGYDRFua_X2rFVFsQ)

  

Courses Model

Tests:

1.  Happy test
    

API Endpoint: “/api/courses/”, GET Method

Input:

{  
"title": "Ratio Course",  
"description": "Course about ratios",  
"difficulty": 40,  
"courseTopics": ["62c2d9294f226059702694a0"],  
"courseTypes": [],  
"questions": [  
"62c2d9804f226059702694aa",  
"62c2d9804f226059702694b0",  
"62c2d9804f226059702694a2",  
"62c2d9804f226059702694a8"  
],  
"noOfLikes": 0,  
"noOfViews": 0  
}

  

Expected Output: 201 Created

Actual Output: 201 Created

![](https://lh6.googleusercontent.com/Qh43nX_XXLKOL_NmccGBzi1gfLiv76beS7QInajMeSFR8nk4Si0yRed1xdCzMRnJbNuGzqSG2GPPOmeuurMl8Zo0w6udvi5a1MZBrMogd_zzYFOYFxJNqjLlaljWcnaouvX0f24Zx6sRJOoIWLk2p7U)

  

2.  Missing title
    

API Endpoint: “/api/courses/”, POST Method

Input:

{  
"title": "",  
"description": "Course about ratios",  
"difficulty": 40,  
"courseTopics": ["62c2d9294f226059702694a0"],  
"courseTypes": [],  
"questions": [  
"62c2d9804f226059702694aa",  
"62c2d9804f226059702694b0",  
"62c2d9804f226059702694a2",  
"62c2d9804f226059702694a8"  
],  
"noOfLikes": 0,  
"noOfViews": 0  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh5.googleusercontent.com/0NXGoFwoyqDy6Yvpxo0_2tFp3uzUFURgLSHs71oUo8UnNyX0xwOq9A6lTZhE5Oqj7n_Ue5m8UrCwcxn2d6azns6JFLdWu4zrWGLZr8E3upSbwtMf1LxxmMmyIXmBCZ6jAQACr_pYvZwqMcdHfZnV0YM)

  

3.  Missing description
    

API Endpoint: “/api/courses/”, POST Method

Input:

{  
"title": "Ratio Course",  
"description": "",  
"difficulty": 40,  
"courseTopics": ["62c2d9294f226059702694a0"],  
"courseTypes": [],  
"questions": [  
"62c2d9804f226059702694aa",  
"62c2d9804f226059702694b0",  
"62c2d9804f226059702694a2",  
"62c2d9804f226059702694a8"  
],  
"noOfLikes": 0,  
"noOfViews": 0  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh4.googleusercontent.com/ZbX7UC9nvCBEBr2-HhheDpH1FvswVPjs3voMc_1iOudFaalLuGpw-XsPcAdkQPXS_9mgBoymeRifDifPpzwuWqcH_NhEzLQmOpcakMI_EMooeGySYie-eSHGvfhWHfCrW9YUDL6S3_yYtIDe9DXIFx4)

4.  Missing author

API Endpoint: “/api/courses/”, POST Method

Input:

{  
"title": "Ratio Course",  
"description": "Course about ratios",  
"difficulty": 40,  
"courseTopics": ["62c2d9294f226059702694a0"],  
"courseTypes": [],  
"questions": [  
"62c2d9804f226059702694aa",  
"62c2d9804f226059702694b0",  
"62c2d9804f226059702694a2",  
"62c2d9804f226059702694a8"  
],  
"noOfLikes": 0,  
"noOfViews": 0,  
"author": ""  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh3.googleusercontent.com/9_RFlebOa63IwCR756RxjkReZBk3DIwjKDDCyCv46jX68f_l_Bu1JCXs7SitVYM1SAEmhYupCxx7klvAAPC9qCdTI2cIy9pfM55TgQIhb3E9I119qy19nK-J8h5eE42yWz2kVMBEK9W4a18ZBSiLKA)

  

5.  Missing difficulty
    

API Endpoint: “/api/courses/”, POST Method

Input:

{  
"title": "Ratio Course",  
"description": "Course about ratios",  
"difficulty": null,  
"courseTopics": ["62c2d9294f226059702694a0"],  
"courseTypes": [],  
"questions": [  
"62c2d9804f226059702694aa",  
"62c2d9804f226059702694b0",  
"62c2d9804f226059702694a2",  
"62c2d9804f226059702694a8"  
],  
"noOfLikes": 0,  
"noOfViews": 0  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh3.googleusercontent.com/cZDzxw26vn0oU6BRRjFxY9xlhOKhjY3Jlo9CHlLpZDMl4Bhiq7QTxjMd5099ITyWIquJkV4ll2iutZ8MpaH1xzciS7c4E7h4gVorIHQqV73iNqZRqqdum598CBjuniC7fJsJ1s0EtJFfaVabwZe22A)

  
  

6.  Title changes when given a new title
    

API Endpoint: “/api/courses/”, PUT Method

Input:

{  
"title": "New Ratio Course",  
"description": "Course about ratios",  
"difficulty": 40,  
"courseTopics": ["62c2d9294f226059702694a0"],  
"courseTypes": [],  
"questions": [  
"62c2d9804f226059702694aa",  
"62c2d9804f226059702694b0",  
"62c2d9804f226059702694a2",  
"62c2d9804f226059702694a8"  
],  
"noOfLikes": 0,  
"noOfViews": 0  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh5.googleusercontent.com/zPpPGodKpvI9DN9OAiv1gRn7yqQmHIZgHA-5JP6HJXexA-o172YAsBDKTQxXTGp46eR4fpP5pyBt-HYcrZzM_cIb5bzAsY5Cjh9zUfja6TAzJZmXuQJB5w5wHCQN4oGR5Hqna0v09JKBKaOFrzrAv20)

  

7.  Description changes when given a new description
    

API Endpoint: “/api/courses/”, PUT Method

Input:

{  
"title": "Ratio Course",  
"description": "New Course about ratios",  
"difficulty": 40,  
"courseTopics": ["62c2d9294f226059702694a0"],  
"courseTypes": [],  
"questions": [  
"62c2d9804f226059702694aa",  
"62c2d9804f226059702694b0",  
"62c2d9804f226059702694a2",  
"62c2d9804f226059702694a8"  
],  
"noOfLikes": 0,  
"noOfViews": 0  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh5.googleusercontent.com/Z4kLL4Wtj1e8y9mNkN1TdMqjzNvG_mhrdUpSa7PzX9ASeZaOZBSayyGLftGLtqyuC51U_srYcpLqzsl1V0TpKNBOCvwLoM1PgP4lnYBtrQ6ZusaQzjPhiy08lUd9kub_vAA3gtDKsiO_osPhC4m4Zww)

  
  

8.  Difficulty changes when given new difficulty
    

API Endpoint: “/api/courses/”, PUT Method

Input:

{  
"title": "Ratio Course",  
"description": "Course about ratios",  
"difficulty": 35,  
"courseTopics": ["62c2d9294f226059702694a0"],  
"courseTypes": [],  
"questions": [  
"62c2d9804f226059702694aa",  
"62c2d9804f226059702694b0",  
"62c2d9804f226059702694a2",  
"62c2d9804f226059702694a8"  
],  
"noOfLikes": 0,  
"noOfViews": 0  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/zHJQAA2ihL-QDP4uL8BrBZQ33is8OI5zdr0hNFJanREvvStV78gBmC7u8Zq2z0qT1xVRBt_4Xyh-St8pBqWzrb7CW0pmK9mdsTUMhCQg-dfbbmxbHQ43ikC_9DR-180hxcOQiQUVkzhYNdCfo3PSNMQ)

  

9.  Questions changes when given new questions
    

API Endpoint: “/api/courses/”, PUT Method

Input:

{  
"title": "Ratio Course",  
"description": "Course about ratios",  
"difficulty": 35,  
"courseTopics": ["62c2d9294f226059702694a0"],  
"courseTypes": [],  
"questions": [  
"62c2d9804f226059702694aa",  
"62c2d9804f226059702694b0",  
"62c2d9804f226059702694a2",  
"62c2d9804f226059702694a8",

"62c2d9804f226059702694ac"  
],  
"noOfLikes": 0,  
"noOfViews": 0  
}

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/xHywQPn4pRBaNo0y49f7_W4kcRzB8423xfv6Fye7krYkqwEtOopgLM2aSiAAg90MQksY5CPy6VG3jkR7m6Vw3uQ2Lq4LfdTkrNyMscBiTMcGjhqxvPCVFTSiSNopZ8uTpODLJIP1bYvSuA3J4VtlJPQ)

  

10.  View all courses
    

API Endpoint: “/api/courses/”, GET Method

Input: N.A.

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh5.googleusercontent.com/9KAPWsQoEgS0ovewktTVAJBffR3BIhuSB6XsPTh1YjEOkZC1oQOM_Rv79Rk0ymTFt9BvyhNUTK6Ai5_24_6_RBBfqbTeGuACKWI8sROd6CXuy74IFY2BjwhzOpKi1qpPfZBvG_sbbL105WJXk__y-OM)

  

11.  View one course
    

API Endpoint: “/api/courses/62c2ddcf4f2260597026976e”,

GET Method

Input: N.A.

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh5.googleusercontent.com/HI9ARMTe2_BA1tdkmqmZy8g7psz7VlzDMAQ9lp-ItE5SnGGaAcBhTFznXRKwKPTUrdwjn0usNRiXsB2jjp6b3yCItys7jU2js2DLcncTZ4uPOzd4eFRl6HsJfaS38wXkLyI6TH5WHlbzE8JPLQkp3u4)

  

12.  Delete one course
    

API Endpoint: “/api/courses/”, DELETE Method

Input: N.A.

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh6.googleusercontent.com/Qh43nX_XXLKOL_NmccGBzi1gfLiv76beS7QInajMeSFR8nk4Si0yRed1xdCzMRnJbNuGzqSG2GPPOmeuurMl8Zo0w6udvi5a1MZBrMogd_zzYFOYFxJNqjLlaljWcnaouvX0f24Zx6sRJOoIWLk2p7U)

  
  

Question Answer Model

Tests:

1.  Happy Test
    

API Endpoint: “/api/questionAnswers/”, POST Method

Input:

{  
"user": "629cb24f61c6587b1bae14bb",  
"question": "62b68e8dbe0cdcc6803c89e5",  
"score": 1,  
"MCQAnswer": "62b68e8dbe0cdcc6803c89df"  
}

  

Expected Output: 201 Created

Actual Output: 201 Created

![](https://lh4.googleusercontent.com/AzKLxC3A6Q-BMgChNb1MNTDIthBPaThiVwmVxJQeOCh2sXiOFrNqzChFVyfFo-jgR0AAzXzUlTlRPt-qpnKzJ9ktPPKoITthTgQIW_abzoLiDjDJQHIjvvikBSP0B02HnpiBybLdNjvi_qIDWPv4pR8)

  
  
  
  
  
  
  
  
  
  
  

2.  Missing user
    

API Endpoint: “/api/questionAnswers/”, POST Method

Input:

{  
"user": "",  
"question": "62b68e8dbe0cdcc6803c89e5",  
"score": 1,  
"MCQAnswer": "62b68e8dbe0cdcc6803c89df"  
}

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh5.googleusercontent.com/4t_qokInWw-TCSPJMVkDSbdv11_Aqcbquw_lRBqAoCb5v7aXmhcboerqiCyiwqkeNZkwExlVtVDDylcfNswTCJ5w_o6j55b325HaY5slPXUWrh1WZ1_Hp3q_UqWUQZSCy7VOCyY0r76VaxKQDdYw1G4)

  
  
  
  
  
  
  
  
  
  
  
  
  
  

3.  Missing question
    

API Endpoint: “/api/questionAnswers/”, POST Method

Input:

{  
"user": "629cb24f61c6587b1bae14bb",  
"question": "",  
"score": 1,  
"MCQAnswer": "62b68e8dbe0cdcc6803c89df"  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh3.googleusercontent.com/4edHgBw8uJEKRvFNdhv76Q9Qs5F2LfOdY874ERLG039txQdVou8n2kwPlRNfOYdhHZQDS1Xn18eFMu3JQ43Q62Uv1O22oyo_cTdY0RMl9EXRRJgiBERVV73euqeaWiJWSjn-RaWs9MD172OX19WrbCw)

  
  
  
  
  
  
  
  
  
  
  
  
  

4.  Missing user
    

API Endpoint: “/api/questionAnswers/”, PUT Method

Input:

{  
"user": "",  
"question": "62b68e8dbe0cdcc6803c89e5",  
"score": 1,  
"MCQAnswer": "62b68e8dbe0cdcc6803c89df"  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh3.googleusercontent.com/AHgn0Ac5BWpCuTboFW2_iVLxR1ZKMIWRcYCZCv1O2S9k0IygZndLtPihPQT_SOKMU6rR9FejAiJUGKL8A5hgKJPqqdbwGyHGW4ioBIgGR5PpoinmEXEAg5lmpSf4lzxKzYgjfh_ejeIpcdtPuDZe8O8)

  
  
  
  
  
  
  
  
  
  
  
  
  

5.  Missing question
    

API Endpoint: “/api/questionAnswers/”, PUT Method

Input:

{  
"user": "629cb24f61c6587b1bae14bb",  
"question": "",  
"score": 1,  
"MCQAnswer": "62b68e8dbe0cdcc6803c89df"  
}

  

Expected Output: 400 Bad Request

Actual Output: 400 Bad Request

![](https://lh4.googleusercontent.com/F0w65A6NG5WxxiGHWK_1jkZYZAqNPdnYNAH4UWwXr7B0PHwMYthC4tCRWAV2o9WeYFM640yI00E3QeszG7ennbKKsntJHm50Wk78Uh1sC2nbiYPwoqU1WsXAB6GMSfOvH4eXSEWFL5RDbVBQaOC9rBw)

  

6.  View all question answers
    

API Endpoint: “/api/questionAnswers/”, GET Method

Input: N.A

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh4.googleusercontent.com/AzKLxC3A6Q-BMgChNb1MNTDIthBPaThiVwmVxJQeOCh2sXiOFrNqzChFVyfFo-jgR0AAzXzUlTlRPt-qpnKzJ9ktPPKoITthTgQIW_abzoLiDjDJQHIjvvikBSP0B02HnpiBybLdNjvi_qIDWPv4pR8)

  
  

7.  View one question answer
    

API Endpoint: “/api/questionAnswers/62c55e41e93afac6ed83ae65”, GET Method

Input: N.A

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh5.googleusercontent.com/V47Z0x9PHUokhqZp29Kj4NLJdORNXq5tCJPceO5ZebxlcRw9_TLiWNx3EuSeqCc4fLDPbGoHCcDT6wTQDWCN7AOUk92NHduFccVJZkq2BbDiHZXcP50_3ruV7mh2dmW426uGXzh-WyUSETMGKsxOkVU)

  

8.  Delete Question Answer
    

API Endpoint: “/api/questionAnswers/62c55e41e93afac6ed83ae65”, Delete Method

Input: N.A

  

Expected Output: 200 OK

Actual Output: 200 OK

![](https://lh5.googleusercontent.com/Pv_h9QlJmai6YRblrkRPr7gWyBiK35wm-ApUTuqqgvP-p2kEcrePZNjh5Bfeu843qNogLkyBBhX6rMiUasRgv9Sv7yy8yrGoMVwBundrwsdZNlZC7-OBzNzI_PVHtmZ4lOUh5KP_e-AFh22aphhBp7Y)

  
  
  
  

# Testing Limitations

Using current testing suite, Jest can only do render testing and is unable to perform end to end testing. To mitigate this in the future, we will by utilising cypress in the future.

# Software Engineering Practices

  

The development team at MYTYS employs numeral software engineering good practices.

  

Firstly, developers utilise a project management program, in our case Clickup to track tasks. This ensures that developers are aware of the tasks at hand, transparency amongst developers so as to avoid duplicate work and clarity on and blocking tasks.

![](https://lh4.googleusercontent.com/SJqk5DW1hAAB7ZKwArm99_Xax5skuW6--PxcckgDlxq9bddCFMURVBb7xpHxiWdhCLS3sioJrIu9jJcKqJzUPzIdzK_gFlXY1KD2oGqipDS2SBPKSI-ntq6l-Ml8nXk3a40mj-UPy41180tgi9E07_4)

Furthermore, developers utilised the unique task id assigned to every task in naming the feature segregated branching. This branching technique is used instead of developer segregated branching so as to avoid costly rollback in the case of bad code being pushed to production and to provide agile coding.

![](https://lh3.googleusercontent.com/0KufRYCHmWeAM5U5NOHwapte7cOSdVxkL0WRCVdvDpSndtMN3NZ8jwjjOrU2EL8S5VHJLwP1fmI2l6JD-2KaBEwYhb3suuz3RcX5Z-fvcfu8WcR8czWc9GjZWWtUzgNRE2WToUG3VcSje6QjX9V9bG4)

  

Secondly, developers utilise github pull request to allow for automated github actions to take place.

![](https://lh6.googleusercontent.com/9QL5trcEsWOR_REsHXuzJEnI1mbevoqOTGv-CGpSGzDuWow39I5x63NV_1wkeLLJiaCGXAKVhrKmIy215SUVPxOJtjevnOQBggeGaO0fNBq45YEqqdUwAUylwossmQmuaUVOD8mZ2l9OxQmnLW9uQcw)

  

Developers also employ peer review so that code is being checked by another party to avoid bad code being pushed to the codebase.

![](https://lh6.googleusercontent.com/t85Pla6tm0RN27a4mjcHumCSdKSeAAKMkzTs3fex50MNcsl2GrP4T6ifKvQlN06pbvPfVnhgZTYoqgaGTYcPR8viNZBdFJnnxHb_OYs7R8LyxpOf-_pYfhyiV_vueY5TqFZ-tKLtuQTR9fQOpRU6oyY)

  

# Software Security Measures

We implemented two automated security measures for the mytys project.

  

Firstly, we use dependency review action workflow to scan dependency manifest files that change as part of a Pull Request, surfacing known-vulnerable versions of the packages declared or updated in the PR. PRs introducing known-vulnerable packages will be blocked from merging.

![](https://lh3.googleusercontent.com/egl0dJuXaeIdRfRhNNBzXVRXzKG-9NjqmjJvdZ57tebE2tGgcwj3ND9DoUovnuWQZUkp_RYz5RWR7oR1wsmi1KP7asyGDSWBq0JPBhvP5A3HY-J1BtshINf9ZtRPj07L0NMPbjWPrE0FoysAwSJyn54)

Secondly, we employ the use of codeql workflow to discover vulnerabilities across our codebase with CodeQL, an industry-leading semantic code analysis engine.

![](https://lh6.googleusercontent.com/4ThZa4BZgQn_fQ6VTUt8U3ah9kSuWk9a6d38PngDW_UcRJpXULe5IvO197D2q1VHIm-n3Ng2mIQi9lSR3G3AIUM3ZjL-TPV3MDjcLdFAP5qOMdbvKwn_OfqOI_iiI9tGvITh--cpy2P-JQH9XBlrlb0)

Furthermore, codeql will also update the security tab on the github page so that we can easily look at and improve our code vulnerabilities.

![](https://lh6.googleusercontent.com/nhNEq5BrupWKidKG_7OeCHd3Aj-ZHwWxjKkaI2X9VRq4c1zn1_MlLgxGv39sPO5LV03Wc9bl_5Ie7TCM-xvkpBKe8KhQT8lSDZUw-XjqaAIVGt-MMbQBQ_y0bSK5Na-Zk7xQylJITzHtRmKei_aXDL8)

Furthermore, we have are fixed the previously mentioned security vulnerability that we discovered during milestone 2 - The presence of an sql injection attack point. We have since utilised the package mongo-sanitize to santise all user inputted data to strip them of special characters such as $ which mongodb could interpret as a separate command.

![](https://lh6.googleusercontent.com/lV-PemYAJ8WqMbivNhu7L24bDLLzXOGYdI2GN6mOclhAhfzL_sVhdunTgSylD1R5fbnVCsBaG1UvpUJrFa9X2wjOq1viBLK7rF-hTh_cy8qUCeUon6rFtcOU7NYprXg4Rp9-cTbaHCjX24rENqtc-vw)

Previously discovered security vulnerability - SQL Injection

  

![](https://lh4.googleusercontent.com/T0KaRHBBn3EOuF9uFP_d8conLcrdViQ_FaBgvQ6h5qgzVcRPKtKVr4wjNd-_74Cixjl47M1qIJHoH1c5NIHV89UsgTTM6eXdY8G9JANBDtwVGvmgo2PSubz4hDH759HxZIvkyBTkIn_3Ik304jr0ObE)

Sanitize function by mongo-sanitize prevents this vulnerability

# Security Vulnerabilities

Currently to our knowledge, MYTYS does not exhibit any major or minor security vulnerabilities. If any individual would discover such a vulnerability, we will encourage them to raise an issue on the github repository and we will be happy to look into the matter.

  
  
  

# Reponses to Milestone Evaluation Comments

After looking through the evaluation comments, we have consolidated a handful of comments that we would like to address. These comments were insightful and definitely helped bring out some important questions to consider for our project, Once again, we would like to thank the teams involved in evaluating our project, and hopefully the answers below would answer your questions

  

Milestone 1 Evaluation Comments

Question

Answer

The objectives in the readMe is slightly unclear because the difference between private tuition and your current app is unclear

The main difference in our web app as compared to private tuition is the difference in cost. While both are able to provide questions and marking services, ours does so for the user at little to no cost. We do acknowledge that the personal aspect of private tuition is almost irreplaceable, as it involves human communication, hence we understand that our app is not a complete substitute of private tuition, but a cheaper alternative consideration.

Despite free and easy access to past year papers and tutors, the kahoot-style quiz seems to stray away from providing a cheaper alternative to private tuition.

We believe that it is the entire ecosystem of services we provide, ranging from kahoot style quizzes, to papers and tutor marking, that would possibly determine MyTYS as a cheaper alternative to private tuition. Nevertheless, it seems that the gamified quiz does not particularly overlap or coincide with any aspect of private tuition, which is true. However we hope that the immediate correction as a response to the students’ questions may at best simulate the immediate correction provided by a tutor for the tutee.

In comparison, private tuition might only serve the purpose of a "babysitting session" which forces the student to finish a certain amount of work in the session.

This point seems relatively true, where a tuition session might serve the purpose to ensure productivity rather than a “teaching” or learning session. In this regard we believe that not everyone, especially individuals who are not particularly self-directed, would be able to commit to doing a course or attempt quizzes on our web page. However, we hope that with time, the immediate correction we can provide for students’ questions or the feeling of accomplishment after doing a quiz might cause them to enjoy the process of doing quizzes on our platform, motivating them to continue doing courses. Ultimately we understand we cannot ensure this, and that we can never fully replace private tuition.

  

Milestone 2 Evaluation Comments

Question

Answer

Maybe could employ more comprehensive testing, there are barely any tests at the moment.

In Milestone 3, we have focused more on testing, where we have employed the Jest library to test our frontend react components along with Insomnia to test our backend api code

Perhaps your team might want to put additional effort in developing your poster for next milestone, as the current one looks very similar to that of the previous milestone.

We have taken this comment into consideration, and have developed a more comprehensive poster for Milestone 3 that is both more technical and informative.

We ran into client-side error when clicking 'Quiz' from the navbar

We have resolved this issue. The Quiz tab should be working normally and you should be able to attempt a question on the Quiz tab now.

  

Completion Phase

# Tech Stack
1.  React (Frontend)
2.  NextJS (Backend)
3.  Mongo DB (Database)
4.  Jest / Cypress (Testing)
5.  Postman (API Testing)

# Repository and Deployment Information
You can find the link to our github repository here:
[https://github.com/Orbital-2022-JOSP/mytys](https://github.com/Orbital-2022-JOSP/mytys)

You can find the link to the production build of the project hosted on vercel here:
[https://mytys.io/](https://mytys.io/)