<template>
	<div class="_header clear">
		<div class="logo_box fl">Liuszzz</div>
		<div class="info_box fr">
			<img :src="profile.avatarUrl">
			{{profile.nickname}}
		</div>
	</div>
</template>
<script>
	import { userInfo } from 'os';
	export default {
		props: {
			userInfo: Object
		},
		data() {
			return {};
		},
		computed: {
			profile() {
				return this.userInfo.profile;
			},
			bindings() {
				return this.userInfo.bindings;
			},
			account() {
				return this.userInfo.account;
			}
		}
	};
</script>
<style lang="less" scoped>
	._header {
		background: #242424;
		min-height: 70px;
		width: 100%;
		padding: 0 20px;
		color: #fff;
		> div {
			line-height: 70px;
		}
		.logo_box {
			font-size: 24px;
			font-size: 600;
		}
		.info_box {
			img {
				width: 30px;
				height: 30px;
				border-radius: 50%;
				// border: 1px solid #fff;
				margin: 0 10px;
				vertical-align: middle;
			}
		}
	}
</style>

