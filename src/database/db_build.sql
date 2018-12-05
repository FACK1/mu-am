BEGIN;

DROP TABLE IF EXISTS city,post CASCADE;

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
('Hebron',800000,997),
('Gaza',1850000,365),
('Bethlehem',30000,23),
('Jaffa',60000,7),
('Ramallah',590000,17),
('Nablus',388321,29),
('Jericho',19000,59),
('Jenin',59000,38),
('Safed',29000,29),
('Beersheba',215000,84),
('Nazareth',76000,14),
('Haifa',282000,63),
('Tulkarm',200000,300),
('Ramla',66000,10),
('Lod', 60000,13),
('Tiberias',41000,10);

INSERT INTO post(city_id,name_visitor,post_content) VALUES
(1, 'amin', 'It a beautiful city!'),
(2, 'ali', 'It is not beautiful city!'),
(2, 'mutaz', 'I do not like that city!');

COMMIT;
