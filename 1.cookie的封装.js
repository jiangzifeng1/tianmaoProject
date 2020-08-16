let cookie={
    set:function(key,value,time){
        var str="";
        // 时间是以秒为单位
        if(time){
            var date=new Date();
            date.setTime(date.getTime()-8*60*60*1000+time*1000);
            str=`;expires=${date}`;
        }
        document.cookie=`${key}=${encodeURIComponent(value)};path=/${str}`;
    },
    del:function(key){
        cookie.set(key,"",-100);
    },
    get:function(key){
        let arr=document.cookie.split("; ");
        for(let i=0;i<arr.length;i++){
            if(key===arr[i].split("=")[0]){
                return decodeURIComponent(arr[i].split("=")[1]);
            }
        }
        return "";
    }
}