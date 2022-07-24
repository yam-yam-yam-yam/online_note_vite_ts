<script setup lang='ts'>

import { ref } from "vue";
import { storeUser } from "../store/user";

let userId: {value:string} = ref('');

const login = (param:string) => {
    storeUser().setUserId(param)
    alert(`${storeUser().getUserId} 계정으로 접속합니다.`);
    window.location.href='#/memo';
}

</script>

<template>
    <input type="text" v-model="userId">아이디 입력
    <button @click="login(userId)">로그인</button>
</template> 