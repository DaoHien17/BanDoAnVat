const connection = require('../mysql/dbconnect');

class NhaCungCapController{
    async LayNhaCungCapTheoId(req, res){
        var query = "SELECT * FROM nhacungcap where MaNhaCungCap = "+req.params.id;
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
    }
    async XoaNhaCungCapTheoId(req, res){
        var id = req.params.id;
        var query = "DELETE FROM nhacungcap where MaNhaCungCap = "+id;
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            var query = "DELETE FROM sanpham where MaNhaCungCap = "+id;
            console.log(query);
            connection.query(query,(error, result) =>{
                if (error) res.status(500).send('Loi ket noi csdl');
                res.json(result);
            })
        })
    }
    async SuaNhaCungCapTheoId(req, res){
        var query = "UPDATE `nhacungcap` SET TenNhaCungCap = '"+req.body.nhacungcap.TenNhaCungCap+"', DiaChi = '"+req.body.nhacungcap.DiaChi+"',SoDienThoai = '"+req.body.nhacungcap.SoDienThoai+"',Email = '"+req.body.nhacungcap.Email+"'  WHERE `MaNhaCungCap` = "+req.body.nhacungcap.MaNhaCungCap+";";
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
                res.json(result);
        })
    }
    async ThemNhaCungCap(req, res){
        var insertProductQuery = "INSERT INTO `nhacungcap` (`TenNhaCungCap`,`DiaChi`,`SoDienThoai`,`Email`) VALUES ('"+ req.body.nhacungcap.TenNhaCungCap +"','"+ req.body.nhacungcap.DiaChi +"','"+ req.body.nhacungcap.SoDienThoai +"','"+ req.body.nhacungcap.Email +"');";
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
}
module.exports = NhaCungCapController;