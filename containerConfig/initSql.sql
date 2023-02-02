DROP TABLE IF EXISTS public.products;

CREATE TABLE public.users(
    user_id uuid NOT NULL PRIMARY KEY,
    user_first_name VARCHAR(255) NOT NULL,
    user_last_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_registration_date DATE NOT NULL,
    user_avatar BYTEA
);

ALTER TABLE public.users OWNER to postgres;

CREATE TABLE public.products (
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
	  REFERENCES users(user_id)
);

ALTER TABLE public.products OWNER to postgres;

CREATE TABLE public.tags (
    tag_id uuid NOT NULL PRIMARY KEY,
    tag_name VARCHAR(255) NOT NULL
);

ALTER TABLE public.tags OWNER to postgres;

CREATE TABLE public.tag_product (
    tag_product_id uuid NOT NULL PRIMARY KEY,
    product_id uuid NOT NULL,
    tag_id uuid NOT NULL,
    CONSTRAINT fk_product
      FOREIGN KEY(product_id) 
	  REFERENCES products(product_id),
    CONSTRAINT fk_tag
      FOREIGN KEY(tag_id) 
	  REFERENCES tags(tag_id)
);

ALTER TABLE public.tag_product OWNER to postgres;

CREATE TABLE public.products_history (
    history_id uuid NOT NULL PRIMARY KEY,
    product_id uuid NOT NULL UNIQUE,
    user_id uuid NOT NULL,
    date_sold DATE NOT NULL,
    CONSTRAINT fk_product
      FOREIGN KEY(product_id) 
	  REFERENCES products(product_id),
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id)
);

ALTER TABLE public.products_history OWNER to postgres;

CREATE TABLE public.comments (
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
	  REFERENCES users(user_id)
);

ALTER TABLE public.comments OWNER to postgres;

CREATE TABLE public.messages (
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
	  REFERENCES users(user_id)
);

ALTER TABLE public.messages OWNER to postgres;

CREATE TABLE public.products_images (
    image_id uuid NOT NULL PRIMARY KEY,
    product_id uuid NOT NULL UNIQUE,
    image BYTEA,
    CONSTRAINT fk_product
      FOREIGN KEY(product_id) 
	  REFERENCES products(product_id)
);

ALTER TABLE public.products_images OWNER to postgres;

INSERT INTO public.tags(tag_id, tag_name) VALUES ('3828a6db-f6da-41ae-9452-11c60dceb3a0', 'House');
INSERT INTO public.tags(tag_id, tag_name) VALUES ('b10c88ac-d34c-4f01-9830-7ae26263fe6b', 'Garden');
INSERT INTO public.tags(tag_id, tag_name) VALUES ('aa90db4b-0329-4083-a39c-a2d01a670302', 'Decoration');
INSERT INTO public.tags(tag_id, tag_name) VALUES ('79c0c2d2-7f88-4966-8ec5-27338b1a8e7f', 'Women');
INSERT INTO public.tags(tag_id, tag_name) VALUES ('f3c183f5-ab80-4341-b14a-d2ef40748bba', 'Kid');
INSERT INTO public.tags(tag_id, tag_name) VALUES ('5f17847c-def9-4f17-8c99-be0829296390', 'Men');
INSERT INTO public.tags(tag_id, tag_name) VALUES ('a10c9cf4-b67d-4db5-9678-7fdaa96f31d0', 'Car');
INSERT INTO public.tags(tag_id, tag_name) VALUES ('d3511601-db9a-45ee-b1b7-65a6b3d9e13e', 'Instrument');
