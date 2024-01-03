var express = require('express');
var router = express.Router();
const LoaiSanPhamController = require('../controller/LoaiSanPhamController');

const home = new LoaiSanPhamController();

router.post('/api/sanpham/create-loaisanpham', async(req, res) => {
    await home.ThemLoaiSanPham(req, res);
})
router.post('/api/sanpham/update-loaisanpham', async(req, res) => {
    await home.SuaSanPhamTheoId(req, res);
})
router.delete('/api/loaisanpham/delete-loaisanpham/:id', async(req, res) => {
    await home.XoaLoaiSanPhamTheoId(req, res);
})
router.get('/api/loaisanpham/get-by-id/:id', async(req, res) => {
    await home.LayLoaiSanPhamTheoId(req, res);
})
module.exports = router;
