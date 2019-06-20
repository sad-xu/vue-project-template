
# nvm windows安装文档

下载地址 https://github.com/coreybutler/nvm-windows/releases

类型 nvm-setup.zip


## 安装前

下载前卸载现有node

删除`C:\Program Files\nodejs` `C:\Users\<user>\AppData\Roaming\npm`文件夹

## 安装后

在`..\nvm\settings.txt`文件里添加以下代码

```
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

## 常用命令

nvm install 10.16.0
nvm use 10.16.0
nvm list



