INSERT INTO sakila.customer (store_id, first_name, last_name, email, address_id, active, create_date, last_update)
VALUES (1,'MATT','CASTERS','MATT.CASTERS@sakilacustomer.org',605,1,date('2010-01-01'),date('2010-01-01'));

UPDATE sakila.customer
SET first_name = 'Jos', last_name = 'van Dongen', email='jos@tholis.com'
WHERE customer_id = 1;

UPDATE sakila.customer
SET first_name = 'Jos', last_name = 'van den Dong', email='jos@tholis.com'
WHERE customer_id = 433;

