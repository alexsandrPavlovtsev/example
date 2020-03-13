const randomNumberGenerate = function(min: number, max: number): number {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
}
class ProductProducer {
    _producerName: string;
    _productCount: number;

    constructor(producerName: string) {
        this._producerName = producerName
        this._productCount = 0
    }
    set producerName (producerName: string) {
        this._producerName = producerName;
    }
    get producerName(): string {
        return this._producerName;
    }
    set productCounts (productCount: number) {
        this._productCount = productCount;
    }
    get productCounts(): number {
        return this._productCount;
    }
    randomGenerateProducts (): number {
        this._productCount = randomNumberGenerate(50, 150);
        return this.productCounts;
    }
}
class Product extends ProductProducer {
    _productName: string;
    constructor(producerName: string,productName: string) {
        super(producerName);
        this._productName = productName;
    }
    set productName(productName: string) {
        this._productName = productName;
    }
    get productName(): string {
        return this._productName;
    }
}
class ProductConsumer extends Product {
    _consumerName: string;
    _consumerNeeds: number;
    constructor(producerName: string,productName: string, consumerName: string) {
        super(producerName,productName);
        this._consumerName = consumerName;
        this._consumerNeeds = 0;
    }
    set consumerName(consumerName: string) {
        this._consumerName = consumerName;
    }
    get consumerName(): string {
        return this._consumerName;
    }
    set consumerNeeds(consumerNeeds: number) {
        this._consumerNeeds = consumerNeeds;
    }
    get consumerNeeds(): number {
        return this._consumerNeeds;
    }
    consumerNeed(): number {
        this._consumerNeeds = randomNumberGenerate(70, 120);
        return this.consumerNeeds;
    }
}
class Agent extends ProductConsumer {
    _agentName: string;
    _totalShippingProducts: number;
    constructor(producerName: string,productName: string, consumerName: string, agentName: string) {
        super(producerName,productName, consumerName);
        this._agentName = agentName;
        this._totalShippingProducts = 0;
    }
    set agentName(agentName: string) {
        this._agentName = agentName;
    }
    get agentName(): string {
        return this._agentName;
    }
    set totalShippingProduct(totalShippingProducts: number) {
        this._totalShippingProducts = totalShippingProducts;
    }
    get totalShippingProduct(): number {
        return this._totalShippingProducts;
    }
    calculateShippingGoods(): number {
        this._totalShippingProducts = randomNumberGenerate(0, 100);
        return this.totalShippingProduct;
    }
}
class Day {
    _productConsumerNeedGoodsCount: number;
    _agentShippingGoodsCount: number;
    _productProducerGoodsCount: number;
    _productProducer: ProductProducer;
    _product: Product;
    _productConsumer: ProductConsumer;
    _agent: Agent;
    _dayNumber: number
    constructor(dayNumber: number = 0) {
        this._dayNumber = dayNumber;
        this._productProducerGoodsCount = 0;
        this._productConsumerNeedGoodsCount = 0;
        this._agentShippingGoodsCount = 0;
        this._product = new Product('Alibaba', 'Super dicer');
        this._productProducer = new ProductProducer('Alibaba');
        this._productConsumer = new ProductConsumer('Alibaba', 'Super dicer', 'Jon');
        this._agent = new Agent('Alibaba', 'Super dicer','Jon', 'Peter');
    }
    randomGenerateCount() {
        this._productProducerGoodsCount = this._productProducer.randomGenerateProducts();
        this._productConsumerNeedGoodsCount = this._productConsumer.consumerNeed();
        this._agentShippingGoodsCount = this._agent.calculateShippingGoods();
    }
    startDay() {
        this.randomGenerateCount();
    }
}
const day = new Day(1);
day.startDay();
