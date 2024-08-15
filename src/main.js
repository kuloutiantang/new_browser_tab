/** @format */

// 样式
import "virtual:uno.css";
// 饿了么+
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./style.css";
// VUE
import { createApp } from "vue";
// 状态管理
import { createPinia } from "pinia";
// 路由
import router from "./router";

import App from "./App.vue";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, { locale: zhCn });

router.isReady().then(() => {
	app.mount("#app");
});
