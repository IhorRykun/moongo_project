# mongo/knex crud example

## Installation
1. Clone the repo
2. Make sure node is installed 
3. Run `npm install`
4. Update `KnexSqlClient.js` with your Postgres DB values

## Migrations 
1. Update `knexfile.js` with your Postgres DB values for migrations
2. Run `npm install knex -g`
3. Run `knex migrate:latest` to run migrations
4. For complete knex migrations reference visit [migrations with Knex](https://knexjs.org/guide/migrations.html#migration-cli)

## Launching the app
1. Use `.env` file to adjust envoiroment variables like mongo connection string to your MongoDB, choose provider 
3. Launch the app by running npm start script


