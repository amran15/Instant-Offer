## Instant Offer
Instant Offer was made to cut down on the time it takes to repeatedly fill out an Purchase to Offer and Listing Contracts realty forms. Being mobile friendly and avalible 24/7, this product can cut down the time spent traveling back and forth from the office.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `Instant_Offer` and run SQL file:

```SQL
Run all of "Instant_Offer.sql" postgresql
```

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Built With
This version uses React, Redux, Express, Passport, jsPDF, React-signature-canvas, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Authors
Amran Ahmed
Mang Wan
Matthew Dunfee
Samuel Titiloye
