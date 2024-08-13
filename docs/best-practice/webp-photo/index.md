# 判断浏览器是否支持webp格式方式
webp是一种新的图片格式，可提供出色的无损和有损压缩，创建更小和更丰富的图像

## 1. 新建图片加载法
通过前端js判断加载对浏览器进行判断是否支持WebP，先加载一张base64的WebP格式，根据宽高来判断是否支持。 如果支持则加载默认的WebP格式的图片，如果不支持则把img标签里的图片后缀换成常规的jpg或png即可。


``` js:line-numbers
function checkWebp(callback) { 
    var img = new Image(); 
    img.onload = function () { 
        var result = (img.width>0) && (img.height>0); 
        callback(result);
    };
    img.onerror = function () { 
        callback(false);
    };
    img.src = `data:image/webp;base64,
    UklGRiIAAABXRUJQVIA4IBYPKNKwAQCdASoBAAEADsD+JaQAASFRDFGJ`;
}
function showlmage(flag){ 
    var imgs = Array.from(document.querySelectorAll('img')) 
    imgs.forEach(function(i){       
        var src = i.attributes['data-src'].value
        if(flag){
            i.src = src
        }else{
            src = src.replace(/\.webp$/,'.jpg')
        }
    })
}
checkWebp(showlmage)

```

## 2. 利用H5的picture标签判断
``` js:line-numbers
<picture class="pic">
    <source type="image/webp" srcset="a.webp"> 
    <img class="img" src="a.jpg">
</picture>
```

## 3. 根据浏览器请求头 accept 判断
如果浏览器支持webp图片，在向服务器发送请求时，会在请求头Accept中带上image/webp，然后服务器根据是否含有这个头信息来决定返回webp或其它格式图片。很多云服务器和CDN带有这种WebP自适应功能。