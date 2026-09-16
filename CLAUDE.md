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
  Body: Segoe UI / system sans — ĐÃ CHỐT, giữ nguyên.
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

---

# QUY TẮC BỔ SUNG — Cấu trúc context và trạng thái mới

Phần trên là toàn bộ quy tắc cũ và được giữ nguyên. Phần bổ sung này ghi nhận các quyết định mới hơn và cách Claude/Codex phải đọc repository. Nếu một câu trong phần bổ sung ghi rõ “thay thế”, câu đó có hiệu lực thay cho nội dung cũ tương ứng nhưng không xóa lịch sử cũ.

## Cập nhật sản phẩm đã chốt sau bản cũ

- Hero dùng nhãn vai trò ngắn: `Director / Cinematographer`; không liệt kê toàn bộ vai trò tại Hero.
- Tiêu đề section là `Dự án tiêu biểu`; phần dẫn mở đầu bằng ba TVC doanh nghiệp.
- Sau Process có section `Trên hiện trường`, dùng ảnh BTS thật của XQuang cùng Denoise Production House.
- Client Index là section 06; Brief là section 07.
- **Quy tắc mới thay thế phần ngân sách ở trên:** form bỏ hoàn toàn trường ngân sách, không dùng dropdown và cũng không hiển thị field tĩnh “Sẽ trao đổi trực tiếp”.
- Form nhận một tài liệu không bắt buộc: PDF, Word, Excel, PowerPoint hoặc TXT; tối đa 7 MB ở phía trình duyệt.
- Backend vẫn là Netlify Forms + honeypot; việc nhận form, file và email notification chỉ được coi là xong sau khi test trên bản deploy thật.
- Mục điều hướng đánh số 01–07 ở desktop phải có nút mở mục lục để hiện rõ tên từng section; hỗ trợ chuột, bàn phím và phím Escape.
- File lớn hơn 7 MB dùng trường link tài liệu không bắt buộc (Google Drive, Dropbox hoặc WeTransfer); không tăng giới hạn tải trực tiếp khi Netlify Forms vẫn giới hạn toàn bộ request ở 8 MB.
- **Quy tắc mới thay thế cách mở mục lục bằng nút ở trên:** trên desktop, đưa chuột vào dải số 01–07 thì mục lục tự mở; di chuột ra thì tự đóng. Bàn phím vẫn mở mục lục bằng `focus-within`.
- Form có thêm số điện thoại không bắt buộc; khi chọn loại dự án `Khác`, ô mô tả loại dự án tự hiện và nhận focus.
- Gửi brief thành công hiển thị ô cảm ơn ngay trong trang; `/cam-on` là trang cảm ơn dự phòng khi JavaScript không chạy.
- Netlify Forms mặc định không tự gửi email xác nhận cho người điền form. Không được nói auto-email đã hoạt động trước khi có dịch vụ gửi mail, địa chỉ người gửi hợp lệ và test thật trên bản deploy.
- Client Index có thêm Union Marina và Lam Homestay bằng logo/ảnh thật do XQuang cung cấp; chưa có link dự án công khai thì không tự tạo link.

## Thứ tự đọc context bắt buộc

Trước khi lập kế hoạch hoặc sửa code, đọc đủ theo thứ tự:

1. `docs/PRODUCT.md` — sản phẩm dành cho ai, nội dung thật và mục tiêu chuyển đổi.
2. `docs/ARCHITECTURE.md` — cấu trúc kỹ thuật, media, form và cách deploy.
3. `docs/DECISIONS.md` — các quyết định đã được XQuang chốt.
4. `docs/CURRENT.md` — trạng thái Git, việc đang dở và bước tiếp theo.

Các file trong `docs/archive/` chỉ là lịch sử tham khảo, không phải yêu cầu hiện hành.

## Thứ tự ưu tiên khi có mâu thuẫn

1. Yêu cầu trực tiếp mới nhất của XQuang trong phiên hiện tại.
2. Quy tắc trong `AGENTS.md` và `CLAUDE.md`.
3. Quyết định `Accepted` mới nhất trong `docs/DECISIONS.md`.
4. `docs/PRODUCT.md` và `docs/ARCHITECTURE.md`.
5. `docs/CURRENT.md` chỉ mô tả trạng thái, không tự tạo quyết định chiến lược.

Nếu hai nguồn vẫn mâu thuẫn hoặc có nhiều cách hiểu làm thay đổi kết quả, dừng lại, nêu rõ điểm chưa chắc và hỏi XQuang trước khi sửa.

## Suy nghĩ trước khi code

- Nêu rõ giả định trước khi làm. Không chắc thì hỏi; không đoán dữ kiện dự án.
- Nếu có nhiều cách hiểu, trình bày ngắn gọn các cách và ảnh hưởng.
- Nói thẳng khi có giải pháp đơn giản, ổn định hoặc ít rủi ro hơn.
- Với task nhiều bước, dùng kế hoạch ngắn: `Bước → cách kiểm tra`.
- Không bịa credit, vai trò, kết quả, số liệu, quyền sử dụng asset hoặc lời chứng thực.

## Đơn giản và sửa đúng phạm vi

- Source tiếp tục là `index.html`, `style.css`, `script.js` ở root; không tạo `src/` khi project chưa có build step.
- Viết lượng code tối thiểu giải quyết đúng yêu cầu; không thêm abstraction hoặc config “để sau này”.
- Chỉ sửa phần liên quan trực tiếp; giữ style hiện có và không tiện tay refactor phần đang chạy tốt.
- Giữ nguyên thay đổi chưa commit của người dùng hoặc agent khác.
- Nếu thay đổi tạo code thừa, chỉ dọn phần thừa do chính thay đổi đó sinh ra.

## Mục tiêu kiểm chứng được

- Chạy `node --check script.js` sau khi sửa JavaScript.
- Chạy `git diff --check` trước khi bàn giao.
- Sau khi sửa markup, kiểm tra asset path, HTML ID và link nội bộ.
- Khi sửa giao diện, xem local preview; kiểm tra desktop, mobile, focus bàn phím và `prefers-reduced-motion` nếu phần liên quan bị tác động.
- Không lấy việc code hợp lệ làm bằng chứng cho Netlify Form, upload hoặc video trên bản deploy.

## Cập nhật tài liệu

- Cập nhật `docs/CURRENT.md` sau mỗi đợt thay đổi đáng kể.
- Chỉ cập nhật `docs/DECISIONS.md` khi XQuang đã chốt quyết định.
- Cập nhật `docs/PRODUCT.md` khi sự thật sản phẩm thay đổi.
- Cập nhật `docs/ARCHITECTURE.md` khi kiến trúc, hosting, form hoặc pipeline thay đổi.
- Không sửa tài liệu trong `docs/archive/` để làm nó khớp với hiện tại.
- `AGENTS.md` và `CLAUDE.md` phải giữ cùng nội dung. Khi sửa quy tắc, cập nhật cả hai trong cùng một task và kiểm tra chúng giống nhau.

## Git và phối hợp agent

- Không commit, push, deploy, đổi quyền truy cập hoặc gửi dữ liệu ra dịch vụ ngoài nếu yêu cầu hiện tại chưa bao gồm hành động đó.
- Không dùng `git reset --hard`, force-push hoặc xóa baseline/tag release.
- Nếu Claude và Codex làm đồng thời: dùng branch/worktree riêng, một người sở hữu mỗi file dùng chung trong một task, review diff và để XQuang quyết định merge.
- Sau merge phải chạy lại kiểm tra; merge sạch về chữ không đảm bảo logic đúng.

## Tiêu chí hoàn thành

Task chỉ hoàn thành khi yêu cầu đã được thực hiện, kiểm tra liên quan đã chạy, `docs/CURRENT.md` phản ánh đúng trạng thái và mọi việc chưa xác minh được ghi rõ.
