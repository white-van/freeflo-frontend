const Pool = require("pg").Pool;
const pool = new Pool({
  user: "ritvikbhardwaj",
  host: "localhost",
  database: "htn",
  password: "",
  port: 5432,
});

const createUser = (request, response) => {
  const { username, email, password } = request.body;
  pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2,$3)",
    [username, email, password],
    (error, results) => {
      if (error) {
        response.status(400).send(`user already exists`);
        return;
      }
      response.status(201).send(`User added`);
    }
  );
};

const login = (request, response) => {
  const { username, password } = request.body;
  pool.query(
    "SELECT * FROM users WHERE username=$1 and password=$2",
    [username, password],
    (error, results) => {
      if (error) {
        response
          .status(400)
          .send({ status: "ERROR", message: "Invalid Credentials" });
        return;
      }
      if (results.rowCount <= 0) {
        response
          .status(400)
          .send({ status: "ERROR", message: "Invalid Credentials" });
        return;
      }
      response.status(200).send({ status: "OK", id: results.rows[0].id });
    }
  );
};

const getRecommended = (request, response) => {
  const { userId } = request.query;
  pool.query(
    "SELECT * FROM articles WHERE author_id<>$1 ORDER BY updated_at DESC",
    [userId],
    (error, results) => {
      if (error) {
        response.status(400).send({ status: "ERROR", error });
        return;
      }
      response.status(200).send(results.rows);
    }
  );
};

const createArticle = (request, response) => {
  const { authorId } = request.params;
  const { title, body, image_url } = request.body;
  pool.query(
    "INSERT INTO articles (author_id,title,body,image_url) VALUES($1,$2,$3,$4)",
    [authorId, title, body, image_url],
    (error, results) => {
      if (error) {
        response.status(400).send({ status: "ERROR", error });
        return;
      }
      response.status(200).send({ status: "OK" });
    }
  );
};

const getArticlesForOneUser = (request, response) => {
  const { authorId } = request.params;
  pool.query(
    "SELECT * FROM articles WHERE author_id=$1",
    [authorId],
    (error, results) => {
      if (error) {
        response.status(400).send({ status: "ERROR" });
        return;
      }
      response.status(200).send({ status: "OK", articles: results.rows });
    }
  );
};

const getArticles = (request, response) => {
  pool.query("SELECT * FROM articles", (error, results) => {
    if (error) {
      response.status(400).send({ status: "ERROR" });
      return;
    }
    response.status(200).send({ status: "OK", articles: results.rows });
  });
};

const getOneArticle = (request, response) => {
  const { articleId } = request.params;
  pool.query(
    "SELECT * FROM articles WHERE article_id=$1",
    [articleId],
    (error, results) => {
      if (error) {
        response.status(400).send({ status: "ERROR" });
        return;
      }
      if (results.rowCount <= 0) {
        response.status(404).send({ status: "NOT_FOUND" });
        return;
      }
      response.status(200).send({ status: "OK", articles: results.rows[0] });
    }
  );
};

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      response.status(400).send({ status: "ERROR" });
      return;
    }
    response.status(200).send({ status: "OK", articles: results.rows });
  });
};

const getArticleReviews = (request, response) => {
  const { articleId } = request.params;
  pool.query(
    "SELECT * FROM reviews WHERE article_id=$1",
    [articleId],
    (error, results) => {
      if (error) {
        response.status(400).send({ status: "ERROR" });
        return;
      }
      response.status(200).send({ status: "OK", articles: results.rows });
    }
  );
};

const getAllReviewsForAUser = (request, response) => {
  const { userId } = request.params;
  pool.query(
    "SELECT * FROM reviews WHERE article_id in (SELECT article_id from articles where author_id=$1)",
    [userId],
    (error, results) => {
      if (error) {
        response.status(400).send({ status: "ERROR" });
        return;
      }
      response.status(200).send({ status: "OK", articles: results.rows });
    }
  );
};

module.exports = {
  createUser,
  login,
  getRecommended,
  createArticle,
  getArticlesForOneUser,
  getArticles,
  getArticleReviews,
  getOneArticle,
  getUsers,
  getAllReviewsForAUser,
};
