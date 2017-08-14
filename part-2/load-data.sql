\copy grocery_items(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (fname, lname, email)
    VALUES ('Kobe', 'Bryant', 'mamba@blackmamba.com');
INSERT INTO shoppers (fname, lname, email)
    VALUES ('Serena', 'Williams', 'future@exwife.com');
INSERT INTO shoppers (fname, lname, email)
    VALUES ('Beyonce', 'Baah', 'only@inmydreams.com');
INSERT INTO shoppers (fname, lname, email)
    VALUES ('Michael', 'Jordan', 'air@goat.com');
INSERT INTO shoppers (fname, lname, email)
    VALUES ('Eugene', 'Baah', 'coding@happily.com');

INSERT INTO orders (shopper_id)
    VALUES (1);
INSERT INTO orders (shopper_id)
    VALUES (2);
INSERT INTO orders (shopper_id)
    VALUES (3);
INSERT INTO orders (shopper_id)
    VALUES (4);
INSERT INTO orders (shopper_id)
    VALUES (5);
INSERT INTO orders (shopper_id)
    VALUES (1);
INSERT INTO orders (shopper_id)
    VALUES (2);
INSERT INTO orders (shopper_id)
    VALUES (3);
INSERT INTO orders (shopper_id)
    VALUES (4);
INSERT INTO orders (shopper_id)
    VALUES (5);

INSERT INTO order_items (id, item_id)
    VALUES (1, 31);
INSERT INTO order_items (id, item_id)
    VALUES (1, 12);
INSERT INTO order_items (id, item_id)
    VALUES (2, 6);
INSERT INTO order_items (id, item_id)
    VALUES (2, 14);
INSERT INTO order_items (id, item_id)
    VALUES (3, 5);
INSERT INTO order_items (id, item_id)
    VALUES (3, 2);
INSERT INTO order_items (id, item_id)
    VALUES (4, 32);
INSERT INTO order_items (id, item_id)
    VALUES (4, 18);
INSERT INTO order_items (id, item_id)
    VALUES (5, 17);
INSERT INTO order_items (id, item_id)
    VALUES (5, 9);
INSERT INTO order_items (id, item_id)
    VALUES (6, 14);
INSERT INTO order_items (id, item_id)
    VALUES (6, 27);
INSERT INTO order_items (id, item_id)
    VALUES (7, 15);
INSERT INTO order_items (id, item_id)
    VALUES (7, 1);
INSERT INTO order_items (id, item_id)
    VALUES (8, 32);
INSERT INTO order_items (id, item_id)
    VALUES (8, 25);
INSERT INTO order_items (id, item_id)
    VALUES (9, 11);
INSERT INTO order_items (id, item_id)
    VALUES (9, 16);
INSERT INTO order_items (id, item_id)
    VALUES (10, 19);
INSERT INTO order_items (id, item_id)
    VALUES (10, 29);
