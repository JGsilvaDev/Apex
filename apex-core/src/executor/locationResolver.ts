import path from "path";
import os from "os";


export function resolveLocation(
  location:string
){

  const home =
    os.homedir();


  switch(location){

    case "DOCUMENTS":

      return path.join(
        home,
        "Documents"
      );


    case "DESKTOP":

      return path.join(
        home,
        "Desktop"
      );


    default:

      return home;

  }

}