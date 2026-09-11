# Trạng thái build portfolio XQuang / Denoise — gửi Claude

> Snapshot ngày 10/09/2026. Đây là bản bàn giao trạng thái thực tế của code,
> không phải design proposal. Những mục ghi **đã build** đã có trong source;
> những mục ghi **chưa làm / chưa kiểm chứng** không được coi là đã hoàn tất.

## 1. Mục tiêu và vị trí project

- Project: portfolio cá nhân của XQuang, với Denoise là năng lực production đứng sau.
- Mục tiêu chuyển đổi duy nhất: khiến khách hàng có nhu cầu gửi brief.
- Ngôn ngữ: tiếng Việt.
- Thư mục hiện tại: `D:\Xây portfolio`.
- Preview local: `http://127.0.0.1:4173/`.
- Stack: HTML + CSS + JavaScript thuần, không React, không build step, không thư viện UI.
- Source chính: `index.html`, `style.css`, `script.js`.

## 2. Định vị nội dung đã áp dụng

Thứ tự ưu tiên đang dùng trên Hero, Selected Work và form:

1. TVC doanh nghiệp.
2. Nội dung dài hạn / retainer.
3. MV nghệ sĩ.

Hero hiện ghi rõ:

- XQuang là filmmaker tại Hải Phòng.
- Nhận TVC doanh nghiệp, hợp tác nội dung dài hạn và MV nghệ sĩ.
- Denoise vận hành production cùng core team 4 người.
- Vai trò của XQuang: ý tưởng, đạo diễn, camera, dựng và màu.

## 3. Cấu trúc 6 section đã build

### 01 — Hero

**Đã build:**

- Header cố định với wordmark `XQUANG / DENOISE PRODUCTION`.
- Font display Newsreader 800, theo hướng serif gợi tinh thần wordmark Sony nhưng không sao chép logo.
- Wordmark lớn hơn bản đầu và có hover/focus bằng màu accent + translateY nhẹ.
- CTA: `Gửi brief` và `Xem dự án`.
- Hero dùng poster làm phần tử tải trước.
- Hero loop dùng source local của MV Pullupinmymind:
  - Desktop: `assets/video/hero-desktop.mp4` — khoảng 1.31 MB.
  - Mobile: `assets/video/hero-mobile.mp4` — khoảng 130 KB.
  - Poster: `assets/images/hero-poster.webp` — khoảng 25 KB.
- JavaScript kiểm tra `prefers-reduced-motion` trước khi gán autoplay.
- Mobile chỉ tải video khi Hero đi vào viewport bằng `IntersectionObserver`.

### 02 — Selected Work

**Đã build 5 dự án, conversion-first:**

1. ORPC — TVC / 2026 — XQuang quay & dựng.
2. Thép Nhật Tiến — TVC / 2025 — XQuang quay & dựng.
3. Thủy sản Anh Minh — TVC / 2023 — XQuang quay & dựng.
4. Pullupinmymind — MV / 2025 — XQuang đạo diễn, DOP, quay, dựng, màu.
5. Còn Chờ Là Còn Nhớ — MV / 2025 — XQuang đồng đạo diễn, quay, dựng.

**Cách tải video:**

- Mỗi dự án ban đầu chỉ tải thumbnail tĩnh.
- Iframe Vimeo chỉ được tạo sau khi người xem bấm `Phát phim / Vimeo`.
- Không tự host lại video dài.

**Thumbnail đã thay bằng frame chọn lại:**

- ORPC: khung nhà máy/máy móc có nhân sự vận hành.
- Thủy sản Anh Minh: dây chuyền chế biến thực tế, có nhận diện AMFCO.
- Pullupinmymind: khung dancer/artist và hệ ánh sáng projection.
- Thép Nhật Tiến và Còn Chờ Là Còn Nhớ giữ asset hiện tại vì phương án thay thế kém sạch hơn.

### 03 — Case Studies

**Đã build 2 hồ sơ đúng thứ tự:**

`Role / Scope / Credits → Decision → Execution → Outcome`

1. **Pullupinmymind**
   - XQuang: Producer, Director, DOP, Camera, Editor, Colorist.
   - Denoise: Executive Production.
   - Quyết định: tìm studio phù hợp cho dancer và hệ ánh sáng đặc biệt.
   - Execution: chu kỳ từ ý tưởng đến phát hành kéo dài 1 tháng.
   - Outcome chỉ ghi nhận định tính, không bịa số liệu phản hồi.

2. **Hẹn Em Ở Lễ Đường**
   - Director: Nguyễn Đức Anh.
   - XQuang: Camera, Editor, Colorist, Foley.
   - Denoise: Executive Production.
   - Execution: 3 ngày on set trong giới hạn nguồn lực.
   - Outcome: hoàn thiện bản tối ưu và đưa sản phẩm lên YouTube.

### 04 — Quy trình làm việc

**Đã rút 9 khâu nội bộ thành 4 giai đoạn nhìn từ phía khách hàng:**

1. Nhận brief & chốt dự án.
2. Tiền kỳ & điều phối.
3. Quay & hậu kỳ.
4. Nghiệm thu & hoàn tất.

Các proof point vẫn được giữ: báo giá, hợp đồng, cọc 30–50%, storyboard,
moodboard, lịch/ekip, feedback nội bộ, một vòng feedback khách, khóa final,
thanh toán, archive và ghi số liệu.

### 05 — Client Index

**Đã build:**

- Logo/wordmark: ORPC, Nhật Tiến, AMFCO, Rollin, Shartnuss, Wavy Channel.
- Hover/focus logo sẽ hiện frame của job tương ứng và nhãn hành động.
- Bấm logo dẫn về project/case study nội bộ; Wavy Channel dẫn sang Vimeo.
- Không dùng infinite marquee.
- Texture xước thật lấy từ avatar/logo Denoise được dùng tại section này.
- Texture chuyển động bằng opacity và translateY nhỏ; tắt khi người xem bật
  `prefers-reduced-motion`.

### 06 — Gửi brief và liên hệ

**Form đã build:**

- Markup Netlify Forms + honeypot.
- Trường: tên, email, doanh nghiệp/nghệ sĩ, loại dự án, khoảng ngân sách,
  thời gian mong muốn và brief ngắn.
- Loại dự án: TVC doanh nghiệp, retainer, MV nghệ sĩ, khác.
- Ngân sách: 10–20 triệu, 20–30 triệu, trên 30 triệu, chưa xác định.
- Cam kết: phản hồi xác nhận brief trong vòng 1 ngày làm việc.

**Contact Index đã build cạnh form:**

- Email: `nguyenichminhquang1998@gmail.com`.
- Điện thoại: `0326 826 513`.
- Zalo: `0822 394 289` — khác số điện thoại.
- Facebook: `https://www.facebook.com/minhquang.nguyen.1675/`.
- Vimeo: `https://vimeo.com/user40282194`.
- QR Zalo đã cắt gọn thành `assets/images/zalo-qr.webp`, 540×540, khoảng 21 KB.
- QR và nút `Mở Zalo` cùng dẫn tới `https://zalo.me/0822394289`.
- Icon email, điện thoại, Facebook và Vimeo là SVG inline tùy biến, đặt trong
  khung gợi perforation của film; không dùng icon library.
- Contact panel dùng texture xước Denoise rõ hơn, cùng quy tắc giảm chuyển động.
- Footer lặp lại link ngắn: Email, Facebook, Vimeo.

## 4. Visual system đang chạy

- Nền: `#0E0D0C`.
- Surface: `#17140F`.
- Chữ chính: `#EDEAE4`.
- Chữ phụ: `#8C8579`.
- Accent: `#8A6A3C`, chỉ dùng cho CTA/hover/focus.
- Error/success dành riêng cho trạng thái form.
- Hướng tổng thể: Archival Index / call sheet / production log.
- Có production rail đánh số `01–06` ở desktop.
- Motion chỉ dùng opacity và translateY nhỏ, easing
  `cubic-bezier(0.16, 1, 0.3, 1)`, thời lượng 600–800 ms.
- Không gradient trang trí, glassmorphism, glow, bento grid, blob, text gradient
  hoặc stock photography.

### Chênh lệch cần Claude lưu ý

`AGENTS.md` ghi body font dự kiến là **IBM Plex Sans 400/600**, nhưng code thật
trong `style.css` hiện vẫn dùng:

```css
--font-body: "Segoe UI", Arial, sans-serif;
```

Newsreader đã self-host; IBM Plex Sans chưa được thêm vào asset. Đây là điểm
chưa chốt/hoàn thiện, không được báo cáo là đã dùng IBM Plex Sans.

## 5. Accessibility và responsive đã có

- Mobile-first.
- Nút/CTA chính đạt tối thiểu 44 px.
- Focus-visible dùng outline accent rõ.
- Có skip link.
- Có aria-label cho navigation, video facade, logo client và QR Zalo.
- Hình dưới fold dùng `loading="lazy"`.
- Video có `muted`, `loop`, `playsinline`, poster và `preload="metadata"`.
- Reduced motion được kiểm tra cả CSS và JavaScript.
- Tiêu đề `Dự án chọn lọc` và `Hồ sơ dự án` đã tăng line-height/spacing để
  dấu tiếng Việt không còn bị sát.

## 6. Kiểm chứng kỹ thuật gần nhất

**Đã kiểm tra:**

- `script.js` qua syntax check.
- Không có ID trùng trong HTML.
- Không thiếu asset local đang được HTML tham chiếu.
- Số ngoặc CSS cân bằng.
- Hero desktop khoảng 1.31 MB, dưới ngưỡng 4 MB.
- Hero mobile khoảng 130 KB, dưới ngưỡng 1.5 MB.
- Preview local trả HTTP 200.
- Vòng kiểm tra trình duyệt trước khi thêm contact cho thấy không có console error.

## 7. Chưa làm / chưa được coi là hoàn tất

1. Chưa deploy chính thức; hiện mới chạy local.
2. Netlify Forms mới có markup, chưa kiểm tra trên deployment thật:
   - email notification;
   - success/error state;
   - reply handling;
   - spam/honeypot thực tế;
   - fallback khi form lỗi.
3. Chưa chạy PageSpeed Insights mobile; mục tiêu LCP chưa được đo trên mạng thật.
4. Chưa cấu hình domain, HTTPS production hoặc analytics.
5. Chưa chạy Client Simulation với 3 persona trước deploy.
6. Chưa có quyết định cuối cùng cho body font IBM Plex Sans hay giữ system font.
7. Chưa có baseline commit: toàn bộ file project hiện vẫn đang ở trạng thái
   untracked trong Git.
8. Cường độ grain/contact panel mới được triển khai theo yêu cầu mới nhất;
   XQuang cần duyệt trực tiếp bằng mắt trước khi coi là chốt.

## 8. Phạm vi review đề nghị cho Claude

Claude nên review **read-only trước**, tập trung vào:

1. Contact Index có làm form gửi brief bị mất ưu tiên hay không.
2. Grain/xước đã đủ nhận diện Denoise nhưng chưa lấn át footage hay chưa.
3. Các icon kiểu film có dễ hiểu mà không cần đoán hay không.
4. Chênh lệch IBM Plex Sans so với Segoe UI có đáng sửa ở giai đoạn này không.
5. Conversion blocker, positioning confusion và missing proof còn lại.
6. Các vấn đề mobile/accessibility/performance có bằng chứng cụ thể.

Không tự redesign toàn trang, không thêm section, không đổi nội dung đã chốt và
không deploy trước khi XQuang duyệt kết quả review/Client Simulation.

