# Dự án: Portfolio landing page — XQuang / Denoise Production House

## Bối cảnh
Chủ thể: cinematographer/director cá nhân tại Hải Phòng, Việt Nam.
Denoise Production House xuất hiện như credit/năng lực vận hành đứng sau,
KHÔNG phải trọng tâm — trang cá nhân, không phải trang công ty.
Việc duy nhất của trang: khiến khách hàng thương hiệu gửi brief.
Ngôn ngữ: chỉ tiếng Việt.

## Định vị nội dung — ĐÃ CHỐT
Ưu tiên hiển thị đúng 3 loại job XQuang muốn nhận thêm, theo đúng thứ tự:
1. TVC doanh nghiệp
2. Nội dung dài hạn / retainer
3. MV nghệ sĩ
Đây là dữ liệu thật đã được XQuang xác nhận, không phải suy đoán. Hero,
Selected Work và form đều phản ánh đúng thứ tự này.

## Selected Work — 6 dự án
Dự án thứ 6: **Somewhere Between The Sea And The Sunset** (Film, 2026),
Vimeo `https://vimeo.com/1224508727`, tác giả hiển thị trên Vimeo: XQuang.
Thumbnail web lấy từ frame `Timeline 1_01_01_53_06.jpg`.
Đây là dự án cá nhân; XQuang phụ trách quay và dựng; quyền công khai đã
được XQuang xác nhận.

## Ràng buộc kiến trúc
- HTML + CSS + JS thuần. KHÔNG React, KHÔNG build step.
- LCP mục tiêu < 2.0s trên 4G. Poster ảnh là LCP element.
- Ưu tiên ổn định cross-browser, tránh CSS/JS trick dễ vỡ.
- prefers-reduced-motion PHẢI kiểm tra bằng JS trước khi autoplay video.
- Focus state bàn phím phải nhìn thấy rõ.

## Video mobile
Không ẩn hoàn toàn. Poster tải trước → video mobile riêng (4–5s, <1.5MB,
không tiếng) tải qua `IntersectionObserver` khi Hero vào khung nhìn. Không
dùng Network Information API.

## Video/embed dài
Nhúng iframe Vimeo, không tự host lại. Poster facade cho mọi embed dưới
fold — chỉ tải iframe khi người dùng bấm "Phát phim / Vimeo".

## Design tokens
  --bg:      #0E0D0C
  --surface: #17140F
  --text:    #EDEAE4
  --muted:   #8C8579
  --accent:  #8A6A3C   /* chỉ dùng cho CTA/hover/focus */
  --error:   #C0392B   /* chỉ dùng validation form */
  --success: #4A7A5C   /* chỉ dùng validation form */

Typography:
  Display: Newsreader 800 (serif) — ĐÃ BUILD, giữ nguyên.
    Ghi chú mở: đây là lựa chọn thẩm mỹ đẹp nhưng KHÔNG cùng họ với logo
    Denoise Production House gốc (logo là sans bo tròn đậm). Đây là đánh đổi thẩm mỹ vs
    nhất quán thương hiệu đã được XQuang biết và chấp nhận giữ nguyên.
  Body: hệ thống hiện tại — cần xác nhận IBM Plex Sans hay giữ Segoe UI
    (xem mục 3, việc cần xác minh — CHƯA chốt).
  Mono: system stack (`ui-monospace, SFMono-Regular, Menlo, Consolas`).
  CẤM mặc định: Inter, Roboto, Poppins, Montserrat, Open Sans, Lato. Mọi
  lựa chọn font phải kèm lý do art direction.

Spacing: 8/16/24/48/96/160px là ưu tiên, ngoại lệ cho border/line-height/
`clamp()`.

## Motion
Chỉ opacity fade + translateY tối đa 24px. Easing cubic-bezier(0.16, 1,
0.3, 1). 600–800ms. Không mặc định thêm motion khi section "trông phẳng"
— kiểm tra content/hierarchy trước.

## Anti-AI Design Rule
Cấm: gradient trang trí vô cớ, glassmorphism, bento grid mặc định, glow,
floating blob, cursor effect không phục vụ UX, text gradient, marquee vô
cớ, stock photography, câu marketing rỗng. Mọi quyết định thị giác phải
trả lời: "Điều này có liên quan đến XQuang và cách XQuang làm phim không?"

## Case Study — 3 hồ sơ, khung bắt buộc Role/Scope/Credits → Decision →
Execution → Outcome

1. **Pullupinmymind** (MV, 2025) — ĐÃ BUILD, giữ nguyên nội dung hiện tại.
2. **Hẹn Em Ở Lễ Đường** (MV, 2025) — ĐÃ BUILD, giữ nguyên. Quyền công
   khai đã được XQuang xác nhận.
3. **ORPC** (TVC, 2026) — ĐÃ BUILD.
   - XQuang: Camera, Flycam. Dựng: Phong. Đầu mối dự án: Vinh Vui Vẻ.
   - Scope: ghi hình nhà máy của doanh nghiệp Trung Quốc tại DEEP C Hải
     Phòng, sản xuất ván dùng trên nước, SUP, kayak và sản phẩm thể thao nước.
   - Ekip 4 người; chỉ có 4 ngày từ lúc book đến khi bàn giao sản phẩm.
   - Outcome: giao đúng hạn, khách duyệt rất nhanh.

KHÔNG công khai ngân sách khách hàng trừ khi có xác nhận cho phép.

## Quy trình làm việc (Process section) — SOP thật, đã sửa
Bước 1 "Nhận brief & chốt dự án": cọc **50%** (số cố định, KHÔNG phải
30–50%) trước khi xác nhận dự án.
Bước 3 "Quay & hậu kỳ": tối đa **2 vòng sửa** hậu kỳ (KHÔNG phải 1 vòng),
sau đó khóa bản final.
Đây là cam kết thật với khách hàng — sửa đúng số, không diễn giải lại.

## Client Index
Logo: ORPC, Thép Nhật Tiến, AMFCO, Rollin, Shartnuss, Wavy Channel.
ĐÃ XÁC MINH: file gốc ghi "NHATTIEN STEEL". Bản crop web đã được sửa để
hiển thị đủ tên và biểu tượng, không còn mất chữ đầu/cuối.
Wavy Channel dùng logo thật `client-wavy.webp`; ảnh ekip `client-wavy.webp`
trong thư mục images làm nền chìm khi hover/focus.

## Form gửi brief — ĐÃ SỬA
Trường: tên, email, doanh nghiệp/nghệ sĩ (không bắt buộc), loại dự án,
ngân sách, thời gian mong muốn (không bắt buộc), brief ngắn.

**Ngân sách: KHÔNG dùng dropdown nhiều mức.** Chỉ một giá trị cố định:
"Sẽ trao đổi trực tiếp" — bỏ hoàn toàn 3 mức số cụ thể (10–20tr/20–30tr/
>30tr) đã build trước đó, vì đây là số Codex tự chọn, chưa từng được xác
nhận. Có thể hiển thị dạng field tĩnh (không phải dropdown) vì chỉ có 1
giá trị.

Backend: Netlify Forms + honeypot — giữ nguyên. Cam kết phản hồi trong 1
ngày làm việc — giữ nguyên.

## Git — baseline đã tạo
Baseline trước các sửa đổi bản chốt cứng: commit `d40441d` (`chore:
baseline portfolio before final revisions`). Giữ đây là điểm rollback;
không ghi đè hoặc xóa baseline.
