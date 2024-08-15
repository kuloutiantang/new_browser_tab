<!-- @format -->

<script setup>
// 路由
import { RouterView } from "vue-router";
// 暗黑模式
import { useDark } from "@vueuse/core";
useDark({
	valueDark: "dark",
	valueLight: "light",
});
// 配置文件
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
config.localConfig();
</script>

<template>
	<RouterView />
</template>
