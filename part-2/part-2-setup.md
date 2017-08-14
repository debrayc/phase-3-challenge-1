# Setup Instructions for Part-2

## Follow the steps below to create the database, load relevant schema, seed data, and run tests.
- __step 1:__ after you have cloned the repo, open the `part-2` folder in the command line.
- __step 2:__ Run the following command to delete all databases called grocery_store: `npm run dropdb grocery_store`.
- __step 3:__ Create a new database called grocery_store: `npm run createdb grocery_store`.
- __step 4:__ Let's upload the schema with the following command: `npm run schemaUpdate`.
- __step 5:__ Now you have the schema, you can load the seed data: `npm run seedData`.

That's it. You should be ready to go!

- __step 6:__ For a quick setup, you can run all of the commands above with a single script: `npm run dbinit`.
