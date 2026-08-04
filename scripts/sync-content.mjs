import { dev } from 'astro';

const server = await dev({ logLevel: 'silent' });
await server.stop();
