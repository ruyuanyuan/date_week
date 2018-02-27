var week={
    init:function(){
        this.changeweek()
    },
    setdateToMonday:function(n){
        var thisdate=new Date()
        var week = thisdate.getDay()-1;
        thisdate.setDate(thisdate.getDate()+week*-1)
        thisdate.setDate(thisdate.getDate()+n);
        return thisdate;    
    },
    getweekdate:function(n){
        var start_date=this.setdateToMonday(n);
        var end_date=this.setdateToMonday(-1);
        return this.formatDate(start_date)+'-'+this.formatDate(end_date)
    },
    formatDate:function(date){
        var year = date.getFullYear();
        var month = (date.getMonth()+1)>=10?(date.getMonth()+1):'0'+(date.getMonth()+1);
        var day = date.getDate()>=10?date.getDate():'0'+date.getDate(); 
        return year+'-'+month+'-'+day;
    },
    changeweek:function(){
        var _this=this;
        $('.changeweek').on('click',function(){
            var goold=parseInt( $(this).attr('week-data'));
            var datetime=_this.getweekdate(goold)
            $('.week-show').html(datetime)
        })
    }

}
window.onload=function(){
    week.init()
}