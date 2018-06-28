> ## HTML5
> 
> 一、   新增属性
> 
> >    1、禁止页面缓存
> > >     <meta http-equiv="pragma" content="no-cache">
> >    2、定义小图标  
> > > 
```
<link rel="icon" href="demo.gif" type="image/gif" sizes="16x16">
```


> >    3、打开新页面
```
<base href="http://localhost/" target="_blank">
```


> >    4、页面加载推迟直至页面加载完成再执行该文本
```
<script defer src="http://....">
```

> >    5、页面加载异步《当该文本执行时，其他程序继续执行》
```
<script async src="http://....">
```

> >    6、设备优化
```
<a media="handheld" href="#">手持设备优化</a>
<a media="tv" href="#">电视优化</a>
// 链接用的是中文语言，外部链接
<a href="http://..." hreflang="zh" ref="external">MIUI</a>
```

> >   7、列表排序属性
```
//从50开始倒序排列
<ol start="50" reversed>
    <li>a</li>
    <li>v</li>
    <li>c</li>
</ol>
```

> >   2、iframe新增属性
```
//srcdoc定义-iframe-框架显示内容 
//sandbox 安全限制 禁止表单提交

<iframe seamless srcdoc="<h1>doc</h1>" sandbox src="http:/..."></iframe>
``` 


>  二、全局属性
> >  1、自定义属性 comment
> 
> >  2、隐藏属性 hidden
> 
> >  3、语法纠错 spellcheck='true'
>
> >  4、tab顺序 tabindex='1'
>
> >  5、实时修改 
```
<p contenteditable="true">请您留言</p>
```
>
> >  6、全局文本可修改
```
<script>
    window.document.designMode = 'on'
</script>
```
