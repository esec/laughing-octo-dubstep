c0k=123

var getFullReport = function (date, url, total, offset, limit, fields, advance, done, csv) {
    if (csv === undefined) {
        csv = '';
    }
    var path = date + '/' + limit + '/' + offset;
    $.getJSON(url + path + '/?json', function (rawData) {
        if (offset == 4000) {
            rawData = c1k;
        }
        processData(rawData['data'], fields, function (processedData, csvChunk) {
            offset += processedData.length;
            csv += csvChunk;
            if (userCanceled) {
                return;
            }
            if (offset < total) {
                advance(offset);
                setTimeout(function () {
                    getFullReport(date, url, total, offset, limit, fields, advance, done, csv);
                }, 10);
            } else {
                done(csv);
            }
        });
    });
};
