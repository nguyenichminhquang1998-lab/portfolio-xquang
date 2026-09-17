# CURRENT — Trạng thái làm việc hiện tại

Cập nhật: **2026-09-17 — Asia/Saigon**

Tài liệu này là bảng bàn giao ngắn cho phiên tiếp theo. Nó mô tả trạng thái hiện tại, không thay thế quyết định trong `docs/DECISIONS.md`.

## 1. Git

- Branch: `main`.
- Remote: `origin` → `https://github.com/nguyenichminhquang1998-lab/portfolio-xquang.git`.
- Baseline rollback: `d40441d` — giữ nguyên.
- Preview release: commit `adde177`, tag `v0.9.0-preview` — giữ nguyên.
- Release hiện tại: commit `75c2a01` (`feat: improve brief flow and client index`) + `0005640` (fix trạng thái CURRENT.md), đã commit và push lên `origin/main`.
- `main` và `origin/main` đang cùng ở commit `0005640`.
- Working tree đang có thay đổi chưa commit cho Netlify Function gửi email xác nhận (D-019): `netlify/functions/send-confirmation.js`, `package.json`, `netlify.toml`, `.gitignore` (thêm `node_modules/`, `.netlify/`), cùng cập nhật `docs/ARCHITECTURE.md` và `docs/DECISIONS.md` (D-019, D-020).

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
- Bản Netlify hiện tại được tạo bằng Drop thủ công từ release `69f72a4` và **chưa gồm** thay đổi mục lục/link tài liệu/Netlify Function của các lượt sau.
- Netlify đã nhận diện form `project-brief` ở bản deploy cũ.
- Chưa coi email notification và luồng nhận file mới là đã hoạt động cho tới khi deploy bản mới và gửi thử thật.
- **Xác minh trực tiếp qua Netlify API ngày 2026-09-16**: site `sunny-gumdrop-b0e0ae` (id `f32321bd-a02a-4e28-8f5c-e4780f8f75d3`) có deploy hiện tại `deploy_source: "drop"`, `commit_ref: null`, `branch: null` — **chưa git-linked**, dù có thông tin trước đó cho rằng đã kết nối qua phiên Codex khác. Không tìm thấy site Netlify nào khác trên cùng tài khoản.
- D-020: XQuang chọn kết nối site này với GitHub repo `portfolio-xquang` để auto-deploy + chạy được Netlify Functions. AI không có API để tự kết nối — cần XQuang thao tác thủ công trong Netlify dashboard.

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

Sau lượt thêm Netlify Function gửi email xác nhận ngày 2026-09-16 (D-019/Superseded, D-020):

- `node --check netlify/functions/send-confirmation.js` pass.
- Đã xác minh trực tiếp qua Netlify API rằng site chưa git-linked (xem mục 3) — trước đó chưa được kiểm tra, chỉ dựa trên giả định.
- D-019 (Gmail SMTP) bế tắc: tài khoản Google của XQuang không hiển thị mục App Password dù 2-Step Verification đã bật từ 2018 — đã kiểm tra kỹ (kéo hết trang "Bước thứ hai"), xác nhận không có.

Sau lượt đổi sang Resend ngày 2026-09-16 (D-021, thay D-019):

- `node --check netlify/functions/send-confirmation.js` pass sau khi viết lại dùng `fetch` gọi Resend API, bỏ Nodemailer.
- Đã xoá `package.json` — function không còn dependency npm nào.
- **Chưa chạy thử được** vì: (1) cần deploy qua git/CLI, không dùng Drop; (2) cần `RESEND_API_KEY`/`CONFIRMATION_FROM_EMAIL` trên Netlify; (3) cần một domain đã verify trên Resend.

Sau lượt mua domain và chốt địa chỉ gửi ngày 2026-09-16/17 (D-022, D-023):

- XQuang đã mua domain **`xquangdenoiseproductionhouse.com`** qua Cloudflare Registrar (không phải subdomain của `denoiseproductionhouse.com` như dự định ban đầu — domain gốc còn trống lúc mua là chuỗi liền không dấu chấm, XQuang xác nhận dùng luôn).
- Địa chỉ gửi email xác nhận đã chốt: **From** `brief@xquangdenoiseproductionhouse.com`, **Reply-To** `nguyenichminhquang1998@gmail.com`. Netlify Forms admin-notification (báo XQuang khi có brief mới) là luồng riêng, đã hoạt động sẵn, không phụ thuộc Resend.
- Domain hiện quản lý DNS tại Cloudflare (chưa trỏ bản ghi nào tới Netlify hay Resend).

Sau lượt hoàn tất và xác minh end-to-end ngày 2026-09-17:

- XQuang đã tự hoàn thành toàn bộ thao tác thủ công: kết nối GitHub repo với Netlify (D-020), trỏ domain `xquangdenoiseproductionhouse.com` về Netlify qua Cloudflare (DNS verified; SSL/HTTPS cấp tự động, có thể mất tới ~24h), verify domain trên Resend (DKIM + SPF qua CNAME + DMARC `p=none`), tạo `RESEND_API_KEY`, và thêm Outgoing Webhook (HTTP POST request) cho form `project-brief` trỏ tới `/.netlify/functions/send-confirmation`.
- Sự cố gặp phải và đã xử lý trong lượt này:
  - Biến môi trường `RESEND_API_KEY` bị đặt tên sai chữ hoa/thường lúc đầu (`resend_api_key`) — Netlify Functions đọc `Netlify.env.get()` phân biệt hoa/thường tuyệt đối; đã sửa lại đúng tên.
  - Biến `CONFIRMATION_FROM_EMAIL` (do AI set qua API) không được function đọc thấy dù đã "upserted" — sửa bằng cách set lại với `scopes: ["all"]` thay vì chỉ `["functions"]`, kèm trigger deploy mới (Netlify Functions "chụp" biến môi trường tại thời điểm deploy, không tự cập nhật real-time khi biến đổi sau khi đã deploy).
  - Webhook (Outgoing Webhook / HTTP POST request) bị Netlify **tự động Disabled** sau 6 lần liên tiếp nhận lỗi HTTP 500 từ function (xảy ra trong lúc 2 biến môi trường trên còn sai) — "Edit → Save" không đủ để reset trạng thái Disabled; phải **xoá hẳn và tạo lại notification mới** mới hết bị vô hiệu hoá.
  - Domain trên Resend hiện còn 2 cảnh báo không chặn việc gửi: "Invalid SES fallback" (đường dự phòng phụ, đường chính SPF/DKIM đã Verified) và "Conflicting MX records" dưới "Enable Receiving" (không liên quan vì không cần nhận mail tại domain này — có thể tắt toggle Enable Receiving để dọn cảnh báo).
- **Đã xác minh thành công bằng test thật, đi đúng đường Netlify Forms → Outgoing Webhook → Function → Resend** (không phải gọi thẳng function): submission thật gửi lúc 18:07 (giờ VN) nhận được email xác nhận đúng lúc đó, nội dung khớp chính xác; lặp lại thành công lần 2. Function log xác nhận cả 2 lần chạy sạch, không lỗi.
- Test riêng với 1 địa chỉ Gmail phụ (`nguyenichminhquang19984@gmail.com`, tài khoản vừa qua sự cố bảo mật/khôi phục) không nhận được email dù function/Resend đều xác nhận đã gửi thành công (không nằm trong Suppressions của Resend) — kết luận đây là hành vi lọc mail riêng của Gmail cho tài khoản đó, không phải lỗi hệ thống; không cần xử lý thêm.
- Đã dọn lại message lỗi trong `send-confirmation.js` về dạng gọn (bỏ chi tiết debug tên biến thiếu) sau khi xác minh xong.
- **Kết luận: tính năng email xác nhận cho khách đã hoàn thành và hoạt động đúng trên production.**

## 5. Việc tiếp theo theo thứ tự an toàn

1. XQuang xem lại mục lục hover, form brief và hai client mới trên local preview (vẫn còn từ trước, chưa có xác nhận đã xem).
2. Đợi HTTPS cho `xquangdenoiseproductionhouse.com` cấp xong tự động (SSL verify đã pass, đang chờ provision — có thể đã xong, kiểm tra lại khi cần).
3. Cân nhắc tắt toggle "Enable Receiving" trên Resend domain settings để dọn cảnh báo "Conflicting MX records" (không bắt buộc, không ảnh hưởng chức năng).
4. Xác nhận Netlify nhận diện đúng các trường `phone`, `other-project-type`, `document-link` trong submission thật (đã thấy trong dữ liệu submission, coi như đạt).
5. Đăng ký Google Search Console + nộp sitemap để đẩy nhanh việc Google index domain mới — vòng sau, không gấp.
6. Chạy PageSpeed Insights và Client Simulation trước vòng public tiếp theo.

## 6. Việc còn treo

- HTTPS cho domain chính có thể vẫn đang provision — không cần hành động, chỉ cần đợi/kiểm tra lại.
- Google Search Console + SEO index — vòng sau, không gấp.
- Kiểm tra giới hạn file/request thực tế trên gói Netlify nếu có submission file lớn trong tương lai.
- PageSpeed mobile và SEO content là vòng sau; AI SEO riêng sẽ xử lý nội dung SEO theo brief của XQuang.
