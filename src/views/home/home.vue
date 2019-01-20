<template>
	<div class="wrapper">
    <img src="@/assets/logo.png">
		{{msg}}
		<span class="refresh-button" @click="updateListData">refresh</span>
		<p>chosed: {{chosed}}</p>
		<list :listData="listData" @listItemClick="listItemClick"></list>
		<home-detail :chosed="chosed"></home-detail>
	</div>
</template>

<script>
	import * as request from '@/api/home.js'
	import List from '@/components/List'
	import homeDetail from './home-detail'

	export default {
		name: 'home',
		provide: {
			request
		},
		components: {
			List,
			homeDetail
		},
		data() {
			return {
				msg: 'home',
				listData: [],
				chosed: ''
			}
		},
		mounted() {
			console.log('mounted')
			this.getListData()
		},
		methods: {
			getListData() {
				return request.getBoardData().then(res => {
					this.listData = res.data
				}).catch(err => {
					console.log('err: ', err)
				})
			}, 
			// 点击
			listItemClick(index) {
				this.chosed = this.listData[index]
			},
			// 更新
			updateListData() {
				this.chosed = ''
				this.listData = this.listData.map(item => {
					return (Math.random() * 100).toFixed(0)
				})
			}
		}
	}
</script>

<style type="text/scss" lang="scss" scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		.refresh-button {
			background-color: #eee;
   	 	border-radius: 10px;
			padding: 10px;
			cursor: pointer;
		}
	}
</style>

