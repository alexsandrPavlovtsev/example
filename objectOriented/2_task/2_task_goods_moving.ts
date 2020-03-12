class ProductProducer {
    producerName: string
    constructor(producerName: string) {
        this.producerName = producerName
    }
}
class Product extends ProductProducer {
    productName: string;
    constructor(producerName: string,productName: string) {
        super(producerName);
        this.productName = productName;
    }
}
class ProductConsumer extends Product {
    consumerName: any;
    constructor(producerName: string,productName: string, consumerName: string) {
        super(producerName,productName);
        this.consumerName = consumerName;
    }
}
class Agent extends ProductConsumer {
    agentName: string;
    constructor(producerName: string,productName: string, consumerName: string, agentName: string) {
        super(producerName,productName, consumerName);
        this.agentName = agentName;
    }
} 