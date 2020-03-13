const calculateStatistics = require('./2_task_goods_moving.ts');
const data = calculateStatistics.calculateStatistics(10);
// console.dir(data);
const arr = [];
data.map((m) => {
    arr.push(Object.values(m));
});
// arr.map((el) => {
//     console.log(el)
    
// })

const calculateRecentSumm = (index) => {
    const recentArr = [];
    const recArr = [];
    for(let i = 0; i < arr.length; i++) {
        let arrs = arr[i]
        recArr.push(arrs[index])
    }
    for (let i = 0 ; i < recArr.length; i++) {
        if( i === 0) {
            recentArr.push(recArr[i])
        }
        else if( i === 2) {
            sum = recArr[i - 2] + recArr[i - 1] + recArr[i];
            recentArr.push(sum)
        }
        else if(!(i % 2)) {
            sum = recArr[i - 1] + recArr[i] + recArr[i + 1];
            recentArr.push(sum)
        }
        if(i === 1) {
            sum = recArr[i - 1] + recArr[i];
            recentArr.push(sum) 
        }
        else if(i % 2) {
            sum = recArr[i] + recArr[i + 1];
            recentArr.push(sum)
        }
        if ((i % 3) && i !== 1) {
            recentArr.push(recArr[i + 1])
        }
    }
    return recentArr;
}
const recentGoodsCalc = () => {
    return calculateRecentSumm(1);
}
const recentAgentShippingCalc = () => {
    return calculateRecentSumm(3);
}
const recentGoodsCalcArray =  recentGoodsCalc();
const recentAgentShippingCalcArray = recentAgentShippingCalc();
for (let i = 0 ; i < arr.length ; i++) {
    const arrInner = arr[i];
    arrInner.push(recentGoodsCalcArray[i]);
    arrInner.push(recentAgentShippingCalcArray[i]);
}
console.log(arr)
$(document).ready(function () {
    $('#main_table').DataTable({
        data: arr,
        columns: [
            {title: 'DayNumber'},
            {title: 'ProductProducerGoodsCount'},
            {title: 'ProductConsumerNeedGoodsCount'},
            {title: 'AgentShippingGoodsCount'},
            {title: 'Last 3 days goods count'},
            {title: 'Last 3 days agent shipping count'},


        ]
    })
});
