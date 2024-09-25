function loadImage(event) {
    const previewImg = document.getElementById('previewImg');
    const file = event.target.files[0];//Chọn tệp đầu tiên

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImg.src = e.target.result;//Kết quả của quá trình đọc tệp dưới dạng URL (được gọi là data URL), đây là đường dẫn của hình ảnh vừa được tải.
            previewImg.style.display = 'block'; // Hiển thị hình ảnh sau khi chọn
        };
        reader.readAsDataURL(file); // Đọc file ảnh
    } else {
        previewImg.src = '#';
        previewImg.style.display = 'none'; // Ẩn hình ảnh nếu không có tệp nào được chọn
    }
}


function themKyNang() {
    const kynang = document.getElementById('kynang').value;
    const mucdo = document.getElementById('myRange').value;

    if (kynang) {
        const table = document.getElementById('kyNangTable');
        const newRow = table.insertRow(-1);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        cell1.innerHTML = kynang;
        cell2.innerHTML = mucdo + '%';

        // Tạo một progress bar cho kỹ năng
        const skillProgress = document.createElement('div');
        skillProgress.classList.add('progress-bar');

        const progress = document.createElement('div');
        progress.classList.add('progress');
        progress.style.width = mucdo + '%';
        progress.style.background = getProgressGradient(mucdo); // Sử dụng hàm để lấy gradient

        skillProgress.appendChild(progress);
        cell2.appendChild(skillProgress);

        // Reset các trường sau khi thêm kỹ năng
        document.getElementById('kynang').value = '';
        document.getElementById('myRange').value = 50;
        document.getElementById('rangeValue').innerText = '50%'; // Cập nhật giá trị hiển thị
    } else {
        alert("Vui lòng nhập tên kỹ năng.");
    }
}

// Hàm lấy gradient màu sắc dựa trên mức độ
function getProgressGradient(level) {
    let startColor, endColor;

    if (level <= 30) {
        startColor = 'rgb(255, 0, 0)'; // Đỏ
        endColor = 'rgb(255, 165, 0)'; // Cam
    } else if (level <= 70) {
        startColor = 'rgb(255, 165, 0)'; // Cam
        endColor = 'rgb(255, 255, 0)'; // Vàng
    } else {
        startColor = 'rgb(0, 255, 0)'; // Xanh lá cây
        endColor = 'rgb(0, 128, 0)'; // Xanh đậm
    }

    return `linear-gradient(to right, ${startColor}, ${endColor})`;
}




function inprofile() {
    // Lấy giá trị từ các input
    const imgSrc = document.getElementById('previewImg').src;
    const hovaten = document.getElementById('hovaten').value;
    const nghenghiep = document.getElementById('nghenghiep').value;
    const diachi = document.getElementById('diachi').value;
    const email = document.getElementById('email').value;
    const sdt = document.getElementById('dienthoai').value;

    // Lấy kỹ năng và mức độ từ bảng kỹ năng
    const kyNangTable = document.getElementById('kyNangTable');
    const skills = [];
    const rows = kyNangTable.rows;
    for (let i = 1; i < rows.length; i++) {
        const skill = rows[i].cells[0].innerText;
        const level = rows[i].cells[1].innerText;
        skills.push({ skill, level });
    }

    localStorage.setItem('profileData', JSON.stringify({
        imgSrc,
        hovaten,
        nghenghiep,
        diachi,
        email,
        sdt,
        skills: skills.map(skill => ({ skill: skill.skill, level: skill.level + '%' })) // Lưu trữ với dấu phần trăm
    }));
    

    // Chuyển hướng sang trang profile.html
    window.location.href = 'profile.html';
}

