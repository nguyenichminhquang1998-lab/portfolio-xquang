# BÀN GIAO PHẢN BIỆN PORTFOLIO STARTER PACK — GỬI CLAUDE

## Mục đích của tài liệu

Đây là đầu vào cho vòng thảo luận tiếp theo về portfolio landing page của XQuang. Tài liệu tổng hợp:

- Những dữ kiện và quyết định đã được XQuang xác nhận.
- Những điểm trong `portfolio-starter-pack.md` đã lỗi thời hoặc đã được sửa ở vòng thảo luận sau.
- Góc nhìn phản biện độc lập của Codex.
- Các câu hỏi cần Claude tiếp tục tranh luận, thay vì lập tức viết lại `CLAUDE.md` hoặc viết code.

Hãy coi các mục ghi **ĐÃ CHỐT** là ràng buộc của người dùng. Các nhận định của Codex bên dưới chỉ là luận điểm để phản biện, không phải quyết định đã chốt.

---

## 1. Bối cảnh đã xác nhận

XQuang là filmmaker/cinematographer/director tại Hải Phòng, vận hành một production house nhỏ tên **Denoise Production House** theo mô hình core team kết hợp mạng lưới cộng tác viên.

Mục tiêu chính của landing page là giúp khách hàng thương hiệu nhanh chóng đánh giá năng lực và gửi brief. Xây thương hiệu cá nhân hoặc làm knowledge creator là mục tiêu phụ.

### Định vị và hình thức trang — ĐÃ CHỐT

- Đây là **portfolio cá nhân của XQuang**, không phải website company-first.
- Denoise Production House xuất hiện như năng lực vận hành/credit đứng sau XQuang, không chiếm vai trò chính trong Hero.
- Không đề xuất đổi lại thành trang công ty hoặc team-first nếu không xuất hiện bằng chứng kinh doanh mới đủ mạnh.

### Dữ kiện kinh doanh hiện có

- Mục tiêu doanh thu tham khảo: khoảng **350 triệu VNĐ/năm**.
- SOP thật đang sử dụng: đặt cọc 50% trước khi bấm máy, tối đa hai vòng sửa hậu kỳ, bản duyệt có watermark.
- Thị trường cạnh tranh cao; XQuang tự đánh giá rằng niche hiện tại chưa thật sự được chiếm lĩnh.
- Chưa xác nhận ngân sách khách mục tiêu. Khoảng `30–150 triệu` trong starter pack chỉ là placeholder do AI điền.

### Asset và body of work thật

- Vimeo showcase hiện gồm nhiều loại dự án: MV, kỷ yếu, sự kiện/festival, activation thương hiệu, phỏng vấn, khai trương cửa hàng…
- Body of work hiện tại vì vậy chứng minh được khả năng làm việc đa dạng, nhưng chưa đủ bằng chứng để tự nhận là chuyên gia của một niche hẹp.
- Logo Denoise đơn sắc, chưa có hệ màu thương hiệu chính thức.
- Có texture đen xước; chỉ dùng chọn lọc, không phủ toàn trang.
- Màu thường gặp trong thumbnail là vàng đồng/nâu ấm; tông duotone tham khảo đã chọn là `#8A6A3C`. Một số footage có teal lạnh.
- File treatment “METROPOLIS” chỉ là template tham khảo, không phải nhận diện thật của Denoise.

### Art direction — ĐÃ CHỐT

- UI gần như đơn sắc; màu sắc chính đến từ ảnh và footage thật.
- Ảnh cover case study có thể dùng duotone vàng đồng; video giữ màu gốc.
- Accent chỉ phục vụ tương tác, không phải đồ trang trí. Quy tắc đếm cứng “accent tối đa ba lần” đã bị bác bỏ.
- Hướng tham chiếu là **Archival Index / Trinket Design**: metadata, số thứ tự, hairline grid và cảm giác tài liệu/call sheet/slate phim trường.
- Không dùng các dấu hiệu thiết kế AI mặc định nếu không có lý do: gradient trang trí, glassmorphism, bento grid vô cớ, glow, floating blob, cursor effect, text gradient, marquee vô nghĩa và copy rỗng kiểu “We tell stories”.

### Kỹ thuật — ĐÃ CHỐT ở cấp chiến lược

- HTML/CSS/JS thuần, không React, không build step.
- Poster ảnh là LCP element; mục tiêu LCP dưới 2 giây.
- Mobile không còn ẩn video hoàn toàn. Poster tải trước; video mobile 4–5 giây, dưới 1.5 MB, tải sau qua `IntersectionObserver`.
- Không dựa vào Network Information API vì Safari iOS hỗ trợ kém.
- Showreel/case study dài được embed từ Vimeo/YouTube; hero loop nhẹ có thể self-host.
- Hosting dự kiến: Netlify hoặc Cloudflare Pages. Form phải có backend thật như Netlify Forms hoặc giải pháp tương đương.
- Cần giữ bản MP4 dự phòng cho asset hero quan trọng, do showreel còn phụ thuộc Vimeo Plus.

### Case study — ĐÃ CHỐT một phần

- Khung kể chuyện là **Decision → Execution → Outcome**.
- Bằng chứng nên là deadline, số ngày sản xuất, số location, thời gian duyệt, nơi campaign được sử dụng hoặc khách quay lại.
- Không mặc định công khai ngân sách của khách nếu chưa được phép.

---

## 2. Những phản biện cũ của Codex đã được ngữ cảnh mới giải quyết

Không cần Claude tranh luận lại các ý này như thể chúng còn bỏ ngỏ:

1. Mâu thuẫn “portfolio cá nhân hay production house” đã được giải quyết: **portfolio cá nhân**.
2. Khoảng ngân sách `30–150 triệu` không phải dữ kiện thật và phải được bỏ khỏi bản chính thức cho đến khi XQuang xác nhận.
3. Accent không còn bị giới hạn bằng số lần xuất hiện cứng.
4. Mobile video không còn bị ẩn hoàn toàn; vì vậy việc tạo phiên bản video mobile riêng hiện có mục đích rõ ràng.
5. Case study không còn dùng khung chung chung Brief/Constraint/Solution/Result.

---

## 3. Lập trường của Codex về câu hỏi “làm tiền hay làm chất”

### Đề xuất: rộng về khả năng nhận việc, hẹp về cách biên tập portfolio

Codex không cho rằng XQuang phải chọn một trong hai cực:

- “Làm tiền”: trưng toàn bộ loại dự án đã từng làm và tự mô tả như một generalist không có trọng tâm.
- “Làm chất”: tự nhận một niche cinematic rất hẹp trong khi body of work hiện tại chưa đủ bằng chứng.

Phương án hợp lý hơn ở giai đoạn này là:

> **Commercially broad, editorially selective** — hoạt động kinh doanh vẫn có thể nhận nhiều loại job phù hợp, nhưng landing page chỉ tuyển chọn những dự án thể hiện rõ loại công việc XQuang muốn nhận thêm trong 12 tháng tới và một quan điểm hình ảnh nhất quán.

Lý do:

- Mục tiêu doanh thu 350 triệu/năm và mô hình production house nhỏ khiến việc tự thu hẹp thị trường quá sớm có rủi ro làm hụt pipeline.
- Ngược lại, một gallery dàn đều MV, kỷ yếu, festival, phỏng vấn và khai trương sẽ biến portfolio thành hồ sơ lưu trữ, không tạo được lý do để chọn XQuang thay cho người khác.
- “Niche” không nhất thiết phải là một ngành. Nó có thể là một kiểu bài toán mà XQuang giải tốt, chẳng hạn sản xuất thương mại có giới hạn thời gian/nguồn lực nhưng vẫn giữ được ngôn ngữ hình ảnh điện ảnh. Điều này phù hợp hơn với bằng chứng SOP thật.

Đây mới là giả thuyết chiến lược, chưa phải tagline cuối. Trước khi chốt, cần xác định ba loại dự án XQuang muốn được thuê nhiều hơn trong 12 tháng tới và xem asset hiện có có đủ bằng chứng cho chúng hay không.

### Gợi ý cách kiểm chứng thay vì tranh luận bằng gu

Chấm từng dự án hiện có theo bốn tiêu chí:

1. Mức phù hợp với loại job muốn nhận trong tương lai.
2. Chất lượng hình ảnh đủ mạnh để làm bằng chứng.
3. Vai trò của XQuang đủ rõ và đủ đáng kể.
4. Có outcome hoặc bằng chứng vận hành có thể công khai.

Selected Work nên ưu tiên dự án đạt cả bốn. Những job tạo doanh thu nhưng không hỗ trợ định vị không cần bị phủ nhận; chúng chỉ không nhất thiết nằm ở mặt tiền của portfolio.

---

## 4. Lập trường của Codex về ngân sách khách mục tiêu

Không thể suy ra một khoảng ngân sách đáng tin chỉ từ mục tiêu doanh thu 350 triệu/năm. Còn thiếu ít nhất:

- Doanh thu 350 triệu là doanh thu gộp của dự án hay thu nhập mong muốn của XQuang.
- Số job tối đa có thể và muốn thực hiện mỗi năm.
- Chi phí trực tiếp cho crew, thiết bị, di chuyển và hậu kỳ.
- Tỷ lệ job nhỏ/job lớn và mức lợi nhuận mong muốn.
- Phạm vi nào được báo giá: chỉ vai trò cá nhân hay sản xuất trọn gói qua Denoise.

Nếu chỉ dùng phép chia doanh thu đơn giản để tạo kịch bản tham khảo, chưa tính chi phí và mùa vụ:

| Số job trả phí/năm | Doanh thu trung bình cần đạt/job |
|---:|---:|
| 6 | khoảng 58.3 triệu |
| 8 | khoảng 43.8 triệu |
| 10 | khoảng 35 triệu |
| 12 | khoảng 29.2 triệu |

Bảng này **không phải đề xuất giá**. Nó chỉ cho thấy tại sao khoảng ngân sách mục tiêu phải gắn với capacity và service scope, không nên do AI tự điền.

Quan điểm tạm thời của Codex:

- Chưa công bố một khoảng ngân sách trên landing page.
- Trước tiên xác định “minimum viable project” và “ideal project” theo dữ liệu 12 tháng gần nhất.
- Nếu form cần budget để lọc lead, dùng các khoảng lựa chọn có thêm “chưa xác định/cần tư vấn”, và chỉ đặt các khoảng sau khi XQuang rà dữ liệu thật.
- Phải phân biệt ngân sách toàn dự án với fee riêng của director/DoP.

---

## 5. Các điểm mù chiến lược cần Claude phản biện thêm

### 5.1. Kênh đưa khách đến landing page chưa được xác định

Một landing page không tự tạo lead. Người đến từ referral, Facebook cá nhân, cold outreach, SEO hoặc QR trong proposal sẽ có mức độ tin tưởng và câu hỏi khác nhau.

Giả định “xem 90 giây rồi gửi brief” có vẻ phù hợp với traffic ấm hơn traffic lạnh. Trước khi chốt Hero và CTA, cần biết hai nguồn traffic chính dự kiến là gì. Đây có thể là điểm mù lớn hơn việc chọn palette hay motion.

### 5.2. “Gửi form” chưa phải định nghĩa đủ tốt của conversion

Cần phân biệt:

- Form submit bất kỳ.
- Brief đủ thông tin để đánh giá.
- Qualified lead phù hợp năng lực và quy mô.
- Cuộc trao đổi thực sự diễn ra.
- Job được chốt.

Nếu chỉ tối ưu số lần submit, form có thể tạo nhiều lead kém chất lượng. Website nên đo được ít nhất nguồn lead và trạng thái qualified/unqualified ở một quy trình ngoài website.

### 5.3. Khung case study vẫn thiếu “vai trò và quyền sở hữu đóng góp”

Decision → Execution → Outcome tốt hơn khung cũ, nhưng vẫn có thể khiến người xem hiểu nhầm nếu không nêu:

- Vai trò chính xác của XQuang.
- Phạm vi Denoise đảm nhiệm.
- Agency/production/client liên quan.
- Credits quan trọng.
- Quyết định nào thực sự do XQuang chịu trách nhiệm.

Đề nghị Claude phản biện xem có nên thêm một lớp cố định `Role / Scope / Credits` nằm trước Decision hay không.

### 5.4. Quyền sử dụng asset chưa được đưa thành một gate

Trước khi chọn dự án cần kiểm tra quyền dùng footage, nhạc, hình BTS, logo khách hàng, hình ảnh nhân vật và thông tin campaign. Một dự án đẹp nhưng không có quyền công khai không thể là nền tảng cho cấu trúc trang.

### 5.5. Bằng chứng tin cậy chưa đủ

Client logos một mình khá yếu và có thể mơ hồ về quan hệ hợp tác. Có thể cần:

- Một testimonial cụ thể, có tên/vai trò nếu được phép.
- Tỷ lệ khách quay lại hoặc một ví dụ khách quay lại.
- Bằng chứng giao đúng deadline hoặc xử lý production constraint.

Không được bịa số liệu nếu chưa có.

### 5.6. Hành trình sau khi gửi brief chưa được thiết kế

Form cần có câu trả lời cho: dữ liệu đi đâu, ai nhận, thời gian phản hồi, trạng thái thành công/thất bại, chống spam và bước tiếp theo của khách. Vì CTA chính là gửi brief, đây là chức năng kinh doanh cốt lõi chứ không phải chi tiết kỹ thuật cuối dự án.

### 5.7. Ngôn ngữ của website chưa được chốt

Cần quyết định tiếng Việt, tiếng Anh hay song ngữ dựa trên tập khách hàng thực và kênh traffic. Làm song ngữ vì “trông quốc tế” có thể tăng khối lượng nội dung và QA mà không tăng conversion.

---

## 6. Những điểm trong starter pack nên sửa ở vòng sau

Đây chưa phải yêu cầu viết lại file, chỉ là danh sách để Claude đánh giá.

### Design constraints

- “Đúng năm màu, không thêm” quá cứng cho border, overlay, focus, error và success. Có thể giữ năm token gốc nhưng cho phép màu semantic/opacity dẫn xuất có kiểm soát.
- Ba font family có thể làm trang nặng và thiếu nhất quán. Nên cân nhắc tối đa hai font tải ngoài; mono có thể dùng system stack.
- Spacing chỉ được dùng đúng sáu giá trị không xử lý được border 1px, line-height, optical adjustment hoặc fluid layout. Nên là scale ưu tiên, không phải lệnh cấm tuyệt đối.
- Việc cấm một danh sách font phổ biến không tự tạo ra bản sắc; art direction và cách dùng type quan trọng hơn tên font.

### Prompt workflow

- Bắt AI phải hỏi đúng bảy câu có thể tạo câu hỏi thừa. Nên yêu cầu “chỉ hỏi các câu còn thiếu, tối đa bảy, xếp theo mức ảnh hưởng”.
- Làm và duyệt từng section ngay từ đầu có nguy cơ tạo ra các mảng đẹp riêng lẻ nhưng thiếu nhịp tổng thể. Nên duyệt một skeleton toàn trang/grayscale trước khi polish từng section.
- Prompt “section đang phẳng → thêm micro-interaction” chẩn đoán sẵn nguyên nhân. Cần yêu cầu kiểm tra content, hierarchy, typography, composition và asset trước; chỉ thêm motion nếu nó giúp hiểu hoặc điều hướng.
- “Cắt câu dài riêng trên mobile” có thể tạo hai phiên bản nội dung không nhất quán. Copy cốt lõi nên ngắn ở mọi breakpoint; mobile thay đổi layout và mật độ trình bày, không giấu bằng chứng quan trọng.

### Media và performance

- Starter pack xuất poster `.jpg` nhưng markup gọi `.webp`; phải thống nhất.
- CRF không bảo đảm kích thước file đầu ra; cần bước đo dung lượng và test thực tế.
- `prefers-reduced-motion` phải được kiểm tra trong JavaScript trước khi phát video; CSS không tự gỡ hành vi autoplay.
- Vimeo/YouTube iframe có thể nặng hơn toàn bộ phần còn lại của trang. Claude nên cân nhắc poster facade/click-to-load hoặc lazy load, nhất là cho video dưới fold.
- `faststart` giúp metadata nằm đầu file và hỗ trợ phát tiến dần; câu “không có nó thì video phải tải xong hoàn toàn mới phát” trong starter pack là diễn đạt quá tuyệt đối.

---

## 7. Câu hỏi gửi Claude cho vòng phản biện tiếp theo

Hãy trả lời như một đối tác chiến lược đang phản biện Codex, không chỉ đồng ý hoặc viết lại câu chữ:

1. Bạn có đồng ý với chiến lược **commercially broad, editorially selective** không? Nếu không, hãy chọn một lập trường khác và chỉ ra bằng chứng nào trong dữ liệu hiện có hỗ trợ nó.
2. Nếu đồng ý, nên tuyển chọn Selected Work và hai case study theo logic nào để vừa tạo khác biệt vừa không giả vờ rằng XQuang đã có một niche chưa được chứng minh?
3. Với dữ liệu hiện có, có nên công khai hoặc hỏi budget trên form không? Nếu có, hãy trình bày phương pháp tạo các khoảng budget mà không bịa.
4. Trong các điểm mù ở mục 5, điểm nào là blocker phải giải quyết trước khi viết `CLAUDE.md`, điểm nào có thể để tới giai đoạn content/build?
5. Có nên thêm `Role / Scope / Credits` như một lớp bắt buộc của case study không? Hãy phân tích lợi ích và rủi ro.
6. Bạn phản đối điểm nào trong danh sách sửa starter pack ở mục 6? Nêu lý do cụ thể, đặc biệt nếu một giới hạn cứng thực sự giúp XQuang làm việc hiệu quả hơn với AI.
7. Hãy đề xuất thứ tự **tối đa năm quyết định tiếp theo**. Mỗi quyết định phải có tiêu chí kiểm chứng rõ ràng.

### Giới hạn của vòng này

- Chưa viết code.
- Chưa sửa hoặc viết lại `CLAUDE.md`.
- Không đảo lại quyết định portfolio cá nhân thành website company-first.
- Không coi các giả thuyết hoặc con số minh họa của Codex là dữ kiện đã được XQuang xác nhận.
- Nếu cần thêm dữ liệu từ XQuang, chỉ hỏi những câu có khả năng làm thay đổi quyết định chiến lược.

