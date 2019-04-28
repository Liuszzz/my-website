<template>
	<div class="container">
		<div class="search-box">
			<Input search enter-button placeholder="Enter something..."/>

			<Select
				v-model="selectValue"
				filterable
				remote
				:remote-method="remoteMethod"
				:loading="isSelectLoading"
			>
				<Option
					v-for="(option, index) in options"
					:value="option.value"
					:key="index"
				>{{option.name}}——{{option.singerName}}</Option>
			</Select>
		</div>
		<div class="result-list">
			<Table stripe :columns="configs" :data="songlist"></Table>
		</div>
	</div>
</template>
<script>
	import Api from '@/api';
	import COMMONJS from '@/assets/js/common.js';
	export default {
		data() {
			return {
				selectValue: '',
				isSelectLoading: false,
				options: [],
				songlist: [],
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
			search(kws) {
				this.axios.get('/music/search?keywords=' + kws).then(resp => {
					let data = resp.data.result;
					if (data.songs) {
						data.songs.forEach(list => {
							let obj = {
								value: list.id,
								name: list.name,
								singerName: list.artists[0].name
							};
							this.options.push(obj);
							list.artistName = list.artists[0].name;
							list.albumName = list.album.name;
							list.dt = COMMONJS.MillisecondToDate(list.duration);
						});
						this.songlist = data.songs;
					} else {
						this.songlist = {};
						this.options = [];
					}
					console.log('search data=', data);
				});
			},
			remoteMethod(query) {
				console.log('query', query);
				this.search(query);
			}
		}
	};
</script>

<style lang="less" scoped>
	.search-box {
		width: 300px;
		margin: 0 auto;
		text-align: left;
		> div {
			margin: 20px 0;
		}
	}
</style>
