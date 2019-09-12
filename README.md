git init

git add .
git commit -m "日志"

git用户密码更改：
git config user.name/git config --global user.name
git config user.email/git config --global user.email


如果远程仓库信息有误，则删除本地仓库配置，并且设置相关地址

git remote rm origin
git remote add origin XXXX


上传：
git push -u origin master
