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
       
        var query = 'SELECT r.MaSanPham, r.TenSanPham, r.AnhDaiDien, g.Gia, r.MaLoaiSanPham FROM shopanvat.sanpham as r, shopanvat.giasanpham as g where r.MaSanPham = g.MaSanPham;';
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
    async LaySanPhamTheoIdP(req, res){
        const loaiId = req.params.id;
        var query = 'SELECT r.MaSanPham, r.TenSanPham, r.AnhDaiDien, g.Gia, r.MaLoaiSanPham, r.AnhDaiDien, r.MoTaSanPham, l.TenLoaiSanPham  FROM shopanvat.sanpham as r, shopanvat.loaisanpham as l, shopanvat.giasanpham as g WHERE r.MaLoaiSanPham = l.MaLoaiSanPham AND r.MaSanPham = g.MaSanPham AND r.MaSanPham = '+ loaiId +" LIMIT 1";
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
//admin
    async LoginAdmin(req, res){
        var query = 'SELECT t.LoaiQuyen, t.MaNguoiDung, t.TaiKhoan, n.HoTen, t.MatKhau, n.DiaChi, n.DienThoai, n.Email FROM shopanvat.taikhoan AS t JOIN shopanvat.nguoidung AS n ON t.MaNguoiDung = n.MaNguoiDung;';
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
    async LayAllSanPhamAdmin(req, res){
       
        var query = 'SELECT s.TenSanPham AS TenSP, l.TenLoaiSanPham AS TenLoai, c.TenNhaCungCap AS NCC, s.MoTaSanPham AS MoTa, g.Gia AS DonGia, s.AnhDaiDien AS Anh, s.NgayTao AS NgayTao, s.MaSanPham FROM shopanvat.sanpham AS s JOIN shopanvat.loaisanpham AS l ON s.MaLoaiSanPham = l.MaLoaiSanPham JOIN shopanvat.nhacungcap AS c ON s.MaNhaCungCap = c.MaNhaCungCap JOIN shopanvat.giasanpham AS g ON s.MaSanPham = g.MaSanPham;';
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }

    async LayAllSanPhamAdminByName(req, res){
        var query = 'SELECT s.TenSanPham AS TenSP, l.TenLoaiSanPham AS TenLoai, c.TenNhaCungCap AS NCC, s.MoTaSanPham AS MoTa, g.Gia AS DonGia, s.AnhDaiDien AS Anh, s.NgayTao AS NgayTao, s.MaSanPham FROM shopanvat.sanpham AS s INNER JOIN shopanvat.loaisanpham AS l ON s.MaLoaiSanPham = l.MaLoaiSanPham INNER JOIN shopanvat.nhacungcap AS c ON s.MaNhaCungCap = c.MaNhaCungCap INNER JOIN shopanvat.giasanpham AS g ON s.MaSanPham = g.MaSanPham WHERE ' + 's.TenSanPham LIKE \'%' + req.body.tensp + '%\';';
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
    async LayAllNCC(req, res){
        var query = 'select * from shopanvat.nhacungcap;';
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
    async LayAllLoaiSanPham(req, res){
        var query = 'select * from shopanvat.loaisanpham;';
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
    async ThemSanPham(req, res){
        var insertProductQuery = "INSERT INTO `SanPham` (`TenSanPham`, `MoTaSanPham`, `AnhDaiDien`, `MaNhaCungCap`, `MaLoaiSanPham`, `NgayTao`) VALUES (N'"+ req.body.sanpham.TenSanPham +"', N'"+req.body.sanpham.MoTaSanPham+"', '"+req.body.sanpham.AnhDaiDien+"',"+req.body.sanpham.MaNhaCungCap+", "+req.body.sanpham.MaLoaiSanPham+", now());";
        console.log(insertProductQuery)
        connection.query(insertProductQuery, (error, result) => {
            if (error) {
                res.status(500).send('Loi ket noi csdl');
            } else {
                // Lấy mã sản phẩm từ kết quả INSERT
                var maSanPham = result.insertId;
        
                // Sử dụng mã sản phẩm để thêm vào bảng GiaSanPham
                var insertPriceQuery = "INSERT INTO GiaSanPham (MaSanPham, Gia) VALUES (" + maSanPham + ", "+ req.body.sanpham.DonGia +")";
                connection.query(insertPriceQuery, (error, result) => {
                    if (error) {
                        res.status(500).send('Loi ket noi csdl');
                    } else {
                        // Trả về thành công nếu mọi thứ diễn ra đúng
                        res.status(200).json(result);
                    }
                });
            }
        });
    }
    async SuaSanPham(req, res){
        var insertProductQuery = "UPDATE `SanPham` SET `TenSanPham` = N'"+ req.body.sanpham.TenSanPham +"', `MoTaSanPham` = N'"+req.body.sanpham.MoTaSanPham+"', `AnhDaiDien` = '"+req.body.sanpham.AnhDaiDien+"', `MaNhaCungCap` = "+req.body.sanpham.MaNhaCungCap+", `MaLoaiSanPham` = "+req.body.sanpham.MaLoaiSanPham+", `NgayTao` = now() WHERE `MaSanPham` = "+req.body.sanpham.MaSanPham+";";
        console.log(insertProductQuery)
        connection.query(insertProductQuery, (error, result) => {
            if (error) {
                res.status(500).send('Loi ket noi csdl');
            } else {
                // Lấy mã sản phẩm từ kết quả INSERT
                var maSanPham = req.body.sanpham.MaSanPham;
        
                // Sử dụng mã sản phẩm để thêm vào bảng GiaSanPham
                var insertPriceQuery = "UPDATE `GiaSanPham` SET `Gia` = " + req.body.sanpham.DonGia + " WHERE `MaSanPham` = " + maSanPham + ";";
                console.log(insertPriceQuery)
                connection.query(insertPriceQuery, (error, result) => {
                    if (error) {
                        res.status(500).send('Loi ket noi csdl');
                    } else {
                        // Trả về thành công nếu mọi thứ diễn ra đúng
                        res.status(200).json(result);
                    }
                });
            }
        });
    }
    async LayAllSanPhamTheoId(req, res){
        var query = "SELECT sp.TenSanPham AS TenSP, sp.MaLoaiSanPham AS maLoai, ls.TenLoaiSanPham AS TenLoai, ncc.TenNhaCungCap AS NCC, ncc.MaNhaCungCap AS maNCC, sp.MoTaSanPham AS MoTa, gs.Gia AS DonGia, sp.AnhDaiDien AS Anh, sp.NgayTao AS NgayTao, sp.MaSanPham AS MaSanPham FROM SanPham sp JOIN LoaiSanPham ls ON sp.MaLoaiSanPham = ls.MaLoaiSanPham JOIN NhaCungCap ncc ON sp.MaNhaCungCap = ncc.MaNhaCungCap JOIN GiaSanPham gs ON sp.MaSanPham = gs.MaSanPham WHERE sp.MaSanPham = "+req.params.id+" LIMIT 1;";
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
    async XoaSanPhamTheoId(req, res){
        var query = "UPDATE FROM loaisanpham where MaSanPham = "+req.body.sanpham.TenSanPham;
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            var query = "DELETE FROM giasanpham where MaSanPham = "+id;
            console.log(query);
            connection.query(query,(error, result) =>{
                if (error) res.status(500).send('Loi ket noi csdl');
                res.json(result);
            })
        })
    }
    async SuaSanPhamTheoId(req, res){
        var id = req.params.id;
        var query = "UPDATE `LoaiSanPham` SET TenLoaiSanPham = '"+req.body.loaisanpham.TenLoaiSanPham+"' WHERE `MaLoaiSanPham` = "+req.body.loaisanpham.MaLoaiSanPham+";";
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
                res.json(result);
        })
    }
    async ThemLoaiSanPham(req, res){
        var insertProductQuery = "INSERT INTO `loaisanpham` (`TenLoaiSanPham`) VALUES ('"+ req.body.loaisanpham.TenLoaiSanPham +"');";
        console.log(insertProductQuery)
        connection.query(insertProductQuery, (error, result) => {
            if (error) {
                res.status(500).send('Loi ket noi csdl');
            } else {
                // Trả về thành công nếu mọi thứ diễn ra đúng
                res.status(200).json(result);
            }
        });
    }

    async XoaLoaiSanPhamTheoId(req, res){
        var id = req.params.id;
        var query = "DELETE FROM loaisanpham where MaLoaiSanPham = "+id;
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            var query = "DELETE FROM sanpham where MaLoaiSanPham = "+id;
            console.log(query);
            connection.query(query,(error, result) =>{
                if (error) res.status(500).send('Loi ket noi csdl');
                res.json(result);
            })
        })
    }
    async LayLoaiSanPhamTheoId(req, res){
        var query = "SELECT * FROM loaisanpham where MaLoaiSanPham = "+req.params.id;
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
}
module.exports = HomeController;