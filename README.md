# CONTACTS API INTERRACTLY Backend TASK

# Project Title

Contacts API. Interacly Backend developer task. Written in NodeJS-Typescript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

- Node
- Mysql
- DB-migrate

## Technologies used

- Mysql for the database
- Typescript/Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jasmine and supertest for unit/integration testing

### Clone the repo

`git clone https://github.com/underscoreDev/e-commerce-api.git`

### Install dependencies

`npm install`

<!-- ### Starting the server

`npm run dev`

### Run test

`npm run test` -->

### Setup environment

First, create a `.env` file with all the required environment variables:

```bash
NODE_ENV=dev
LOCAL_HOST_PORT=8989
LOCAL_HOST=127.0.0.1

MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_DEV_DB=contacts
MYSQL_PASSWORD=Godis-4me
MYSQL_TEST_DB=contacts_test
API_KEY=<Your Api Key from the CRM>

```

Next, start the Mysql server in your terminal:

# Login to Mysql

`mysql -u root -p`
enter the password when it prompts for a password

##### This will list out all the databases

show databases;

# If "contacts" database is not present

create database contacts;

````

Next, you need to run the database migrations:
```bash
db-migrate up
````

## Running the application

Use the following command to run the application in watch mode:

```bash
yarn dev
```

The application will run on http://localhost:8989/.

## Running test

Use the following command to run the unit tests:

```bash
yarn test
```

## Built With

- [TypeScript](https://www.typescriptlang.org/) - Types JS extension
- [NodeJS](https://nodejs.org/) - The JavaScript runtime
- [Yarn](https://yarnpkg.com/) - The dependency manager
- [db-migrate](https://db-migrate.readthedocs.io/en/latest/) - The database migration tool
- [Express](https://expressjs.com) - The web framework
- [Jasmine](https://jasmine.github.io/) - The unit testing framework

## Authors

- **Godswill Edet** - _Other work_ - [underscoredev](https://github.com/underscoreDev)

## Acknowledgments

- The official documentation of `db-migrate`
- The official Documentation of `Jasmine`
