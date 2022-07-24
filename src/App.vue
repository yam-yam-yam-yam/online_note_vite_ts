<script setup lang="ts">

import { storeUser } from "./store/user";
const checkLogin = (): string => {
  return storeUser().getUserId;
}
if(!checkLogin()) {
  window.location.href='#/login';
}

</script>

<template>
    <router-view></router-view>
</template>
