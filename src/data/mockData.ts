import { Service, Product, Article, Testimonial } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'co-vai-gay',
    title: 'Massage Trị Liệu Cổ Vai Gáy',
    tagline: 'Đả thông bế tắc - Thư thái vùng vai',
    description: 'Xóa tan đau mỏi, căng cơ do ngồi máy tính lâu, giúp máu huyết lưu thông, tinh thần minh mẫn.',
    duration: '60 - 75 phút',
    price: 290000,
    priceFormatted: '290.000 ₫',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Giải phóng các bó cơ co cứng quanh đốt sống cổ C1 - C7',
      'Kích hoạt tuần hoàn máu lên não, giảm đau đầu tiền đình',
      'Giảm áp lực chèn ép dây thần kinh do ngồi sai tư thế lâu năm',
      'Đem lại giấc ngủ sâu tự nhiên và cảm giác nhẹ bẫng vùng vai'
    ],
    steps: [
      'Thăm khám, kiểm tra các điểm bế tắc vùng cổ và lưng trên',
      'Khai thông huyệt Phong Trì, Kiên Tỉnh, Thiên Tông bằng ngải cứu ấm',
      'Thao tác day ấn sâu bằng dầu thảo mộc bài trừ hàn khí',
      'Chườm túi thảo dược ngũ vị gia truyền giữ ấm kinh lạc'
    ]
  },
  {
    id: 'goi-dau-duong-sinh',
    title: 'Gội Đầu Dưỡng Sinh Thảo Dược',
    tagline: 'Nuôi dưỡng tóc lành - An dịu thần kinh',
    description: 'Làm sạch sâu da đầu, kết hợp massage ấn huyệt mặt và đầu giúp giảm stress, ngủ ngon giấc.',
    duration: '60 phút',
    price: 220000,
    priceFormatted: '220.000 ₫',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Nấu từ 12 vị thảo dược tươi: Bồ kết, vỏ bưởi, sả chanh, hương nhu, hà thủ ô',
      'Làm sạch nhờn, sạch gàu mà không gây khô ráp da đầu',
      'Xoa bóp ấn huyệt Bách Hội, Thái Dương giải tỏa áp lực công việc',
      'Dưỡng da mặt với nước hoa hồng chưng cất tự nhiên'
    ],
    steps: [
      'Khai thông kinh lạc vùng đầu bằng lược sừng tự nhiên',
      'Massage da mặt và đắp mặt nạ ngọc trai thảo mộc',
      'Gội đầu 2 lần bằng nước thảo mộc ấm nấu tươi trong ngày',
      'Xông tóc bằng thảo mộc và massage thư giãn hai cánh tay'
    ]
  },
  {
    id: 'ngam-chan-bam-huyet',
    title: 'Ngâm Chân & Bấm Huyệt Lòng Bàn Chân',
    tagline: 'Ấm tạng phủ - Đào thải độc tố từ gốc',
    description: 'Đả thông kinh lạc, giữ ấm cơ thể, đào thải độc tố và phục hồi năng lượng từ bên trong.',
    duration: '45 phút',
    price: 180000,
    priceFormatted: '180.000 ₫',
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Bàn chân là trái tim thứ hai chứa hơn 60 huyệt vị quan trọng',
      'Nước ngâm chứa gừng già, muối hầm, ngải cứu giúp trục hàn khí',
      'Kích thích huyệt Dũng Tuyền bổ thận khí và ổn định huyết áp',
      'Rất phù hợp với người hay lạnh tay chân, mất ngủ kinh niên'
    ],
    steps: [
      'Ngâm chân trong thùng gỗ thông với thảo dược đun sôi liu riu',
      'Làm sạch và tẩy tế bào chết bằng muối thảo mộc',
      'Bấm huyệt phản xạ các cơ quan tạng phủ trên lòng bàn chân',
      'Xoa bóp bắp chân và thoa cao gừng giữ ấm kinh mạch'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'tra-thao-moc',
    name: 'Trà Thảo Mộc An Thần',
    ingredients: 'Táo đỏ Tân Cương, kỷ tử hữu cơ, hoa cúc La Mã, long nhãn, nụ hoa tam thất',
    description: 'Thành phần từ táo đỏ, kỷ tử, hoa cúc... giúp an thần, dễ ngủ, dưỡng huyết sáng mắt và giảm căng thẳng sau ngày dài làm việc.',
    price: 150000,
    unit: 'hộp',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    stock: 45,
    usage: 'Hãm 1 gói với 300ml nước sôi 90°C trong 5-7 phút. Dùng ấm vào buổi chiều hoặc trước khi ngủ 1 giờ.'
  },
  {
    id: 'tinh-dau-xoa-bop',
    name: 'Tinh Dầu Xoa Bóp Thảo Dược',
    ingredients: 'Chiết xuất từ quế thanh, đại hồi, gừng già, thiên niên kiện, tinh dầu tràm gió',
    description: 'Chiết xuất từ quế, hồi, gừng, giúp giảm đau nhức xương khớp, tan máu bầm, ấm cơ thể và đẩy lùi hàn khí.',
    price: 220000,
    unit: 'lọ',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    stock: 30,
    usage: 'Thoa 3-5 giọt lên vùng cơ đau mỏi, xoa bóp nhẹ nhàng theo chiều kim đồng hồ từ 5-10 phút để tinh dầu thẩm thấu sâu.'
  },
  {
    id: 'tui-chuom-nong',
    name: 'Túi Chườm Nóng Thảo Dược',
    ingredients: 'Hạt thảo quyết minh, ngải cứu phơi khô, quế chi, hoa hồi, gừng sẻ, muối khoáng hồng',
    description: 'Dùng chườm vùng cổ vai gáy, thắt lưng, bụng giúp thư giãn cơ bắp, giảm đau bụng kinh và hỗ trợ tiêu hóa.',
    price: 250000,
    unit: 'túi',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    stock: 25,
    usage: 'Quay trong lò vi sóng 1.5 - 2 phút ở mức trung bình hoặc làm nóng cách thủy, sau đó đặt chườm lên vùng cần trị liệu.'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'tu-the-ngoi-van-phong',
    title: 'Mẹo nhỏ: Cách ngồi làm việc chuẩn tư thế để không đau mỏi vai gáy',
    category: 'Mẹo Văn Phòng',
    readTime: '3 phút đọc',
    summary: '90% dân văn phòng bị thoái hóa đốt sống cổ sớm do màn hình thấp và ngồi khom lưng. Đây là cách chỉnh tư thế chuẩn trong 1 phút.',
    fullContent: [
      'Khi ngồi làm việc với máy tính liên tục từ 6 đến 8 tiếng mỗi ngày, vùng cơ hình thang và các dây chằng quanh cổ phải chịu tải gấp 3-4 lần trọng lượng đầu thực tế.',
      'Quy tắc 90 độ kinh điển: Đùi song song với mặt sàn, đầu gối gập 90 độ, hai bàn chân chạm sàn vững chãi. Khuỷu tay đặt trên bàn làm việc hoặc tay vịn ghế tạo góc 90 độ để vai không bị nhấc cao.',
      'Độ cao màn hình: Mép trên của màn hình máy tính phải ngang với tầm mắt tự nhiên. Tránh cúi đầu quá 15 độ vì sẽ kéo căng đốt sống cổ C5-C7.',
      'Thực hiện bài tập "Rút cằm" (Chin Tuck): Cứ sau 45 phút, ngồi thẳng lưng, từ từ kéo cằm thụt về phía sau cổ giữ trong 5 giây, lặp lại 5 lần để trả đốt sống về đường cong sinh lý.'
    ],
    keyTips: [
      'Điều chỉnh màn hình ngang tầm mắt',
      'Đứng dậy đi lại 2 phút sau mỗi 50 phút',
      'Không ngồi bắt chéo chân để tránh vẹo khung chậu'
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'duong-sinh-tung-mua',
    title: 'Lời khuyên: Lịch sinh hoạt và ăn uống theo chuẩn dưỡng sinh từng mùa',
    category: 'Đông Y Thực Tiễn',
    readTime: '4 phút đọc',
    summary: 'Cổ nhân đúc kết: "Xuân sinh, Hạ trưởng, Thu thu, Đông tàng". Nắm vững nhịp sinh học này giúp cơ thể luôn dồi dào nguyên khí.',
    fullContent: [
      'Y học cổ truyền phương Đông coi con người là một tiểu vũ trụ, nhịp vận động bên trong phải hòa hợp cùng biến chuyển của đất trời.',
      'Mùa Xuân (Sinh): Can khí vượng. Nên dậy sớm đi dạo, ăn các loại rau mầm tươi xanh, hạn chế đồ cay nóng để bảo dưỡng tạng Can.',
      'Mùa Hạ (Trưởng): Tâm hỏa vượng, khí hậu oi bức dễ hao tổn tân dịch. Nên ngủ muộn hơn một chút và dậy sớm, ăn thêm đậu xanh, canh hạt sen, uống trà cúc thanh nhiệt.',
      'Mùa Thu (Thu): Phế khí chủ trì, thời tiết hanh khô. Cần dưỡng ẩm cho phổi bằng lê chưng đường phèn, nấm tuyết, củ sen, giữ ấm vùng cổ họng.',
      'Mùa Đông (Tàng): Thận thủy tích lũy. Cần ngủ sớm dậy muộn khi mặt trời đã lên, ăn các món ấm như cháo kỷ tử, nước gừng, tránh để gió lạnh xâm nhập kinh lạc.'
    ],
    keyTips: [
      'Uống nước ấm vào buổi sáng sớm',
      'Không ăn đồ lạnh vào mùa thu đông',
      'Tập hít thở sâu bụng 10 phút trước khi ngủ'
    ],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ngam-chan-truoc-khi-ngu',
    title: 'Lợi ích của việc ngâm chân nước ấm kết hợp thảo mộc trước khi đi ngủ',
    category: 'Liệu Pháp Tại Nhà',
    readTime: '3 phút đọc',
    summary: 'Chỉ 15 phút ngâm chân mỗi tối với gừng và muối hạt giúp giải trừ hàn khí, tăng tuần hoàn máu và đem lại giấc ngủ sâu không mộng mị.',
    fullContent: [
      'Bàn chân tập trung hơn 60 huyệt đạo và là điểm bắt đầu/kết thúc của 6 đường kinh mạch chính: Can, Tỳ, Thận, Đởm, Vị, Bàng Quang.',
      'Ngâm chân bằng nước ấm 40-42°C làm giãn nở các mao mạch, giúp máu huyết bị ứ trệ ở chi dưới nhanh chóng lưu thông về tim và não bộ.',
      'Công thức ngâm chân hiệu quả: 1 củ gừng già đập dập, 1 nắm ngải cứu tươi hoặc khô, 1 thìa muối hầm đun sôi với 2 lít nước trong 10 phút, sau đó pha thêm nước nguội vừa đủ ấm.',
      'Lưu ý: Không ngâm chân ngay sau khi ăn no (chờ ít nhất 30 phút), không ngâm quá 20 phút và lau khô chân ngay sau khi kết thúc.'
    ],
    keyTips: [
      'Nhiệt độ nước lý tưởng: 40°C - 42°C',
      'Thời gian ngâm tối ưu: 15 - 20 phút',
      'Day ấn huyệt Dũng Tuyền 30 lần sau khi lau khô chân'
    ],
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'pham-duyen',
    name: 'Phạm Duyên',
    role: 'Nhân viên văn phòng',
    treatment: 'Trị liệu Cổ Vai Gáy',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'Là dân văn phòng ngồi máy tính nhiều, cổ vai gáy tôi luôn đau nhức. Sau khi trải nghiệm dịch vụ massage trị liệu tại An An, tôi thấy nhẹ nhõm hẳn, tối về ngủ cực kỳ ngon giấc.'
  },
  {
    id: 'minh-thu',
    name: 'Minh Thư',
    role: 'Kế toán trưởng',
    treatment: 'Gội Đầu Dưỡng Sinh Thảo Dược',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    quote: 'Không gian ở An An rất tĩnh lặng, thoang thoảng mùi thảo mộc dễ chịu. Gội đầu dưỡng sinh ở đây làm cực kỳ kỹ, ấn huyệt siêu phê. Chắc chắn sẽ trở thành khách ruột của tiệm!'
  },
  {
    id: 'my-hoa',
    name: 'Mỹ Hoa',
    role: 'Kinh doanh tự do',
    treatment: 'Túi Chườm & Liệu Trình Ngâm Chân',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'Mình rất thích các sản phẩm Đông y của quán, đặc biệt là túi chườm thảo dược dùng rất hiệu quả. Các bạn kỹ thuật viên nhiệt tình, tư vấn tận tâm. Một nơi tuyệt vời để xả stress.'
  }
];

export const FACILITY_INFO = {
  name: 'Dưỡng Sinh An An',
  slogan: 'Phục Hồi Thân Tâm, Cân Bằng Cuộc Sống',
  address: 'Tầng 1, Tòa nhà X, Đường Y, Quận Z, TP. Hà Nội',
  hours: '09:00 - 21:00 (Tất cả các ngày trong tuần)',
  hotline: '0912 345 678',
  hotlineRaw: '0912345678',
  email: 'contact@duongsinhanan.vn'
};
