# Run Steps
run npm start from both /server and /client directories

# tests
npm run test

# other steps
create a .env file in /server root and add the following:

PORT=5000 (or other desired port)
CONNECTION_URL = your mongoDB connection string

example of connection string:
mongodb+srv://<username>:<password>@cluster0-sykyn.mongodb.net/test?retryWrites=true&w=majority


