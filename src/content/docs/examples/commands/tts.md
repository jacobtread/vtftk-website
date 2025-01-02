---
title: TTS Monster
description: Common command examples
---

Commands to use TTS monster

## Get Voices

```js
// Acknowledge the request
api.twitch.sendChat("Loading available voices.....");

// Get list of voices
const voices = await api.integrations.tts_monster.voices();

await api.twitch.sendChat("Available voices: ");

let voicesMessage = "";

for (const voice of voices) {
  // Send message if it gets too long
  if (voice.name.length + voicesMessage.length > 400) {
    await api.twitch.sendChat(voicesMessage);
    voicesMessage = "";
  }

  if (voicesMessage.length > 0) voicesMessage += ", ";
  voicesMessage += voice.name;
}

// Send left over chunk of messages
if (voicesMessage.length > 0) {
  await api.twitch.sendChat(voicesMessage + ".");
}
```

## Send TTS 

Send a TTS message

You should restrict this command or add a cooldown to prevent using up all your 
TTS monster tokens.

```js
const message = ctx.message;

// Acknowledge the request
api.twitch.sendChat("Generating TTS message.....");

// Generate the TTS message
const urls = await api.integrations.tts_monster.generateParsed(message);

// Play the TTS message sounds
await api.vtftk.playSoundSeq(urls.map((url) => ({
  src: url,
  volume: 1
})));

return `Playing TTS message: ${message}`;
```