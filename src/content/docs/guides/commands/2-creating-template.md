---
title: Creating Template
description: Creating simple commands using templating
---


Template commands are simple command that response using a fixed response template, this is for 
simple commands that have a static response such as a !discord command that response with your discord
server link

To create a new template command visit the "Commands" tab from the sidebar:

![alt text](./images/create_template/image.png)

Then press "Create Command":

![alt text](./images/create_template/image-1.png)

Provide a name for your command, and set the "Command", this is the word that must appear at the start of the message in order 
to trigger the command:

![alt text](./images/create_template/image-2.png)

Select the "Type" tab and ensure the "Template" option is selected:

![alt text](./images/create_template/image-3.png)

Then select the "Template" tab, here you will put your template message in:

![alt text](./images/create_template/image-4.png)

For our discord command we will use the following template:

```
Hey $(user), you can check out my discord server at https://discord.gg/example
```

When the message is sent the `$(user)` will be replaced with the name of the user 
who used the command

![alt text](./images/create_template/image-5.png)

You can then head to the "Requirements" tab to choose who is allowed to use the command and the cooldown between uses

![alt text](./images/create_template/image-6.png)

After you've configured your command press the "Create" button to create your command:

![alt text](./images/create_template/image-7.png)

You'll be taken back to the commands list with your new command at the top:

![alt text](./images/create_template/image-8.png)

You can then test your command on twitch by typing out the command message into chat:

![alt text](./images/create_template/image-9.png)