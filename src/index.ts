import { ServiceToolProvider, type ProviderOptions } from './provider.js';
export { AceToolError } from './provider.js';
export type { ProviderOptions as AceMusicToolProviderOptions } from './provider.js';

/** ACE Music music creation, reference audio, lyrics, and task queries through Ace Data Cloud. */
export class AceMusicToolProvider extends ServiceToolProvider {
  constructor(options: ProviderOptions = {}) {
    super({
      slug: 'acemusic',
      name: 'ACE Music by Ace Data Cloud',
      description: 'Create songs and lyrics, import references, cover a track, blend two tracks and query the original task.',
      endpoint: 'https://acemusic.mcp.acedata.cloud/mcp',
      packageName: '@acedatacloud/mastra-acemusic',
    }, options);
  }
}
