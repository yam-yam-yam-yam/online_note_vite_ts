import { defineStore, StoreDefinition } from "pinia";

export const storeUser = defineStore("user",{
    state: () => {
        return {
            userId: ''
        }
    },
    actions: {
        setUserId(param:any) {
            this.userId = param;
        }
    },
    getters: {
        getUserId(state:any){
            return state.userId
        }
    }
});  