
# financialNewsContent.vue 财经要闻

## 组件设计

看板-财经要闻，智能资讯-财经要闻 共用组件

:is-board 
  区分是否是看板
  看板特殊处理 - 默认选中第一条新闻

@selectOneNews
  新闻点击事件
  传给父组件处理跳转逻辑

---

created  
  获取重大事件关键词
  获取评分分段
    获取新闻

mounted
  绑定下拉加载更多事件
  开始新闻轮询
  开始更新条数轮询

activated
  组件激活时开始轮询

deactivated
  组件停用时暂停轮询

beforeDestroy
  销毁前解绑下拉事件

---



