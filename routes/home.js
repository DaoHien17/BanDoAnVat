var express = require('express');
var router = express.Router();
const HomeController = require('../controller/HomeController');

const home = new HomeController();
router.get('/laysanpham', async(req, res) => {
    await home.LaySanPham(req, res);
})

router.get('/layloaisanpham', async(req, res) => {
    await home.LayLoaiSanPham(req, res);
    // res.setHeader('Content-Type', 'application/json');

})

router.get('/laysanphamtheoidloai/:id', async(req, res) => {
    await home.LaySanPhamByLoaiSP(req, res);
})

router.post('/taomoisanpham', async(req, res) => {
    await home.TaoMoiSanPham(req, res);
})


module.exports = router;
