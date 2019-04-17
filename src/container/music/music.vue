<template>
	<div class="music">
		<div class="content clear">
			<LeftContent :subCount="subCount"
			             :favoriteList="favoriteList"
			             :createdList="createdList"
			             @playListDetail="getPlayListDetail">
			</LeftContent>
			<div class="right-content fr">
				<ListDeatil :listDetail="listDetail">

				</ListDeatil>
			</div>
		</div>
		<div class="music-bar"></div>
	</div>
</template>

<script>
	import Api from '@/api';
	import COMMONJS from '@/assets/js/common.js';
	import LeftContent from './components/leftContent.vue';
	import ListDeatil from './components/listDetail.vue';

	export default {
		data() {
			return {
				recSongList: [],
				subCount: {},
				userInfo: this.$store.state.userInfo,
				createdList: [],
				favoriteList: [],
				listDetail: {}
			};
		},
		components: {
			LeftContent,
			ListDeatil
		},
		created() {
			this.getSubcount();
			this.getMyPlaylist();
		},
		methods: {
			//获取左侧统计数据
			getSubcount() {
				Api.getSubcount().then(data => {
					if (data.data) {
						this.subCount = data.data;
					}
				});
			},
			//获取我的歌单列表 创建&喜欢
			getMyPlaylist() {
				Api.getMyPlaylist({
					data: {
						uid: this.userInfo.account.id
					}
				}).then(data => {
					if (data.data.playlist) {
						let playlist = data.data.playlist;
						playlist.forEach(item => {
							if (item.creator.userId == this.userInfo.account.id) {
								this.createdList.push(item);
							} else {
								this.favoriteList.push(item);
							}
						});
					}
				});
			},

			//获取歌单列表详情
			getPlayListDetail(data) {
				data.playlist.tracks.forEach(list => {
					list.artistName = list.ar[0].name;
					list.albumName = list.al.name;
					list.dt = COMMONJS.MillisecondToDate(list.dt);
				});
				this.listDetail = data.playlist;
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
				height: 100%;
				overflow: auto;
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
	.ivu-collapse {
		.ivu-collapse-item {
			.ivu-collapse-header {
				margin-left: -16px;
				padding: 0;
				i {
					margin: 0;
				}
			}
			.ivu-collapse-content {
				padding: 0;
			}
		}
	}
</style>