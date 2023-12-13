var express = require('express');
var router = express.Router();
const HomeController = require('../controller/HomeController');

const home = new HomeController();
router.get('/laysanpham', async(req, res) => {
    await home.LaySanPham(req, res);
})
router.get('/api/Home/SanPham/Get', async(req, res) => {
    await home.LayAllSanPham(req, res);
})
router.get('/api/Home/LoaiSanPham/Get', async(req, res) => {
    await home.LayLoaiSanPham(req, res);
    // res.setHeader('Content-Type', 'application/json');

})

router.get('/api/Home/GetSPtheoId/:id', async(req, res) => {
    await home.LaySanPhamTheoIdP(req, res);
})
router.get('/api/Home/GetSPtheoLoai/:id', async(req, res) => {
    await home.LaySanPhamTheoLoai(req, res);
})
router.post('/taomoisanpham', async(req, res) => {
    await home.TaoMoiSanPham(req, res);
})


module.exports = router;
