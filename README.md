# GUESTBOOK 

This is a guestbook application that allows visitors to leave messages and their names. It is a full-stack application built with React on the front-end, Node.js on the back-end, and MySQL as the database.

## Features 

- Visitors can leave messages along with their names.
- Messages are stored in a MySQL database.
- The application provides a user-friendly interface to interact with the guestbook.

## Technology used

- React
- NodeJS
- MySQL

## Installation

1. Clone the repository

```bash
git clone git@github.com:mrljsh/guestbook.git
```

2. Navigate to project 

```bash
cd guestbook
```

3. Install the dependencies 

```bash
cd client
npm install
```

```bash
cd ../server
npm install
```

## Configuration

1. Setup your MySQL database
2. Create new MySQL database for your guestbook application with table messages
3. Table messages should contain columns name (varchar), message (varchar), datetime(now)
4. Configure server/db.js with your credentials

## Usage

- Start the back-end server
```bash 
cd server
npm start
```

- Start the front-end dev server
```bash 
cd client
npm run dev
```

- Open your browser and visit `localhost:5173` (or use port that you configured) to access the guestbook application


## Screenshots

![Guestbook messages screenshot](https://i.postimg.cc/DZXdGFdb/Screenshot-2023-05-27-at-15-20-38-Guestbook.png)
![Guestbook send message form](https://i.postimg.cc/bvM9ddbh/Screenshot-2023-05-27-at-15-22-36-Guestbook.png)
![Guestbook after sending message](https://i.postimg.cc/BvtCq2jp/Screenshot-2023-05-27-at-15-22-50-Guestbook.png)