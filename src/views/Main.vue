<template>
	<div class="main">
		<MyHeader :userInfo="userInfo"></MyHeader>
		<div class="content">
			<router-view></router-view>
		</div>
		<MusicPlayer></MusicPlayer>
	</div>
</template>

<script>
	import MyHeader from '@/components/header';
	import MusicPlayer from '@/components/musicPlayer';
	export default {
		components: {
			MyHeader,
			MusicPlayer
		},
		data() {
			return {
				userInfo: {}
			};
		},
		created() {
			let userInfo = localStorage.getItem('MUSIC_USER_INFO');
			if (userInfo) {
				this.$store.state.userInfo = JSON.parse(
					localStorage.getItem('MUSIC_USER_INFO')
				);
				this.userInfo = this.$store.state.userInfo;
			}
			this.$router.push({
				name: 'music'
			});
		},
		methods: {
			async toHome() {
				await this.$router.replace('/');
			}
		}
	};
</script>

<style scoped lang="less">
	.main {
		height: 100vh;
		.content {
			height: calc(100% - 70px);
		}
	}
</style>
