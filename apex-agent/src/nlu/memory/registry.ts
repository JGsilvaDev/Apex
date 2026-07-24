import {
    ApexIntent,
    MemoryResolver,
    Understanding
} from "apex-types";

class MemoryResolverRegistry{

    private resolvers =
        new Map<
            ApexIntent,
            MemoryResolver
        >();

    register(
        intent:ApexIntent,
        resolver:MemoryResolver
    ){

        this.resolvers.set(
            intent,
            resolver
        );
    }

    execute(
        understanding:Understanding
    ){

        const resolver =
            this.resolvers.get(
                understanding.intent
            );

        if(!resolver){
            return understanding;
        }

        return resolver(
            understanding
        );

    }

}

export const memoryResolverRegistry =
    new MemoryResolverRegistry();