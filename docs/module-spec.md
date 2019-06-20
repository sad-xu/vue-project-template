
# 前端模块管理规范

```sh


── views                   
  ├── datamining                              # 数据挖掘
  │    ├── components                         # 模块下通用组件
  │    │    ├── buy-sell-time-window.vue      # 买卖时间窗
  │    │    ├── event-box.vue                 # 子事件列表
  │    │    ├── gain-comparison-chart.vue     # 涨幅对比图
  │    │    ├── regular-comparsion-chart.vue  # 规律对比图
  │    │    ├── set-analysis-target.vue       # 设置分析标的 
  │    │    └── ...
  │    │
  │    │── event                              # 事件分析
  │    │    ├── event-analysis.vue            # 事件分析页面
  │    │    ├── event-analysis-result.vue     # 事件分析结果组件
  │    │    └── event-recommend-analysis.vue  # 事件分析推荐页面
  │    └── ...
  │
  ├── information                             # 智能资讯
  │    ├── financial-news                     # 财经要闻
  │    │    ├── fincnaicl-news.vue
  │    │    └── financial-news-content.vue
  │    ├── hotSector                          # 热点板块
  │    │    └── hotSector.vue  
  │    └── ...
  │   
  ├── diagnosis                               # 智能诊断
  │    ├── market-diagnosis                   # 大盘诊断
  │    │    ├── components
  │    │    │   ├── earthmap.vue
  │    │    │   ├── hedging.vue
  │    │    │   ├── index-market.vue
  │    │    └── financial-news-content.vue
  │    ├── sector-diagnosis                  # 板块诊断
  │    │    └── sector-diagnosis.vue
  │    ├── stock-diagnosis                   # 个股诊断
  │    │    └── stock-diagnosis.vue  
  │    └── ...
  ├── sector-details                         # 股票详情
  │    ├── components
  │    ├── 
  │    └── sector-details.vue                # 大盘诊断  
  ├── ...
```

## 文件

* 文件/文件夹统一驼峰命名

* 一个页面一个文件夹

## URL

* url路径应和文件结构一致

* 全部小写

* 连接符号统一用`-`

* 不能出现中文

* 层级不超过三层

* 参数尽量少,且需要encodeURIComponent编码