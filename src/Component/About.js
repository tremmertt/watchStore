import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

export default class Home extends Component {
  render() {
    return (
      <div className="container col-9">
        <h3 className="display-4 text-center mt-3 mb-3">Giới Thiệu</h3>
        <p style={{ fontSize:"18px", lineHeight:"2" }} className="text-justify mt-4">
          <strong> Watch Store </strong> có địa chỉ tại 144 Phạm Phú Thứ, Quận 6, 
          Thành phố Hồ Chí Minh hiện đang bán các sản phẩm đồng hồ 
          Thụy Sĩ, Anh Quốc, Nhật Bản mang thương hiệu 
          <strong> Daniel Wellington, CITIZEN, FOSSIL, CALVIN KLEIN, CASIO, BABY-G, LONGINES</strong> , v.v... và vài phụ kiện đi kèm theo đồng hồ. 
          <br />
          Đôi nét về các thương hiệu đồng hồ: 
          <br />
          <strong> 1. Đồng hồ Daniel Wellington: </strong>
          Có tuổi đời non trẻ và cũng được sáng lập bởi chàng trai trẻ tuổi Fillip Tysander (quốc tịch Thụy Điển), thương hiệu đồng hồ DW (Daniel Wellington) đã gây bất ngờ khi trở thành một trong số những thương hiệu được giới trẻ ưa chuộng nhất. 
          Với thế mạnh thiết kế đậm tính thời trang, đơn giản, trẻ trung cùng bộ máy chất lượng và giá thành dễ tiếp cận đã giúp cho sự tăng trưởng doanh thu 3 năm của công ty tăng trưởng mạnh lên đến gần 4700% cho đến cuối năm 2015.
          Hiện nay, những chiếc đồng hồ Daniel Wellington với biểu tượng “DW” ( chữ D viết ngược) trên mặt số được giới trẻ khá là ưa chuộng bởi chúng có kiểu dáng đơn giản, hợp thời trang, giá hợp lý và phong cách rất trẻ trung, năng động.
          <br/>
          <strong> 2. Đồng hồ CITIZEN: </strong>
          Vào năm 1918, viện nghiên cứu đồng hồ Shokosha ra đời và đây là tiền thân đầu tiên của thương hiệu Citizen. Sau đó Thị trưởng Tokyo, ông Shimpei Goto đổi tên thành “CITIZEN” với hy vọng đồng hồ không còn là món đồ xa xỉ nữa mà trở nên phổ biến 
          rộng rãi đến tất cả mọi người trên khắp thế giới. Cuối năm 1924, Citizen bắt đầu thương mại sản phẩm đầu tiên của mình, đó là chiếc đồng hồ bỏ túi sử dụng máy Caliber 16. Và kể từ đó, thương hiệu Citizen vươn lên mạnh mẽ cho đến khi nổ ra Chiến 
          tranh thế giới thứ 2. Đây là thách thức cực kì to lớn khi ngành công nghiệp sản xuất bị tàn phá nặng nề, nhưng đây cũng là cơ hội để Citizen vượt qua chính mình và vươn tầm thế giới, chủ tịch Eiichi Yamada hiểu rằng tương lai của hãng chính là 
          xây dựng nhiều đại lý phân phối trên toàn thế giới. Và kết quả thì như chúng ta đã nhìn thây ngày nay. 
          Năm 1936, Citizen đã mở rộng thị trường vượt ra ngoài ranh giới Nhật Bản, bằng việc xuất khẩu đồng hồ đến nhiều nước tại khu vực Đông Nam Á.
          <br />
          <strong> 3. Đồng hồ CALVIN KLEIN </strong>
          CK là tên viết tắt của Calvin Klein – nhà thiết kế tài ba – đồng sáng lập ra thương hiệu này vào năm 1997.  Người ta biết đến Calvin Klein bởi sự sáng tạo không biên giới, cũng như là người thổi hồn và đem phong cách mới mẻ vào những từng sản phẩm của mình.
          Là một thương hiệu thời trang Mỹ nhưng đồng hồ Calvin Klein lại được công nhận là đồng hồ Thụy Sỹ bởi những chiếc đồng hồ CK đều được lắp máy Thụy Sỹ cũng như hoàn thiện dưới các tiêu chuẩn Thụy Sỹ - Swiss made. Đồng hồ thương hiệu CK chịu sự quản lý trong 
          sản xuất và được cấp phép nghiêm ngặt theo tiêu chuẩn của Swatch Group. Chính vì vậy, tự hào mà nói rằng, những chiếc đồng hồ CK có thể đứng cùng hàng ngũ với những hãng đồng hồ danh tiếng như Rado, Longines, Omega. 
          <br />
          <strong> 4. Đồng hồ CASIO </strong>
          Thương hiệu Casio ra đời vào tháng 4 năm 1946 tại Tokyo, người sáng lập là ông Tadao Kashio. Đến năm 1957 Casio Computer Co., Ltd được thành lập bởi 4 anh em nhà Kashio. 
          Năm 1974 Casio chính thức xâm nhập vào thị trường đồng hồ, với dòng sản phẩm đầu tiên là Casiotron. Và kể từ đó, những chiếc đồng hồ Casio dần dần đi theo sự phát triển của thế giới đồng hồ.
          Gồm các dòng sản phẩm: G-shock, Baby-G, Sheen Casio, Edifice Casio, Outgear, Data Bank, Protrek, Beside .....
          <br />
            - Tháng 4 năm 1983: chiếc đồng hồ chống sốc G-shock đầu tiên ra đời.
          <br />
            - Tháng 12 năm 1994: đồng hồ chống sốc Baby - G cho phụ nữ được phát hành.
          <br />
            - Năm 2000: hai dòng sản phẩm Sheen Casio và Edifice Casio ra đời.
          <br />
            - Tháng 11 năm 2004: Phát hành đồng hồ điều khiển vô tuyến chạy bằng năng lượng mặt trời Oceanus.
          <br />
          Ngoài các sản phẩm đồng hồ, Casio còn kinh doanh các mặt hàng khác như: máy tính, điện thoại, nhạc cụ, máy tính tiền,....
          <br />
          <strong> 5. Đồng hồ LONGINES </strong>
          Longines, một trong những trụ cột của ngành công nghiệp đồng hồ Thụy Sỹ. Hãng nổi tiếng với bộ sưu tập đồng hồ cơ khí được thiết kế tuyệt đẹp bởi đôi tay khéo léo đầy chuyên nghiệp của các nghệ nhân hàng đầu tại Thụy Sĩ lúc bấy giờ, và thế là 
          câu chuyên về thương hiệu đồng hồ Longines chính thức được bắt đầu vào năm 1832… Vào năm 1832 tại Saint-Imier một đô thị phát triển bật nhất thuộc huyện Jura Bernois bang Valais Thụy Sĩ, ông Auguste Agassiz anh trai của nhà tự nhiên học nổi 
          tiếng Louis Agassiz đã chính thức thành lập thương hiệu đồng hồ Longines. Auguste và hai đối tác của mình cùng nhau thực hiện việc bán đồng hồ sử dụng bộ máy “establissage” tương tự như những người sản xuất đồng hồ khác tại Thụy Sĩ lúc bấy giờ.
          <br/>
          - Vào năm 2003, Longines tạo ra bộ sưu tập Evidenza Longines với khung hình bầu dục nhằm chứng minh cho giá trị của sự thanh lịch, phong cách và truyền thống.
          <br/>
          - Longines Master Collection, dòng máy Automatic và lên dây cót bằng tay dường như là một xu hướng trên toàn cầu và đây cũng chính là lúc mà hãng giới thiệu bộ máy cơ khí hoàn toàn mới để khẳng định đẳng cấp của mình vào năm 2005.
          <br/>
          - Năm 2007, bộ sưu tập đồng hồ Longines Master Collection Retrograde được giới thiệu với nhiều chức năng độc đáo.
          <br/>
          - Longines PrimaLuna là bộ sưu tập đồng hồ mà hãng đặc biệt thiết kế dành riêng cho phái đẹp, đây được xem là dòng sản phẩm ấn tượng và được hàng triệu người dùng quan tâm đến, bộ sưu tập ra mắt vào năm 2009.
          <br/>
          - Năm 2010, Longines giới thiệu bộ máy đồng hồ đặc biệt mang tên Column-Wheel Chronograph (L688) thế hệ mới, L688 hoạt động bằng bộ chuyển động tự lên dây và được sử dụng đặc biệt cho những mẫu đồng hồ trong bộ sưu tập Longines Saint-Imier Collection (ra mắt vào năm 2012).
        </p>
      </div>
    );
  }
}
