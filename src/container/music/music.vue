<template>
	<div class="music">
		<div class="content clear">
			<div class="left-content fl">
				<ul>
					<li>我的歌手（{{subCount.artistCount}}）</li>
					<li>我的视频（{{subCount.mvCount}}）</li>
					<li>我的电台（{{subCount.djRadioCount}}）</li>
					<li>创建的歌单（{{subCount.createdPlaylistCount}}）</li>
					<li>收藏的歌单（{{subCount.subPlaylistCount}}）</li>
				</ul>
			</div>
			<div class="right-content fr">
				<ul class="rec-list-box clear">
					<li class="rec-list-item fl"
					    v-for="(item, index) in recSongList"
					    v-show="index < 8"
					    :key="item.id">
						<img :src="item.picUrl" />
					</li>
				</ul>
			</div>
		</div>
		<div class="music-bar"></div>
	</div>
</template>

<script>
	import Api from '@/api';

	export default {
		data() {
			return {
				recSongList: [],
				subCount: {}
			};
		},
		created() {
			this.getSubcount();
		},
		methods: {
			getSubcount() {
				Api.getSubcount().then(data => {
					if (data.data) {
						this.subCount = data.data;
					}
				});
			}
		}
	};
</script>

<style lang="less">
	.music {
		width: 1000px;
		height: 100%;
		border: 1px solid #eee;
		border-top: 0;
		margin: 0 auto;
		box-sizing: content-box;
		.content {
			height: 100%;
			> div {
				box-sizing: border-box;
				min-height: 100%;
				overflow: auto;
			}
			.left-content {
				width: 240px;
				padding: 40px 20px;
				text-align: left;
				border-right: 1px solid #eee;
				li {
					cursor: pointer;
					margin-bottom: 10px;
				}
			}
			.right-content {
				width: 760px;
				.rec-list-box {
					.rec-list-item {
						width: 25%;
						height: 250px;
						img {
							width: 100%;
							height: 200px;
						}
					}
				}
			}
		}
	}
</style>