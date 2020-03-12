const randomNumberGenerate = function(min: number, max: number): number {
        const rand = min + Math.random() * (max + 1 - min);
        return rand;
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
    randomGenerateProducts (): void {
        this._productCount = randomNumberGenerate(50, 150);
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
    consumerNeed(): void {
        this._consumerNeeds = randomNumberGenerate(70, 120);
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
    calculateShippingGoods(): void {
        this._totalShippingProducts = randomNumberGenerate(0, 100);
    }
}
class Day {
    _productProducerGoodsCount: number;
    constructor() {
        this._productProducerGoodsCount = 0;
    }
    startDay() {
        const productProducter = new ProductProducer('Alibaba');
        const product = new Product('Alibaba', 'Super dicer');
    }
}