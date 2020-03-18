const generateInfoModule = require('./2_task_goods_moving.ts');

const {
  ProductProducer, ProductConsumer, Agent, generateInfo,
} = generateInfoModule;
const data = generateInfo(10, new ProductProducer('Alex'), new Agent('Micle'), new ProductConsumer('Nikolay'));
const arr = [];
// eslint-disable-next-line array-callback-return
data.map((m) => {
  arr.push(Object.values(m));
});
const makeSumArray = (index) => {
  const recArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    const arrs = arr[i];
    recArr.push(arrs[index]);
  }
  return recArr;
};
const calculateRecentSumm = (index) => {
  const recArr = makeSumArray(index);
  const recentArr = [];
  let sumRec = 0;
  for (let i = 0; i < recArr.length; i += 1) {
    switch (i) {
      case 3:
      case 6:
      case 9:
        sumRec = recArr[i];
        recentArr.push(sumRec);
        break;
      default:
        sumRec += recArr[i];
        recentArr.push(sumRec);
        break;
    }
  }
  return recentArr;
};

const recentGoodsCalc = () => calculateRecentSumm(1);
const recentAgentShippingCalc = () => calculateRecentSumm(3);
const calculateKPD = () => {
  const procentArr = [];
  const recArr = makeSumArray(3);
  const consumerNeedGoodArray = makeSumArray(2);
  for (let i = 0; i < recArr.length; i += 1) {
    const minus = consumerNeedGoodArray[i] - recArr[i];
    if (minus < 0) {
      procentArr.push(100);
    } else {
      const proc = Math.floor((recArr[i] * 100) / consumerNeedGoodArray[i]);
      procentArr.push(proc);
    }
  }
  return procentArr;
};
const recentGoodsCalcArray = recentGoodsCalc();
const recentAgentShippingCalcArray = recentAgentShippingCalc();
const kpd = calculateKPD();
for (let i = 0; i < arr.length; i += 1) {
  const arrInner = arr[i];
  arrInner.push(recentGoodsCalcArray[i]);
  arrInner.push(recentAgentShippingCalcArray[i]);
  arrInner.push(kpd[i]);
}
// eslint-disable-next-line import/prefer-default-export
export const returnData = () => arr;
