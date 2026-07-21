import { CreateFolderPayload } from "apex-types";

export function validateCreateFolder(
  payload: CreateFolderPayload
): CreateFolderPayload {

  if (!payload.name) {
    throw new Error("Folder name not informed.");
  }

  const name = payload.name.trim();

  if (name.length === 0) {
    throw new Error("Folder name is empty.");
  }

  const invalidCharacters =
    /[<>:"/\\|?*]/;

  if (invalidCharacters.test(name)) {
    throw new Error(
      "Folder name contains invalid characters."
    );
  }

  return {
    ...payload,
    name,
  };

}