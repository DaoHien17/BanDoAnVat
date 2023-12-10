var express = require('express');
var router = express.Router();
const ProductController = require('../controller/ProductController');

const productController = new ProductController();

router.post('/taomoisanpham', async(req, res) => {
    await productController.TaoMoiSanPham(req, res);
})

module.exports = router;


