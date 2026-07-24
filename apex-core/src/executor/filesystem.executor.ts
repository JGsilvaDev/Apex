import * as fs from "fs/promises";
import * as path from "path";

import {
    ApexAction,
    CreateFolderExecutionPayload,
    ExecutionContext
} from "apex-types";

import {
    resolveLocation
} from "./locationResolver";



export async function executeFilesystemAction(
    action: ApexAction<CreateFolderExecutionPayload>,
    context: ExecutionContext
){

    switch(action.type){

        case "CREATE_FOLDER": {

            const basePath =
                resolveLocation(
                    action.payload.location
                );


            const folderPath =
                action.payload.parent

                ?

                path.join(
                    basePath,
                    action.payload.parent.name,
                    action.payload.name
                )

                :

                path.join(
                    basePath,
                    action.payload.name
                );


            await fs.mkdir(
                folderPath,
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
                        folderPath
                },

                logs:[
                    `Diretório criado: ${folderPath}`
                ]

            };

        }


        default:

            throw new Error(
                "Filesystem action desconhecida."
            );

    }

}