# Mastra 的 ACE Music 工具

从源码执行 `npm ci && npm run check && npm pack`，在应用内安装生成的包。服务端创建 `AceMusicToolProvider`，传入自己的应用密钥和需要的工具名。[示例](../examples/mastra.ts)展示了工具如何接入 Mastra。查询已有任务时使用原任务 ID，生成歌曲、导入参考和歌词创作会单独计费。
