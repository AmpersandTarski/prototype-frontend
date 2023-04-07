There are two main scripts that utilize the messageService. This is set up in a way that they intercept any notifications or errors and prompt the user with a message. This document explains how to use the messageService in a special case where a custom message needs to be displayed.

## Main Toast module

A `MessageService` has been added to the main app component. This way, the service covers all other components, having only one `<p-toast>` object to be present at all times. This reduces the number of imports per component from roughly four to one, and reduces the number of `<p-toast>` objects on the page.

To use this service in a component, simply add `private messageService: MessageService` to the component constructor. Then, to send a message, add `this.messageService.add( {YOUR_MESSAGE} );` to the code.

Here is a (deprecated) example (from admin/population/import/import.component.ts):
![image](https://user-images.githubusercontent.com/58219126/223455745-38c1c1b7-1d74-4f97-ac14-a131067dcf2e.png)

A message has the following fields (I added comments to clarify the more important fields):

```Typescript
export interface Message {
    severity?: string; // "success", "info", "warn" or "error"
    summary?: string; // The header of the message
    detail?: string; // The main text area of the message
    id?: any;
    key?: string;
    life?: number; // Time in milliseconds that the toast is displayed
    sticky?: boolean; // if true, the message stays visible until manually removed.
    closable?: boolean; // if true, adds a close button
    data?: any;
    icon?: string;
    contentStyleClass?: string;
    styleClass?: string;
}
```

(click [here](https://www.primefaces.org/primeng-v13/toast) for more specific information on the toast module).
