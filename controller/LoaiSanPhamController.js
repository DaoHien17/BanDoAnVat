const connection = require('../mysql/dbconnect');

class LoaiSanPhamController{
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
module.exports = LoaiSanPhamController;