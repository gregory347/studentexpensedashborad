CREATE DATABASE IF NOT EXISTS STUDENTEXPENSES;

USE STUDENTEXPENSES;

CREATE TABLE IF NOT EXISTS EXPENSES (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    DATE DATE NOT NULL,
    CATEGORY VARCHAR(50) NOT NULL,
    AMOUNT DECIMAL(10, 2) NOT NULL,
    PAYMENT_METHOD VARCHAR(50),
    DESCRIPTION VARCHAR(255)
);

INSERT INTO EXPENSES (
    DATE,
    CATEGORY,
    AMOUNT,
    PAYMENT_METHOD,
    DESCRIPTION
) VALUES (
    '2024-09-01',
    'Food',
    100,
    'Cash',
    'Lunch'
),
(
    '2024-09-03',
    'Rent',
    500,
    'Bank Transfer',
    'Monthly rent'
),
(
    '2024-09-05',
    'Transport',
    60,
    'Card',
    'Bus fare'
),
(
    '2024-10-01',
    'Food',
    70,
    'Card',
    'Dinner'
),
(
    '2024-10-02',
    'Rent',
    500,
    'Bank Transfer',
    'Monthly rent'
),
(
    '2024-10-05',
    'Transport',
    70,
    'Cash',
    'Taxi fare'
);