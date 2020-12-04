const initialState = {
    gioHang: [],
    mangSanPham: [
        {maSP: 1,type: 'nam', tenSP: 'Daniel Wellington DW00100021', gia: 5300000, hinhAnh: './img/Product/product1.jpg', desc: 'Đồng hồ Daniel Wellington DW00100021 có thiết kế cổ điển khi mặt số tròn kết hợp với dây đeo da màu nâu bóng, kim chỉ và vạch số được dát mỏng tinh tế nổi bật trên nền số màu trắng trang nhã, tạo nên phụ kiện thời trang mang đến nét nam tính lịch lãm.', soLuong: 1 },
        {maSP: 2,type: 'nu', tenSP: 'FOSSIL ES4711', gia: 3700000, hinhAnh: './img/Product/product2.jpg', desc: 'Mẫu Fossil ES4711 trẻ trung sang trọng tone vàng hồng phủ kín phần dây bỏ, nổi bật phần gia công đính đá pha lê xung quanh vỏ viền đồng hồ.' , soLuong: 1},
        {maSP: 3,type: 'nu', tenSP: 'DANIEL WELLINGTON DW00100219', gia: 4020000, hinhAnh: './img/Product/product3.jpg', desc: 'Mẫu đồng hồ DW00100219 vẻ ngoài giản dị đặc trưng đến từ thương hiệu Daniel Wellington, các chi tiết đồng hồ tạo nét thanh mảnh mang lại sự trẻ trung thời trang cho các phái đẹp với mẫu dây lưới vàng hồng.', soLuong: 1 },
        {maSP: 4,type: 'nu', tenSP: 'CITIZEN EZ6370-56X', gia: 4000000, hinhAnh: './img/Product/product4.jpg', desc: 'Vẻ đẹp quý phái ẩn mình với vẻ ngoài giản dị 3 kim Citizen EZ6370-56X khoác lên vẻ thanh lịch thời trang cùng chi tiết đồng hồ tạo nét thanh mảnh nữ tính.', soLuong: 1 },
        {maSP: 5,type: 'nam', tenSP: 'CALVIN KLEIN K3M11TFK', gia: 7220000, hinhAnh: './img/Product/product5.jpg', desc: 'Mẫu đồng hồ nam K3M11TFK phong cách đặc trưng giản dị đến từ thương hiệu Calvin Klein thân thuộc, mang đến vẻ ngoài trẻ trung với tổng thể tông màu nâu nhạt kết hợp cùng mẫu dây đeo dạng lưới phong cách thời trang.' , soLuong: 1},
        {maSP: 6,type: 'nam', tenSP: 'CASIO NAM', gia: 4700000, hinhAnh: './img/Product/product6.jpg', desc: 'Đồng hồ nam Edifice Casio EF-539D-1A5VUDF được thiết kế mạnh mẽ với mặt số đồng hồ nền đen viền vàng đồng cùng với 3 ô phụ viền vàng đồng, chữ số vạch trắng, 6 kim chỉ và 1 lịch ngày.' , soLuong: 1},
        {maSP: 7,type: 'nam', tenSP: 'CASIO MTP-1183Q-7ADF', gia: 940000, hinhAnh: './img/Product/product7.jpg', desc: 'Đồng hồ Casio MTP-1183Q-7ADF với mặt đồng hồ thời trang cao cấp nền trắng, vỏ máy kim loại mạ vàng sang trọng, còn có dây da có vân lịch lãm và 1 lịch ngày.' , soLuong: 1},
        {maSP: 8,type: 'nu', tenSP: 'BABY-G BGA-150CP-4BDR', gia: 3455000, hinhAnh: './img/Product/product8.jpg', desc: 'Mẫu Baby-G BGA-150CP-4BDR phong cách cá tính với các ô số điện từ hiện thị đa chức năng, phối cùng thiết kế tổng thế vỏ máy cùng dây đeo được phối tông màu trắng sữa thời trang.' , soLuong: 1},
        {maSP: 9,type: 'nu', tenSP: 'BABY-G MSG-C100G-7ADR', gia: 4865000, hinhAnh: './img/Product/product9.jpg', desc: 'Mẫu Baby-G MSG-C100G-7ADR thiết kế năng động với mẫu dây đeo cao su được phối tone màu trắng thời trang, nổi bật với khả năng chịu nước lên đến 10atm.' , soLuong: 1},
        {maSP: 10,type: 'couple', tenSP: 'LONGINES ĐÔI', gia: 73040000, hinhAnh: './img/Product/product10.jpg', desc: 'Đồng hồ Longines Đôi có vỏ và dây đeo kim loại màu bạc sáng bóng, kim chỉ và vạch số được dát mỏng nổi bật trên nền số màu trắng trang nhã, còn có ô lịch ngày vị trí 3h, mặt kính Sapphire.' , soLuong: 1},
        {maSP: 11,type: 'couple', tenSP: 'G-SHOCK – BABY-G ĐÔI', gia: 9890000, hinhAnh: './img/Product/product11.jpg', desc: 'Đồng hồ đôi Casio với kiểu dáng thời trang, mặt đồng hồ điện tử hiện thị với các chức năng tiện ích hiện đại, vỏ máy nhựa kết hợp cùng với dây đeo cao su cùng tông mảu xanh, đem lại cho cặp đôi năng động.', soLuong: 1 },
        {maSP: 12,type: 'couple', tenSP: 'CASIO ĐÔI', gia: 2068000, hinhAnh: './img/Product/product12.jpg', desc: 'Đồng hồ đôi Casio thời trang sang trọng với dây vỏ kim loại mạ vàng, mặt đồng hồ nền vàng với mặt kính cứng chịu lực tốt và còn có 3 kim chỉ.', soLuong: 1 },
        {maSP: 13,type: 'couple', tenSP: 'DANIEL WELLINGTON ĐÔI', gia: 7000000, hinhAnh: './img/Product/product13.jpg', desc: 'Đồng hồ đôi Daniel Wellington với phong cách giản dị, mặt đồng hồ với kiểu dáng tròn, kim chỉ thiết kế mỏng tinh tế trên nền trắng trang nhã, kết hợp dây đeo bằng vải, đem lại sự trẻ trung năng động cho cặp đôi.', soLuong: 1 },
        {maSP: 14,type: 'phuKien', tenSP: 'HIRSCH PRINCESS', gia: 770000, hinhAnh: './img/Product/product14.jpg', desc: 'Mẫu dây da Hirsch PRINCESS chất liệu da bò thượng hạng nước Ý với bề mặt dập nổi vân da cá sấu tự nhiên.' , soLuong: 1},
        {maSP: 15,type: 'phuKien', tenSP: 'MASAMU MESH (GOLD)', gia: 600000, hinhAnh: './img/Product/product15.jpg', desc: 'Mẫu dây đeo Masamu Mesh (Gold).' , soLuong: 1},
        {maSP: 16,type: 'phuKien', tenSP: 'HỘP ZRC - WATCH WINDER', gia: 10500000, hinhAnh: './img/Product/product16.jpg', desc: 'Hộp đựng đồng hồ cao cấp ZRC WATCH WINDER (EM03201). Dòng hộp chuyên dụng cho dòng đồng hồ tự động. Thiết kế hộp tinh tế, mạnh mẽ và sang trọng.' , soLuong: 1},
        {maSP: 17,type: 'phuKien', tenSP: 'HIRSCH UMBRIA', gia: 590000, hinhAnh: './img/Product/product17.jpg', desc: 'Dây da Hirsch Umbria được làm bằng chất liệu da thật, cứng cáp và bền, màu sắc nổi bật, mịn màng với bề mặt bóng như lụa. Khả năng chống nước tốt.', soLuong: 1 },
        {maSP: 18,type: 'nam', tenSP: 'ORIENT FGW05005W0', gia: 3270000, hinhAnh: './img/Product/product18.jpg', desc: 'Đồng hồ nam Orient FGW05005W0 thiết kế theo lối dành cho người yêu thích sự giản dị, các vạch số cùng vạch số đều được gia công kiểu dáng mỏng đầy tinh tế khi phối cùng dây đeo bằng da có vân đầy lịch lãm.', soLuong: 1 },
    ],
    danhSachSanPhamFilter: []
}

export const gioHangReducer =  (state = initialState, action) => {
    switch (action.type) {
    case "THEM_GIO_HANG": {
        let gioHangMoi = [...state.gioHang]
        let index = gioHangMoi.findIndex(sp => sp.maSP === action.sanPham.maSP)
        if (index !== -1) {
            gioHangMoi[index].soLuong += 1;
        } else {
            gioHangMoi.push(action.sanPham)
        }
        state.gioHang = gioHangMoi;
        return {...state}
    }
       
    case "XOA_GIO_HANG":{
        let gioHangMoi = [...state.gioHang]
        let index = gioHangMoi.findIndex(sp => sp.maSP === action.maSP)
        
        index !== -1 && gioHangMoi.splice(index,1)
        state.gioHang = gioHangMoi
        return {...state}
    }
    case "TANG_GIAM_SO_LUONG":{
        let gioHangMoi = [...state.gioHang]
        let index = gioHangMoi.findIndex(sp => sp.maSP === action.maSP);
        if (index !== -1) {
            if (action.status) {
                gioHangMoi[index].soLuong += 1
            } else {
                if (gioHangMoi[index].soLuong > 1) {
                    gioHangMoi[index].soLuong -= 1
                } else {
                    alert(
                        "Số lượng phải lớn hơn 1"
                    )
                }
            }
        }
        state.gioHang = gioHangMoi
        return {...state}
    }
    case "LOC_DANH_SACH": {
        let mangSanPhamMoi = [...state.mangSanPham]
        state.danhSachSanPhamFilter = mangSanPhamMoi.filter(sp => sp.type === action.loaiSanPham)
        return {...state}
    }
    default: {
        return {...state}
    }
}
}
