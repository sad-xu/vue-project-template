<template>
	<div class="list-wrapper">
		<p class="list-item" 
			v-for="(item, index) in listData" :key="index"
			@click="handleClickItem(index)">
			{{item}}
		</p>
		<p v-if="!listData.length">暂无数据</p>
	</div>
</template>

<script>
	export default {
		name: 'list',
		props: {
			listData: {
				type: Array,
				default: []
			}
		},
		methods: {
			handleClickItem(index) {
				this.$emit('listItemClick', index)
			}
		}
	}
</script>

<style type="text/scss" lang="scss" scoped>
	.list-wrapper {
		display: flex;
		flex-direction: column;
		width: 500px;
		padding: 20px;
		border: 1px solid #f00;
		.list-item {
			cursor: pointer;
			&:hover {
				background-color: #eee;
			}
		}
	}
</style>

