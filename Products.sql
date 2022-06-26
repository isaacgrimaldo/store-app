CREATE DATABASE products_service;

--USE  products_service;

CREATE TABLE Products(id SERIAL PRIMARY KEY, name VARCHAR(30) NOT NULL , sku VARCHAR(30) NOT NULL, cost INT NOT NULL);

-- add all products 

--media

INSERT INTO Products(name , sku, cost)
VALUES('corona media', 'cor/med/355/c24', 316);

INSERT INTO Products(name , sku, cost)
VALUES('victoria media', 'vic/med/355/c24', 316);


INSERT INTO Products(name , sku, cost)
VALUES('modelo especial', 'mod/med/355/c12', 192);

INSERT INTO Products(name , sku, cost)
VALUES('corona ambar media', 'cam/med/355/c24', 316);

INSERT INTO Products(name , sku, cost)
VALUES('corona ligth media', 'clm/med/355/c24', 316);

INSERT INTO Products(name , sku, cost)
VALUES('negra modelo especial', 'nmd/med/355/c12', 192);

INSERT INTO Products(name , sku, cost)
VALUES('modelo ambar especial', 'mda/med/355/c12', 192);

INSERT INTO Products(name , sku, cost)
VALUES('modelo trigo especial', 'mdt/med/355/c12', 192);

INSERT INTO Products(name , sku, cost)
VALUES('pacifico clara media', 'pcm/med/355/c24', 324);

INSERT INTO Products(name , sku, cost)
VALUES('pacifico light media', 'pcm/med/355/c24', 324);

INSERT INTO Products(name , sku, cost)
VALUES('pacifico suave media', 'psm/med/355/c24', 324);

-- mega

INSERT INTO Products(name , sku, cost)
VALUES('victoria mega', 'vic/meg/1lt/c12', 408);


INSERT INTO Products(name , sku, cost)
VALUES('modelo mega', 'mod/meg/1tl/c12', 420);



INSERT INTO Products(name , sku, cost)
VALUES('negra modelo mega', 'nmd/meg/1tl/c12', 420);


INSERT INTO Products(name , sku, cost)
VALUES('modelo ambar mega', 'mda/meg/1tl/c12', 420)


INSERT INTO Products(name , sku, cost)
VALUES('modelo ambar mega', 'mda/meg/1tl/c12', 420)


INSERT INTO Products(name , sku, cost)
VALUES('corona mega', 'cor/meg/vid/c12', 408);

-- bote

INSERT INTO Products(name , sku, cost)
VALUES('corona extras bote', 'cor/bot/355/c24', 354);

INSERT INTO Products(name , sku, cost)
VALUES('victoria bote', 'vic/bot/355/c24', 354);

INSERT INTO Products(name , sku, cost)
VALUES('modelo bote', 'mod/bot/355/c24', 384);

-- laton 

INSERT INTO Products(name , sku, cost)
VALUES('corona extras laton', 'cor/lat/479/c24', 456);

INSERT INTO Products(name , sku, cost)
VALUES('victoria laton', 'vic/lat/479/c24', 456);

INSERT INTO Products(name , sku, cost)
VALUES('modelo laton', 'mod/lat/479/c24', 492);

-- mega laton  


INSERT INTO Products(name , sku, cost)
VALUES('corona extras mega laton', 'cor/mtl/710/c12', 336);


INSERT INTO Products(name , sku, cost)
VALUES('victoria mega laton', 'vic/mlt/710/c12', 336);


INSERT INTO Products(name , sku, cost)
VALUES('modelo mega laton', 'mod/mlt/710/c12', 336);








