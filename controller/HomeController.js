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

    async LaySanPhamByLoaiSP(req, res){
        const loaiId = req.params.id;
        var query = 'select * from shopanvat.sanpham where `MaLoaiSanPham` = '+ loaiId;
        console.log(query);
        connection.query(query,(error, result) =>{
            if (error) res.status(500).send('Loi ket noi csdl');
            res.json(result);
        })
        
    }

}

module.exports = HomeController;