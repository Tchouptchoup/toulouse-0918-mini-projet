create table user (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(100),
  firstane VARCHAR(100),
  lastname VARCHAR(100)
);

create table order_eshop (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  date DATETIME,
  user_id INTEGER
);

create table order_product (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INTEGER NOT NULL,
  price DECIMAL,
  product_id INTEGER,
  order_eshop_id INTEGER
);

create table product (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(100),
  name VARCHAR(250),
  reference INTEGER,
  slug VARCHAR(250),
  description VARCHAR(100),
  stock INTEGER,
  price DECIMAL,
  picture VARCHAR(250),
  createdAt DATETIME,
  category_id INTEGER
);

create table category (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  slug VARCHAR(100)
);

ALTER TABLE order_eshop ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(id);
ALTER TABLE order_product ADD CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES product(id);
ALTER TABLE order_product ADD CONSTRAINT fk_order_id FOREIGN KEY (order_eshop_id) REFERENCES order_eshop(id);
ALTER TABLE product ADD CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES category(id);