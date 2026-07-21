import * as fs from "fs/promises";

import {
    ApexAction,
    CreateFolderExecutionPayload
} from "apex-types";

export async function executeFilesystemAction(

    action: ApexAction<CreateFolderExecutionPayload>

){

    switch(action.type){

        case "CREATE_FOLDER":

            await fs.mkdir(
                action.payload.path,
                {
                    recursive:true
                }
            );

            return{

                success:true,

                message:`Pasta criada em ${action.payload.path}`

            };

        default:

            throw new Error("Filesystem action desconhecida.");

    }

}