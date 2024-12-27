$.get("../json/table_4.json").done(function(result){
    var myChart = echarts.init(document.getElementById('crq_5'));

    myChart.setOption({
        title: {
            text: '房产抵押人数分布'
        },
        legend: {
            data: ["房产抵押","无房产抵押"]
        },
        xAxis:{
            data:result.RECORDS1.map(x=>(x.SeriousDlqin2yrs))
        },
        yAxis:{},
        series: [{
            name:"房产抵押",
            type: 'bar',
            data: result.RECORDS1.map(item => (item.num))
        },{
            name:"无房产抵押",
            type: 'bar',
            data: result.RECORDS2.map(item => (item.num))
        }]
    });
});