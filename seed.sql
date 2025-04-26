-- Dodawanie przetargów
INSERT INTO tenders (title, description, institution, start_date, end_date, max_budget)
VALUES
    ('Budowa mostu na Wiśle w Warszawie', 'Przetarg na budowę nowoczesnego mostu na Wiśle w Warszawie. Projekt ma na celu poprawę transportu i komunikacji miejskiej.', 'Miasto Warszawa', '2025-06-01 08:00:00', '2025-08-31 16:00:00', 10000000.00),
    ('Dostawa komputerów dla Uniwersytetu Jagiellońskiego', 'Przetarg na dostawę komputerów i sprzętu komputerowego dla Uniwersytetu Jagiellońskiego w Krakowie.', 'Uniwersytet Jagielloński', '2025-05-01 09:00:00', '2025-06-15 15:00:00', 2000000.00),
    ('Transport paczek na terenie Polski dla Poczty Polskiej', 'Przetarg na usługę transportu paczek dla Poczty Polskiej w całym kraju.', 'Poczta Polska', '2025-07-01 10:00:00', '2025-09-30 14:00:00', 5000000.00),
    ('Budowa dróg ekspresowych w województwie dolnośląskim', 'Przetarg na budowę odcinków dróg ekspresowych w województwie dolnośląskim.', 'Ministerstwo Infrastruktury', '2025-04-01 07:00:00', '2025-06-30 17:00:00', 15000000.00),
    ('Modernizacja infrastruktury IT w Urzędzie Miasta Poznań', 'Przetarg na modernizację infrastruktury IT w Urzędzie Miasta Poznań, obejmujący serwery i oprogramowanie.', 'Miasto Poznań', '2025-05-15 08:30:00', '2025-06-30 16:30:00', 1200000.00);

-- Dodawanie ofert dla przetargu "Budowa mostu na Wiśle w Warszawie"
INSERT INTO offers (tender_id, bidder_name, amount, submitted_at)
VALUES
    (1, 'Budimex S.A.', 9000000.00, '2025-06-05 10:00:00'),
    (1, 'Mostostal Warszawa S.A.', 9500000.00, '2025-06-06 12:30:00'),
    (1, 'Strabag Sp. z o.o.', 9800000.00, '2025-06-07 14:00:00');

-- Dodawanie ofert dla przetargu "Dostawa komputerów dla Uniwersytetu Jagiellońskiego"
INSERT INTO offers (tender_id, bidder_name, amount, submitted_at)
VALUES
    (2, 'Comarch S.A.', 1900000.00, '2025-05-05 11:00:00'),
    (2, 'Dell Technologies', 1950000.00, '2025-05-06 09:00:00'),
    (2, 'HP Inc.', 2000000.00, '2025-05-07 13:00:00');

-- Dodawanie ofert dla przetargu "Transport paczek na terenie Polski dla Poczty Polskiej"
INSERT INTO offers (tender_id, bidder_name, amount, submitted_at)
VALUES
    (3, 'DHL Express', 4500000.00, '2025-07-10 09:30:00'),
    (3, 'InPost', 4700000.00, '2025-07-11 10:00:00'),
    (3, 'Poczta Polska S.A.', 4900000.00, '2025-07-12 12:00:00');

-- Dodawanie ofert dla przetargu "Budowa dróg ekspresowych w województwie dolnośląskim"
INSERT INTO offers (tender_id, bidder_name, amount, submitted_at)
VALUES
    (4, 'Skanska S.A.', 14000000.00, '2025-04-05 08:00:00'),
    (4, 'Torpol S.A.', 14500000.00, '2025-04-06 09:00:00'),
    (4, 'Strabag Sp. z o.o.', 15000000.00, '2025-04-07 11:30:00');

-- Dodawanie ofert dla przetargu "Modernizacja infrastruktury IT w Urzędzie Miasta Poznań"
INSERT INTO offers (tender_id, bidder_name, amount, submitted_at)
VALUES
    (5, 'Atos IT Services', 1100000.00, '2025-05-20 10:30:00'),
    (5, 'Ericsson Polska', 1150000.00, '2025-05-21 12:00:00'),
    (5, 'IBM Polska', 1200000.00, '2025-05-22 14:30:00');


-- Dodawanie zakończonych przetargów
INSERT INTO tenders (title, description, institution, start_date, end_date, max_budget)
VALUES
    ('Przetarg na budowę drogi ekspresowej S5', 'Budowa drogi ekspresowej S5 od Wrocławia do Poznania.', 'Generalna Dyrekcja Dróg Krajowych i Autostrad', '2024-06-01 08:00:00', '2025-04-01 23:59:59', 5000000.00),
    ('Zamówienie na modernizację linii kolejowej', 'Modernizacja linii kolejowej na odcinku Warszawa - Radom.', 'PKP Polskie Linie Kolejowe S.A.', '2024-05-01 08:00:00', '2025-04-10 23:59:59', 3000000.00),
    ('Przebudowa mostu na Odrze', 'Przebudowa mostu w Świebodzinie.', 'Zarząd Dróg Wojewódzkich', '2024-03-01 08:00:00', '2025-04-15 23:59:59', 2000000.00);

-- Dodawanie ofert dla nowego przetargu, który ma oferty przekraczające budżet
INSERT INTO offers (tender_id, bidder_name, amount, submitted_at)
VALUES
    (6, 'Budimex S.A.', 6000000.00, '2025-04-02 11:00:00'),
    (6, 'Strabag Sp. z o.o.', 6500000.00, '2025-04-03 14:30:00'),
    (6, 'Mostostal Warszawa S.A.', 7000000.00, '2025-04-04 16:45:00'),

-- Dodawanie ofert dla nowego przetargu, który ma oferty mieszczące się w budżecie
    (7, 'Skanska S.A.', 1500000.00, '2025-04-05 09:00:00'),
    (7, 'Torpol S.A.', 1800000.00, '2025-04-06 10:30:00'),
    (7, 'Strabag Sp. z o.o.', 1900000.00, '2025-04-07 12:00:00');
