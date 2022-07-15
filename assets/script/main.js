
// Đóng mở nút xem giá tại miền bắc, trung và nam
const price = document.querySelector('.js-btn-regions')
const regions  = document.querySelector('.js-header__button-regions')
const btnContainer = document.querySelector('.js-btn-container')

price.addEventListener('click', function () {
    regions.classList.add('open')
})

regions.addEventListener('click', function(){
    regions.classList.remove('open')
})

price.addEventListener('click', function(){
    regions.style.position= "fixed"
})

    // fixed menu danh mục
    const danhmucItem= document.querySelector('.sidebar__container-item')
    const danhmuc = document.querySelector('.js-btn-danhmuc');
    const sidebarContainer =document.querySelector('.js-sidebar__container')
    const sidebar = document.querySelector('.menu--fixed')
    const sidebarChild =document.querySelector('.menu--fixed-list')
    var topContent =document.querySelector('.home-slider')
    var sidebarListLast =document.querySelector('.sidebar__list--last')

    danhmuc.addEventListener('click', function () {
        danhmucItem.style.position='fixed'
        sidebar.classList.add('js-sidebar--fixed')
       sidebarChild.classList.add('sidebar__container--fixed')
       topContent.classList.add('home-slider--fixed')
       sidebarListLast.style.display ="flex"
    })
    sidebar.addEventListener('click',function(){
        danhmucItem.style.position='absolute'
        sidebar.classList.remove('js-sidebar--fixed');
        sidebarChild.classList.remove('sidebar__container--fixed')
        topContent.classList.remove('home-slider--fixed')
        sidebarListLast.style.display ="none"
   })
   sidebarContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})



    
/// Đóng mở tất cả danh mục

var menu = document.querySelectorAll('.sidebar__list');

var menuList = document.querySelector('.sidebar__container-item');

for ( var i= 0;i< menu.length ;i++ ) {
        //  đóng mở menu điện thoại
    menu[0].addEventListener('mouseover', function() {
      
       menuList.innerHTML= 
       '	<div class="row ">	'
    +'	 <div class="col c-2-4 ">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href=""> Chọn theo hãng </a>	'
    +'	     <a href=""> Apple</a>	'
    +'	     <a href=""> Samsung</a>	'
    +'	     <a href=""> Xiaomi</a>	'
    +'	     <a href=""> OPPO</a>	'
    +'	     <a href=""> Nokia</a>	'
    +'	     <a href=""> realme</a>	'
    +'	     <a href="">ASUS</a>	'
    +'	     <a href="">vivo</a>	'
    +'	     <a href="">OnePlus</a>	'
    +'	     <a href="">Nubia</a>	'
    +'	     <a href="">Tecno</a>	'
    +'	     <a href="">Điện thoại phổ thông</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Chọn mức giá</a>	'
    +'	     <a href="">Dưới 5 triệu</a>	'
    +'	     <a href="">Từ 10-15 triệu</a>	'
    +'	     <a href="">Từ 5-10 triệu</a>	'
    +'	     <a href="">Từ 15-20 Triệu</a>	'
    +'	     <a href="">Trên 20 triệu</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Loại điện thoại</a>	'
    +'	     <a href="">Android</a>	'
    +'	     <a href="">iPhone(iOs)</a>	'
    +'	     <a href="">Điện thoại phổ thông</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Chọn theo nhu cầu</a>	'
    +'	     <a href="">Hỗ Trợ 5G</a>	'
    +'	     <a href="">Điện thoại Gaming</a>	'
    +'	     <a href="">Sạc không dây</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Điện thoạt hot ⚡</a>	'
    +'	     <a href="">Iphone 13</a>	'
    +'	     <a href="">Iphone 12</a>	'
    +'	     <a href="">Iphone 11</a>	'
    +'	     <a href="">Samsung s22 Ultra</a>	'
    +'	     <a href="">samsung A13</a>	'
    +'	     <a href="">samsung a23</a>	'
    +'	     <a href="">xiaomi Redmi note 11</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	          </div>	'
    
    menuList.style.display= "block"; } )     

    menu[i].addEventListener('mouseout', function()  {  
    menuList.style.display= "none";  })

    menuList.addEventListener('mouseover', function()  {  
    menuList.style.display= "block";    })
      
    menuList.addEventListener('mouseout', function()  {  
    menuList.style.display= "none";    })
      
        // đóng mở menu laptop
    menu[1].addEventListener('mouseover', function() {

       menuList.innerHTML= 
       '	 <div class="row ">	'
    +'	 <div class="col c-2-4 ">	'
    +'	<div href="" class="sidebar__item">	'
    +'	 <a href=""> Chọn theo hãng </a>	'
    +'	 <a href=""> Mac</a>	'
    +'	 <a href=""> HP</a>	'
    +'	 <a href=""> Dell</a>	'
    +'	 <a href=""> ASUS</a>	'
    +'	 <a href=""> Lenovo</a>	'
    +'	 <a href=""> microsoft surface</a>	'
    +'	 <a href="">Acer</a>	'
    +'	 <a href="">xiaomi</a>	'
    +'	 <a href="">LG</a>	'
    +'	 <a href="">Huawei</a>	'
    +'	 <a href="">MSI</a>	'
    +'	 <a href="">Gigabyle</a>	'
   + '	 <a href="">fujitsu</a>	'
    +'	 <a href="">intel</a>	'
    		
    +'	    </div>	'
    +'	  </div>	'
    +'	  <div class="col c-2-4">	'
    +'	    <div href="" class="sidebar__item">	'
    +'	 <a href="">Chọn theo nhu cầu</a>	'
   + '	 <a href="">Học tập-văn phòng</a>	'
   + '	 <a href="">Gaming</a>	'
   + '	 <a href="">Mỏng nhẹ</a>	'
   + '	 <a href="">Đồ họa - kỹ thuật</a>	'
   + '	 <a href="">Cao cấp - sang trọng</a>	'
   + '	 <a href="">Sáng tạo nội dung</a> 	'
   + '	    </div>	'
   + '	  </div>	'
    		
    +'	  <div class="col c-2-4">	'
    +'	    <div href="" class="sidebar__item">	'
    +'	 <a href="">Chọn theo mức giá</a>	'
   + '	 <a href="">Dưới 10 triệu</a>	'
   + '	 <a href="">từ 10 - 15 triệu</a>	'
   + '	 <a href="">Trên 20 triệu</a>	'
   + '	    </div>	'
   + '	  </div>	'
   + '		'
   + '	  <div class="col c-2-4">	'
   + '	    <div href="" class="sidebar__item">	'
   + '	 <a href="">Sản phẩm hot ⚡</a>	'
   + '	 <a href="">Macbook Pro M2 2022 512GB</a>	'
   + '	 <a href="">Macbook Pro M2 2022 256GB</a>	'
   + '	 <a href="">Macbook Air M2 2022 512GB</a>	'
   + '	 <a href="">Macbook Air M2 2022 256GB</a>	'
  +  '	 <a href="">Asus Zenbook S 13 Oled</a>	'
  +  '	 <a href="">Lenovo Ideapad 3 15IML05</a>	'
  +  '	    </div>	'
   + '	  </div>	'
  +  '	</div>	'
    

    menuList.style.display= "block"; } )     
           
    // đóng mở menu máy tính bảng
    menu[2].addEventListener('mouseover', function() {
       
        menuList.innerHTML= 
        '	<div class="row ">	'
    +'	 <div class="col c-2-4 ">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href=""> Chọn theo hãng </a>	'
    +'	     <a href=""> iPad</a>	'
    +'	     <a href=""> Samsung</a>	'
    +'	     <a href=""> Xiaomi</a>	'
    +'	     <a href=""> Lenovo</a>	'
    +'	     <a href=""> Nokia</a>	'
    +'	     <a href=""> Alcatel</a>	'
    +'	     <a href="">Kindle</a>	'
    +'	     <a href="">Máy đọc sách</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Chọn mức giá</a>	'
    +'	     <a href="">Dưới 3 triệu</a>	'
    +'	     <a href="">Từ 3-6 triệu</a>	'
    +'	     <a href="">Từ 6-9 triệu</a>	'
    +'	     <a href="">Từ 9-12 Triệu</a>	'
    +'	     <a href="">Trên 12 triệu</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Chọn theo nhu cầu</a>	'
    +'	     <a href="">Chơi Game</a>	'
    +'	     <a href="">Học Tập - Văn phòng</a>	'
    +'	     <a href="">Giải trí</a>	'
    +'	     <a href="">Đồ họa - sáng tạo</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Chọn theo kích thước màn hình</a>	'
    +'	     <a href="">7-8 inch (nhỏ gọn)</a>	'
    +'	     <a href="">10 - 12 inch (trung bình)</a>	'
    +'	     <a href="">Trên 12 inch(lớn)</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Máy tính bảng hot ⚡</a>	'
    +'	     <a href="">Samsung Tab S8 Ultra</a>	'
    +'	     <a href="">iPad Gen 9</a>	'
    +'	     <a href="">iPad Air 5</a>	'
    +'	     <a href="">Lenovo Tab P11 Pro</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	          </div>	'
    +'	 </div>	'
    +'	          </div>	'
    
       
    menuList.style.display= "block"; } )     
           

    // Đóng mở menu âm sidebar__container-item
    menu[3].addEventListener('mouseover', function() {  
        
        menuList.innerHTML= 
        ' <div class="row ">	'
    +'	 <div class="col c-2-4 ">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href=""> Chọn loại tai nghe </a>	'
    +'	     <a href=""> Tai nghe Bluetooth </a>	'
    +'	     <a href=""> Tai nghe chụp tai</a>	'
    +'	     <a href=""> Tai nghe có dây</a>	'
    +'	     <a href=""> Tai nghe thể thao</a>	'
    +'	     <a href=""> Tai nghe Gaming</a>	'
    +'	   	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Hãng tai nghe</a>	'
    +'	     <a href="">Apple</a>	'
    +'	     <a href="">JBL</a>	'
    +'	     <a href="">Xiaomi</a>	'
    +'	     <a href="">Samsung</a>	'
    +'	     <a href="">Sony</a>	'
    +'	     <a href="">LG</a>	'
    +'	     <a href="">Soundpeats</a>	'
    +'	     <a href="">Huawei</a>	'
    +'	     <a href="">Havit</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	     <a href="">Chọn loại loa</a>	'
    +'	     <a href="">Loa Bluetooth</a>	'
    +'	     <a href="">Loa mini</a>	'
    +'	     <a href="">Loa Karaoke</a>	'
    +'	     <a href="">Loa Soundbar</a>	'
    +'	     <a href="">Xem tất cả loa</a>	'
    +'	     <a href="">Havit</a>	'
    +'	     </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	    <a href="">Hãng loa</a>	'
    +'	    <a href="">JBL</a>	'
    +'	    <a href="">LG</a>	'
    +'	    <a href="">Sony</a>	'
    +'	    <a href="">Marshall</a>	'
    +'	    <a href="">Harman Kardon</a>	'
    +'	    <a href="">Huawei</a>	'
    +'	    <a href="">Anker</a>	'
    +'	   </div>	'
    +'	 </div>	'
    +'	 <div class="col c-2-4">	'
    +'	   <div href="" class="sidebar__item">	'
    +'	    <a href="">Phụ kiện âm thanh</a>	'
    +'	    <a href="">Phụ kiện khác</a>	'
    +'	    <a href="">Thiết bị phòng thu</a>   	'
    +'	 </div>	'
    +'	          </div>	'
    
    menuList.style.display= "block"; } )     

    // Đóng mở menu đồng hồ
    menu[4].addEventListener('mouseover', function() {  
        
       menuList.innerHTML= 
       '	<div class="row ">	'
       +'	  <div class="col c-2-4 ">	'
       +'	    <div href="" class="sidebar__item">	'
       +'	 <a href=""> Loại đồng hồ</a>	'
       +'	 <a href=""> Đồng hồ thông minh</a>	'
       +'	 <a href=""> Vòng đeo tay thông minh</a>	'
       +'	 <a href=""> Đồng hồ định vị trẻ em</a>	'
       +'	 <a href=""> Dây đeo</a>	'
       +'	    </div>	'
       +'		'
       +'	  </div>	'
       +'	  <div class="col c-2-4">	'
       +'	    <div href="" class="sidebar__item">	'
       +'	 <a href=""> Chọn theo thương hiệu  </a>	'
       +'	 <a href=""> Apple Watch </a>	'
       +'	 <a href=""> Samsung </a>	'
       +'	 <a href=""> Xiaomi </a>	'
       +'	 <a href=""> Huawei </a>	'
       +'	 <a href=""> Coros  </a>	'
       +'	 <a href=""> Garmin </a>	'
       +'	 <a href=""> Huami  </a>	'
       +'	 <a href=""> Oppo  </a>	'
       +'	 <a href=""> Soundpeats </a>	'
       +'	 <a href=""> Haylou </a>	'
       +'	    	'
       +'	    </div>	'
       +'	  </div>	'
       +'		'
       +'	  <div class="col c-2-4">	'
       +'	    <div href="" class="sidebar__item">	'
       +'	 <a href=""> Kích cỡ mặt đồng hồ </a>	'
       +'	 <a href=""> Cho nam 42 - 47mm  </a>	'
       +'	 <a href=""> Cho nữ < 42mm  </a>	'
       +'	    	'
       +'	    </div>	'
       +'	  </div>	'
       +'		'
       +'	  <div class="col c-2-4">	'
       +'	    <div href="" class="sidebar__item">	'
       +'	 <a href=""> Tính năng  </a>	'
       +'	 <a href=""> Hỗ trợ Esim </a>	'
       +'	 <a href=""> Màn hình luôn bật  </a>	'
       +'	 <a href=""> Đo oxy trong máu SpO2  </a>	'
       +'	    	'
       +'	    	'
       +'	    </div>	'
       +'	  </div>	'
       +'		'
       +'	  <div class="col c-2-4">	'
       +'	    <div href="" class="sidebar__item">	'
       +'	 <a href=""> Sản phẩm nổi bật ⚡ </a>	'
       +'	 <a href=""> Apple Watch Series 7  </a>	'
       +'	 <a href=""> Apple Watch Series 6  </a>	'
       +'	 <a href=""> Apple Watch SE </a>	'
       +'	 <a href=""> Huawei Watch Fit 2 </a>	'
       +'	 	'
       +'	    </div>	'
       +'	  </div>	'
       +'	</div>	'
       
   
    menuList.style.display= "block"; } )     

        //nhà thông minh
    menu[5].addEventListener('mouseover', function() {  
        
       menuList.innerHTML= 
       '	  <div class="row ">	'
    +'	 <div class="col c-2-4 ">	'
    +'	  <div href="" class="sidebar__item">	'
    +'	 <a href=""> Gia dụng thông minh </a>	'
    +'	 <a href=""> Đồ gia dụng </a>	'
    +'	 <a href=""> Đèn thông minh </a>	'
    +'	 <a href=""> Máy hút bụi </a>	'
    +'	 <a href=""> Ổ cắm điện </a>	'
     +'	  </div>	'
     +'	  </div>	'
    +'	  <div class="col c-2-4 ">	'
    +'	  <div href="" class="sidebar__item">	'
    +'	 <a href=""> Giải trí tại gia</a>	'
    +'	 <a href=""> TV Box </a>	'
    +'	 <a href=""> Máy chiếu  </a>	'
     +'	  </div>	'
     +'	  </div>	'
    +'	  <div class="col c-2-4 ">	'
    +'	  <div href="" class="sidebar__item">	'
    +'	 <a href=""> Chăm sóc sức khoẻ  </a>	'
    +'	 <a href=""> Cân sức khoẻ</a>	'
    +'	 <a href=""> Máy lọc không khí  </a>	'
    +'	 <a href=""> Ghế công thái học  </a>	'
      +'	  </div>	'
     +'	  </div>	'
    +'	  <div class="col c-2-4 ">	'
    +'	  <div href="" class="sidebar__item">	'
    +'	 <a href=""> Thiết bị an ninh</a>	'
    +'	 <a href=""> Khoá thông minh </a>	'
    +'	 <a href=""> Cảm biến</a>	'
      +'	  </div>	'
     +'	  </div>	'
    +'	  <div class="col c-2-4 ">	'
    +'	  <div href="" class="sidebar__item">	'
    +'	 <a href=""> Sản phẩm hot ⚡ </a>	'
    +'	 <a href=""> Dreame Bot W10 </a>	'
    +'	 <a href=""> Dreame Z10 Pro </a>	'
    +'	 <a href=""> Roborock S7 Maxv Ultra </a>	'
    +'	 <a href=""> Xiaomi Mi Air Purifier 4 Lite  </a>	'
      +'	  </div>	'
     +'	  </div>	'
    +'	</div>	'
    
    
    menuList.style.display= "block"; } )     
    
    //Phụ kiện
    menu[6].addEventListener('mouseover', function() {  
        
       menuList.innerHTML= 
       '	  <div class="row ">	'
    +'	<div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	<a href=""> Phụ kiện di động  </a>	'
    +'	<a href=""> Phụ kiện Apple </a>	'
    +'	<a href=""> Dán màn hình  </a>	'
    +'	<a href=""> Ốp lưng - Bao da  </a>	'
    +'	<a href=""> Thẻ nhớ </a>	'
    +'	<a href=""> Cáp, sạc  </a>	'
    +'	<a href=""> Pin dự phòng  </a>	'
    +'	<a href=""> Sim thẻ </a>	'
        +'	 </div>	'
        +'	  </div>	'
    +'	  <div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	<a href=""> Phụ kiện Laptop </a>	'
    +'	<a href=""> Chuột, bàn phím </a>	'
    +'	<a href=""> Ba lô - Túi xách  </a>	'
    +'	<a href=""> Phần mềm  </a>	'
    +'	<a href=""> Webcam </a>	'
    +'	<a href=""> Giá đỡ </a>	'
    +'		'
        +'	 </div>	'
        +'	  </div>	'
    +'	  <div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	<a href=""> Chăm sóc sức khoẻ  </a>	'
    +'	<a href=""> Cân sức khoẻ  </a>	'
    +'	<a href=""> Máy lọc không khí  </a>	'
    +'	<a href=""> Ghế công thái học  </a>	'
    +'		'
    +'		'
    +'		'
            +'	 </div>	'
        +'	  </div>	'
    +'	  <div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	<a href=""> Thiết bị mạng  </a>	'
    +'	<a href=""> Thiết bị phát sóng WiFi </a>	'
    +'	<a href=""> Bộ phát wifi di động  </a>	'
    +'	<a href=""> Bộ kích sóng WiFi  </a>	'
    +'	<a href=""> Xem tất cả </a>	'
    +'	<a href=""> Cảm biến  </a>	'
            +'	 </div>	'
        +'	  </div>	'
    +'	  <div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	<a href=""> Camera </a>	'
    +'	<a href=""> Camera hành trình  </a>	'
    +'	<a href=""> Camera an ninh </a>	'
    +'	<a href=""> Gimbal </a>	'
    +'	<a href=""> Xem tất cả </a>	'
    +'		'
    +'		'
    +'		'
            +'	 </div>	'
        +'	  </div>	'
    +'	  <div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	<a href=""> Phụ kiện khác  </a>	'
    +'	<a href=""> Dây đeo đồng hồ </a>	'
    +'	<a href=""> Dây đeo Airtag </a>	'
    +'	<a href=""> Phụ kiện tiện ích  </a>	'
    +'	<a href=""> Đồ chơi trẻ em </a>	'
    +'		'
    +'		'
    +'		'
            +'	 </div>	'
        +'	  </div>	'
    +'	  </div>	'
    
    
    menuList.style.display= "block"; } )     
     
    //pc-màn hình
    menu[7].addEventListener('mouseover', function() {  
     
       menuList.innerHTML= 
       ' <div class="row "> '
    +' <div class="col c-2-4 "> '
        +' <div href="" class="sidebar__item"> '
            +' <a href=""> Máy tính để bàn </a> '
            +' <a href=""> PC ráp sẵn CPS </a> '
            +' <a href=""> Máy tính All In One </a> '
            +' <a href=""> PC đồng bộ </a> '
            +' '
            +' </div> '
        +' </div> '
    +' <div class="col c-2-4 "> '
        +' <div href="" class="sidebar__item"> '
            +' <a href=""> Linh kiện máy tính </a> '
            +' <a href=""> CPU </a> '
            +' <a href=""> Mainboard </a> '
            +' <a href=""> RAM </a> '
            +' <a href=""> Ổ cứng </a> '
            +' <a href=""> Nguồn máy tính </a> '
            +' <a href=""> Card màn hình </a> '
            +' <a href=""> Tản nhiệt </a> '
            +' <a href=""> Case máy tính </a> '
            +' <a href=""> Xem tất cả </a> '
            +' '
            +' </div> '
        +' </div> '
    +' <div class="col c-2-4 "> '
        +' <div href="" class="sidebar__item"> '
            +' <a href=""> Chọn màn hình theo hãng </a> '
            +' <a href=""> ASUS </a> '
            +' <a href=""> LG </a> '
            +' <a href=""> Samsung </a> '
            +' <a href=""> DELL </a> '
            +' <a href=""> Xiaomi </a> '
            +' <a href=""> ViewSonic </a> '
            +' <a href=""> HUAWEI </a> '
            +' <a href=""> HP </a> '
            +' <a href=""> HKC </a> '
            +' '
            +' </div> '
        +' </div> '
    +' <div class="col c-2-4 "> '
        +' <div href="" class="sidebar__item"> '
            +' <a href=""> Chọn màn hình theo nhu cầu </a> '
            +' <a href=""> Màn hình Gaming </a> '
            +' <a href=""> Màn hình văn phòng </a> '
            +' <a href=""> Màn hình đồ họa </a> '
            +' <a href=""> Xem tất cả </a> '
            +' '
            +' </div> '
        +' </div> '
    +' <div class="col c-2-4 "> '
    +' <div href="" class="sidebar__item"> '
        +' <a href=""> Thiết bị văn phòng </a> '
        +' <a href=""> Giá treo màn hình </a> '
        +' <a href=""> Máy in </a> '
        +' <a href=""> Phần mềm </a> '
        +' <a href=""> Gaming Gear </a> '
        +' <a href=""> Bàn, ghế công thái họ </a> '
       
        +' </div> '
    +' </div> '

    
    menuList.style.display= "block"; } )     

    //Tivi
    menu[8].addEventListener('mouseover', function() {  
      
       menuList.innerHTML= 
       '	<div class="row ">	'
    +'		'
    +'	<div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	   <a href=""> Chọn theo hãng </a>	'
    +'	   <a href=""> Samsung </a>	'
    +'	   <a href=""> LG </a>	'
    +'	   <a href=""> Xiaomi </a>	'
    +'	   <a href=""> Coocaa </a>	'
    +'	 	'
    +'	 </div>	'
    +'	</div>	'
    +'		'
    +'	<div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	   <a href=""> Chọn theo mức giá  </a>	'
    +'	   <a href=""> Từ 9 - 12 triệu </a>	'
    +'	   <a href=""> Từ 12 - 15 triệu  </a>	'
    +'	   <a href=""> Trên 15 triệu  </a>	'
    +'	 	'
    +'	 </div>	'
    +'	</div>	'
    +'		'
    +'	<div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	   <a href=""> Loại tivi  </a>	'
    +'	   <a href=""> Smart tivi </a>	'
    +'	   <a href=""> Tivi LED  </a>	'
    +'	   <a href=""> Tivi NanoCell  </a>	'
    +'	   <a href=""> Tivi QLED  </a>	'
    +'	   <a href=""> Tivi thiết kế đặc biệt </a>	'
    +'	 	'
    +'	 </div>	'
    +'	</div>	'
    +'		'
    +'	<div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	   <a href=""> Chọn theo kích thước  </a>	'
    +'	   <a href=""> 32 inch </a>	'
    +'	   <a href=""> 43 inch </a>	'
    +'	   <a href=""> 55 inch </a>	'
    +'	   <a href=""> 75 inch </a>	'
    +'	 	'
    +'	 </div>	'
    +'	</div>	'
    +'		'
    +'	<div class="col c-2-4 ">	'
    +'	 <div href="" class="sidebar__item">	'
    +'	   <a href=""> Sản phẩm nổi bật ⚡ </a>	'
    +'	   <a href=""> Tivi Xiaomi P1 55 inch </a>	'
    +'	   <a href=""> LG StanbyMe </a>	'
    +'	   <a href=""> Khung treo tivi </a>	'
    +'		'
    +'	 </div>	'
    +'	</div>	'
    +'		'
    +'	 	'
    +'	</div>	'
    
    
    menuList.style.display= "block"; } )     

    //Thu Cũ
    menu[9].addEventListener('mouseover', function() {  
     
       menuList.innerHTML= 
       '	<div class="row ">	'
    +'		'
    +'	  <div class="col c-2-4 ">	'
    +'	  <div href="" class="sidebar__item">	'
    +'	 <a href=""> Chọn theo hãng </a>	'
    +'	 <a href=""> Thu cũ iPhone  </a>	'
    +'	 <a href=""> Thu cũ Samsung </a>	'
    +'	 <a href=""> Thu cũ Mac </a>	'
    +'	 <a href=""> Thu cũ Xiaomi  </a>	'
    +'	 <a href=""> Thu cũ Laptop  </a>	'
    +'	 <a href=""> Thu cũ iPad </a>	'
    +'	 <a href=""> Thu cũ Apple Watch </a>	'
    +'	 <a href=""> Thu cũ SKTel</a>	'
    +'	  	'
    +'	  </div>	'
    +'	  </div>	'
    +'	</div>	'
    
    
    menuList.style.display= "block"; } )     

    //Hàng cũ
    menu[10].addEventListener('mouseover', function() {  
        
       menuList.innerHTML= 
       '	<div class="row ">	'
    +'	    	'
    +'	  <div class="col c-2-4 ">	'
    +'	    <div href="" class="sidebar__item">	'
    +'	 <a href=""> Chọn loại sản phẩm cũ  </a>	'
    +'	 <a href=""> Điện thoại cũ  </a>	'
    +'	 <a href=""> Máy tính bảng cũ  </a>	'
    +'	 <a href=""> Mac cũ </a>	'
    +'	 <a href=""> Laptop cũ  </a>	'
    +'	 <a href=""> Loa - tai nghe cũ  </a>	'
    +'	 <a href=""> Đồng hồ thông minh cũ  </a>	'
    +'	 <a href=""> Nhà thông minh cũ  </a>	'
    +'	 <a href=""> Màn hình cũ </a>	'
    +'	 <a href=""> Phụ kiện cũ </a>	'
    +'	  	'
    +'	    </div>	'
    +'	  </div>	'
    +'		'
    +'	  <div class="col c-2-4 ">	'
    +'	    <div href="" class="sidebar__item">	'
    +'	 <a href=""> Sản phẩm nổi bật ⚡ </a>	'
    +'	 <a href=""> iPhone XS Max 64GB cũ  </a>	'
    +'	 <a href=""> iPhone 8 Plus 64GB cũ  </a>	'
    +'	 <a href=""> iPhone 11 Pro Max 64GB cũ  </a>	'
    +'	 <a href=""> iPhone 12 Pro 256GB cũ đẹp </a>	'
    +'	 <a href=""> Samsung S21 Ultra cũ  </a>	'
    +'	 <a href=""> Apple Watch Series 6 cũ </a>	'
    +'	 <a href=""> Macbook Air M1 đã kích hoạt </a>	'
    +'	 <a href=""> Xiaomi 11T đã kích hoạt </a>	'
    +'	    </div>	'
+'	  </div>	'
+'	</div>	'

    
    menuList.style.display= "block"; } )     

    //Khuyến mãi
    menu[11].addEventListener('mouseover', function() {  
      
       menuList.innerHTML= 
       '	<div class="row ">	'
    +'		'
    +'	  <div class="col c-2-4 ">	'
    +'	<div href="" class="sidebar__item">	'
    +'	  <a href=""> Chọn khuyến mãi </a>	'
    +'	  <a href=""> Hotsale cuối tuần  </a>	'
    +'	  <a href=""> Ưu đãi thanh toán  </a>	'
    +'	  <a href=""> Khách hàng doanh nghiệp B2B </a>	'
    +'		'
    +'	</div>	'
    +'	  </div>	'
    +'	</div>	'
    
    
    menuList.style.display= "block"; } )     

    //Tin công nghệ
    menu[12].addEventListener('mouseover', function() {  
      
        menuList.innerHTML= 
        '	<div class="row ">	'
     +'		'
     +'	  <div class="col c-2-4 ">	'
     +'	<div href="" class="sidebar__item">	'
     +'	  <a href=""> Chọn Chuyên mục </a>	'
     +'	  <a href="">	Khám phá  </a>	'
     +'	  <a href=""> S-Games </a>	'
     +'	  <a href=""> Tư vấn </a>	'
     +'	  <a href=""> Trên tay </a>	'
     +'	  <a href=""> Đánh giá </a>	'
     +'	  <a href=""> Thị trường </a>	'
     +'	  <a href=""> Thủ thuật </a>	'
       +'	</div>	'
     +'	  </div>	'
     +'	</div>	'
     
     
     menuList.style.display= "block"; } )  
}
    

// top slider

window.addEventListener('load', function(){
    const homeSlider = document.querySelector ('.home-slider');
    const homeSliderMain = document.querySelector('.home-slider-main');
    const homeSliderItem = document.querySelectorAll('.home-slider-item');
    const homeNextBtn = document.querySelector('.home-slider-next');
    const homePrevBtn = document.querySelector('.home-slider-prev');
    const homeFooterItem = document.querySelectorAll('.home-slider-footer-item')
    const homeSliderItemWidth = homeSliderItem[0].offsetWidth;
    const homeSliderLength = homeSliderItem.length;
    let postionX = 0;
    let index = 0;

    homeNextBtn.addEventListener('click', function(){
        handleChangeslide(1)
      
    });

    homePrevBtn.addEventListener('click', function(){
        handleChangeslide(-1)
    });

    [...homeFooterItem].forEach((item) =>
    item.addEventListener('click',function (e) {
        [...homeFooterItem].forEach( (el) =>
         el.classList.remove('active-home-silder-footer-item'));
         e.target.classList.add('active-home-silder-footer-item');
         const slideIndex = parseInt(e.target.dataset.index);
         index = slideIndex;
         postionX = -1 * index * homeSliderItemWidth;
         homeSliderMain.style = `transform: translateX(${postionX}px)`;
    })
    );

    function handleChangeslide(direction) {
        if (direction == 1 ) {
            if (index >= homeSliderLength - 1) {
                index =  homeSliderLength - 1;
                return;
            }
            postionX = postionX - homeSliderItemWidth;
            homeSliderMain.style = `transform: translateX(${postionX}px)`;
            index++;
        }
        else if (direction == -1) {
            if (index <= 0 ){
                index = 0;
                return;
            }
        postionX = postionX + homeSliderItemWidth;
        homeSliderMain.style = `transform: translateX(${postionX}px)`;
        index--;
    } 

    [...homeFooterItem].forEach((el) => el.classList.remove('active-home-silder-footer-item'));
    homeFooterItem[index].classList.add('active-home-silder-footer-item');
    }
});