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
    let sumRec = 0;
    for (let i = 0 ; i < recArr.length; i++) {
        switch(i) {
            case 3 :
            case 6 :
            case 9 :
                sumRec = recArr[i];
                recentArr.push(sumRec);
                break;
            default : 
            sumRec += recArr[i];
            recentArr.push(sumRec);
            break;
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