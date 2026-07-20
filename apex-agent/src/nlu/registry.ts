import {
  IntentHandler
} from "./intents/types";


import {
  createFolderIntent
} from "./intents/createFolder.intent";


import {
  greetingIntent
} from "./intents/greeting.intent";


import {
  projectIntent
} from "./intents/project.intent";



export const intentRegistry:
IntentHandler[] = [

  createFolderIntent,

  projectIntent,

  greetingIntent

];