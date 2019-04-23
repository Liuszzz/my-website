<template>
	<div class="left-content fl">
		<ul>
			<li>我的歌手（{{subCount.artistCount}}）</li>
			<li>我的视频（{{subCount.mvCount}}）</li>
			<li>我的电台（{{subCount.djRadioCount}}）</li>
		</ul>
		<Collapse simple>
			<Panel name="createdPlaylistCount">
				创建的歌单（{{subCount.createdPlaylistCount}}）
				<ul slot="content">
					<li
						class="playlist"
						v-for="cItem in createdList"
						:key="cItem.id"
						@click="getPlayListDetail(cItem)"
					>
						<div class="clear">
							<img class="list-cover fl" :src="cItem.coverImgUrl">
							<div class="list-intro">
								<p>{{cItem.name}}</p>
								<p>{{cItem.trackCount}}</p>
							</div>
						</div>
					</li>
				</ul>
			</Panel>
			<Panel name="subPlaylistCount">
				收藏的歌单（{{subCount.subPlaylistCount}}）
				<ul slot="content">
					<li
						class="playlist"
						v-for="fItem in favoriteList"
						:key="fItem.id"
						@click="getPlayListDetail(fItem)"
					>
						<div class="clear">
							<img class="list-cover fl" :src="fItem.coverImgUrl">
							<div class="list-intro">
								<p>{{fItem.name}}</p>
								<p>{{fItem.trackCount}}</p>
							</div>
						</div>
					</li>
				</ul>
			</Panel>
		</Collapse>
	</div>
</template>
<script>
	import Api from '@/api';
	export default {
		props: {
			subCount: {},
			createdList: {},
			favoriteList: {}
		},
		methods: {
			getPlayListDetail(item) {
				let loadMsg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios
					.get('/music/playlist/detail?id=' + item.id)
					.then(resp => {
						if (resp.data) {
							setTimeout(loadMsg, 300);
							resp.data.playlist.tracks.forEach(list => {
								list.isPlaying = false; //初始化播放状态
							});
							this.$emit('playListDetail', resp.data);
						}
					});
			}
		}
	};
</script>
<style lang="less" scoped>
	.left-content {
		width: 240px;
		padding: 40px 30px;
		text-align: left;
		border-right: 1px solid #eee;
		> ul li {
			cursor: pointer;
			line-height: 40px;
			border-top: 1px solid #dcdee2;
		}
		.playlist {
			cursor: pointer;
			padding: 6px 0;
			.list-cover {
				width: 40px;
				height: 40px;
				vertical-align: middle;
			}
			.list-intro {
				padding-left: 50px;
				p {
					font-size: 12px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
