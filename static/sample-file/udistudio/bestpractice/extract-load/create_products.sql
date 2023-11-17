CREATE TABLE products (
pro_code char(8),
man_code char(3),
pro_name char(35),
pro_description char(100),
pro_type char(10),
pro_theme char(50),
pro_pieces int,
pro_packaging char(20),
pro_shape char(20),
pro_style char(20),
pro_buy_price numeric(6,2),
pro_sel_price numeric(6,2),
pro_stock int,
pro_stock_min int,
pro_stock_max int,
CONSTRAINT products_pkey PRIMARY KEY (pro_code, man_code)
)