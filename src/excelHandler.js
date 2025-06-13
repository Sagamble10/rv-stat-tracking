const ExcelJS = require('exceljs');

async function createExcelFile(data, filePath) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Golf Stats');

    worksheet.columns = [
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Hole', key: 'hole', width: 10 },
        { header: 'Score', key: 'score', width: 10 },
        { header: 'Putts', key: 'putts', width: 10 },
        { header: 'Fairway', key: 'fairway', width: 15 },
        { header: 'GIR', key: 'gir', width: 15 },
        { header: 'Chips', key: 'chips', width: 10 },
        { header: 'Bunker', key: 'bunker', width: 10 },
        { header: 'Approach (yds)', key: 'approach', width: 15 },
        { header: 'Putt Dist (ft)', key: 'puttDistance', width: 15 },
    ];

    data.forEach(entry => {
        worksheet.addRow(entry);
    });

    await workbook.xlsx.writeFile(filePath);
}

module.exports = { createExcelFile };