$.get("../json/table_1.json").done(function(result){
    var myChart = echarts.init(document.getElementById('crq_3'));
    myChart.setOption({
        title: {
            text: '逾期情况汇总'
        },
        legend: {
            data: result.RECORDS.map(x=>x.pd)
        },
        tooltip: {},
        series: [{
            type: 'pie',
            label: {
                normal: {
                    formatter: '{b}',
                    show: true,
                    position: "inner"
                }
            },
            radius: ['45%', '75%'],
            data: result.RECORDS.map(item => ({name:item.pd,value:item.count}))
        }]
    });
});
