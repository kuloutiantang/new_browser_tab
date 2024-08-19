/** @format */

import { ref } from "vue";
import { defineStore } from "pinia";
import crumbs from "crumbsjs";

export const useConfigStore = defineStore("config", () => {
	// 存储键名
	const THE_KEY = "eden_config_storage_key_name";
	// 配置信息
	const style = ref({
		searchbox: {
			top: "",
			bottom: "70%",
			left: "",
			right: "",
			borderRadius: "35px",
			padding: "10px",
		},
		search: {
			width: "50vw",
			height: "35px",
			lineHeight: "35px",
			fontSize: "20px",
		},
		timedate: {
			top: "10vh",
			bottom: "",
			left: "",
			right: "",
			width: "",
			height: "",
			fontSize: "35px",
		},
		filebox: {
			paddingTop: "38vh",
			paddingBottom: "8vh",
			paddingLeft: "10vw",
			paddingRight: "10vw",
		},
	});
	const data = ref([
		{
			title: "Excalidraw",
			keyword: "excalidraw,画板",
			url: "https://excalidraw.com/",
			style: {
				width: "200px",
				height: "200px",
				background: "#1E90FF",
				backgroundImage: "url()",
				borderRadius: "0px",
				color: "rgba(255, 255, 255, 0.5)",
			},
		},
		{
			title: "ExcalidrawExcalidraw",
			keyword: "excalidraw,画板",
			url: "https://excalidraw.com/",
			style: {
				width: "200px",
				height: "200px",
				background: "#9400D3",
				backgroundImage: "url()",
				borderRadius: "0px",
				color: "rgba(255, 255, 255, 0.5)",
			},
		},
		{
			title: "ExcalidrawExcalidrawExcalidraw",
			keyword: "excalidraw,画板",
			url: "https://excalidraw.com/",
			style: {
				width: "400px",
				height: "200px",
				background: "#228B22",
				backgroundImage: "url()",
				borderRadius: "0px",
				color: "rgba(255, 255, 255, 0.5)",
			},
		},
	]);
	const config = ref({
		search: {
			style: {
				top: "",
				bottom: "70%",
				left: "",
				right: "",
				borderRadius: "35px",
				padding: "10px",
			},
			input: {
				style: {
					width: "50vw",
					height: "35px",
					lineHeight: "35px",
					fontSize: "20px",
				},
				placeholder: "请输入搜索内容",
			},
			spacing: {
				left: "14px",
				right: "14px",
			},
			engine: {
				use: {
					name: "谷歌",
					url: "https://www.google.com/search?q={keyword}",
					iconUrl: "https://www.google.com/favicon.ico",
					icon: "i-bx-bxl-google",
				},
				list: [
					{
						name: "谷歌",
						url: "https://www.google.com/search?q={keyword}",
						iconUrl: "https://www.google.com/favicon.ico",
						icon: "i-bx-bxl-google",
					},
					{
						name: "百度",
						url: "https://www.baidu.com/s?wd={keyword}",
						iconUrl: "https://www.baidu.com/favicon.ico",
						icon: "i-bx-bxl-baidu",
					},
					{
						name: "必应",
						url: "https://cn.bing.com/search?q={keyword}",
						iconUrl: "https://cn.bing.com/favicon.ico",
						icon: "i-bx-bxl-bing",
					},
				],
			},
			openingMethod: "newTab", // 搜索打开方式: newTab:新标签页, currentTab:当前标签页
		},
		timedate: {
			style: {
				top: "10vh",
				bottom: "",
				left: "",
				right: "",
				width: "",
				height: "",
				fontSize: "35px",
			},
		},
		body: {
			style: {
				paddingTop: "38vh",
				paddingBottom: "8vh",
				paddingLeft: "10vw",
				paddingRight: "10vw",
			},
			list: {
				width: "100px",
				height: "100px",
				borderRadius: "10px",
				childBorderRadius: "3px",
				fontSize: "14px",
				lineHeight: "2",
				gap: "28px",
			},
			folder: {
				topDiff: 75,
				leftDiff: 75,
				widthDiff: 100,
				heightDiff: 100,
				borderRadius: "10px",
				padding: "28px",
			},
		},
		list: [
			{
				title: "Excalidraw",
				keyword: "excalidraw,画板",
				url: "https://excalidraw.com/",
				iconType: "text",
				iconUrl: "",
				iconText: "画板",
				styleText: {
					width: "100px",
					height: "100px",
					borderRadius: "10px",
					background: "#ffffff",
					color: "#000000",
				},
				styleFolder: {
					width: "100px",
					height: "100px",
					borderRadius: "10px",
				},
				innerStyleText: {
					background: "#ffffff",
					color: "#000000",
					borderRadius: "3px",
				},
				innerStyleFolder: {
					borderRadius: "3px",
				},
			},
			{
				title: "Flow Us",
				keyword: "flowus,息流",
				url: "https://flowus.cn/",
				iconType: "text",
				iconUrl: "",
				iconText: "息流",
				styleText: {
					width: "100px",
					height: "100px",
					borderRadius: "10px",
					background: "#ffffff",
					color: "#000000",
				},
				styleFolder: {
					width: "100px",
					height: "100px",
					borderRadius: "10px",
				},
				innerStyleText: {
					background: "#ffffff",
					color: "#000000",
					borderRadius: "3px",
				},
				innerStyleFolder: {
					borderRadius: "3px",
				},
			},
			{
				title: "办公",
				keyword: "办公",
				url: "",
				iconType: "view",
				iconUrl: "",
				iconText: "",
				styleText: {
					width: "100px",
					height: "100px",
					borderRadius: "10px",
					background: "#ffffff",
					color: "#000000",
				},
				styleFolder: {
					width: "100px",
					height: "100px",
					borderRadius: "10px",
				},
				innerStyleText: {
					background: "#ffffff",
					color: "#000000",
					borderRadius: "3px",
				},
				innerStyleFolder: {
					borderRadius: "3px",
				},
				children: [
					{
						title: "腾讯会议",
						keyword: "腾讯会议,tencent meeting",
						url: "https://meeting.tencent.com/",
						iconType: "text",
						iconUrl: "",
						iconText: "会议",
						styleText: {
							width: "100px",
							height: "100px",
							borderRadius: "10px",
							background: "#ffffff",
							color: "#000000",
						},
						styleFolder: {
							width: "100px",
							height: "100px",
							borderRadius: "10px",
						},
						innerStyleText: {
							background: "#ffffff",
							color: "#000000",
							borderRadius: "3px",
						},
						innerStyleFolder: {
							borderRadius: "3px",
						},
					},
					{
						title: "代码",
						keyword: "代码",
						url: "",
						iconType: "view",
						iconUrl: "",
						iconText: "",
						styleText: {
							width: "100px",
							height: "100px",
							borderRadius: "10px",
							background: "#ffffff",
							color: "#000000",
						},
						styleFolder: {
							width: "100px",
							height: "100px",
							borderRadius: "10px",
						},
						innerStyleText: {
							background: "#ffffff",
							color: "#000000",
							borderRadius: "3px",
						},
						innerStyleFolder: {
							borderRadius: "3px",
						},
						children: [
							{
								title: "GitHub",
								keyword: "GitHub",
								url: "https://github.com/",
								iconType: "text",
								iconUrl: "",
								iconText: "GitHub",
								styleText: {
									width: "100px",
									height: "100px",
									borderRadius: "10px",
									background: "#ffffff",
									color: "#000000",
								},
								styleFolder: {
									width: "100px",
									height: "100px",
									borderRadius: "10px",
								},
								innerStyleText: {
									background: "#ffffff",
									color: "#000000",
									borderRadius: "3px",
								},
								innerStyleFolder: {
									borderRadius: "3px",
								},
							},
							{
								title: "前端",
								keyword: "前端",
								url: "",
								iconType: "view",
								iconUrl: "",
								iconText: "",
								styleText: {
									width: "100px",
									height: "100px",
									borderRadius: "10px",
									background: "#ffffff",
									color: "#000000",
								},
								styleFolder: {
									width: "100px",
									height: "100px",
									borderRadius: "10px",
								},
								innerStyleText: {
									background: "#ffffff",
									color: "#000000",
									borderRadius: "3px",
								},
								innerStyleFolder: {
									borderRadius: "3px",
								},
								children: [
									{
										title: "Vue",
										keyword: "Vue",
										url: "https://cn.vuejs.org/",
										iconType: "text",
										iconUrl: "",
										iconText: "Vue",
										styleText: {
											width: "100px",
											height: "100px",
											borderRadius: "10px",
											background: "#ffffff",
											color: "#000000",
										},
										styleFolder: {
											width: "100px",
											height: "100px",
											borderRadius: "10px",
										},
										innerStyleText: {
											background: "#ffffff",
											color: "#000000",
											borderRadius: "3px",
										},
										innerStyleFolder: {
											borderRadius: "3px",
										},
									},
								],
							},
						],
					},
				],
			},
		],
		data: [
			{
				title: "Excalidraw",
				keyword: "excalidraw,画板",
				url: "https://excalidraw.com/",
				style: {
					background: "#ffffff",
					color: "#000000",
				},
			},
		],
		openingMethod: "newTab", // 书签打开方式: newTab:新标签页, currentTab:当前标签页
	});

	/**
	 * 替换配置信息
	 * @param {Object} data 配置信息
	 */
	function setAll(data) {
		config.value = data;
	}
	/**
	 * 修改配置信息
	 * @param {Object} data 配置信息
	 */
	function set(data) {
		let allData = mergeObjects(config.value, data);
		setAll(allData);
	}
	/**
	 * 合并
	 * @param {*} objA 原始对象
	 * @param {*} objB 附加对象
	 * @returns 结果对象
	 */
	function mergeObjects(objA, objB) {
		Object.keys(objB).forEach((key) => {
			if (objB[key] && typeof objB[key] === "object" && !Array.isArray(objB[key])) {
				// 如果 objB[key] 是对象，则递归调用 mergeObjects
				if (!objA[key]) {
					objA[key] = {};
				}
				mergeObjects(objA[key], objB[key]);
			} else {
				// 如果不是对象，则直接替换或添加值
				objA[key] = objB[key];
			}
		});
		return objA;
	}
	/**
	 * 获取本地配置信息
	 * @returns boolean 是否存在
	 */
	function localConfig() {
		let cookieConfig = crumbs.ls.get(THE_KEY);
		if (cookieConfig) {
			setAll(cookieConfig);
		}
	}
	/**
	 * 本地备份
	 */
	function backups() {
		crumbs.ls.set(THE_KEY, config.value);
	}
	/**
	 * 重置
	 */
	function reset() {
		crumbs.ls.delete(THE_KEY);
	}

	return { style, data, config, setAll, set, localConfig, backups, reset };
});
