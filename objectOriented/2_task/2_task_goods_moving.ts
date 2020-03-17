// eslint-disable-next-line max-classes-per-file
const randomNumberGenerate = function (min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
class ProductProducer {
    name: string;

    productCount: number;

    constructor(producerName: string) {
      this.name = producerName;
      this.productCount = 0;
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
class GenerateInfo {
    dayNumber: number;

    productProducerGoodsCount: number;

    productConsumerNeedGoodsCount: number;

    agentShippingGoodsCount: number;

    constructor(dayNumber: number, productProducerGoodsCount: number,
      productConsumerNeedGoodsCount: number, agentShippingGoodsCount: number) {
      this.dayNumber = dayNumber;
      this.productProducerGoodsCount = productProducerGoodsCount;
      this.productConsumerNeedGoodsCount = productConsumerNeedGoodsCount;
      this.agentShippingGoodsCount = agentShippingGoodsCount;
    }

    get dayNumberProperty(): number {
      return this.dayNumber;
    }

    get productProducerGoodsCountProperty(): number {
      return this.productProducerGoodsCount;
    }

    get productConsumerNeedGoodsCountProperty(): number {
      return this.productConsumerNeedGoodsCount;
    }

    get agentShippingGoodsCountProperty(): number {
      return this.agentShippingGoodsCount;
    }

    set dayNumberProperty(params) {
      this.dayNumber = params;
    }

    set productProducerGoodsCountProperty(params: number) {
      this.productProducerGoodsCount = params;
    }

    set productConsumerNeedGoodsCountProperty(params: number) {
      this.productConsumerNeedGoodsCount = params;
    }

    set agentShippingGoodsCountProperty(params: number) {
      this.agentShippingGoodsCount = params;
    }
}
class ProductConsumer {
    name: string;

    consumerNeeds: number;

    constructor(consumerName: string) {
      this.name = consumerName;
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
      return this.consumerNeeds;
    }
}
class Agent {
    name: string;

    totalShippingProducts: number;

    id: number;

    constructor(agentName: string) {
      this.name = agentName;
      this.id = Math.floor(Math.random() * 1200);
      this.totalShippingProducts = 0;
    }

    set agentName(agentName: string) {
      this.agentName = agentName;
    }

    get agentName(): string {
      return this.agentName;
    }

    set totalShippingProduct(totalShippingProducts: number) {
      this.totalShippingProducts = totalShippingProducts;
    }

    get totalShippingProduct(): number {
      return this.totalShippingProducts;
    }

    calculateShippingGoods(): number {
      this.totalShippingProducts = randomNumberGenerate(0, 100);
      return this.totalShippingProduct;
    }
}
class Day {
    productConsumerNeedGoodsCount: number;

    agentShippingGoodsCount: number;

    productProducerGoodsCount: number;

    productProducer: ProductProducer;

    product: Product;

    productConsumer: ProductConsumer;

    agent: Agent;

    dayNumber: number;

    constructor() {
      this.dayNumber = 0;
      this.productProducerGoodsCount = 0;
      this.productConsumerNeedGoodsCount = 0;
      this.agentShippingGoodsCount = 0;
      this.product = new Product('Super dicer');
      this.productProducer = new ProductProducer('Alibaba');
      this.productConsumer = new ProductConsumer('Vasiliy');
      this.agent = new Agent('John');
    }

    randomGenerateCount() {
      this.productProducerGoodsCount = this.productProducer.randomGenerateProducts();
      this.productConsumerNeedGoodsCount = this.productConsumer.consumerNeed();
      this.agentShippingGoodsCount = this.agent.calculateShippingGoods();
    }

    startDay() {
      this.randomGenerateCount();
      this.dayNumber += 1;
    }

    generateInfo(): GenerateInfo {
      return new GenerateInfo(this.dayNumber, this.productProducerGoodsCount,
        this.productConsumerNeedGoodsCount, this.agentShippingGoodsCount);
    }

    getStatistics(): GenerateInfo {
      return this.generateInfo();
    }
}

const calculateStatistics = (daysCount): GenerateInfo[] => {
  const day = new Day();
  const statArray: GenerateInfo[] = [];
  for (let i = 0; i < daysCount; i += 1) {
    day.startDay();
    statArray.push(day.getStatistics());
  }
  return statArray;
};
// const statistics = calculateStatistics(7);
export default calculateStatistics;
