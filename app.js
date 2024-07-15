const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Set up Handlebars
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: 'views/layouts/' }));
app.set('view engine', 'hbs');
app.set('views', './views');

// Serve static files
app.use(express.static('public'));

// Sample data
const sampleData1 = {
    invoiceNumber: 'INVC-001',
    receiver: {
        companyName: 'ABShrms',
        address: 'North phase Industrial Estate, 42, 5th Cross St, Kalaimagal Nagar, Ekkatuthangal, Chennai, Tamil Nadu 600032',
        phone: '98765 43210',
        gstin: '673786278013201'
    },
    orderDate: '27-Apr-2024',
    dispatchDate: '27-Apr-2024',
    challanDate: '27-Apr-2024',
    challanType: 'Job Work',
    items: [
        { slNo: '01', itemName: 'Lathe Machine', hsnCode: 'PR0101', quantity: '--', unit: '01' },
        { slNo: '02', itemName: 'Lathe Machine', hsnCode: 'PR0101', quantity: '--', unit: '01' },
        { slNo: '03', itemName: 'Lathe Machine', hsnCode: 'PR0101', quantity: '--', unit: '01' }
    ]
};

const sampleData2 = {
    invoiceNumber: 'INVC-002',
    receiver: {
        companyName: 'XYZ Industries',
        address: 'Tech Park, 56, Main Road, Bangalore, Karnataka 560001',
        phone: '91234 56789',
        gstin: '87564892340123'
    },
    orderDate: '01-May-2024',
    dispatchDate: '01-May-2024',
    challanDate: '01-May-2024',
    challanType: 'Sale',
    items: [
        { slNo: '01', itemName: 'CNC Machine', hsnCode: 'PR0201', quantity: '2', unit: '02' },
        { slNo: '02', itemName: 'Drilling Machine', hsnCode: 'PR0202', quantity: '1', unit: '01' }
    ]
};

const sampleData3 = {
    invoiceNumber: 'INVC-003',
    receiver: {
        companyName: 'Tech Solutions',
        address: 'Innovation Hub, 123, Sector 5, Gurgaon, Haryana 122001',
        phone: '89876 54321',
        gstin: '12345678901234'
    },
    orderDate: '15-May-2024',
    dispatchDate: '15-May-2024',
    challanDate: '15-May-2024',
    challanType: 'Rental',
    items: [
        { slNo: '01', itemName: 'Laser Cutter', hsnCode: 'PR0301', quantity: '5', unit: '05' },
        { slNo: '02', itemName: '3D Printer', hsnCode: 'PR0302', quantity: '3', unit: '03' }
    ]
};

// Routes
app.get('/invoice1', (req, res) => {
    res.render('invoice', sampleData1);
});

app.get('/invoice2', (req, res) => {
    res.render('invoice', sampleData2);
});

app.get('/invoice3', (req, res) => {
    res.render('invoice', sampleData3);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
