
// const initizlizeDataFunc = require('./initialize_table_data');
const tableData = [[21,1,2,3,4,5],
[21,1,2,3,4,5],[21,1,2,3,4,5],[21,1,2,3,4,5],[21,1,2,3,4,5],[21,1,2,3,4,5],[21,1,2,3,4,5],[21,1,2,3,4,5],];
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

        ]
    })
});
