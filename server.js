const express = requie('express');
const app = express();
const PORT = process.env.PORT || 8080;

app, use(express.urlencoded({
    extended: true
}));

app, use(express.json());
app.use(express.static("public"));

require("./settings/apiSettings")(app);
require("./settings/htmlSettings")(app);

app.listen(PORT, function () {
    console.log('The Server is Listening on http://localhost:' + PORT)
});