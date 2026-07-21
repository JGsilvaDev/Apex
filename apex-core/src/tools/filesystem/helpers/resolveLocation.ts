import os from "os";
import path from "path";

export function resolveLocation(
  location: string
): string {

  const home =
    os.homedir();

  switch (location) {

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

    case "DOWNLOADS":
      return path.join(
        home,
        "Downloads"
      );

    default:
      return home;

  }

}