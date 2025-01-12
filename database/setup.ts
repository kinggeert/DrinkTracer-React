import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('drinktracer.db');

const createTables = async () => {
  const queries = [
    `CREATE TABLE IF NOT EXISTS User (
      Identifier INTEGER PRIMARY KEY AUTOINCREMENT,
      UserName TEXT NOT NULL,
      PasswordHash TEXT NOT NULL,
      EMail TEXT NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS Fridge (
      Identifier INTEGER PRIMARY KEY AUTOINCREMENT,
      Name TEXT NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS Product (
      Identifier INTEGER PRIMARY KEY AUTOINCREMENT,
      Name TEXT NOT NULL,
      Price REAL NOT NULL,
      Stock INTEGER NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS Bill (
      Identifier INTEGER PRIMARY KEY AUTOINCREMENT,
      Date TEXT NOT NULL,
      User INTEGER,
      Fridge INTEGER,
      FOREIGN KEY (User) REFERENCES User (Identifier),
      FOREIGN KEY (Fridge) REFERENCES Fridge (Identifier)
    );`,
    `CREATE TABLE IF NOT EXISTS GroceryList (
      Identifier INTEGER PRIMARY KEY AUTOINCREMENT,
      Date TEXT NOT NULL,
      ApplicableUser INTEGER,
      Fridge INTEGER,
      FOREIGN KEY (ApplicableUser) REFERENCES User (Identifier),
      FOREIGN KEY (Fridge) REFERENCES Fridge (Identifier)
    );`,
    `CREATE TABLE IF NOT EXISTS ProductCount (
      Identifier INTEGER PRIMARY KEY AUTOINCREMENT,
      product INTEGER,
      Count INTEGER NOT NULL,
      FOREIGN KEY (product) REFERENCES Product (Identifier)
    );`
  ];

  try {
    await SQLite.execAsync(db, queries.map(query => ({ sql: query })));
    console.log('Tables created successfully!');
    return true;
  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
};

export const initializeDatabase = () => {
  createTables();
}; 