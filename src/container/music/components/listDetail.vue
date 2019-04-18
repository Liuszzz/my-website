<template>
	<div class="list-detail">
		<div class="playlist-desc clear"
		     v-if="listDetail.creator">
			<div class="cover-box fl">
				<img :src="listDetail.coverImgUrl">
			</div>
			<div class="info-box">
				<div class="playlist-name">
					<h2>{{listDetail.name}}</h2>
				</div>
				<div class="creator-info">
					<img :src="listDetail.creator.avatarUrl">
					<a class="creator-name">{{listDetail.creator.nickname}}</a>
				</div>
				<div class="opt-box"></div>
			</div>
		</div>
		<div class="count clear">
			<div class="fl">
				歌曲列表
				<span>{{listDetail.trackCount}}首歌</span>
			</div>
			<div class="fr">
				播放{{listDetail.playCount}}次
			</div>
		</div>
		<div class="list-box">
			<Table stripe
			       :columns="configs"
			       :data="listDetail.tracks"
			       @on-row-dblclick="toPlay"></Table>
		</div>
	</div>
</template>
<script>
	import Api from '@/api';
	export default {
		props: {
			listDetail: Object
		},
		data() {
			return {
				configs: [
					{
						type: 'index',
						width: 60
					},
					{
						title: '歌曲标题',
						key: 'name'
					},
					{
						title: '时长',
						key: 'dt'
					},
					{
						title: '歌手',
						key: 'artistName'
					},
					{
						title: '专辑',
						key: 'albumName'
					}
				]
			};
		},
		methods: {
			toPlay(item) {
				this.axios.get('/music/song/url?id=' + item.id).then(resp => {
					if (resp.data) {
						this.$store.state.musicInfo = resp.data.data[0];
					}
				});
			}
		}
	};
</script>
<style lang="less" scoped>
	.playlist-desc {
		padding: 40px;
		.cover-box {
			padding: 5px;
			border: 1px solid #e5e5e5;
			img {
				width: 208px;
				height: 208px;
			}
		}
		.info-box {
			text-align: left;
			padding-left: 250px;
			.playlist-name {
				font-size: 20px;
				margin-bottom: 12px;
			}
			.creator-info {
				img {
					width: 35px;
					height: 35px;
					vertical-align: middle;
				}
				.creator-name {
					margin: 0 10px;
				}
			}
		}
	}
	.count {
		padding: 0 40px;
		line-height: 40px;
	}
	.list-box {
		.ivu-table-row {
			cursor: pointer;
		}
	}
</style>
