-- Tworzenie bazy danych
CREATE DATABASE IF NOT EXISTS tenderapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE tenderapp;

-- Tabela z przetargami
CREATE TABLE IF NOT EXISTS tenders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  institution VARCHAR(255) NOT NULL,
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  max_budget DECIMAL(12,2) NOT NULL
);

-- Tabela z ofertami
CREATE TABLE IF NOT EXISTS offers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tender_id INT NOT NULL,
  bidder_name VARCHAR(255) NOT NULL,
  amount DECIMAL(12,2) NOT NULL,
  submitted_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tender_id) REFERENCES tenders(id) ON DELETE CASCADE
);
