# Flashcard App built by Nikki Riser
![Kioku - View all cards](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/Kioku3.png)


![Kioku - View all cards](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/Kioku.png)


![Kioku - Create a card](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/Kioku2.png)

# Project Links

- Link to the backend API repo: https://github.com/nriser/flashcard-api
- Link to the frontend repo: https://github.com/nriser/flashcard-frontend
- Link to the deployed API: https://kiokuflashcards.herokuapp.com/
- Link to the deployed flashcard app: https://nriser.github.io/flashcard-frontend/

Feel free to view the demo site ("deployed flashcard app") with the username "demo@mail.com" and password "demo" to view ready-made flashcards.

## Technologies used

- Front-end: HTML, CSS, SCSS, JavaScript, jQuery, ajax, Bootstrap, Handlebars.js
- Back-end: Rails API, Rails server, jQuery

## How to use the App

1. Create a card. Write a Japanese word to study. If you cannot type in Japanese, write it phonetically.
2. Study words by flipping the cards to the other side.
2. Listen to the audio to practice the correct pronunciation. The audio is spefically meant for Japanese words.
3. Create more cards and study the words you've created.

## Idea

> "Kioku" means "memory" in Japanese.

I came up with the idea of building a Japanese/English language flashcard web app because this app would be a good starting point for a Japanese/English dictionary app that I would like to build in the future. As for this flashcard app, the vision is to have it be used by people who would like to memorize Japanese words and short phrases via repetition.

## Approach

In building this app, I started with making a wireframe, and then proceeded on to making user stories. I initially built the app with simple buttons and forms that would allow me to test out the ajax calls to the API later on. Moving on to the backend, I built my database, tables, and entity relationship between the user and flashcard resources. Once I finished building my backend, I revisited the frontend and started building the code to ping the API and receive data back.

Moving onto styling, I built the flashcards to look like index cards using only CSS. For example, the blue lines and the red line are made using the following code:

```css
background-image:
  linear-gradient(180deg, white 19.7%, #F0A4A4 19.7%, #F0A4A4 20.5%, transparent 1px),
  repeating-linear-gradient(0deg, #fff, #fff 9.5%, #DDD 9.5%, #DDD 10%);
```

The flipping animation of the flashcards is also built with CSS only, by implementing the ```transform``` property on hover:

```css
.flip-container:hover .flipper {
	transform: rotateY(180deg);
}
```
Please view the source for more details.

Finally, I added the audio for each word via use of a text-to-speech 3rd party API. The audio is added to each word by using a Handlebars each loop.

## API Routes

API routes for users and words.

#### Users
| Verb   | URI Pattern          | Controller#Action |
|--------|----------------------|-------------------|
| POST   | /sign-up             | users#signup      |
| POST   | /sign-in             | users#signin      |
| DELETE | /sign-out/:id        | users#signout     |
| PATCH  | /change-password/:id | users#changepw    |

#### Words
| Verb   | URI Pattern      | Controller#Action      |
|--------|------------------|------------------------|
| GET    | /flashcards      | flashcards#index       |
| POST   | /flashcards      | flashcards#create      |
| PATCH  | /flashcards/:id  | flashcards#update      |
| DELETE | /flashcards/:id  | flashcards#destroy     |

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

## Wireframe:

![Kioku wireframe - 1](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/kioku_1.png)
![Kioku wireframe - 2](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/kioku_2.png)
![Kioku wireframe - 3](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/kioku_3.png)
![Kioku wireframe - 4](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/kioku_4.png)
![Kioku wireframe - 5](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/kioku_5.png)
![Kioku wireframe - 6](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/kioku_6.png)
