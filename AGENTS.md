# Dự án: Portfolio landing page — XQuang / Denoise Production House

## Phạm vi file

Đây là hướng dẫn cấp project cho workspace portfolio này và các thư mục con.
File bổ sung, không thay thế, các nguyên tắc làm việc global của Codex.

Các mục đánh dấu `[MẶC ĐỊNH TẠM — Fork X]` là giá trị an toàn để có thể
test ngay trong khi chờ XQuang trả lời `portfolio-decision-menu.md`. Không
coi chúng là quyết định cuối cùng; khi Decision Menu được chốt, cập nhật đúng
các mục liên quan và không tự mở rộng sang phần khác.

## Bối cảnh

Chủ thể: cinematographer/director cá nhân tại Hải Phòng, Việt Nam.
Denoise Production House xuất hiện như credit/năng lực vận hành đứng sau,
KHÔNG phải trọng tâm — đây là trang cá nhân, không phải trang công ty.
Chuyên: TVC, MV, fashion film, branded content.
Việc duy nhất của trang: khiến khách hàng thương hiệu gửi brief.

Định vị nội dung: [ĐÃ CHỐT — Fork 4]
Thứ tự ưu tiên phải nhất quán trên Hero, Selected Work và form:
1. TVC doanh nghiệp — loại job muốn nhận thêm nhất.
2. Nội dung dài hạn/retainer — hình thức hợp tác đang nhận, không trình bày
   như thành tích đã được chứng minh vì case retainer không công khai.
3. MV nghệ sĩ — bằng chứng cá tính hình ảnh và khả năng sản xuất.

Denoise là core production team 4 người gồm XQuang và 3 cộng sự. Tùy dự án,
XQuang đảm nhận ý tưởng, đạo diễn, camera, dựng và color.

Ngôn ngữ trang: [ĐÃ CHỐT — Fork 6] Chỉ tiếng Việt.

Traffic: [ĐÃ CHỐT — Fork 5] Người xem chủ yếu chưa biết rõ XQuang nhưng đã
có nhu cầu và nhận link portfolio sau khi liên hệ. Hero phải tự giải thích
nhanh XQuang làm gì, Denoise là ai và dẫn tới hành động gửi brief.

## Ràng buộc kiến trúc

- HTML + CSS + JS thuần. KHÔNG React, KHÔNG build step.
- Một file `index.html`, một `style.css`, một `script.js`.
- LCP mục tiêu < 2.0s trên 4G. Poster ảnh, không phải video, là LCP element.
- Mobile-first. Ưu tiên ổn định cross-browser — tránh CSS/JS trick dễ vỡ,
  ưu tiên layout chống vỡ (bulletproof layout) để giảm thời gian debug.
- Tôn trọng `prefers-reduced-motion` — PHẢI kiểm tra bằng JS
  (`window.matchMedia('(prefers-reduced-motion: reduce)')`) trước khi gán
  thuộc tính `autoplay` cho video, không chỉ dựa vào CSS.
- Focus state bàn phím phải nhìn thấy rõ.

## Video trên mobile — quy tắc đã chốt

KHÔNG ẩn hoàn toàn video trên mobile. Thay vào đó:

1. Poster tải trước (LCP element).
2. Một bản video mobile riêng: 4–5 giây loop, dưới 1.5MB, không tiếng.
3. Tải bản video mobile qua `IntersectionObserver` — chỉ khi Hero vào khung nhìn.
4. KHÔNG dùng Network Information API (Safari iOS hỗ trợ kém).

## Video/embed dài (showreel, case study)

- Nhúng iframe Vimeo/YouTube có sẵn, KHÔNG tự host lại.
- Với mọi embed nằm dưới fold: dùng poster facade (ảnh tĩnh giống khung
  player, chỉ tải iframe thật khi người dùng click) — tránh việc iframe
  Vimeo/YouTube làm nặng trang hơn cả phần còn lại cộng lại.
- Hero loop KHÔNG áp dụng facade — đây là video tự host, tải theo quy tắc
  mobile ở trên.

## Design tokens

Palette — 5 giá trị gốc, cộng 1 cặp semantic riêng cho form validation:

```css
--bg:      #0E0D0C;
--surface: #17140F;
--text:    #EDEAE4;
--muted:   #8C8579;
--accent:  #8A6A3C; /* lấy từ màu thật trong footage Vimeo — vàng đồng ấm */
--error:   #C0392B; /* CHỈ dùng cho validation form, không dùng chỗ khác */
--success: #4A7A5C; /* CHỈ dùng cho validation form, không dùng chỗ khác */
```

Biến thể opacity từ 5 token gốc được phép dùng cho border/overlay
(ví dụ `--text` ở 10% làm viền mảnh) — không cần thêm màu mới ngoài hệ trên.

Accent (`--accent`) CHỈ dùng cho phần tử tương tác: nút CTA, link đang
hover, focus state. KHÔNG bao giờ dùng để trang trí nội dung tĩnh.
Không giới hạn theo số lần đếm cứng — giới hạn theo CHỨC NĂNG sử dụng.

Typography:

- Display: Newsreader 800 — serif có tương phản nét và nhịp chữ gợi tinh thần
  wordmark SONY mà XQuang đã chọn, nhưng không sao chép logo; dùng cho Hero,
  brand và heading để tạo chất điện ảnh/editorial. Font hỗ trợ tiếng Việt,
  được self-host bằng WOFF2 variable kèm giấy phép OFL.
- Body: IBM Plex Sans 400/600 — dễ đọc tiếng Việt, hợp credit/call sheet.
- Mono: system stack — `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`.
  Không tải font ngoài cho mono — nhẹ hơn, và "thật" hơn về mặt cảm giác
  tài liệu/spec-sheet so với mono webfont thiết kế riêng.
- CẤM mặc định: Inter, Roboto, Poppins, Montserrat, Open Sans, Lato.
- [MẶC ĐỊNH TẠM — Fork 1 = A] Lệnh cấm trên vẫn giữ nguyên, CỘNG THÊM yêu
  cầu: mọi lựa chọn font phải kèm lý do art direction rõ ràng, không chỉ
  tránh danh sách cấm là đủ.

Spacing scale: 8 / 16 / 24 / 48 / 96 / 160px — là SCALE ƯU TIÊN, không phải
lệnh cấm tuyệt đối. Ngoại lệ hợp lệ: border-width (1–2px), line-height
(tỷ lệ không đơn vị), và `clamp()` khi cần fluid spacing/type responsive.

Type scale: 13 / 15 / 18 / 28 / 48 / 88px.

## Motion

Chỉ hai loại: opacity fade, translateY tối đa 24px.
Easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Duration 600–800ms.
CẤM: bounce, rotate, parallax mạnh, scale hover > 1.03, hiệu ứng chữ chạy
từng ký tự, marquee vô cớ không phục vụ nội dung.
Motion chỉ được thêm nếu nó giúp HIỂU hoặc ĐIỀU HƯỚNG — không phải mặc
định khi một section "trông phẳng". Kiểm tra content/hierarchy/typography/
composition trước khi cân nhắc thêm chuyển động.

## Anti-AI Design Rule

Portfolio này không được trông giống template AI/SaaS/agency mặc định. CẤM:

- Gradient nền mang tính trang trí nếu không có lý do concept.
- Glassmorphism.
- Bento grid mặc định.
- Glow effects.
- Floating blobs.
- Cursor effects không phục vụ UX.
- Text gradient.
- Infinite marquee nếu không có lý do nội dung.
- Section "About / Services / Testimonials" theo template chưa được duyệt.
- Stock photography.
- Câu marketing rỗng: "We tell stories", "Bringing visions to life",
  "Where creativity meets...", "Your vision, our passion".

Mọi quyết định thị giác phải trả lời được: "Điều này có liên quan đến
XQuang và cách XQuang làm phim không?" Nếu không → loại bỏ.

## Hướng tham chiếu thẩm mỹ

Archival Index / Trinket Design (xu hướng 2026): bố cục kiểu tài liệu lưu
trữ — nhãn metadata (tọa độ, số thứ tự, ngày tháng) đặt ở góc, lưới
hairline mảnh, đơn sắc, cảm giác call sheet/slate phim trường. Đây là
hướng khác biệt chính của trang, không phải chi tiết trang trí phụ.

## Asset Inventory (thật, không bịa placeholder)

- Logo "Denoise Production House": 2 font khác nhau trong 1 wordmark —
  chữ chính bo tròn/geometric đậm (họ gần Poppins Black/Gilroy ExtraBold),
  chữ phụ "PRODUCTION HOUSE" vuông kỹ thuật (họ gần Eurostile/square sans).
  Logo hoàn toàn đơn sắc, không có màu thương hiệu chính thức trước đây.
- Texture: nền đen có vết xước (dùng cho avatar MXH) — dùng CHỌN LỌC một
  vài chỗ trên web (ví dụ divider giữa section, hover state ảnh dự án),
  KHÔNG phủ toàn trang.
- Vimeo showcase: nhúng iframe, không tự host. Giữ 1 bản MP4 dự phòng
  local cho đúng clip hero quan trọng nhất — phòng rủi ro gián đoạn
  Vimeo Plus subscription.
- Màu accent `#8A6A3C` lấy trung bình từ mẫu màu thật trong thumbnail
  Vimeo (dự án MV, nội thất) — không phải màu bịa.
- File "METROPOLIS Director's Treatment" (nếu còn trong thư mục tham
  khảo) CHỈ là template tải về, KHÔNG phải nhận diện thật của Denoise —
  không dùng làm căn cứ màu sắc/bố cục.

Không bịa asset, tên dự án, client, credit, số liệu, testimonial hoặc outcome.
Khi thiếu dữ liệu thật, dừng ở skeleton/nhãn thiếu dữ liệu và hỏi XQuang.

## Nội dung dự án đã chốt

Mọi dự án dưới đây đã được XQuang xác nhận quyền công khai.

Selected Work theo thứ tự conversion-first:

1. ORPC — TVC, XQuang quay và dựng.
2. Thép Nhật Tiến — TVC, XQuang quay và dựng.
3. Thủy sản Anh Minh — TVC, XQuang quay và dựng.
4. Pullupinmymind — MV, XQuang là Producer/Director/DOP/Cam Op/Editor/Colorist.
5. Còn Chờ Là Còn Nhớ — MV, XQuang đồng đạo diễn, quay và dựng.

Case study đã chốt:

1. Pullupinmymind — nhấn quyết định sáng tạo và việc XQuang giữ định hướng
   xuyên suốt; tiến trình từ ý tưởng đến phát hành kéo dài 1 tháng.
2. Hẹn Em Ở Lễ Đường — nhấn vận hành production 3 ngày on set trong giới
   hạn kinh phí. Director/Screenwriter là Nguyễn Đức Anh; XQuang phụ trách
   Camera/Editor/Colorist/Foley; Denoise là Executive Production.

Không dùng “thành công” hoặc “nhiều phản hồi tốt” như bằng chứng định lượng
khi chưa có số liệu hoặc phản hồi có thể dẫn nguồn.

## Quy trình làm việc đã chốt

Hiển thị thành 4 giai đoạn, giữ đầy đủ các khâu vận hành nội bộ:

1. Nhận brief & chốt dự án — tiếp nhận, làm rõ scope, báo giá, hợp đồng,
   cọc 30–50%.
2. Tiền kỳ & điều phối — storyboard, moodboard, reference, pitching, lịch,
   phân công ekip.
3. Quay & hậu kỳ — on set, dựng, color, feedback nội bộ, 1 vòng feedback
   khách, khóa final.
4. Nghiệm thu & hoàn tất — bàn giao, thanh toán còn lại, archive và ghi số liệu.

## Case Study — khung bắt buộc

Cấu trúc theo đúng thứ tự:

1. **Role / Scope / Credits** — vai trò chính xác của XQuang, phạm vi
   Denoise đảm nhiệm, agency/client liên quan (nếu được phép nêu).
2. **Decision** — bài toán khách, ràng buộc thật (thời gian/ngân sách/
   nhân sự), quyết định sáng tạo và lý do.
3. **Execution** — số ngày sản xuất, số location, quy mô crew, chi tiết
   thực thi cụ thể.
4. **Outcome** — deadline, approval time, campaign usage, khách quay lại.
   KHÔNG công khai ngân sách khách hàng trừ khi có xác nhận cho phép.

Trước khi đưa bất kỳ dự án nào vào Selected Work/case study, PHẢI qua gate:
quyền sử dụng footage/nhạc/hình BTS/logo khách/hình ảnh nhân vật đã được
xác nhận hay chưa. Dự án đẹp nhưng không có quyền công khai → loại, không
đưa vào danh sách ứng viên.

## Form gửi brief

[ĐÃ CHỐT — Fork 7] Có trường loại dự án theo thứ tự: TVC doanh nghiệp,
nội dung định kỳ/retainer, MV nghệ sĩ, khác. Khoảng ngân sách: 10–20 triệu,
20–30 triệu, trên 30 triệu, chưa xác định.
[MẶC ĐỊNH TẠM — Fork 3 = B] KHÔNG dựng hệ thống lead-scoring riêng ngoài
website — 2 trường trên là đủ ở quy mô hiện tại.
Dùng Netlify Forms làm backend thật; email nhận thông báo cấu hình trong
Netlify, không hard-code email cá nhân vào source. Dòng cam kết dưới form:
"Denoise phản hồi xác nhận brief trong vòng 1 ngày làm việc và hẹn bước
trao đổi tiếp theo."

## Cấu trúc trang đã yêu cầu

Giữ đúng sáu section, theo thứ tự:

1. Hero: showreel loop + định vị.
2. Selected Work: 5 dự án dạng lưới.
3. Case study: 2 dự án, theo đúng khung bắt buộc ở trên.
4. Quy trình làm việc: 4 bước.
5. Client logos.
6. Form gửi brief.

Không tự thêm section khi chưa được XQuang duyệt.

## Quy trình triển khai bắt buộc

1. Trước khi viết code, chỉ hỏi những câu còn thiếu thông tin, tối đa 7 câu,
   xếp theo mức ảnh hưởng; không hỏi lại điều đã có trong file này.
2. Dựa trên câu trả lời, viết design plan trước khi code: cách dùng palette,
   cặp font và lý do art direction, wireframe ASCII desktop/mobile, cùng một
   signature element duy nhất theo hướng Archival Index. Tự phản biện và loại
   phần nào có thể áp dụng nguyên xi cho bất kỳ portfolio filmmaker nào.
3. Dựng skeleton/grayscale cho TOÀN BỘ trang, đủ 6 section và đúng thứ tự,
   để duyệt nhịp tổng thể trước khi polish.
4. Dừng chờ XQuang duyệt skeleton. Sau đó chỉ polish từng section theo thứ tự
   và dừng xin duyệt sau mỗi section.
5. Chạy một vòng mobile riêng; liệt kê thay đổi trước khi sửa.
6. Trước deploy, chạy Client Simulation ở ba góc nhìn và chỉ audit, không tự
   sửa cho tới khi XQuang quyết định.

## Nguyên tắc triển khai chi tiết

- Không tự thêm thư viện ngoài.
- [MẶC ĐỊNH TẠM — Fork 2 = B] Nội dung mobile được phép đổi định dạng
  trình bày (đoạn văn → bullet) để dễ đọc hơn, nhưng CẤM xóa bỏ bằng
  chứng/proof point khi rút gọn cho mobile.
- Video dài (showreel, case study) LUÔN nhúng qua iframe có sẵn, không tự
  tải về host lại.
- Khi một section bị phẳng, kiểm tra content, hierarchy, typography,
  composition và asset trước; chỉ thêm micro-interaction nếu nó giúp hiểu
  hoặc điều hướng và vẫn tuân thủ Motion rule.
- Nút bấm trên mobile tối thiểu 44px chiều cao.
- Không bắt đầu polish khi chưa có duyệt skeleton.
