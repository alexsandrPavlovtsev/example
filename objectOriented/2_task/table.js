
const dataF = require('./initialize_table_data');
const arr = dataF.returnData();
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
            {title: 'Agent KPD (%)'},

        ]
    })
});
