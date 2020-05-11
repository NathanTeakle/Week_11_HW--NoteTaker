const express = require('express');
const app = express();
const PORT = process.env.PORT || 7070;


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

require("./settings/apiSettings")(app);
require("./settings/htmlSettings")(app);


app.listen(PORT, function () {
    console.log('This Server is Listening on http://localhost:' + PORT)
});
