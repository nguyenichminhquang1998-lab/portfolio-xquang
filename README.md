# Portfolio XQuang / Denoise Production House

Landing page portfolio một trang của XQuang — Director / Cinematographer tại Hải Phòng. Website dùng HTML, CSS và JavaScript thuần, hướng khách hàng phù hợp tới form gửi brief.

## Chạy local

Tại thư mục project, chạy:

```powershell
python -m http.server 4173
```

Sau đó mở `http://127.0.0.1:4173/`.

## Source chính

- `index.html` — nội dung và cấu trúc trang.
- `style.css` — giao diện, responsive và motion.
- `script.js` — video, facade Vimeo, form và tương tác.
- `assets/` — media đã tối ưu để dùng trên web.

Không có thư mục `src/` vì project không dùng build step; ba file source chính ở root là cấu trúc đơn giản và phù hợp nhất.

## Tài liệu dành cho AI và người duy trì

Đọc theo thứ tự:

1. [`docs/PRODUCT.md`](docs/PRODUCT.md)
2. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
3. [`docs/DECISIONS.md`](docs/DECISIONS.md)
4. [`docs/CURRENT.md`](docs/CURRENT.md)

`AGENTS.md` và `CLAUDE.md` cùng giữ đầy đủ bộ quy tắc dự án và phải được cập nhật đồng thời. Bốn file trong `docs/` tách context dài theo đúng chức năng; `docs/archive/` chỉ chứa tài liệu lịch sử, không phải yêu cầu hiện hành.

## Repository và preview

- GitHub: `https://github.com/nguyenichminhquang1998-lab/portfolio-xquang`
- Netlify preview riêng: `https://sunny-gumdrop-b0e0ae.netlify.app`

Trạng thái mới nhất và các bước chưa hoàn thành luôn được ghi trong `docs/CURRENT.md`.
