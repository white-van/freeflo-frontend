var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const db = require("./queries");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/** Authentication */
app.post("/sign_up", db.createUser);

app.post("/login", db.login);

app.get("/users", db.getUsers);

/** Articles */
app.get("/recommended", db.getRecommended);

app.post("/:authorId/createArticle", db.createArticle);

app.get("/:authorId/getArticles", db.getArticlesForOneUser);

app.get("/getArticles", db.getArticles);

app.get("/getArticles/:articleId/", db.getOneArticle);

/** Suggestions */
app.get("/:articleId/getReviews", db.getArticleReviews);

app.get("/users/:userId/getReviews", db.getAllReviewsForAUser);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
