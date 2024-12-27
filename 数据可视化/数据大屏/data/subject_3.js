$.get("../json/table_2.json").done(function(result){
    var myChart = echarts.init(document.getElementById('crq_2'));
    myChart.setOption({
        title: {
            text: '各年龄段逾期情况',
            top:25
        },
        legend: {
            data: result.RECORDS.map(x=>x.age_group)
        },
        tooltip: {},
        series: [{
            type: 'pie',
            radius: '55%',
            data: result.RECORDS.map(item => ({name:item.age_group,value:item.逾期}))
        }]
    });
});
