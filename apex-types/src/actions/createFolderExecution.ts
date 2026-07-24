export interface CreateFolderExecutionPayload {

    name:string;

    location:string;

    parent?: {

        name:string;

        location:string;

    };

}