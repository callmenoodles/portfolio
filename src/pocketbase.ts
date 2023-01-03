import PocketBase from 'pocketbase';

console.log(import.meta.env.VITE_POCKETBASE_URL);
export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
