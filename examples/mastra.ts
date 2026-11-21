import { MastraEditor } from '@mastra/editor';
import { AceMusicToolProvider } from '../src/index.js';

// Pass editor into your existing new Mastra({ ..., editor, storage }) configuration.
// Its API key belongs to the server owner; it is not a per-user OAuth connection.
export function createAceMusicEditor(apiKey: string) {
  const acemusic = new AceMusicToolProvider({ apiKey });
  const editor = new MastraEditor({ toolProviders: { acemusic } });
  return { acemusic, editor };
}

// Code-configured agents can use the same provider without stored-agent editing.
export async function createAceMusicTools(apiKey: string) {
  const acemusic = new AceMusicToolProvider({ apiKey });
  const tools = await acemusic.resolveTools(['acemusic_generate_music', 'acemusic_get_task']);
  return { acemusic, tools };
}
