---
title: Twitch Announcement
description: Common command examples
---

Command to send a twitch announcement message

```js
const message = ctx.message;

await api.twitch.sendChatAnnouncement(message, "primary");
```