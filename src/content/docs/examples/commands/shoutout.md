---
title: Shoutout
description: Common command examples
---

Command to send a chat message shoutout and a proper twitch shoutout

```js
const { targetUserValid } = ctx;

let twitchUser;

// find the user to shoutout
try {
  twitchUser = await api.twitch.getUserByUsername(targetUserValid);

  if (twitchUser === null) {
    return "unable to find that twitch user, check the username is correct";
  }

  console.debug("found twitch user", twitchUser)
} catch (e) {
  console.error('failed to get twitch user', e);
  return "failed to find user, check that the username is correct";
}

// Send shoutout
try {
  await api.twitch.shoutout(twitchUser.id);
  console.info("sent shoutout success");
} catch (e) {
  // Ignored.. official shoutouts can fail due to ratelimiting or if the user isn't streaming
  console.error("failed to send shoutout", e)
}

return `Go check out ${twitchUser.displayName} on twitch at https://twitch.tv/${twitchUser.name}`;
```