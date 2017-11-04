function CanvasUtil(){
    // 从 canvas 提取图片 image  
    this.convertCanvasToPNG = function(canvas,quality) {  
        //新Image对象，可以理解为DOM  
        var image = new Image();  
        // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持  
        // 指定格式 PNG  
        image.src = canvas.toDataURL("image/png",quality);  
        return image;  
    } 
    this.convertCanvasToJPEG = function(canvas,quality) {  
        //新Image对象，可以理解为DOM  
        var image = new Image();  
        // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持  
        // 指定格式 PNG  
        image.src = canvas.toDataURL("image/jpeg",quality);  
        return image;  
    } 
    this.ImageToCanvas = function(image, canvas) {  
        var width = $(window).width();
        var height = $(window).height();
        var ctx=canvas.getContext("2d");
        canvas.width = width;
        canvas.height = 30;  
        ctx.drawImage(image, 0, 0,width,height);//0, 0参数画布上的坐标点，图片将会拷贝到这个地方  
        return canvas;  
    } 
}
