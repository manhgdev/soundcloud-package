import https from 'https'


// Đóng gói https.get vào một Promise để sử dụng await
function getData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';

            // Nhận dữ liệu từ server
            response.on('data', chunk => {
                data += chunk;
            });

            // Khi nhận được hết dữ liệu
            response.on('end', () => {
                const jsonData = JSON.parse(data);
                resolve({
                    statusCode: response.statusCode,
                    data: jsonData
                });
            });
        }).on("error", (err) => {
            reject(err);
        });
    });
}

export async function httpsGet(url) {
    try {
        const result = await getData(url);
        return result.data
    } catch (error) {
        console.log("Error:", error.message);
        return url
    }
}