# DECISIONS — XQuang Portfolio

Đây là nhật ký các quyết định đã được XQuang chốt. Mỗi thay đổi mới cần thêm mục hoặc ghi rõ quyết định nào bị thay thế; không âm thầm sửa lịch sử để hợp thức hóa lựa chọn của AI.

## Quy ước

- `Accepted`: đang có hiệu lực.
- `Superseded`: đã bị một quyết định mới thay thế.
- `Pending`: chưa được XQuang chốt, không được xem là yêu cầu.
- Khi hai mục mâu thuẫn, mục `Accepted` mới hơn có hiệu lực.

## Các quyết định đang có hiệu lực

### D-001 — Portfolio cá nhân, Denoise là năng lực vận hành

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Chủ thể trang là XQuang; tên đội ngũ dùng thống nhất là **Denoise Production House**.
- Lý do: Khách hàng cần hiểu rõ cá nhân chịu trách nhiệm sáng tạo nhưng vẫn thấy năng lực triển khai theo ekip.

### D-002 — Thứ tự định vị công việc

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: TVC doanh nghiệp → nội dung dài hạn/retainer → MV nghệ sĩ.
- Lý do: Đây là ba loại job XQuang muốn nhận thêm trong 12 tháng tới.

### D-003 — Vanilla web và source ở root

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: HTML/CSS/JS thuần, không React, không build step, không tạo `src/`.
- Lý do: Trang một page, deploy Netlify trực tiếp; cấu trúc root đơn giản và dễ bàn giao nhất.

### D-004 — Typography hiện hành

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Giữ Newsreader 800 cho display/hero; chấp nhận sự khác họ chữ với logo Denoise.
- Lý do: XQuang chọn hướng serif kiểu Sony cho art direction hiện tại.
- Ghi chú lịch sử: Body font chưa thuộc D-004; sau đó đã được chốt tại D-013.

### D-005 — Nhãn vai trò ở Hero

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Dùng `Director / Cinematographer` thay vì liệt kê tất cả vai trò.
- Lý do: Ngắn, chuyên nghiệp và để project card/case study chứng minh phạm vi năng lực.

### D-006 — Form không hỏi ngân sách

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Bỏ hoàn toàn trường khoảng ngân sách khỏi form.
- Thay thế: Giá trị tĩnh “Sẽ trao đổi trực tiếp” và các dropdown mức giá trước đó.

### D-007 — Tài liệu đính kèm brief

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Form nhận một file PDF/Word/Excel/PowerPoint/TXT, không bắt buộc, giới hạn phía trình duyệt 7 MB.
- Lý do: Cho khách gửi brief/treatment đơn giản mà không biến form thành hệ thống upload phức tạp.

### D-008 — Netlify Free để preview

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Dùng Netlify Free và địa chỉ Netlify riêng để xem/test trước; chưa public chính thức.
- Lý do: Chi phí thấp, hỗ trợ static hosting và Netlify Forms.

### D-009 — BTS sau Process

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Thêm section `Trên hiện trường` ngay sau `Từ brief đến bàn giao`, dùng ảnh thật của XQuang cùng Denoise Production House.
- Lý do: Bổ sung bằng chứng vận hành trước Client Index và form chuyển đổi.

### D-010 — Giữ đầy đủ quy tắc trong cả Claude và Codex

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Giữ nguyên toàn bộ quy tắc cũ trong cả `AGENTS.md` và `CLAUDE.md`, sau đó nối quy tắc mới vào cả hai; hai file phải luôn giống nhau. Context dài vẫn tách thành `PRODUCT`, `ARCHITECTURE`, `DECISIONS`, `CURRENT`; tài liệu cũ nằm trong `docs/archive/`.
- Lý do: XQuang muốn mọi phiên Claude hoặc Codex đều nhìn thấy trực tiếp đầy đủ quy tắc cũ và mới, không phụ thuộc cơ chế import riêng của công cụ.
- Thay thế: Phương án rút gọn `CLAUDE.md` chỉ còn `@AGENTS.md`.

### D-011 — Copy công khai viết cho người xem

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Bỏ các câu chú thích nói về ưu tiên nội bộ hoặc cách website được xây; thay bằng thông tin trực tiếp, hữu ích cho khách hàng. Khu vực liên hệ và form gửi brief phải có tiêu đề riêng.
- Lý do: Người xem cần hiểu dự án, cách làm việc và cách liên hệ mà không phải đọc ghi chú chiến lược nội bộ.

### D-012 — Tên dự án và địa chỉ hiển thị

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Trong `Dự án tiêu biểu`, hiển thị tên `Pullupinmymind` không kèm `— Rollin`; cuối trang hiển thị địa chỉ `Số 1, lô 8A Lê Hồng Phong, Ngô Quyền, Hải Phòng`.

### D-013 — Giữ body font hệ thống

- Ngày ghi nhận: 2026-09-13
- Trạng thái: Accepted
- Quyết định: Giữ Segoe UI / system sans cho body; không chuyển sang IBM Plex Sans trong release hiện tại.
- Lý do: XQuang đã duyệt giao diện hiện tại và chốt phương án font ở bước review trước release.

### D-014 — Dải số mở thành mục lục

- Ngày ghi nhận: 2026-09-16
- Trạng thái: Accepted
- Quyết định: Trên desktop, dải số 01–07 có nút mở thành mục lục và hiển thị tên tiếng Việt của từng section.
- Lý do: Người xem cần hiểu mỗi số dẫn tới nội dung nào trước khi điều hướng.

### D-015 — File lớn gửi bằng link

- Ngày ghi nhận: 2026-09-16
- Trạng thái: Accepted
- Quyết định: Giữ tải file trực tiếp tối đa 7 MB và thêm trường link tài liệu không bắt buộc cho file lớn hơn.
- Lý do: Netlify Forms giới hạn toàn bộ request ở 8 MB; tăng input lên sát giới hạn làm lượt gửi dễ lỗi vì còn dữ liệu form và multipart overhead.

### D-016 — Mục lục tự mở khi hover

- Ngày ghi nhận: 2026-09-16
- Trạng thái: Accepted
- Quyết định: Trên desktop, dải số 01–07 tự mở mục lục khi hover và tự đóng khi chuột rời đi; bàn phím dùng `focus-within`.
- Thay thế: Cách mở/đóng bằng nút trong D-014.

### D-017 — Form brief phản hồi theo ngữ cảnh

- Ngày ghi nhận: 2026-09-16
- Trạng thái: Accepted
- Quyết định: Thêm số điện thoại; khi chọn `Khác` thì hiện ô mô tả loại dự án; sau khi gửi thành công hiện ô cảm ơn trong trang và có `/cam-on` làm fallback.
- Lý do: Giảm bước đoán của khách và xác nhận rõ brief đã được nhận.

### D-018 — Thêm Union Marina và Lam Homestay

- Ngày ghi nhận: 2026-09-16
- Trạng thái: Accepted
- Quyết định: Thêm Union Marina và Lam Homestay vào Client Index với logo và ảnh nền do XQuang cung cấp; chưa gắn link dự án khi chưa có URL công khai được xác nhận.

## Chưa chốt

- GitHub auto-deploy Netlify và domain public chính thức.
