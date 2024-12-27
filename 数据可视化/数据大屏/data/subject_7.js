$.get("../json/table_7.json").done(function(result){
    var myChart = echarts.init(document.getElementById('crq_9'));

    myChart.setOption({
        title: {
            text: '月收入的人的逾期情况'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            orient: "vertical",
            top:'center',
            left:'1%',
            data: ['总人数','超过均值逾期', '超过均值未逾期', '未超过均值逾期', '未超过均值未逾期']
        },
        series: [{
            name: '贷款情况',
            type: 'funnel',
            right: '10%',
            width: '80%',
            min: 0,
            max: 100000,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: result.dataAbove
        }]
    });
});
