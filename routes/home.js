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
//admin
router.get('/api/SanPham/get-all-sanpham', async(req, res) => {
    await home.LayAllSanPhamAdmin(req, res);
})

router.post('/api/sanpham/search', async(req, res) => {
    await home.LayAllSanPhamAdminByName(req, res);
})

router.post('/api/User/authenticate', async(req, res) => {
    await home.LoginAdmin(req, res);
})

router.get('/api/NhaCungCap/get-NhaCungCap', async(req, res) => {
    await home.LayAllNCC(req, res);
})
router.get('/api/LoaiSanPham/get-loaisanpham', async(req, res) => {
    await home.LayAllLoaiSanPham(req, res);
})
router.post('/api/sanpham/create-sanpham', async(req, res) => {
    await home.ThemSanPham(req, res);
})
router.post('/api/sanpham/update-sanpham', async(req, res) => {
    await home.SuaSanPham(req, res);
})
router.get('/api/sanpham/get-by-id/:id', async(req, res) => {
    await home.LayAllSanPhamTheoId(req, res);
})
router.delete('/api/sanpham/delete-sanpham/:id', async(req, res) => {
    await home.XoaSanPhamTheoId(req, res);
})
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
