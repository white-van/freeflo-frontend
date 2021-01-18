CREATE TYPE pr_status AS ENUM ('approved', 'denied', 'pending');
CREATE TABLE IF NOT EXISTS users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(30) UNIQUE,
  email VARCHAR(30),
  password VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS articles (
  author_id INT REFERENCES users(ID) ,
  article_id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  body VARCHAR(10485760),
  image_url VARCHAR(300),
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS reviews (
  author_id INT REFERENCES users(ID),
  article_id INT REFERENCES articles(article_id),
  pr_title VARCHAR(100),
  body VARCHAR(10485760),
  image_url VARCHAR(300),
  created_at timestamp with time zone DEFAULT now(),
  review_status pr_status
)