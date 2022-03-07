# bug-tracker-api
clean api for a bug-tracker app with memory based database

# migrations
## knex
### create
npx knex migrate:make < migration_name > --knexfile database/knexfile.js --env < enviroment || development >