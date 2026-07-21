export type ApexLocation =
  | "HOME"
  | "DOCUMENTS"
  | "DESKTOP"
  | "DOWNLOADS";

export interface CreateFolderPayload {

  name: string;

  location: ApexLocation;

}