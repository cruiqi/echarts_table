$.get("../json/table_5.json").done(function(result){
    var myChart1 = echarts.init(document.getElementById('crq_8'));
    var myChart2 = echarts.init(document.getElementById('crq_7'));
    var option1 ={
        title: {
            text: '有无家属人数分布'
        },
        tooltip:{},
        legend: {
            data: ["有家属","无家属"]
        },
        xAxis:{
            data:result.RECORDS1.map(x=>(x.jiaShu))
        },
        yAxis:{},
        series: [{
            name:"有家属",
            type: 'bar',
            data: result.RECORDS1.map(item => (item.num))
        },{
            name:"无家属",
            type: 'bar',
            data: result.RECORDS2.map(item => (item.num))
        }]
    };
    myChart1.setOption(option1);
    var option2 ={
        title: {
            text: '有无家属人数分布'
        },
        tooltip:{},
        legend: {
            data: ["有家属","无家属"]
        },
        xAxis:{
            data:result.RECORDS1.map(x=>(x.jiaShu))
        },
        yAxis:{},
        series: [{
            name:"有家属",
            type: 'line',
            data: result.RECORDS1.map(item => (item.num))
        },{
            name:"无家属",
            type: 'line',
            data: result.RECORDS2.map(item => (item.num))
        }]
    }
    myChart2.setOption(option2);

    myChart1.group='group1';
    myChart2.group='group1';
    echarts.connect('group1')
});