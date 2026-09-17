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

### D-019 — Email xác nhận cho khách dùng Gmail của XQuang

- Ngày ghi nhận: 2026-09-16
- Trạng thái: **Superseded** bởi D-021
- Quyết định: Email xác nhận tự động gửi cho khách sau khi họ gửi brief dùng chính địa chỉ Gmail của XQuang (`nguyenichminhquang1998@gmail.com`) qua Gmail SMTP (App Password), gọi từ một Netlify Function.
- Lý do bị thay thế: Tài khoản Google của XQuang không hiển thị/cho tạo App Password (đã kiểm tra 2026-09-16, 2-Step Verification bật từ 2018 nhưng mục App Password không xuất hiện) — hướng này không khả thi.

### D-020 — Kết nối GitHub repo với Netlify

- Ngày ghi nhận: 2026-09-16
- Trạng thái: Accepted
- Quyết định: Chuyển site Netlify hiện tại (`sunny-gumdrop-b0e0ae`) từ deploy thủ công (Drop) sang liên kết trực tiếp với GitHub repo `portfolio-xquang` để auto-deploy mỗi lần push `main`, đồng thời cho phép Netlify Functions hoạt động (Drop không bundle function).
- Lý do: Cần thiết để D-019 (email xác nhận) chạy được; XQuang xác nhận chọn hướng này thay vì tiếp tục deploy thủ công qua Netlify CLI.
- Ghi chú: Bước kết nối repo cần XQuang tự thao tác trong Netlify dashboard (OAuth GitHub App) — không có API để AI thực hiện thay.

### D-021 — Chuyển sang Resend cho email xác nhận

- Ngày ghi nhận: 2026-09-16
- Trạng thái: Accepted
- Quyết định: Email xác nhận cho khách gửi qua **Resend** (dịch vụ transactional email, gọi qua HTTP API từ `netlify/functions/send-confirmation.js`) thay cho Gmail SMTP. Netlify vẫn giữ notification mặc định gửi cho XQuang qua form.
- Thay thế: D-019.
- Lý do: D-019 bế tắc vì tài khoản Google không cho tạo App Password.
- Ghi chú kỹ thuật: Function không còn dependency npm nào (dùng `fetch` có sẵn trong runtime); đã bỏ `package.json`. Biến môi trường cần trên Netlify: `RESEND_API_KEY`, `CONFIRMATION_FROM_EMAIL`.

### D-022 — Domain chính thức: xquangdenoiseproductionhouse.com

- Ngày ghi nhận: 2026-09-16
- Trạng thái: Accepted
- Quyết định: XQuang đã mua domain **`xquangdenoiseproductionhouse.com`** qua Cloudflare Registrar. Domain này dùng làm domain public chính thức cho site (thay `sunny-gumdrop-b0e0ae.netlify.app`) và cũng dùng để verify gửi email qua Resend (D-021), giải quyết ràng buộc domain còn treo ở D-021.
- Lý do: Dự định ban đầu là subdomain `xquang.denoiseproductionhouse.com`, nhưng khi mua trên Cloudflare, domain gốc còn trống là `xquangdenoiseproductionhouse.com` (không dấu chấm) — XQuang xác nhận dùng domain này, không cần mua thêm domain mẹ `denoiseproductionhouse.com` riêng.
- Email gửi tự động (Resend) dùng địa chỉ thuộc domain này làm From, nhưng Reply-To vẫn là Gmail cá nhân `nguyenichminhquang1998@gmail.com` — khách bấm trả lời vẫn về đúng hộp thư XQuang dùng hàng ngày.
- DNS quản lý tại Cloudflare (không chuyển nameserver về Netlify) để giữ linh hoạt trỏ đồng thời về Netlify (web) và Resend (email).

### D-023 — Địa chỉ gửi email xác nhận

- Ngày ghi nhận: 2026-09-16
- Trạng thái: Accepted
- Quyết định: Địa chỉ **From** cho email xác nhận (D-021) là `brief@xquangdenoiseproductionhouse.com`. Địa chỉ **Reply-To** vẫn là Gmail cá nhân `nguyenichminhquang1998@gmail.com` — khách bấm trả lời sẽ về thẳng hộp thư này.
- Lý do: Resend bắt buộc From thuộc domain đã verify DNS (không thể dùng `@gmail.com` làm From); Reply-To tách biệt cho phép giữ nguyên thói quen đọc/trả lời qua Gmail của XQuang mà không cần tạo hộp thư thật trên domain mới.
- Ghi chú: Đây chỉ là giá trị biến môi trường `CONFIRMATION_FROM_EMAIL` trên Netlify, không phải hộp thư cần tạo — không có mailbox nào tồn tại ở `brief@xquangdenoiseproductionhouse.com`.

## Chưa chốt

- Tên miền Netlify dễ nhớ (nếu muốn khác `xquangdenoiseproductionhouse.com`) — hiện đã đủ dùng, mục này chỉ còn mở nếu XQuang muốn đổi sau.
