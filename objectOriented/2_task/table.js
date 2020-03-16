
const initizlizeDataFunc = require('./initialize_table_data');
const tableData = initizlizeDataFunc.returnData();
$(document).ready(function () {
    $('#main_table').DataTable({
        data: tableData,
        columns: [
            {title: 'Days number'},
            {title: 'Product producer goods count'},
            {title: 'Product consumer needs goods count'},
            {title: 'Agent shipping goods count'},
            {title: 'Last 3 days goods count'},
            {title: 'Last 3 days agent shipping count'},
            {title: 'Agent KPD (%)'},

        ]
    })
});
