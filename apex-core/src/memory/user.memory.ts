import os from "os";


export const userMemory = {

  userName:
  "João",


  home:
    os.homedir(),


  documents:
    `${os.homedir()}\\Documents`,

  desktop:
    `${os.homedir()}\\Desktop`

};