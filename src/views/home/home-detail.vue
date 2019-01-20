<template>
	<!-- 页面级组件 -->
	<div>
		{{detailData.name}}
		{{detailData.desc}}
	</div>
</template>

<script>
	

	export default {
		name: 'home-detail',
		inject: ['request'],
		props: {
			chosed: {
				type: String,
			}
		},
		data() {
			return {
				msg: 'home-detail',
				detailData: {},
			}
		},
		watch: {
			chosed(newV) {
				if (newV) {
					console.log(newV)
					this.request.getDetail(newV).then(res => {
						this.detailData = res.data
					})
				} else {
					this.detailData = {
						name: '',
						desc: ''
					}
				}
			}
		},
		methods: {

		}
	}
</script>