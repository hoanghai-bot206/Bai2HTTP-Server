
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.end(`
            <!DOCTYPE html>
            <html lang="vi">
            <head>
                <meta charset="UTF-8">
                <title>Thông tin sinh viên</title>
            </head>
            <body>
                <h1>THÔNG TIN SINH VIÊN</h1>
                <p>Họ và tên: Nguyễn Hoàng Hải</p>
                <p>Mã sinh viên: CD-CNTT18A</p>
            </body>
            </html>
        `);
    } else {
        res.statusCode = 404;
        res.end('<h1>404 - Không tìm thấy trang</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server đang chạy tại http://${hostname}:${port}/`);
});
