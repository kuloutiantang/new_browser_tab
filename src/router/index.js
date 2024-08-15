/** @format */

import { createRouter, createWebHashHistory } from "vue-router";

const TITLE = "新标签页";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "index",
			component: () => import("../views/Index.vue"),
			meta: {
				title: "新标签页",
			},
		},
	],
});
router.beforeEach((to) => {
	document.title = to.meta.title || TITLE;
});

export default router;
