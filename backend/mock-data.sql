INSERT INTO users (username, email, password) 
VALUES ('Aipiox', 'Aipiox@techson', 'applejuice');

INSERT INTO users (username, email, password) 
VALUES ('Jaxson', 'Jaxson@gmail', 'boop');

INSERT INTO users (username, email, password)
VALUES ('Naruto', 'Sasuke@gmail', 'boop');

INSERT INTO articles (author_id,title,body,image_url,updated_at)
VALUES (1,'Robot Revolution','wnkgwng',NULL,now());

INSERT INTO articles (author_id,title,body,image_url,updated_at)
VALUES (1,'Robot Revolution 2','wnkgwlwkgmwqlkgmlqwmgwlqgml;qwng',NULL,now());

INSERT INTO reviews (author_id, article_id, pr_title, body, review_status)
VALUES (3,1,'First review','LOL','pending');

INSERT INTO reviews (author_id, article_id, pr_title, body, review_status)
VALUES (3,2,'Second review','YIKES','denied');