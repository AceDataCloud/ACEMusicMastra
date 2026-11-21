# ACE Music for Mastra

Add ACE Music to a Mastra agent or Studio through a native `AceMusicToolProvider`. It discovers the current tool schemas from the [ACE Music hosted MCP](https://platform.acedata.cloud/documents/mcp-acemusic).

Build the source package with Node.js 22.13+ using `npm ci && npm run check && npm pack`. Install the resulting tarball in the Mastra project. Store your [application key](https://platform.acedata.cloud/console/applications) in server-side configuration.

```ts
import { AceMusicToolProvider } from '@acedatacloud/mastra-acemusic';

const provider = new AceMusicToolProvider({
  apiKey: process.env.ACEDATACLOUD_API_TOKEN,
  allowedTools: ['acemusic_list_models', 'acemusic_get_task'],
});
const tools = await provider.resolveTools(['acemusic_list_models', 'acemusic_get_task']);
// Pass tools to your Mastra agent. Disconnect the provider after the agent is finished.
```

The server also offers song generation, lyrics, reference import, covers and mashups. Expose those tools when the application intends to submit a paid operation. Save its task ID and use `acemusic_get_task` for later progress. [中文](readme/README_zh_Hans.md) · [Mastra example](examples/mastra.ts)
