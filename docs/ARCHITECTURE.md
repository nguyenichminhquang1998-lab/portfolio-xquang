# ARCHITECTURE — XQuang Portfolio

Tài liệu này mô tả cách website đang được xây, chạy, kiểm tra và triển khai.

## 1. Kiến trúc tối giản

- HTML + CSS + JavaScript thuần.
- Không framework, không package manager, không build step.
- Source chạy trực tiếp ở root:
  - `index.html`
  - `style.css`
  - `script.js`
- `assets/` chứa font, ảnh, logo và video đã tối ưu.
- Không tạo `src/`; với một landing page tĩnh, thêm lớp thư mục này không tạo giá trị và làm deploy thủ công phức tạp hơn.
- Ngoại lệ duy nhất: `netlify/functions/` chứa 1 Netlify Function backend (gửi email xác nhận, xem mục 4b). Đây là code serverless chạy trên Netlify, tách biệt hoàn toàn khỏi frontend — không thêm build step, bundler hay framework cho `index.html`/`style.css`/`script.js`.

## 2. Sơ đồ repository

```text
portfolio-xquang/
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── docs/
│   ├── PRODUCT.md
│   ├── ARCHITECTURE.md
│   ├── DECISIONS.md
│   ├── CURRENT.md
│   └── archive/
├── index.html
├── style.css
├── script.js
├── cam-on.html
├── assets/
├── netlify/
│   └── functions/
│       └── send-confirmation.js
├── netlify.toml
├── .gitignore
└── .git/
```

## 3. Media và hiệu năng

- Poster ảnh là LCP element; mục tiêu nội bộ LCP dưới 2,0 giây trên 4G và ngưỡng audit trước deploy dưới 2,5 giây trên PageSpeed mobile.
- Hero tự host: poster tải trước, video desktop và video mobile riêng.
- Video mobile dài 4–5 giây, không tiếng, dưới 1,5 MB; chỉ gán source khi Hero vào viewport bằng `IntersectionObserver`.
- JavaScript phải kiểm tra `window.matchMedia('(prefers-reduced-motion: reduce)')` trước khi gán autoplay.
- Không dùng Network Information API.
- Vimeo dưới fold dùng poster facade; iframe chỉ được tạo sau khi người dùng bấm phát.
- File media gốc dung lượng lớn không đưa vào Git hoặc gói deploy; `.gitignore` chỉ cho phép các asset web đã tối ưu cần thiết.

## 4. Form Netlify

- Form dùng Netlify Forms với honeypot.
- `enctype="multipart/form-data"` để hỗ trợ file đính kèm.
- Chỉ một input file, các đuôi chấp nhận: `.pdf`, `.doc`, `.docx`, `.xls`, `.xlsx`, `.ppt`, `.pptx`, `.txt`.
- JavaScript chặn file lớn hơn 7 MB và đuôi không hợp lệ trước khi submit.
- File lớn hơn 7 MB được gửi bằng trường URL riêng; khi người dùng chọn file quá giới hạn, input file được xóa để không chặn việc gửi link.
- Netlify Forms giới hạn toàn bộ request ở 8 MB, không phải chỉ phần file; vì vậy giữ ngưỡng tải trực tiếp 7 MB để chừa dung lượng cho các trường còn lại và multipart overhead.
- Đây là validation phía trình duyệt, không thay thế giới hạn request và kiểm tra của Netlify.
- Form submit bằng `fetch` với `FormData` để giữ file upload và hiển thị trạng thái cảm ơn ngay trong trang; `action="/cam-on"` là fallback HTML khi JavaScript không chạy.
- Netlify email notification mặc định gửi cho chủ website và dùng trường `email` làm Reply-To.
- Việc Netlify nhận form, nhận file, hiện trạng thái thành công và gửi notification/email phải được test trên bản deploy thật.

### 4b. Netlify Function — email xác nhận cho khách (D-021, thay D-019)

- File: `netlify/functions/send-confirmation.js` (JavaScript thuần, ESM, cùng phong cách vanilla JS với `script.js` — không TypeScript vì cả repo không dùng TypeScript ở đâu khác).
- Kích hoạt qua **Outgoing Webhook** trên form `project-brief` (cấu hình trong Netlify dashboard, không có API để làm thay) — Netlify POST payload submission tới endpoint mặc định `/.netlify/functions/send-confirmation`.
- Gửi mail qua **Resend** bằng `fetch` gọi thẳng `https://api.resend.com/emails` — không dùng thư viện ngoài nào (bỏ Nodemailer/Gmail SMTP do D-019 bế tắc, không tạo được App Password). Không còn `package.json`/dependency npm nào.
- Biến môi trường bắt buộc trên Netlify (Site settings → Environment variables), **tự XQuang thêm, không nhập qua AI**:
  - `RESEND_API_KEY` — API key tạo trong Resend dashboard.
  - `CONFIRMATION_FROM_EMAIL` — địa chỉ người gửi, phải thuộc domain đã verify trên Resend.
- **Ràng buộc chưa xử lý (D-021)**: Resend cần verify 1 domain qua DNS (SPF/DKIM) để gửi tới khách hàng thật; chưa có domain thì chỉ gửi thử được tới chính email đăng ký Resend.
- `netlify.toml` khai báo `functions = "netlify/functions"` và `publish = "."` — không có lệnh build.
- **Function chỉ chạy khi site được deploy qua git/CLI** (xem mục 8) — Netlify Drop kéo-thả không bundle function.

## 5. CSS, motion và accessibility

- Mobile-first, ưu tiên layout ổn định cross-browser.
- Focus bàn phím phải nhìn thấy rõ; vùng bấm trên mobile tối thiểu 44 px.
- Mục lục desktop tự mở bằng `:hover` và `:focus-within`, tự đóng khi chuột hoặc focus rời khỏi dải điều hướng; các link dùng nhãn tiếng Việt nhìn thấy được khi mở.
- Motion chỉ dùng opacity fade và `translateY` tối đa 24 px, easing `cubic-bezier(0.16, 1, 0.3, 1)`, 600–800 ms.
- Reduced motion phải tắt hành vi không cần thiết ở cả CSS và JavaScript.
- Grain/xước được triển khai như lớp texture nhẹ, không chặn pointer và không làm chữ mất tương phản.

## 6. Chạy và kiểm tra local

Tại root project:

```powershell
python -m http.server 4173
```

Mở `http://127.0.0.1:4173/`. Chỉ bind local; không mở cổng Internet để preview.

Kiểm tra tối thiểu sau thay đổi:

```powershell
node --check script.js
git diff --check
```

Sau khi sửa HTML/CSS/asset còn phải kiểm tra đường dẫn file, ID trùng, giao diện desktop/mobile, bàn phím, reduced motion, video và console trình duyệt.

## 7. Git và release

- Repository: `https://github.com/nguyenichminhquang1998-lab/portfolio-xquang.git`.
- Branch chính: `main`.
- Commit baseline và tag preview hiện có phải được giữ làm điểm rollback.
- Luồng an toàn: sửa local → test → review diff → commit release → push → tạo gói deploy từ commit → Netlify Drop → test lại site và form.
- Không đóng gói trực tiếp một working tree còn file chưa commit khi mục tiêu là một release có thể tái tạo.

## 8. Hosting hiện tại

- Phương án đã chọn: Netlify Free để preview/test trước.
- Preview riêng hiện có: `https://sunny-gumdrop-b0e0ae.netlify.app` (site id xác minh qua Netlify API: `f32321bd-a02a-4e28-8f5c-e4780f8f75d3`).
- **Đã xác minh 2026-09-16 qua Netlify API**: bản deploy production hiện tại có `deploy_source: "drop"`, `commit_ref: null` — tức site **chưa git-linked**, dù trước đó có giả định là đã kết nối. D-020 chốt hướng chuyển sang git-linked; bước kết nối repo (OAuth GitHub App trong Netlify dashboard) do XQuang tự thao tác.
- Sau khi git-linked, Netlify sẽ auto-deploy mỗi lần push `main`, đồng thời bundle được `netlify/functions/` cho D-019.
- Bản đang online có thể cũ hơn working tree; xem `docs/CURRENT.md` trước khi đánh giá hoặc deploy.
- Không chuyển site sang public, đổi domain hoặc cấu hình notification nếu yêu cầu hiện tại chưa cho phép.
