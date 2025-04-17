// Định nghĩa đường dẫn đến các file ảnh
// *** QUAN TRỌNG: Thay thế các đường dẫn này bằng đường dẫn thực tế đến ảnh của bạn ***
const memberImages = {
    trinh: 'images/trinh.jpg', // Ví dụ: ảnh của Trinh nằm trong thư mục images
    thien: 'images/thien.jpg', // Ví dụ: ảnh của Thiện
    yen: 'images/yen.png'      // Ví dụ: ảnh của Yến (có thể khác định dạng)
    // Thêm các thành viên khác nếu cần
};

// Lấy các phần tử HTML cần thiết
const memberListContainer = document.getElementById('member-list');
const memberImageElement = document.getElementById('member-photo');
const imagePlaceholder = document.getElementById('image-placeholder');

// Thêm bộ lắng nghe sự kiện vào container chứa tên
memberListContainer.addEventListener('click', function(event) {
    // Kiểm tra xem phần tử được click có phải là thẻ SPAN chứa tên không
    if (event.target.tagName === 'SPAN' && event.target.hasAttribute('data-member')) {
        const memberName = event.target.getAttribute('data-member');

        // Kiểm tra xem có ảnh tương ứng trong object memberImages không
        if (memberImages[memberName]) {
            // Cập nhật nguồn ảnh và alt text
            memberImageElement.src = memberImages[memberName];
            memberImageElement.alt = `Ảnh của ${event.target.textContent}`; // Cập nhật alt text cho dễ hiểu

            // Hiển thị ảnh và ẩn thông báo placeholder
            memberImageElement.style.display = 'block';
            imagePlaceholder.style.display = 'none';
        } else {
            // Nếu không tìm thấy ảnh (cấu hình thiếu hoặc sai tên)
            console.warn(`Không tìm thấy ảnh cho thành viên: ${memberName}`);
            memberImageElement.style.display = 'none'; // Ẩn khu vực ảnh
            imagePlaceholder.textContent = `Không tìm thấy ảnh cho ${event.target.textContent}.`;
            imagePlaceholder.style.display = 'block'; // Hiển thị lại placeholder với thông báo lỗi
        }
    }
});

// (Tùy chọn) Đặt trạng thái ban đầu khi tải trang
memberImageElement.style.display = 'none'; // Ban đầu ẩn ảnh
imagePlaceholder.style.display = 'block'; // Ban đầu hiện placeholder 