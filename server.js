const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

// init app
const app = express();


// Allow cross-origin
app.use(cors());


// init gql end-point
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.use(exports.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`it work on port ${PORT}`));