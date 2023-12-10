const mysql = require('mysql2');

// Tạo kết nối
const connection = mysql.createConnection({
  host: 'localhost', // Địa chỉ host của MySQL
  user: 'root', // Tên người dùng của MySQL
  password: '123456', // Mật khẩu của MySQL
  database: 'shopanvat' // Tên cơ sở dữ liệu MySQL
});

// Kết nối với cơ sở dữ liệu
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối:', err);
  } else {
    console.log('Đã kết nối thành công với cơ sở dữ liệu MySQL');
  }
});

module.exports = connection;
