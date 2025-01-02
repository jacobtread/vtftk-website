---
title: Hug Counter
description: Common command examples
---

Command to give out hugs, counting how many have been given

```js
const { user, targetUser } = ctx;

// Cannot hug nobody
if (targetUser === null) {
  return "....You can't hug nobody silly... you gotta put the name";
}

// Create counter for hugs
const hugCounter = api.kv.createScopedCounter("hugCounters");

// Increase the user hug counter
const userHugs = await hugCounter.increase(user.name, 1);

return `${user.name} hugged ${targetUser}. They have given out ${userHugs} hugs.`;
```