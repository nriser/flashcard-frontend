# Flashcard App built by Nikki Riser

Link to the backend API repo: https://github.com/nriser/flashcard-api
Link to the frontend repo: https://github.com/nriser/flashcard-frontend
Link to the deployed API: https://kiokuflashcards.herokuapp.com/
Link to the deployed flashcard app: https://nriser.github.io/flashcard-frontend/

## Technologies used

- Front-end: HTML, CSS, SCSS, JavaScript, jQuery, ajax, Bootstrap, Handlebars.js
- Back-end: Rails API, Rails server, jQuery


## How to use the App

1. Create a card. Write a Japanese word to study. If you cannot type in Japanese, write it phonetically.
2. Study words by flipping the cards to the other side.
2. Listen to the audio to practice the correct pronunciation. The audio is spefically meant for Japanese words.
3. Create more cards and study the words you've created.


## Planning, development, and problem-solving strategy:

I came up with the idea of building a Japanese/English language flashcard web app because this app would be a good starting point for a
Japanese/English dictionary app that I would like to build in the future. Before joining GA, I found a set of data made public that consists of Japanese words/phrases matched with definitions in English and Japanese and imported it into a database I built in MySQL, but had difficulty representing Japanese unicode characters. I decided to take this opportunity to work on a project that allows me to work on overcoming this difficulty so that I could apply what I learn onto my future project. As for this flashcard app, the vision is to have it be used by people who would like to memorize Japanese words and short phrases via repetition.

In building this app, I followed the recommended schedule provided by the General Assembly consultants. I started with making a wireframe, and then proceeded on to making user stories, which allowed me to think in a user's perspective. I initially built the app with simple buttons and forms that would allow me to test out the ajax calls to the API later on. Moving on to the backend, I built my database, tables, and relationships between the user and flashcard resources. Once I finished building my backend, I revisited the frontend and started building the code to ping the API and receive data back.

I had the most trouble with Rails API, especially understanding the path that the server takes to return a response back to a client. What helped me a lot during the development process was to use console.log and 'debugger' at every step of the code in order to pinpoint where exactly I am getting the error responses, and to check what data is being returned at each stage. This strategy has helped me immensely throughout the development process.

## API Routes

#### Users
| Verb   | URI Pattern          | Controller#Action |
|--------|----------------------|-------------------|
| POST   | /sign-up             | users#signup      |
| POST   | /sign-in             | users#signin      |
| DELETE | /sign-out/:id        | users#signout     |
| PATCH  | /change-password/:id | users#changepw    |

- post '/sign-up' => 'users#signup'
- post '/sign-in' => 'users#signin'
- delete '/sign-out/:id' => 'users#signout'
- patch '/change-password/:id' => 'users#changepw'

#### Words
| Verb   | URI Pattern      | Controller#Action      |
|--------|------------------|------------------------|
| GET    | /flashcards      | flashcards#index       |
| POST   | /flashcards      | flashcards#create      |
| PATCH  | /flashcards/:id  | flashcards#update      |
| DELETE | /flashcards/:id  | flashcards#destroy     |

- get '/flashcards/' => 'flashcards#index'
- post '/flashcards/' => 'flashcards#create'
- patch '/flashcards/:id' => 'flashcards#update'
- delete '/flashcards/:id' => 'flashcards#destroy'

## 3rd Party API

I implemented the use of a Text-to-Speech (TTS) API through Voicerss. With a free account, this API accepts 350 daily GET requests.

Link to the overview of the API: http://www.voicerss.org/api/

## Unsolved problems:

I would like to revisit this app and make it possible for users to view, edit, and incorporate other users' flashcards into each of their own decks. This would require a many to many relationship between users and flashcards implemented through a join table, decks.

One to many between authors and cards:
  - A user has many flashcards
  - A flashcard belongs to a user

Many to many between authors and cards, through decks:
  - A user has access to many flashcards through (other users') deck
  - A flashcard has many users through deck

I would also like create a functionality that tracks how many words users are able to memorize.


## Wireframe:

https://drive.google.com/file/d/0B085YpY7Y_tmdV9JbjlpVU5haXNDYzh6NDBZb2dPbndzb0Jz/view?usp=sharing


## User stories:

1. As a user, I want to sign up so that I can sign in
2. As a user, I want to sign in so that I can create new flashcards and access them for studying.
3. As a user, I want to change my password so that
4. As a user, I want to create a new flashcard with a definition so that I can study more words.
5. As a user, I want to view all flashcards that I made so that I can study words.
6. As a user, I want the definitions to be hidden at first but shown when I click on each card so that I can practice defining words.
7. As a user, I want to randomize the order of words so that I can memorize words
without having to rely on patterns.
8. As a user, I want to search for a word I’ve created so that I can make edits to the word and definition.
9. As a user, I want to make edits to a flashcard so that I have the correct words and definitions.
10. As a user, I want to delete flashcards so that I so that I can have only the words I need to study.
11. As a user, I want to add other users' flashcards into my own deck so that I can study more words.
12. As a user, I want to sign out so that I can have only the words I need to study.
