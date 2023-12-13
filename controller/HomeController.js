const connection = require('../mysql/dbconnect');

class HomeController{
    async LayLoaiSanPham(req, res){

        var query = 'select * from shopanvat.loaisanpham;';
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }

    async LaySanPham(req, res){
       
        var query = 'select * from shopanvat.sanpham;';
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
    async LayAllSanPham(req, res){
       
        var query = 'SELECT r.MaSanPham, r.TenSanPham, r.AnhDaiDien, g.Gia, r.MaLoaiSanPham FROM shopanvat.sanpham as r, shopanvat.giasanpham as g;';
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
    async LaySanPhamTheoIdP(req, res){
        const loaiId = req.params.id;
        var query = 'SELECT r.MaSanPham, r.TenSanPham, r.AnhDaiDien, g.Gia, r.MaLoaiSanPham, c.Anh, r.MoTaSanPham, l.TenLoaiSanPham  FROM shopanvat.sanpham as r, shopanvat.loaisanpham as l, shopanvat.giasanpham as g, shopanvat.chitietanhsanpham as c WHERE r.MaLoaiSanPham = l.MaLoaiSanPham AND r.MaSanPham = g.MaSanPham AND r.MaSanPham = c.MaSanPham AND r.MaSanPham = '+ loaiId;
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
        
    }
    async LaySanPhamTheoLoai(req, res){
        const loaiId = req.params.id;
        var query = 'SELECT r.MaSanPham, r.TenSanPham, r.AnhDaiDien, g.Gia, c.MaLoaiSanPham, c.TenLoaiSanPham  FROM shopanvat.sanpham as r, shopanvat.loaisanpham as c, shopanvat.giasanpham as g WHERE r.MaSanPham = g.MaSanPham AND r.MaLoaiSanPham = c.MaLoaiSanPham AND r.MaLoaiSanPham = '+ loaiId;
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
        
    }
}

module.exports = HomeController;