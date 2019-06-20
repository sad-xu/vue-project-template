
# git commit 规范文档

## 使用说明

```bash
# 全局安装commitizen
cnpm install -g commitizen
# 在项目目录下运行
commitizen init cz-conventional-changelog --save-dev --save-exact
# 提交
git cz 
```

1. 选择类型
    * feat：新功能
    * fix：fix bug
    * docs：文档
    * style： 代码格式调整 lint
    * refactor：重构
    * pref: 性能优化
    * test：增加测试
    * build: 构建代码或依赖变更、版本号变更
    * ci: CI配置文件变更
    * chore：其他(无关紧要的改动)
    * revert: 撤销之前的commit

2. 改动影响范围(skip)

3. 简短描述(必填)
    * 全英文
    * 不超过50个字符
    * 首字母小写
    * 结尾不加标点

4. 具体描述(skip)

5. 是否有breaking changes 默认回车No

6. 是否会影响到某些issue 默认回车No

## 自定义简化版

```bash
cnpm i cz-customizable
# 增加.cz-config.js
```

```json
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    }
  }
}
```

1. 选择类型

2. 简短描述

3. 确认


## 强制规范

`cnpm install --save-dev husky @commitlint/config-conventional @commitlint/cli`

package.json新增配置

```json
{
  "husky": {
    "hooks": {
      // "pre-commit": "lint-staged",
      "commit-msg": "commitlint -x @commitlint/config-conventional -E HUSKY_GIT_PARAMS"
    }
  }
}
```


## change log

只记录"feat", "fix", "pref", "breaking changes"

配合git tag, release使用

```bash
cnpm install -g conventional-changelog-cli

# 自上次发布以来的变动
conventional-changelog -p angular -i CHANGELOG.md -s

# 重新生成所有记录
conventional-changelog -p angular -i CHANGELOG.md -s -r 0
```
