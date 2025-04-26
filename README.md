# Tender App

Aplikacja umożliwia tworzenie nowych przetargów, dodawanie ofert a także wyświetlanie aktualnie trwających przetargów oraz tych zakończonych

## Technologie
- Node.js
- Express.js
- EJS
- Bootstrap
- MySQL 

## Uruchomienie

### 1. Sklonuj repozytorium

```bash
git clone https://github.com/PawelJasinski25/TenderApp.git
cd TenderApp
```

### 2. Skonfiguruj bazę danych

1. Zaloguj się do MySQL:

    ```bash
    mysql -u nazwa_uzytkownika -p
    ```
    
2. Utwórz bazę danych:

    ```sql
    CREATE DATABASE tenderapp;
    USE tenderapp;
    ```

3. Załaduj strukturę i przykładowe dane:

    ```bash
    mysql -u nazwa_uzytkownika -p tenderapp < schema.sql
    mysql -u nazwa_uzytkownika -p tenderapp < seed.sql
    ```

4. Stwórz plik `.env` i uzupełnij dane dostępowe:

    ```env
    DB_HOST=localhost
    DB_USER=nazwa_uzytkownika
    DB_PASSWORD=haslo_uzytkownika
    DB_NAME=tenderapp
    ```

### 3. Zainstaluj zależności

```bash
npm install
```

### 4. Uruchom aplikację

```bash
npm start
```

Aplikacja będzie dostępna pod adresem http://localhost:3000

