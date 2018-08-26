function changeNum(numId,flag){/*numId表示对应商品数量的文本框ID，flag表示是增加还是减少商品数量*/
    var tom=document.getElementById(numId);
    if(flag=='add'){
        tom.value++;
    }
    if(flag=='minus'){
        if (tom.value > 1) {
            tom.value=tom.value-1;
        }
    }
    getSubTotal(tom.parentNode.parentNode.id);
    productCount();
}