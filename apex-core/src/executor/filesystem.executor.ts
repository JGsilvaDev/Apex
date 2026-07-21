import * as fs from "fs/promises";

import {
    ApexAction,
    CreateFolderExecutionPayload,
    ExecutionContext
} from "apex-types";

export async function executeFilesystemAction(
    action: ApexAction<CreateFolderExecutionPayload>,
    context: ExecutionContext
){

    switch(action.type){
        case "CREATE_FOLDER":
            await fs.mkdir(
                action.payload.path,
                {
                    recursive:true
                }
            );

            return {

                success:true,

                message:
                    "Pasta criada com sucesso.",

                data:{
                    path:
                        action.payload.path
                },

                logs:[
                    `Diretório criado: ${action.payload.path}`
                ]

            };

        default:
            throw new Error(
                "Filesystem action desconhecida."
            );
    }
}