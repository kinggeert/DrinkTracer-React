import { migrate } from 'drizzle-orm/expo-sqlite/migrator';
import { getDb } from './index';

async function runMigrations() {
  console.log('Running migrations...');
  const db = await getDb();
  await migrate(db, { migrationsPath: './drizzle' });
  console.log('Migrations completed!');
}

runMigrations().catch(console.error);
