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

=============
FEATURE

1.  Theme  
    có vài theme để chọn
    khi người dùng chuyển theme thì phải fill thông tin đã nhập vào theme mới (ĐỐI VỚI CÁC BLOCK TÙY CHỈNH THÌ PHẢI LÀM SAO)

2.  Tạo các block
    Thông tin liên hệ
    Mục tiêu nghê nghiệp
    Kinh nghiệm làm việc
    Kỹ năng
    Học vấn
    Ngôn ngữ
    Tùy chỉnh

    - Ngoài block tùy chỉnh ra. Các block khác nên có các option

3.  Format
    Phải quản lí các block bằng state
    Ví dụ:
    {
    block_id
    title: {
    text
    isBold
    isItalic
    isUnderline ( CHƯA có trường hợp nhiều UNDERLINE trong 1 đoạn text )
    }
    description: [
    {
    description_id
    text
    isBold
    isItalic
    isUnderline
    }
    ]
    }

=============
