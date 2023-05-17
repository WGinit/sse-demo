# 前端SSE通信

EventSource 是SSE客户端接口，本例使用EventSource建立通信

### 优化问题

大部分场景下可以替代轮询方案

## Usage

```javascript
node index.js
```

本地启动一个node服务，在浏览器端访问<http://localhost:3000> 或 <http://localhost:3000/index> 即可看到服务端推送的相关信息。

## 说明

1. 在操作频率不高或要求实时性的场景下，服务端推送了消息，前端拿到了需要直接显示，可以参考<http://localhost:3000>案例。
2. 反之，在实时性不高的场景，可以前端可以做一些延迟渲染，例如在某个时间段内，以服务端最后一次的推送为准，具体可以参考<http://localhost:3000/index>案例。
