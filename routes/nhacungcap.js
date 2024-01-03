var express = require('express');
var router = express.Router();
const NhaCungCapController = require('../controller/NhaCungCapController');

const home = new NhaCungCapController();

router.post('/api/sanpham/create-nhacungcap', async(req, res) => {
    await home.ThemNhaCungCap(req, res);
})
router.post('/api/sanpham/update-nhacungcap', async(req, res) => {
    await home.SuaNhaCungCapTheoId(req, res);
})
router.delete('/api/nhacungcap/delete-nhacungcap/:id', async(req, res) => {
    await home.XoaNhaCungCapTheoId(req, res);
})
router.get('/api/nhacungcap/get-by-id/:id', async(req, res) => {
    await home.LayNhaCungCapTheoId(req, res);
})
module.exports = router;
