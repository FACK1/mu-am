BEGIN;

DROP TABLE IF EXISTS city CASCADE;

CREATE TABLE city (
  id            SERIAL PRIMARY KEY,
  city_name     VARCHAR(255) NOT NULL,
  city_pop      INTEGER  NOT NULL,
  city_area     INTEGER  NOT NULL
);

CREATE TABLE post (
  id            SERIAL  PRIMARY KEY,
  city_id       INTEGER  NOT NULL,
  name_visitor  VARCHAR(255) default 'Anonymous',
  post_content  TEXT NOT NULL
);

INSERT INTO city(city_name,city_pop,city_area) VALUES
('Jerusalem',933113,125),
('Hebron',800000,42),
('Gaza',1850000,365),
('Jaffa',60000,7);

INSERT INTO post(city_id,name_visitor,post_content) VALUES
(1, 'amin', 'It a beautiful city!'),
(2, 'ali', 'It is not beautiful city!'),
(2, 'mutaz', 'I do not like that city!');

COMMIT;
