const connection = require('../mysql/dbconnect');

class ProductController{
    
    async TaoMoiSanPham(req, res) {
        const {ten, loaiId, mota, anhDaiDien, nccId} = req.body;

        var query = "insert into shopanvat.sanpham(`TenSanPham`,`MoTaSanPham`, `AnhDaiDien`, `MaNhaCungCap`, `MaLoaiSanPham`) values('" + ten + "', '" + mota + "', '" + anhDaiDien + "', '" + nccId + "', '" + loaiId + "')";
        console.log(query);
        connection.query(query, (error, result) => {
            if (error) res.status(500).send('Loi ket noi csdl');
            res.status(200).json(result);
        })
    }
    async XoaSanPham(req, res) {
        const {ten, loaiId, mota, anhDaiDien, nccId} = req.body;

        var query = "insert into shopanvat.sanpham(`TenSanPham`,`MoTaSanPham`, `AnhDaiDien`, `MaNhaCungCap`, `MaLoaiSanPham`) values('" + ten + "', '" + mota + "', '" + anhDaiDien + "', '" + nccId + "', '" + loaiId + "')";
        console.log(query);
        connection.query(query, (error, result) => {
            if (error) res.status(500).send('Loi ket noi csdl');
            res.status(200).json(result);
        })
    }
    async LaySPTheoid(req, res) {
        const id = req.params.idsp;

        var query = `SELECT
        s.TenSanPham AS TenSP,
        l.MaLoaiSanPham AS maLoai,
        l.TenLoaiSanPham AS TenLoai,
        c.TenNhaCungCap AS NCC,
        c.MaNhaCungCap AS maNCC,
        s.MoTaSanPham AS MoTa,
        g.Gia AS DonGia,
        s.AnhDaiDien AS Anh,
        s.NgayTao AS NgayTao,
        s.MaSanPham AS MaSanPham
    FROM
        SanPhams AS s
        JOIN LoaiSanPhams AS l ON s.MaLoaiSanPham = l.MaLoaiSanPham
        JOIN NhaCungCaps AS c ON s.MaNhaCungCap = c.MaNhaCungCap
        JOIN GiaSanPhams AS g ON s.MaSanPham = g.MaSanPham
    WHERE
        s.MaSanPham = ${id};
        ` 

        // var query = "insert into shopanvat.sanpham(`TenSanPham`,`MoTaSanPham`, `AnhDaiDien`, `MaNhaCungCap`, `MaLoaiSanPham`) values('" + ten + "', '" + mota + "', '" + anhDaiDien + "', '" + nccId + "', '" + loaiId + "')";
        console.log(query);
        connection.query(query, (error, result) => {
            if (error) res.status(500).send('Loi ket noi csdl');
            res.status(200).json(result);
        })
    }

}

module.exports = ProductController