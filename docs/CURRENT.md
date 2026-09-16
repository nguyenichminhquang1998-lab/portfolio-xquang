# CURRENT — Trạng thái làm việc hiện tại

Cập nhật: **2026-09-16 — Asia/Saigon**

Tài liệu này là bảng bàn giao ngắn cho phiên tiếp theo. Nó mô tả trạng thái hiện tại, không thay thế quyết định trong `docs/DECISIONS.md`.

## 1. Git

- Branch: `main`.
- Remote: `origin` → `https://github.com/nguyenichminhquang1998-lab/portfolio-xquang.git`.
- Baseline rollback: `d40441d` — giữ nguyên.
- Preview release: commit `adde177`, tag `v0.9.0-preview` — giữ nguyên.
- Release hiện tại: commit `75c2a01` (`feat: improve brief flow and client index`), đã commit và push lên `origin/main`.
- `main` và `origin/main` đang cùng ở commit `75c2a01`.
- Working tree sạch, không có thay đổi chưa commit.

## 2. Những thay đổi đang có trong working tree

### Giao diện và nội dung

- Hero dùng nhãn `Director / Cinematographer`; title đã nhỏ và thoáng hơn.
- `Dự án chọn lọc` đã đổi thành `Dự án tiêu biểu`; mở đầu bằng ba TVC doanh nghiệp.
- Danh sách có 6 dự án, gồm `Somewhere Between The Sea And The Sunset`.
- Đã thêm section BTS `Trên hiện trường` sau Process với 3 ảnh ORPC tối ưu WebP.
- Client và Brief đã được đánh lại thành section 06 và 07.
- Form đã bỏ ngân sách và thêm một file đính kèm tài liệu, tối đa 7 MB phía trình duyệt.
- JavaScript đã có kiểm tra kích thước và đuôi file.
- Đã thay các câu chú thích mang giọng nội bộ bằng nội dung hướng tới người xem.
- Khu vực liên hệ có tiêu đề `Kết nối với XQuang`; form có tiêu đề `Gửi brief cho XQuang` riêng.
- Hai tiêu đề liên hệ và gửi brief được giữ trên một dòng bằng cỡ chữ responsive riêng.
- Body font đã chốt giữ Segoe UI / system sans cho release hiện tại.
- Selected Work hiển thị `Pullupinmymind` và đã chỉnh lại khoảng cách giữa metadata, tên dự án và vai trò.
- Footer đã thêm địa chỉ tại Lê Hồng Phong, Ngô Quyền, Hải Phòng.
- Dải số 01–07 trên desktop tự mở thành mục lục khi rê chuột hoặc dùng bàn phím focus, và tự thu gọn khi rời khỏi vùng mục lục.
- Form giữ tải trực tiếp tối đa 7 MB; file quá giới hạn được bỏ khỏi input và hướng người dùng sang ô link Google Drive/Dropbox/WeTransfer riêng.
- Form đã thêm số điện thoại không bắt buộc; khi chọn loại dự án `Khác`, ô mô tả loại dự án tự hiện, nhận focus và trở thành bắt buộc.
- Khi Netlify nhận brief thành công, form được thay bằng lời cảm ơn ngay trên trang; `/cam-on` là trang dự phòng khi JavaScript không chạy.
- Client index đã thêm Union Marina và Lam Homestay bằng logo và ảnh nền do XQuang cung cấp; không tự gắn link dự án khi chưa có URL thật.

### Hệ thống tài liệu

- Toàn bộ quy tắc dự án cũ được giữ nguyên ở đầu cả `AGENTS.md` và `CLAUDE.md`.
- Quy tắc context/workflow mới được nối phía dưới; hai file phải luôn giống nhau.
- Đã tạo `PRODUCT.md`, `ARCHITECTURE.md`, `DECISIONS.md`, `CURRENT.md`.
- Ba handoff/snapshot cũ đã chuyển nguyên vẹn vào `docs/archive/`.
- Không tạo `src/`; source buildless vẫn ở root.

## 3. Preview và hosting

- Local preview: `http://127.0.0.1:4173/` khi server local đang chạy.
- Netlify preview riêng: `https://sunny-gumdrop-b0e0ae.netlify.app`.
- Bản Netlify hiện tại được tạo bằng Drop thủ công từ release `69f72a4` và **chưa gồm** thay đổi mục lục/link tài liệu của lượt này.
- Netlify đã nhận diện form `project-brief` ở bản deploy cũ.
- Chưa coi email notification và luồng nhận file mới là đã hoạt động cho tới khi deploy bản mới và gửi thử thật.
- Chưa cấu hình GitHub auto-deploy.

## 4. Kiểm tra đã có bằng chứng

Trước khi tái cấu trúc tài liệu, đợt sửa giao diện đã đạt:

- JavaScript syntax pass.
- `git diff --check` pass.
- Không có asset path bị thiếu hoặc ID HTML trùng trong phép kiểm tra local.
- Đã xem trực tiếp Hero, BTS và form ở desktop local.

Sau khi tạo cấu trúc tài liệu, lượt kiểm tra ngày 2026-09-13 đã đạt:

- `node --check script.js` pass.
- `git diff --check` pass.
- 38 HTML ID là duy nhất; 21 đường dẫn asset local đều tồn tại.
- Đủ 8 file Markdown trong `docs/` kể cả archive; `AGENTS.md` và `CLAUDE.md` có nội dung giống nhau.
- Local preview phản hồi HTTP 200 tại `http://127.0.0.1:4173/`.

Sau lượt sửa copy, liên hệ và nhịp card ngày 2026-09-13:

- `node --check script.js` và `git diff --check` pass.
- 40 HTML ID là duy nhất; 13 link nội bộ có đích hợp lệ; 23 đường dẫn file local đều tồn tại.
- Desktop 1440 px và mobile 390 px không có tràn ngang; metadata, tên dự án và vai trò có nhịp 8 px / 12 px.
- Link `Gửi brief` trên mobile cuộn đúng tới tiêu đề form; khu vực liên hệ đứng riêng phía trước.
- Hai tiêu đề `Kết nối với XQuang` và `Gửi brief cho XQuang` đều giữ đúng một dòng tại 320 px, 390 px và 1440 px, không tạo tràn ngang.
- Console local không có warning hoặc error sau khi tải lại trang.

Sau review toàn bộ diff trước release ngày 2026-09-13:

- Không phát hiện lỗi chặn release trong source hoặc local preview.
- Phạm vi thay đổi đúng các nội dung đã chốt; không có dependency, framework hoặc build step mới.
- Ba tài liệu cũ được chuyển nguyên vẹn vào `docs/archive/`; blob Git trước và sau khi chuyển giống nhau.
- `AGENTS.md` và `CLAUDE.md` giống nhau; Segoe UI / system sans đã được ghi nhận là quyết định Accepted.
- Netlify Form, file upload và email notification vẫn là kiểm tra bắt buộc sau khi deploy, không được xem là đã xác minh bằng local review.

Sau lượt sửa mục lục và luồng tài liệu lớn ngày 2026-09-16:

- `node --check script.js` và `git diff --check` pass.
- 43 HTML ID là duy nhất; 20 link nội bộ có đích hợp lệ; 30 đường dẫn file local đều tồn tại.
- `AGENTS.md` và `CLAUDE.md` vẫn giống nhau; form chỉ có một trường `document-link`.
- Desktop 1440 px: mục lục mở/đóng đúng, Escape đóng và mục 02 dẫn đúng tới `#selected-work`.
- Mobile 390 px: mục lục ẩn theo layout hiện tại, không có tràn ngang; ô link tài liệu và nút gửi hiển thị đầy đủ.
- File TXT 7 MB + 1 byte bị bỏ khỏi input, hiện hướng dẫn dùng link và không còn chặn người dùng tiếp tục với link.

Sau lượt sửa mục lục, form brief và client index ngày 2026-09-16:

- Mục lục desktop được đo mở từ 52 px lên 216 px khi hover, nhãn hiện hoàn toàn; sau khi rời chuột tự thu về 52 px và ẩn nhãn.
- Khi chọn `Khác`, ô mô tả hiện ra, trở thành bắt buộc và tự nhận focus.
- Desktop 1440 px và mobile 390 px không có tràn ngang; trường số điện thoại dùng đúng kiểu `tel` và `autocomplete="tel"`.
- Union Marina hiển thị logo trên ảnh tàu; Lam Homestay hiển thị logo trên ảnh căn phòng; bố cục client desktop cân thành 2 hàng × 4 cột.
- Trang cảm ơn dự phòng hiển thị đúng thông điệp và không có tràn ngang.
- Email xác nhận tự động cho người gửi chưa được bật: Netlify Forms mặc định chỉ gửi notification tới người quản trị, nên cần dịch vụ gửi mail và địa chỉ người gửi đã xác minh.

## 5. Việc tiếp theo theo thứ tự an toàn

1. XQuang xem lại mục lục hover, form brief và hai client mới trên local preview.
2. Chọn cách gửi email xác nhận tự động, cung cấp dịch vụ gửi mail cùng địa chỉ người gửi/domain đã xác minh, rồi mới tích hợp và gửi thử.
3. Sau khi XQuang chốt, tạo commit mới; chỉ push/deploy khi có yêu cầu rõ ràng cho từng hành động.
4. Khi deploy, xác nhận Netlify nhận diện các trường `phone`, `other-project-type` và `document-link` trong form `project-brief`.
5. Gửi thử form trên Netlify: nội dung, trạng thái cảm ơn, honeypot, file nhỏ, link tài liệu, notification cho XQuang và email xác nhận cho khách (sau khi đã tích hợp dịch vụ mail).
6. Chạy PageSpeed Insights và Client Simulation trước vòng public tiếp theo.

## 6. Việc còn treo

- Cấu hình email notification cho XQuang và dịch vụ gửi email xác nhận tự động cho khách.
- Kiểm tra giới hạn file/request thực tế trên gói Netlify tại thời điểm deploy.
- Quyết định GitHub auto-deploy, tên miền Netlify dễ nhớ và domain chính thức.
- PageSpeed mobile và SEO content là vòng sau; AI SEO riêng sẽ xử lý nội dung SEO theo brief của XQuang.
