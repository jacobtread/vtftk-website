---
title: Poke
description: Common command examples
---

Command to poke someone

```js
const { user, targetUser } = ctx;

if (targetUser === null) {
  return "...You can't poke nobody...";
}

return `${user.name} has poked ${targetUser} (>_< hehehe)`;
```

