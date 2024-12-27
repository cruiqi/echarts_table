$.get("../json/table_3.json").done(function(result){
    var myChart = echarts.init(document.getElementById('crq_4'));

    myChart.setOption({
        title: {
            text: '长短期逾期记录'
        },
        legend: {
            data: ["逾期","没有逾期"]
        },
        xAxis:{
            data:result.RECORDS1.map(x=>(x.day_group))
        },
        yAxis:{},
        series: [{
            name:"逾期",
            type: 'line',
            data: result.RECORDS1.map(item => (item.num))
        },{
            name:"没有逾期",
            type: 'line',
            data: result.RECORDS2.map(item => (item.num))
        }]
    });
});
