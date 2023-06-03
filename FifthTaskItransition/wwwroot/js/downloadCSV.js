
function convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ';';
    lineDelimiter = args.lineDelimiter || '\r\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(item => {
        ctr = 0;
        keys.forEach(key => {
            if (ctr > 0) {
                result += columnDelimiter;
                result += item[key];
                ctr++;
            }
        });
        result += lineDelimiter;
    });
    return result;
};
