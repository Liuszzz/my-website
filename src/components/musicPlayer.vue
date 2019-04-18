<template>
	<div class="music-player">
		<audio ref="player" :src="src"
		       controls="controls"
		       loop="loop"
		       autoplay="autoplay">亲 您的浏览器不支持html5的audio标签</audio>
	</div>
</template>
<script>
	export default {
		// props: {
		// 	musicUrl: String
		// },
		data() {
			return {
				src: ''
			};
		},
		computed: {
			musicUrl() {
				return this.$store.state.musicInfo.url;
			}
		},
		watch: {
			musicUrl() {
				console.log(this.musicUrl);
				this.src = this.musicUrl;
			}
        },
        mounted(){
            this.$refs.player.volume = 0.2;
        }
	};
</script>
<style lang="less" scoped>
	.music-player {
		position: fixed;
		bottom: 0;
	}
</style>
