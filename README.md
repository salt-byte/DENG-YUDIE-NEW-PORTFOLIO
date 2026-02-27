# 个人作品集网站

这是一个展示个人视频和照片作品的响应式网站模板。网站采用HTML、CSS和JavaScript构建，无需后端服务器即可运行。

## 功能特点

- 响应式设计，适配各种设备屏幕
- 视频作品展示区，支持点击查看详情
- 照片作品展示区，支持点击查看大图
- 个人简介部分
- 联系表单
- 现代化UI设计

## 使用说明

### 基本设置

1. 替换图片：
   - 将`images`文件夹中的占位图片替换为您自己的图片
   - 英雄区背景图：`images/hero-bg.jpg`
   - 个人头像：`images/profile.jpg`
   - 视频缩略图：`images/videos/video-thumb-*.jpg`
   - 照片作品：`images/photos/photo-*.jpg`

2. 修改个人信息：
   - 在`index.html`文件中修改名字、简介、技能等个人信息
   - 更新联系方式和社交媒体链接

3. 自定义作品内容：
   - 在`js/data.js`文件中修改视频和照片的数据
   - 可以添加、删除或修改作品项目

### 视频设置

在`js/data.js`文件中，每个视频项目包含以下属性：

```javascript
{
    id: 唯一标识符,
    title: '视频标题',
    thumbnail: '缩略图路径',
    videoUrl: '视频URL', // YouTube嵌入链接或其他视频平台的嵌入链接
    description: '视频描述',
    date: '发布日期',
    duration: '视频时长',
    views: '观看次数'
}
```

### 照片设置

在`js/data.js`文件中，每个照片项目包含以下属性：

```javascript
{
    id: 唯一标识符,
    title: '照片标题',
    image: '照片路径',
    description: '照片描述',
    date: '拍摄日期'
}
```

## 本地运行

由于网站是纯前端项目，您可以直接在浏览器中打开`index.html`文件查看效果。但为了更好的体验，建议使用本地服务器运行：

1. 使用Python的简易HTTP服务器（如果已安装Python）：
   ```
   # Python 3
   python -m http.server
   
   # Python 2
   python -m SimpleHTTPServer
   ```

2. 使用Node.js的http-server（如果已安装Node.js）：
   ```
   # 全局安装http-server
   npm install -g http-server
   
   # 运行服务器
   http-server
   ```

3. 使用Visual Studio Code的Live Server插件

## 自定义样式

网站的样式定义在`css/style.css`文件中。您可以根据个人喜好修改颜色、字体、间距等样式。主要的颜色变量包括：

- 主题渐变色：`linear-gradient(to right, #6a11cb, #2575fc)`
- 背景色：`#f8f8f8`
- 文本颜色：`#333`（标题）、`#666`（正文）

## 浏览器兼容性

网站兼容所有现代浏览器，包括：

- Chrome（推荐）
- Firefox
- Safari
- Edge

## 许可

此模板可自由用于个人和商业项目。