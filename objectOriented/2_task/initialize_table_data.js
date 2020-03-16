const calculateStatistics = require('./2_task_goods_moving.ts');
const data = calculateStatistics.calculateStatistics(10);
const arr = [];
data.map((m) => {
    arr.push(Object.values(m));
});
const makeSumArray = (index) => {
    const recArr = [];
    for(let i = 0; i < arr.length; i++) {
        let arrs = arr[i]
        recArr.push(arrs[index])
    }
    return recArr;
}
const calculateRecentSumm = (index) => {
    const recArr = makeSumArray(index);
    const recentArr = [];
    for (let i = 0 ; i < recArr.length; i++) {
        let sum = 0;

        if (i === 6) {
            sum = recArr[i];
            recentArr.push(sum);
            console.log('This is 7 el =======', i, recArr[i])
            continue;
        }
        if (i === 7) {
            sum = recArr[i - 1] + recArr[i];
            recentArr.push(sum)
            console.log('This is 8 el =======', i, recArr[i])
            continue;
        }
        if (i === 8) {
            sum = recArr[i - 2] + recArr[i - 1] + recArr[i];
            console.log('This is 9 el =======', i, recArr[i])
            recentArr.push(sum)
            continue;
        }
        if (i === 9) {
            recentArr.push(recArr[i])
            console.log('This is 10 el =======', i, recArr[i])
            continue;
        }
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
        if(i === 1 || i === 7) {
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
const calculateKPD = () => {
    const procentArr = [];
    const recArr = makeSumArray(3);
    const consumerNeedGoodArray = makeSumArray(2);
    for (let i =0; i< recArr.length; i++) {
        const minus = consumerNeedGoodArray[i] - recArr[i];
        if(minus < 0) {
            procentArr.push(100);
        }
        else {
            const proc = Math.floor((recArr[i] * 100) / consumerNeedGoodArray[i]);
            procentArr.push(proc);
        }
    }
    return procentArr;
}
const recentGoodsCalcArray =  recentGoodsCalc();
const recentAgentShippingCalcArray = recentAgentShippingCalc();
const kpd = calculateKPD();
for (let i = 0 ; i < arr.length ; i++) {
    const arrInner = arr[i];
    arrInner.push(recentGoodsCalcArray[i]);
    arrInner.push(recentAgentShippingCalcArray[i]);
    arrInner.push(kpd[i]);
}
export const returnData = () => {
    return arr;
}