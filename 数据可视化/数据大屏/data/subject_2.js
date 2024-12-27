$.get("../json/table_2.json").done(function(data){
    var name=[];
    var person_num=[];
    var Overdue_num=[];
    var Not_Overdue_num=[];
    
    data.RECORDS.forEach(x=>name.push(x.age_group+"岁"))
    data.RECORDS.forEach(x=>person_num.push(x.汇总))
    data.RECORDS.forEach(x=>Overdue_num.push(x.逾期))
    data.RECORDS.forEach(x=>Not_Overdue_num.push(x.没有逾期))

    var myChart=echarts.init(document.getElementById('crq_1'))
    myChart.setOption({
        title:{
        text:'各年龄段逾期情况',
        top:25
        },
        legend:{
            data:['未逾期人数','总人数','逾期人数']
        },
        tooltip:{},
        xAxis:{
        data:name
        },
        yAxis:{},
        series:[
            {
                name:'总人数',
                type:'bar',
                data:person_num
            },
            {
                name:'未逾期人数',
                type:'bar',
                data:Not_Overdue_num
            },
            {
                name:'逾期人数',
                type:'bar',
                data:Overdue_num
            }
        ]
    })
})
