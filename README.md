- scale là gì?
- không được dùng trực tiếp textarea/div Contenteditable mà phải chuyển về thẻ div,p trước khi chuyển sang image
- Vẫn còn lỗi xuống dòng (chắc phải sau khi blur phải hiện thẻ div đè lên textarea)

\*\* KẾT LUẬN:

1. html2canvas:

   - không vẽ được hết nội dung trong textarea -> phải chuyển textarea sang thẻ div/p
   - không fix triệt để được lỗi xuống dòng khi vẽ ra png

2. html-to-image-more:

   - vẽ được hết nội dung
   - ko bị lỗi xuống dòng
   - bị mờ: phải fix thủ công
   - mọi thẻ div sau khi vẽ đều có border: phải css thêm

3. html-to-image: (khá oki) ============
   - vẽ hết nội dung
   - ko bị lỗi xuống dòng
   - bị mờ: thư viện cho config
