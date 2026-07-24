import {
    IntentTypes
} from "apex-types";

import {

    memoryResolverRegistry

} from "./registry";

import {

    createFolderResolver

} from "./resolvers/createFolder.resolver";

memoryResolverRegistry.register(
    IntentTypes.CREATE_FOLDER,
    createFolderResolver
);