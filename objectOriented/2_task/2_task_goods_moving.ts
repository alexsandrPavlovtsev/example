/* eslint no-use-before-define: 0 */ // --> OFF
/* eslint no-unused-vars: 0 */ // --> OFF
/* eslint max-len: 0 */ // --> OFF

// eslint-disable-next-line max-classes-per-file
const randomNumberGenerate = function (min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
export class ProductConsumer {
  name: string;

  consumerNeeds: number;

  productsHave: number;

  constructor(consumerName: string) {
    this.name = consumerName;
    this.productsHave = 0;
    this.consumerNeeds = 0;
  }

  set consumerName(consumerName: string) {
    this.consumerName = consumerName;
  }

  get consumerName(): string {
    return this.consumerName;
  }

  set consumerNeedsProperty(consumerNeeds: number) {
    this.consumerNeeds = consumerNeeds;
  }

  get consumerNeedsProperty(): number {
    return this.consumerNeeds;
  }

  consumerNeed(): number {
    this.consumerNeeds = randomNumberGenerate(70, 120);
    return this.consumerNeedsProperty;
  }
}

export class Agent {
  name: string;

  totalShippingProducts: number;

  id: number;

  productProducer: ProductProducer;

  consumer: ProductConsumer;

  canDeliver: number;

  goods: number;

  constructor(agentName: string, productProd: ProductProducer, productCons: ProductConsumer) {
    this.name = agentName;
    this.id = Math.floor(Math.random() * 1200);
    this.totalShippingProducts = 0;
    this.canDeliver = 0;
    this.goods = 0;
    this.productProducer = productProd;
    this.consumer = productCons;
  }

  set agentName(agentName: string) {
    this.agentName = agentName;
  }

  get agentName(): string {
    return this.agentName;
  }

  set goodsItems(goods: number) {
    this.goods = goods;
  }

  get goodsItems(): number {
    return this.goods;
  }

  generateAgentCanDeliveryParams():void{
    this.canDeliver = randomNumberGenerate(0, 100);
  }

  getGoodsFromProducer(): void {
    this.goods = this.productProducer.productCount;
    this.productProducer.productCount = 0;
  }

  sendGoodToTheCargo(productOnCargo: number = 0):void {
    console.log('CARGO SENDING !!!!!', productOnCargo);
    this.productProducer.productOnCargo = productOnCargo;
  }

  sendGoodsToTheConsumer(products: number): void {
    console.log(products, '1010101010101010101010101');

    console.log(products, 'Sending products to consumer!!!');
    this.consumer.productsHave = products;
  }

  checkCargo(): boolean {
    return this.productProducer.productOnCargo > 0;
  }

  calculateShippingGoods(): void {
    const goodsOnCargo = this.productProducer.productOnCargo;
    let goodsThatSendToConsumer = 0;
    const overallShippingProducts = this.goods + goodsOnCargo;
    const consumerNeedGoods = this.consumer.consumerNeeds;
    const agentCanDeliver = this.canDeliver;
    let goodsThatCanBeSendedOnCargo = 0;
    if (overallShippingProducts <= agentCanDeliver) {
      goodsThatSendToConsumer = overallShippingProducts;
    } else {
      goodsThatSendToConsumer = agentCanDeliver;
      goodsThatCanBeSendedOnCargo = overallShippingProducts - agentCanDeliver;
      console.log('GOTO CARGO -1=1-1-1=1-1-1=1-1-1=', goodsThatCanBeSendedOnCargo);
    }
    if (consumerNeedGoods >= goodsThatSendToConsumer) {
      console.log('consumerNeedGoods >= goodsThatSendToConsumer', consumerNeedGoods, 'consumerneed', goodsThatSendToConsumer, 'goodsThatSendToCustomer');
      console.log('this is Calculate Shipping');
      console.log('goods thatSendToConsumer', goodsThatSendToConsumer);
      this.sendGoodsToTheConsumer(goodsThatSendToConsumer);
      this.goods = 0;
      this.sendGoodToTheCargo(goodsThatCanBeSendedOnCargo);
    } else {
      goodsThatSendToConsumer = consumerNeedGoods;
      const overallGoToCargo = ((goodsThatSendToConsumer
        + goodsThatCanBeSendedOnCargo) - consumerNeedGoods);
      this.sendGoodToTheCargo(overallGoToCargo);
      console.log('goods that SENDs to the cargo!!!!!=1=1=1=1=1dd=w=w=w', overallGoToCargo);

      this.goods = 0;
      this.sendGoodsToTheConsumer(goodsThatSendToConsumer);
    }
  }
}
export class ProductProducer {
    name: string;

    productCount: number;

    productOnCargo: number;

    constructor(producerName: string) {
      this.name = producerName;
      this.productCount = 0;
      this.productOnCargo = 0;
    }

    set producerName(producerName: string) {
      this.name = producerName;
    }

    get producerName(): string {
      return this.name;
    }

    set productCounts(productCount: number) {
      this.productCount = productCount;
    }

    get productCounts(): number {
      return this.productCount;
    }

    randomGenerateProducts(): number {
      this.productCount = randomNumberGenerate(50, 150);
      return this.productCounts;
    }

    checkIfThereIsGoodsOnCargo(): boolean {
      return !!this.productOnCargo;
    }
}
class Product {
    name: string;

    constructor(productName: string) {
      this.name = productName;
    }

    set productName(productName: string) {
      this.name = productName;
    }

    get productName(): string {
      return this.name;
    }
}

let agent;
let consumer;
let productProducer;
const statisticsArray = [];
let dayCount = 0;
// eslint-disable-next-line max-len
const startSimulation = (productProducerParam: ProductProducer, agentParam: Agent, consumerParams: ProductConsumer) => {
  const statArr = [];
  dayCount += 1;
  statArr.push(dayCount);
  productProducerParam.randomGenerateProducts();
  consumerParams.consumerNeed();
  agentParam.generateAgentCanDeliveryParams();
  console.log('AFTER GENERATING =======================');
  console.log(productProducerParam.productCount, 'Goods from product producer');
  console.log(consumerParams.consumerNeeds, 'Goods that consumer need');
  console.log(agentParam.canDeliver, 'Goods that agent can deliver');
  statArr.push(productProducerParam.productCount);
  agentParam.getGoodsFromProducer();
  console.log('GOOODS GET =========================');
  console.log(agentParam.goods, 'Goods from agent');
  console.log(productProducerParam.productCount, 'Goods from product producer');
  console.log(consumerParams.productsHave, 'Consumer products have');
  console.log(productProducerParam.productOnCargo, 'Product producer goods on cargo');

  statArr.push(consumerParams.consumerNeeds);
  agentParam.calculateShippingGoods();
  console.log('GOOODS SHIPPED =========================');

  console.log(agentParam.goods, 'Goods from agent2');
  console.log(productProducerParam.productCount, 'Goods from product producer2');
  console.log(consumerParams.productsHave, 'Consumer products have2');
  console.log(productProducerParam.productOnCargo, 'Product producer goods on cargo2');
  statArr.push(consumerParams.productsHave);
  console.log(statArr, 'stat ARRAY');
  statisticsArray.push(statArr);
};

export const generateInfo = (days: number, productProducerParam: ProductProducer, agentName: string, consumerParams: ProductConsumer): number[] => {
  consumer = consumerParams;
  productProducer = productProducerParam;
  agent = new Agent(agentName, productProducerParam, consumerParams);
  for (let i = 0; i < days; i += 1) {
    startSimulation(productProducerParam, agent, consumerParams);
  }
  return statisticsArray;
};
// const a = generateInfo(10, new ProductProducer('Alibaba'), 'Nikolay', new ProductConsumer('Misha'));
// console.log(a);
