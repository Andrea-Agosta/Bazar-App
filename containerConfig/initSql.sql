DROP TABLE IF EXISTS public.products;

CREATE TABLE public.users
(
    user_id uuid NOT NULL PRIMARY KEY,
    user_first_name VARCHAR(255) NOT NULL,
    user_last_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_registration_date: DATE NOT NULL,
)

CREATE TABLE public.products
(
    product_id uuid NOT NULL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_description VARCHAR(255) NOT NULL,
    product_location VARCHAR(255) NOT NULL,
    product_conditions VARCHAR(255),
    product_price NUMERIC(5,2) NOT NULL DEFAULT 0,
    product_sold BOOLEAN NOT NULL default false,
    user_id uuid NOT NULL,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id),
)

ALTER TABLE public.products
    OWNER to postgres;

CREATE TABLE public.tags
(
    tag_id uuid NOT NULL PRIMARY KEY,
    tag_name VARCHAR(255) NOT NULL,
)

CREATE TABLE public.tag_product
(
    tag_product_id uuid NOT NULL PRIMARY KEY,
    product_id uuid NOT NULL,
    tag_id uuid NOT NULL,
    CONSTRAINT fk_product
      FOREIGN KEY(product_id) 
	  REFERENCES products(product_id),
    CONSTRAINT fk_tag
      FOREIGN KEY(tag_id) 
	  REFERENCES tags(tag_id),
)

CREATE TABLE public.products_history
(
    history_id uuid NOT NULL PRIMARY KEY,
    product_id uuid NOT NULL UNIQUE,
    user_id uuid NOT NULL,
    date_sold DATE NOT NULL,
    CONSTRAINT fk_product
      FOREIGN KEY(product_id) 
	  REFERENCES products(product_id),
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id),
)

CREATE TABLE public.comments
(
    comment_id uuid NOT NULL PRIMARY KEY,
    product_id uuid NOT NULL,
    user_id uuid NOT NULL,
    date_insert DATE NOT NULL,
    comment VARCHAR(255), 
    CONSTRAINT fk_product
      FOREIGN KEY(product_id) 
	  REFERENCES products(product_id),
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id),
)

CREATE TABLE public.messages
(
    messages_id uuid NOT NULL PRIMARY KEY,
    sender_id uuid NOT NULL,
    receiver_id uuid NOT NULL,
    date_insert DATE NOT NULL,
    message_text VARCHAR(255), 
    CONSTRAINT fk_sender
      FOREIGN KEY(sender_id) 
	  REFERENCES users(user_id),
    CONSTRAINT fk_receiver
      FOREIGN KEY(receiver_id) 
	  REFERENCES users(user_id),
)
