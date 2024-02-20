<template>
	<view style="padding-bottom: 112upx;">
		<uni-forms :modelValue="formData" ref="form" :rules="rules" labelAlign="left" labelWidth="150upx"
			style="padding: 24upx 48upx;">
			<view class="title">球杆型号</view>
			<uni-forms-item label="品牌款式" name="name">
				<uni-data-select :disabled="disabled" v-model="formData.age" :localdata="range" @change="change" />
			</uni-forms-item>
			<uni-forms-item label="球杆编号" name="age">
				<uni-easyinput :disabled="disabled" type="text" v-model="formData.age" placeholder="请输入" />
			</uni-forms-item>
			<uni-forms-item label="统一售价" name="age">
				<uni-easyinput :disabled="disabled" type="text" v-model="formData.age" placeholder="请输入">
					<view slot="left" class="ml12">CNY</view>
				</uni-easyinput>
			</uni-forms-item>
			<view class="title">出厂参数<uni-icons type="chatboxes" size="30" @click="setReadonly" class="readonly"></uni-icons></view>
			<uni-forms-item label="杆型" name="name">
				<uni-data-select :disabled="disabled" v-model="formData.age" :localdata="range" @change="change" />
			</uni-forms-item>
			<uni-forms-item label="杆头直径" name="age">
				<uni-easyinput :disabled="disabled" type="text" v-model="formData.age" placeholder="请输入">
					<view slot="right" class="mr12">mm</view>
				</uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="前枝材质" name="age">
				<uni-data-select :disabled="disabled" v-model="formData.age" :localdata="range" @change="change" />
			</uni-forms-item>
			<uni-forms-item label="后把直径" name="age">
				<uni-easyinput :disabled="disabled" type="text" v-model="formData.age" placeholder="请输入">
					<view slot="right" class="mr12">mm</view>
				</uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="后把材质" name="age">
				<uni-data-select :disabled="disabled" v-model="formData.age" :localdata="range" @change="change" />
			</uni-forms-item>
			<uni-forms-item label="长度" name="age">
				<uni-easyinput :disabled="disabled" type="text" v-model="formData.age" placeholder="请输入">
					<view slot="right" class="mr12">cm</view>
				</uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="重量" name="age">
				<uni-easyinput :disabled="disabled" type="text" v-model="formData.age" placeholder="请输入">
					<view slot="right" class="mr12">g</view>
				</uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="重心" name="age">
				<uni-easyinput :disabled="disabled" type="text" v-model="formData.age" placeholder="请输入">
					<view slot="right" class="mr12">cm</view>
				</uni-easyinput>
			</uni-forms-item>
		</uni-forms>
		<view class="footer">
			<button :disabled="disabled" @click="writeData" style="background-color: #fff;">写入</button>
		</view>
	</view>
</template>

<script>
	import nfc from '../../utils/nfc.js'
	import debounce from 'lodash.debounce'
	export default {
		data() {
			return {
				disabled: false,
				formData: {
					name: '',
					age: '',
				},
				range: [{
						value: 0,
						text: "篮球"
					},
					{
						value: 1,
						text: "足球"
					},
					{
						value: 2,
						text: "游泳"
					},
				],
				// 校验规则
				rules: {
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					}
				},
			}
		},
		onLoad: function() {
			nfc.listenNFCStatus();
		},
		methods: {
			change(e) {
				console.log("e:", e);
			},
			writeData: debounce(async function() {
				try {
					const res = await this.$refs.form.validate()
					console.log('success', res);
					uni.showModal({
						title: "温馨提示",
						content: "此操作将抹除芯片中的数据，且不可逆",
						success: async res => {
							if (res.confirm) {
								this.disabled = true
								const res = await new Promise(resolve => uni.request({
								    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
								    data: {
								        text: ''
								    },
								    header: {
								        'custom-header': 'hello' //自定义请求头信息
								    },
								    success: resolve
								}))
								nfc.writeData(
									'https://m.toutiao.com/article/7335686572622348812/?from_page_type=feed&upstream_biz=toutiao_m&wid=1708087515036&W2atIF=1',
									(function() {
										this.disabled = false
									}).bind(this));
								setTimeout(() => {
									this.disabled = false
								}, 10000)
							}
						}
					})
				} catch (e) {
					console.log('err', e);
				}
			}, 1000, {
				leading: true,
				trailing: false
			}),
			setReadonly () {
				uni.showModal({
					title: '设置NFC只读',
					content: '该操作为单向操作，不可逆，设置后将不可修改任何数据，请确保数据设置正确后再操作',
					showCancel: true,
					success: res => {
						res.confirm && nfc.readonly()
					}
				});
			}
		}
	}
</script>

<style>
	.title {
		font-size: $uni-font-size-title;
		font-weight: bold;
		margin: 24upx 0;
		position: relative;
	}

	.mr12 {
		margin-right: 12upx;
	}

	.ml12 {
		margin-left: 12upx;
	}

	.footer {
		position: fixed;
		height: 140upx;
		background-color: #fff;
		bottom: 0;
		width: 100%;
		padding: 24upx 48upx;
		box-sizing: border-box;
	}
	.readonly {
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>