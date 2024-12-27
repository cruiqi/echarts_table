// var option = {
//     // backgroundColor: '#eee',
//     title: {
//         text: '某大学三大学院的专业分布'
//     },
//     tooltip: {
//         trigger: 'item',
//         formatter: '{a} <br/>{b} : {c} ({d}%)'
//     },
//     legend: {
//         data: ['计算机学院', '大数据学院', '财经学院']
//     },
//     calculable: true,
//     series: [{
//         name: '专业名称',
//         type: 'pie',
//         selectedMode: 'single',
//         radius: ['10%', '30%'],
//         clockWise: true,
//         label: {
//             position: 'inner'
//         },
//         lavelLine: {
//             show: false
//         },
//         data: [{
//             value: 1200,
//             name: '计算机学院'
//         }, {
//             value: 900,
//             name: '大数据学院'
//         }, {
//             value: 600,
//             name: '财经学院',
//             selected: true
//         }]
//     }, {
//         name: '专业名称',
//         type: 'pie',
//         selectedMode: 'single',
//         radius: ['40%', '55%'],
//         data: [{
//             value: 800,
//             name: '1-软件技术'
//         }, {
//             value: 400,
//             name: '1-移动应用开发'
//         }, {
//             value: 500,
//             name: '2-大数据技术与应用'
//         }, {
//             value: 200,
//             name: '2-移动互联应用与技术'
//         }, {
//             value: 200,
//             name: '2-云计算技术与应用'
//         }, {
//             value: 400,
//             name: '3-投资与理财'
//         }, {
//             value: 200,
//             name: '3-财务管理'
//         }]
//     }]
// };


$.get("../json/table_4.json").done(function(result){
    var myChart = echarts.init(document.getElementById('crq_6'));
    console.log(result.RECORDS1.map(item => ({name:item.SeriousDlqin2yrs,value:item.num})))
    myChart.setOption({
        title: {
            text: '房产抵押人数分布'
        },
        legend: {
            data: ["无房产抵押","房产抵押"]
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            name:"无房产抵押",
            type: 'pie',
            label: {
                normal: {
                    formatter: '{b}',
                    show: true,
                    position: "inner"
                }
            },
            radius: ['15%', '35%'],
            data: result.RECORDS1.map(item => ({name:item.SeriousDlqin2yrs,value:item.num}))
        },{
            name:"房产抵押",
            type: 'pie',
            label: {
                normal: {
                    formatter: '{b}',
                    show: true,
                    position: "inner"
                }
            },
            radius: ['55%', '80%'],
            data: result.RECORDS2.map(item => ({name:item.SeriousDlqin2yrs,value:item.num}))
        }]
    });
});