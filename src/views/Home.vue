<template>
	<div class="home container"
	     :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
		<div class="center-box">
			<div class="home-box"
			     v-if="!isLogin">
				<img class="avatar"
				     src="@/assets/img/avatar.jpg" />
				<p>Liuszzz</p>
				<a @click="toLogin">IS LIFE ALWAYS THIS HARD ?</a>
			</div>
			<div class="login-box"
			     v-else>
				<Form ref="formInline"
				      :model="formInline"
				      :rules="ruleInline">
					<FormItem prop="user">
						<Input type="text"
						       size="large"
						       v-model="formInline.user"
						       placeholder="账号">
						<Icon type="ios-person-outline"
						      slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem prop="password">
						<Input type="password"
						       size="large"
						       v-model="formInline.password"
						       placeholder="密码">
						<Icon type="ios-lock-outline"
						      slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem>
						<Button type="default"
						        @click="handleSubmit('formInline')"
						        ghost
						        long>登录</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	</div>
</template>

<script>
	import Api from '@/api';
	// @ is an alias to /src

	export default {
		name: 'home',
		data() {
			return {
				bgUrl: '',
				isLogin: false,
				formInline: {
					user: '',
					password: ''
				},
				ruleInline: {
					user: [
						{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						}
					],
					password: [
						{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: '密码长度不能小于6个字符',
							trigger: 'blur'
						}
					]
				}
			};
		},
		created() {
			this.init();
		},
		methods: {
			//初始化背景图片
			init() {
				this.axios
					.get('/bing/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
					.then(resp => {
						let data = resp.data;
						if (data) {
							this.bgUrl = 'https://cn.bing.com' + data.images[0].url;
						}
					});
			},
			//打开登录框
			toLogin() {
				this.isLogin = !this.isLogin;
			},
			handleSubmit(name) {
				this.$refs[name].validate(valid => {
					if (valid) {
						Api.postLogin({
							data: {
								phone: this.formInline.user,
								password: this.formInline.password
							}
						}).then(data => {
							this.$Message.success('登录成功!');
							localStorage.setItem(
								'MUSIC_USER_INFO',
								JSON.stringify(data.data)
							);
							// this.$store.state.userInfo = data.data;
							this.$router.push('/main');
						});
					} else {
						this.$Message.error('表单校验失败!');
					}
				});
			}
		}
	};
</script>

<style lang="less" scoped>
	.home {
		background-position: center center;
		background-size: cover;
		.center-box {
			color: #fff;
			.avatar {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				opacity: 0.9;
			}
			p {
				font-size: 60px;
				font-weight: 600;
			}
			a {
				display: block;
				margin: 20px 0;
				font-size: 20px;
				font-size: 21px;
				font-weight: 300;
				letter-spacing: 6px;
				color: #fff;
			}
			a:hover {
				text-decoration: underline;
			}
			.login-box {
				.ivu-input-wrapper {
					margin-bottom: 20px;
				}
			}
		}
	}
</style>
