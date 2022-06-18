
var app = angular.module("myapp", ["ngRoute"]);

app.controller('ctrl', function ($scope) {
    $scope.k = true;
    $scope.sortBy = (col) => {
        if ($scope.k == true) {
            $scope.col = '-' + col;
            $scope.k = false;
        }
        else {
            $scope.col = col;
            $scope.k = true;
        }
    }
    $scope.dtdd = [{
        id: 1, img: "samsung-galaxy-z-fold-3.jpg", name: "Samsung Galaxy Z Fold3 5G 512GB", price: 44990000, soluong: 20, hang: "SamSung", namsx: 2020, cat: "dtdd", uudai: "Trả góp 0%",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "Androi 11", ram: "8GB", bonhotrong: "128GB"
    },
    {
        id: 2, img: "iphone-13-pro-max-graphite-600x600.jpg", name: "iPhone 13 Pro Max 256GB", price: 35990000, soluong: 30, hang: "Iphone", namsx: 2019, cat: "dtdd", uudai: "siêu sale 11.11",
        manhinh: "AMOLED ,63 Full HD+", hedieuhanh: "Androi 11", ram: "12GB", bonhotrong: "256GB"
    },
    {
        id: 3, img: "xiaomi-11t-grey-1-600x600.jpg", name: "Xiaomi 11T 5G 256GB", price: 11990000, soluong: 25, hang: "xiaomi", namsx: 2021, cat: "dtdd", uudai: "siêu sale 11.11",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "IOS 15", ram: "8GB", bonhotrong: "256GB"
    },
    {
        id: 4, img: "samsung-galaxy-a03s-black-600x600.jpg", name: "Samsung Galaxy A03s", price: 3690000, soluong: 26, hang: "samsung", namsx: 20015, cat: "dtdd", uudai: "siêu sale 11.11",
        manhinh: "OLED6.7 Super Retina XDR", hedieuhanh: "Androi 11", ram: "12GB", bonhotrong: "128GB"
    },
    {
        id: 5, img: "oppo-reno6-z-5g-aurora-1-600x600.jpg", name: "OPPO Reno6 Z 5G", price: 9490000, soluong: 60, hang: "oppo", namsx: 2020, cat: "dtdd", uudai: "siêu sale 11.11",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "IOS 15", ram: "12GB", bonhotrong: "256GB"
    },
    {
        id: 6, img: "samsung-galaxy-s20-fan-edition-090320-040338-600x600.jpg", name: "Samsung Galaxy S20 FE (8GB/256GB)", price: 13490000, soluong: 45, hang: "samsug", namsx: 2020, cat: "dtdd", uudai: "Trả góp 0%",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "Androi 11", ram: "8GB", bonhotrong: "128GB"
    },
    {
        id: 7, img: "oppo-a74-blue-9-600x600.jpg", name: "OPPO A74", price: 6690000, soluong: 34, hang: "oppo", namsx: 2019, cat: "dtdd", uudai: "Trả góp 0%",
        manhinh: "OLED6.7Super Retina XDR", hedieuhanh: "IOS 15", ram: "8GB", bonhotrong: "256GB"
    },
    {
        id: 8, img: "realme-c21y-black-600x600.jpg", name: "Realme C21Y 4GB", price: 3990000, soluong: 64, hang: "realme", namsx: 2018, cat: "dtdd", uudai: "Trả góp 0%",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "Androi 11", ram: "8GB", bonhotrong: "128GB"
    },
    {
        id: 9, img: "xiaomi-11-lite-5g-ne-pink-600x600.jpg", name: "Xiaomi 11 Lite 5G NE", price: 9490000, soluong: 20, hang: "xiaomi", namsx: 2016, cat: "dtdd", uudai: "Trả góp 0%",
        manhinh: "OLED6.1 Super Retina XDR", hedieuhanh: "Androi 11", ram: "12GB", bonhotrong: "128GB"
    },
    {
        id: 10, img: "vivo-y21-white-01-1-600x600.jpg", name: "Vivo Y21", price: 4290000, soluong: 20, hang: "vivo", namsx: 2020, cat: "dtdd", uudai: "Trả góp 0%",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "Androi 11", ram: "8GB", bonhotrong: "128GB"
    },
    {
        id: 11, img: "iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg", name: "iPhone 12 Pro Max", price: 31990000, soluong: 23, hang: "iphone", namsx: 2019, cat: "dtdd", uudai: "Trả góp 0%",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "Androi 11", ram: "6GB", bonhotrong: "128GB"
    },
    {
        id: 12, img: "iphone-12-pro-gold-600x600.jpg", name: "iPhone 12 Pro", price: 2490000, soluong: 34, hang: "iphone", namsx: 2019, cat: "dtdd", uudai: "Trả góp 0%",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "Androi 11", ram: "6GB", bonhotrong: "128GB"
    },]


    $scope.laptop = [{
        img: "dell-g3-15-i7-p89f002bwh-16-600x600.jpg", name: "Dell Gaming G3 15 i7 10750H (P89F002BWH)", price: 31990000, soluong: 20, hang: "dell", namsx: 2020, cat: "laptop", id: 1, uudai: "siêu sale 11.11",
        manhinh: "2K, 120Hz", cpu: "Ryzen 9, 5900HS, 3GHz", card: "Card rời,RTX 3050Ti 4GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-600x600.jpg", name: "Lenovo Ideapad Gaming 3 15IMH05 i7 10750H", price: 25990000, soluong: 20, hang: "lenovo", namsx: 2020, cat: "laptop", id: 2, uudai: "siêu sale 11.11",
        manhinh: "14 2.2K (2240x1400)", cpu: "i5, 11400H, 2.7GHz", card: "Card rời,RTX 3050Ti 4GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "acer-aspire-7-a715-42g-r4st-r5-nhqaysv004-16-600x600.jpg", name: "Acer Aspire 7 Gaming A715 42G R4ST R5 5500U", price: 19790000, soluong: 20, hang: "acer", namsx: 2020, cat: "laptop", id: 3, uudai: "siêu sale 11.11",
        manhinh: "14, QHD (2560 x 1440), 120Hz", cpu: "i5, 11400H, 2.7GHz", card: "RTX 3060 6GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "thumb-600x600.jpg", name: "Lenovo IdeaPad Gaming 3 15IMH05 i5 10300H", price: 21690000, soluong: 20, hang: "lenovo", namsx: 2020, cat: "laptop", id: 4, uudai: "siêu sale 11.11",
        manhinh: "14, QHD (2560 x 1440), 120Hz", cpu: "i5, 1135G7, 2.4GHz", card: "Card rời,MX450 2GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "msi-gf65-10ue-i7-228vn-600x600.jpg", name: "MSI Gaming GF65 10UE i7 10750H (228VN)", price: 32490000, soluong: 20, hang: "msi", namsx: 2020, cat: "laptop", id: 5, uudai: "siêu sale 11.11",
        manhinh: "14, 2.2K (2240x1400)", cpu: "Ryzen 9, 5900HS, 3GHz", card: "Card rời,MX450 2GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg", name: "Acer Nitro 5 Gaming AN515 57 727J i7 11800H", price: 26490000, soluong: 20, hang: "acer", namsx: 2020, cat: "laptop", id: 6, uudai: "Trả góp 0%",
        manhinh: "2K, 120Hz", cpu: "Ryzen 9, 5900HS, 3GHz", card: "RTX 3060 6GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "msi-gamin-gf65-thin-10ue-i5-10500h-16gb-512gb-6gb-600x600.jpg", name: "MSI Gaming GF65 Thin 10UE i5 10500H (286VN)", price: 29690000, soluong: 20, hang: "msi", namsx: 2020, cat: "laptop", id: 7, uudai: "Trả góp 0%",
        manhinh: "14, QHD (2560 x 1440), 120Hz", cpu: "i5, 11400H, 2.7GHz", card: "Card rời,RTX 3050Ti 4GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "asus-rog-zephyrus-gaming-g14-ga401qec-r9-k2064t-17-600x600.jpg", name: "Asus ROG Zephyrus G14 Alan Walker R9 5900HS (K2064T)", price: 28990000, soluong: 20, hang: "asus", namsx: 2020, cat: "laptop", id: 8, uudai: "Trả góp 0%",
        manhinh: "15.6, Full HD (1920 x 1080), 144Hz", cpu: "i5, 1135G7, 2.4GHz", card: "RTX 3060 6GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "acer-nitro-5-gaming-an515-57-5831-i5-nhqdgsv003-600x600.jpg", name: "Acer Nitro 5 Gaming AN515 57 5831 i5 11400H", price: 19490000, soluong: 20, hang: "acer", namsx: 2020, cat: "laptop", id: 9, uudai: "Trả góp 0%",
        manhinh: "15.6, Full HD (1920 x 1080), 144Hz", cpu: "i5, 1135G7, 2.4GHz", card: "RTX 3060 6GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "acer-nitro-5-an515-57-54af-i5-11400h-16gb-512gb-600x600.jpg", name: "Acer Nitro 5 Gaming AN515 57 54AF i5 11400H", price: 14290000, soluong: 20, hang: "acer", namsx: 2020, cat: "laptop", id: 10, uudai: "siêu sale 11.11",
        manhinh: "2K, 120Hz", cpu: "Ryzen 9, 5900HS, 3GHz", card: "RTX 3060 6GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "hp-gaming-victus-16-e0175ax-r5-5600h-8gb-600x600.jpg", name: "HP Gaming VICTUS 16 e0175AX R5 5600H (4R0U8PA)", price: 16990000, soluong: 20, hang: "hp", namsx: 2020, cat: "laptop", id: 11, uudai: "siêu sale 11.11",
        manhinh: "2K, 120Hz", cpu: "i5, 11400H, 2.7GHz", card: "RTX 3060 6GB", pin: "4-cell, 57.5Wh"
    },
    {
        img: "hp-omen-15-ek0078tx-i7-26y68pa-600x600.jpg", name: "HP Omen 15 ek0078TX i7 10750H (26Y68PA)", price: 20490000, soluong: 20, hang: "hp", namsx: 2020, cat: "laptop", id: 12, uudai: "siêu sale 11.11",
        manhinh: "2K, 120Hz", cpu: "i5, 11400H, 2.7GHz", card: "RTX 3060 6GB", pin: "4-cell, 57.5Wh"
    },]

    $scope.tablet = [{
        img: "samsung-galaxy-tab-s7-fe-green-600x600.jpg", name: "Samsung Galaxy Tab S7 FE 4G", price: 14990000, soluong: 20, hang: "samsung", namsx: 2020, cat: "tablet", id: 1, uudai: "siêu sale 11.11",
        manhinh: "12.4,TFT LCD", hedieuhanh: "Androi 11", ram: "8GB", bonhotrong: "256GB"
    },
    {
        img: "huawei-matepad-11-grey-600x600.jpg", name: "Huawei MatePad 11", price: 13990000, soluong: 20, hang: "huawei", namsx: 2020, cat: "tablet", id: 2, uudai: "siêu sale 11.11",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "IOS 15", ram: "8GB", bonhotrong: "128GB"
    },
    {
        img: "ipad-pro-2021-129-inch-silver-600x600.jpg", name: "iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)", price: 31790000, soluong: 20, hang: "huawei", namsx: 2020, cat: "tablet", id: 3, uudai: "Trả góp 0%",
        manhinh: "12.4,TFT LCD", hedieuhanh: "IOS 15", ram: "6GB", bonhotrong: "128GB"
    },
    {
        img: "ipad-pro-2021-129-inch-gray-600x600.jpg", name: "iPad Pro M1 12.9 inch WiFi Cellular 128GB (2021)", price: 33900000, soluong: 20, hang: "huawei", namsx: 2020, cat: "tablet", id: 4, uudai: "Trả góp 0%",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "Androi 11", ram: "12GB", bonhotrong: "128GB"
    },
    {
        img: "ipad-pro-m1-129-inch-wifi-sliver-600x600.jpg", name: "iPad Pro M1 12.9 inch WiFi 256GB (2021)", price: 35490000, soluong: 20, hang: "huawei", namsx: 2020, cat: "tablet", id: 5, uudai: "siêu sale 11.11",
        manhinh: "12.9,Liquid Retina XDR mini-LED LCD", hedieuhanh: "Androi 11", ram: "12GB", bonhotrong: "256GB"
    },
    {
        img: "ipad-mini-6-wifi-cellular-starlight-1-600x600.jpg", name: "iPad mini 6 WiFi Cellular 256GB", price: 26490000, soluong: 20, hang: "samsung", namsx: 2020, cat: "tablet", id: 6, uudai: "siêu sale 11.11",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "Androi 11", ram: "12GB", bonhotrong: "128GB"
    },
    {
        img: "ipad-air-4-wifi-64gb-2020-xanhla-600x600-600x600.jpg", name: "iPad Air 4 Wifi 256GB", price: 21690000, soluong: 20, hang: "samsung", namsx: 2020, cat: "tablet", id: 7, uudai: "siêu sale 11.11",
        manhinh: "12.9,Liquid Retina XDR mini-LED LCD", hedieuhanh: "IOS 15", ram: "8GB", bonhotrong: "128GB"
    },
    {
        img: "ipad-air-4-wifi-64gb-2020-xanhla-600x600-600x600.jpg", name: "iPad Air 4 Wifi Cellular 64GB (2020)", price: 19990000, soluong: 20, hang: "samsung", namsx: 2020, cat: "tablet", id: 8, uudai: "siêu sale 11.11",
        manhinh: "12.9,Liquid Retina XDR mini-LED LCD", hedieuhanh: "Androi 11", ram: "6GB", bonhotrong: "128GB"
    },
    {
        img: "ipad-mini-6-wifi-pink-1-600x600.jpg", name: "iPad mini 6 WiFi 256GB", price: 19490000, soluong: 20, hang: "apple", namsx: 2020, cat: "tablet", id: 9, uudai: "siêu sale 11.11",
        manhinh: "11,Liquid Retina", hedieuhanh: "Androi 11", ram: "6GB", bonhotrong: "128GB"
    },
    {
        img: "ipad-mini-6-wifi-pink-1-600x600.jpg", name: "iPad mini 6 WiFi Cellular 64GB", price: 19290000, soluong: 20, hang: "apple", namsx: 2020, cat: "tablet", id: 10, uudai: "Trả góp 0%",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "IOS 15", ram: "8GB", bonhotrong: "256GB"
    },
    {
        img: "samsung-galaxy-tab-s7-gold-new-600x600.jpg", name: "Samsung Galaxy Tab S7", price: 20990000, soluong: 20, hang: "apple", namsx: 2020, cat: "tablet", id: 11, uudai: "Trả góp 0%",
        manhinh: "11,Liquid Retina", hedieuhanh: "Androi 11", ram: "12GB", bonhotrong: "128GB"
    },
    {
        img: "ipad-gen-9-wifi-cellular-grey-600x600.jpg", name: "iPad 9 WiFi Cellular 256GB", price: 17490000, soluong: 20, hang: "apple", namsx: 2020, cat: "tablet", id: 12, uudai: "Trả góp 0%",
        manhinh: "AMOLED6.67 Full HD+", hedieuhanh: "Androi 11", ram: "8GB", bonhotrong: "128GB"
    },]

    $scope.phukien = [{ img: "ava-lj-jp199-ava-600x600.jpg", name: "Pin sạc dự phòng 7500 mAh AVA+ LJ JP199", price: 290000, soluong: 20, hang: "apple", namsx: 2020, cat: "phukien", id: 1, uudai: "Trả góp 0%" },
    { img: "cap-micro-1m-xmobile-ltm-02-xanh-reu-ava-1-600x600.jpg", name: "Cáp Micro 1m Xmobile LTM-02 Xanh rêu", price: 190000, soluong: 20, hang: "apple", namsx: 2020, cat: "phukien", id: 2, uudai: "Trả góp 0%" },
    { img: "cap-lightning-1m-xmobile-ltl-01x-xanh-reu-avatar-ava-600x600.jpg", name: "Cáp Lightning 1m Xmobile LTL-01X Xanh rêu", price: 60000, soluong: 20, hang: "apple", namsx: 2020, cat: "phukien", id: 3, uudai: "siêu sale 11.11" },
    { img: "ava-plus-ds005-pp-ava-600x600.jpg", name: "Pin sạc dự phòng 7.500 mAh AVA+ DS005-PP", price: 70000, soluong: 20, hang: "apple", namsx: 2020, cat: "phukien", id: 4, uudai: "siêu sale 11.11" },
    { img: "cap-micro-1m-evalu-ltm-01-do-den-ava-600x600.jpg", name: "Cáp Micro 1m eValu LTM -01", price: 150000, soluong: 20, hang: "samsung", namsx: 2020, cat: "phukien", id: 5, uudai: "siêu sale 11.11" },
    { img: "ava-plus-y68-1-600x600.jpg", name: "Pin sạc dự phòng 7.500 mAh AVA+ Y68", price: 199000, soluong: 20, hang: "samsung", namsx: 2020, cat: "phukien", id: 6, uudai: "siêu sale 11.11" },
    { img: "tai-nghe-bluetooth-true-wireless-mozard-ts13-avatar-ava-600x600.jpg", name: "Tai nghe Bluetooth True Wireless Mozard TS13", price: 690000, soluong: 20, hang: "samsung", namsx: 2020, cat: "phukien", id: 7, uudai: "siêu sale 11.11" },
    { img: "tai-nghe-ep-mozard-ds510-wb-xanh-avatar-1-600x600-1-600x600.jpg", name: "Tai nghe EP Mozard DS510-WB Xanh", price: 50000, soluong: 20, hang: "samsung", namsx: 2020, cat: "phukien", id: 8, uudai: "siêu sale 11.11" },
    { img: "thiet-bi-dinh-vi-thong-minh-airtag-4-pack-mx542-ava-600x600.jpg", name: "Thiết bị định vị thông minh AirTag 4 Pack MX542", price: 2490000, soluong: 20, hang: "xiaomi", namsx: 2020, cat: "phukien", id: 9, uudai: "siêu sale 11.11" },
    { img: "bluetooth-tws-samsung-galaxy-bub-r175-ava-600x600.jpg", name: "Tai nghe Bluetooth True Wireless Samsung Galaxy Buds+ R175", price: 2590000, soluong: 20, hang: "xiaomi", namsx: 2020, cat: "phukien", id: 10, uudai: "Trả góp 0%" },
    { img: "bluetooth-tws-samsung-galaxy-bub-r175-ava-600x600.jpg", name: "Tai nghe Bluetooth True Wireless Galaxy Buds Pro", price: 4990000, soluong: 20, hang: "xiaomi", namsx: 2020, cat: "phukien", id: 11, uudai: "Trả góp 0%" },
    { img: "tai-nghe-bluetooth-true-wireless-lg-hbs-fn6-avatar-1-1-600x600.jpg", name: "Tai nghe Bluetooth True Wireless LG Tone Free HBS-FN6", price: 690000, soluong: 20, hang: "xiaomi", namsx: 2020, cat: "phukien", id: 12, uudai: "Trả góp 0%" },]

    $scope.dhtm = [{
        img: "s6-44mm-vien-nhom-day-cao-su-xanh-thumb-600x600.jpg", name: "Apple Watch S6 44mm viền nhôm dây cao su", price: 11990000, soluong: 20, hang: "apple", namsx: 2020, cat: "dhtm", id: 1, uudai: "Trả góp 0%",
        manhinh: "AMOLED, 1.1 inch", pin: "khoảng 14 ngày", hedieuhanh: "Android 5.0 trở lên,IOS 14 trở lên"
    },
    {
        img: "samsung-galaxy-watch-4-lte-classic-42mm-thumb-1-1-600x600.jpg", name: "Samsung Galaxy Watch 4 LTE Classic 42mm", price: 13990000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtm", id: 1, uudai: "Trả góp 0%",
        manhinh: "OLED, 1.57 inch", pin: "khoảng 13 ngày", hedieuhanh: "IOS 14 trở lên"
    },
    {
        img: "se-40mm-vien-nhom-day-cao-su-hong-thumb-1-600x600.jpg", name: "Apple Watch SE 40mm viền nhôm dây cao su", price: 8790000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtm", id: 1, uudai: "siêu sale 11.11",
        manhinh: "AMOLED, 1.1 inch", pin: "khoảng 15 ngày", hedieuhanh: "Android 5.0 trở lên,IOS 14 trở lên"
    },
    {
        img: "beu-sport-moi-thumb-600x600.jpg", name: "BeU Sporty 1", price: 1690000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtm", id: 1, uudai: "siêu sale 11.11",
        manhinh: "OLED, 1.56 inch", pin: "khoảng 15 ngày", hedieuhanh: "Android 5.0 trở lên,IOS 14 trở lên"
    },
    {
        img: "samsung-galaxy-watch-3-45mm-bac-thumb-1-1-600x600.jpg", name: "Samsung Galaxy Watch 3 45mm viền thép dây da", price: 5490000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtm", id: 1, uudai: "siêu sale 11.11",
        manhinh: "AMOLED, 1.1 inch", pin: "khoảng 13 ngày", hedieuhanh: "IOS 14 trở lên"
    },
    {
        img: "beu-b2-hong-thumb-1-1-600x600.jpg", name: "BeU B2", price: 490000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtm", id: 1, uudai: "siêu sale 11.11",
        manhinh: "AMOLED, 1.56 inch", pin: "khoảng 10 ngày", hedieuhanh: "Android 5.0 trở lên"
    },
    {
        img: "realme-watch-2-pro-day-silicone-xam-thumb-1-1-600x600.jpg", name: "Realme Watch 2 Pro dây silicone", price: 2690000, soluong: 20, hang: "realme", namsx: 2020, cat: "dhtm", id: 1, uudai: "siêu sale 11.11",
        manhinh: "OLED, 1.57 inch", pin: "khoảng 10 ngày", hedieuhanh: "Android 5.0 trở lên"
    },
    {
        img: "oppo-watch-41mm-day-silicone-thumb-1-1-600x600.jpg", name: "Oppo Watch 41mm dây silicone", price: 4990000, soluong: 20, hang: "oppo", namsx: 2020, cat: "dhtm", id: 1, uudai: "siêu sale 11.11",
        manhinh: "AMOLED, 1.56 inch", pin: "khoảng 15 ngày", hedieuhanh: "IOS 14 trở lên"
    },
    {
        img: "apple-watch-s6-lte-40mm-vien-thep-day-thep-vang-thumb-1-600x600.jpg", name: "Apple Watch S6 LTE 40mm viền thép dây thép", price: 9490000, soluong: 20, hang: "apple", namsx: 2020, cat: "dhtm", id: 1, uudai: "Trả góp 0%",
        manhinh: "OLED, 1.57 inch", pin: "khoảng 12 ngày", hedieuhanh: "IOS 14 trở lên"
    },
    {
        img: "beu-b1-den-thumb-1-1-600x600.jpg", name: "BeU B1", price: 590000, soluong: 20, hang: "apple", namsx: 2020, cat: "dhtm", id: 1, uudai: "Trả góp 0%",
        manhinh: "AMOLED, 1.56 inch", pin: "khoảng 15 ngày", hedieuhanh: "IOS 14 trở lên"
    },
    {
        img: "apple-watch-s6-lte-40mm-vien-thep-day-thep-vang-thumb-1-600x600.jpg", name: "Samsung Galaxy Tab S7", price: 20990000, soluong: 20, hang: "apple", namsx: 2020, cat: "dhtm", id: 1, uudai: "Trả góp 0%",
        manhinh: "OLED, 1.57 inch", pin: "khoảng 15 ngày", hedieuhanh: "IOS 14 trở lên"
    },
    {
        img: "beu-b1-den-thumb-1-1-600x600.jpg", name: "BeU B1A", price: 690000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtm", id: 1, uudai: "siêu sale 11.11",
        manhinh: "OLED, 1.57 inch", pin: "khoảng 12 ngày", hedieuhanh: "IOS 14 trở lên"
    },]

    $scope.dhtt = [{
        img: "dong-ho-nam-mvw-ms075-01-1.-600x600.jpg", name: "Đồng hồ Nam MVW MS075-01", price: 1990000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtt", id: 1, uudai: "siêu sale 11.11",
        duongkinhmat: "44.5 mm", chatlieu: "Kính khoáng Mineral", chatlieuday: "Thép không gỉ", bomay: "Eco-Drive"
    },
    {
        img: "dong-ho-nam-mvw-ml065-01-1.-600x600.jpg", name: "Đồng hồ Nam MVW ML065-01  ", price: 1390000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtt", id: 2, uudai: "siêu sale 11.11",
        duongkinhmat: "28 mm", chatlieu: "Kính Sapphire", chatlieuday: "Thép không gỉ", bomay: "Pin (Quartz)"
    },
    {
        img: "se-40mm-vien-nhom-day-cao-su-hong-thumb-1-600x600.jpg", name: "Apple Watch SE 40mm viền nhôm dây cao su", price: 8790000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtt", id: 3, uudai: "siêu sale 11.11",
        duongkinhmat: "44.5 mm", chatlieu: "Kính khoáng Mineral", chatlieuday: "Da tổng hợp", bomay: "Eco-Drive"
    },
    {
        img: "ava-600x600.jpg", name: "Đồng hồ đôi Citizen BH3002-03A/EJ6122-08A ", price: 1600000, soluong: 20, hang: "samsung", namsx: 2020, cat: "dhtt", id: 4, uudai: "Trả góp 0%",
        duongkinhmat: "43.5mm", chatlieu: "Kính Sapphire", chatlieuday: "Da tổng hợp", bomay: "Pin (Quartz)"
    },
    {
        img: "elio-el076-01-el076-02-nam-nu-600x600.jpg", name: "Đồng hồ đôi Elio EL076-01/EL076-02 ", price: 5490000, soluong: 20, hang: "xiaomi", namsx: 2020, cat: "dhtt", id: 5, uudai: "Trả góp 0%",
        duongkinhmat: "42mm", chatlieu: "Kính Sapphire", chatlieuday: "Da tổng hợp", bomay: "Pin (Quartz)"
    },
    {
        img: "ferrari-0860002-tre-emava-300x300.jpg", name: "Đồng hồ Trẻ em Ferrari 0860002", price: 1800000, soluong: 20, hang: "xiaomi", namsx: 2020, cat: "dhtt", id: 6, uudai: "Trả góp 0%",
        duongkinhmat: "45 mm", chatlieu: "Kính cứng", chatlieuday: "Da tổng hợp", bomay: "Pin (Quartz)"
    },
    {
        img: "fossil-fs4682ie-nam-600x600.jpg", name: "Đồng hồ Nam Fossil FS4682IE ", price: 4690000, soluong: 20, hang: "xiaomi", namsx: 2020, cat: "dhtt", id: 7, uudai: "Trả góp 0%",
        duongkinhmat: "42mm", chatlieu: "Kính cứng", chatlieuday: "Da tổng hợp", bomay: "Pin (Quartz)"
    },
    {
        img: "festina-f20426-6-nam-ava-600x600.jpg", name: "Đồng hồ Nam Festina F20426/6 ", price: 2990000, soluong: 20, hang: "xiaomi", namsx: 2020, cat: "dhtt", id: 8, uudai: "Trả góp 0%",
        duongkinhmat: "43mm", chatlieu: "Kính cứng", chatlieuday: "Da tổng hợp", bomay: "Pin (Quartz)"
    },
    {
        img: "dong-ho-nam-mvw-ms071-01-1.-600x600.jpg", name: "Đồng hồ Nam MVW MS071-01", price: 9490000, soluong: 20, hang: "realme", namsx: 2020, cat: "dhtt", id: 9, uudai: "siêu sale 11.11",
        duongkinhmat: "42mm", chatlieu: "Sapphire", chatlieuday: "Da tổng hợp", bomay: "Pin (Quartz)"
    },
    {
        img: "beu-b1-den-thumb-1-1-600x600.jpg", name: "BeU B1", price: 590000, soluong: 20, hang: "realme", namsx: 2020, cat: "dhtt", id: 10, uudai: "siêu sale 11.11",
        duongkinhmat: "28 mm", chatlieu: "Kính khoáng Mineral", chatlieuday: "Da tổng hợp", bomay: "Pin (Quartz)"
    },
    {
        img: "elio-el075-01-el075-02-nam-nu-600x600.jpg", name: "Đồng hồ đôi Elio EL075-01/EL075-02 ", price: 4990000, soluong: 20, hang: "realme", namsx: 2020, cat: "dhtt", id: 11, uudai: "siêu sale 11.11",
        duongkinhmat: "42mm", chatlieu: "Kính khoáng Mineral", chatlieuday: "Da tổng hợp", bomay: "Pin (Quartz)"
    },
    {
        img: "beu-b1-den-thumb-1-1-600x600.jpg", name: "BeU B1A", price: 690000, soluong: 20, hang: "realme", namsx: 2020, cat: "dhtt", id: 12, uudai: "siêu sale 11.11",
        duongkinhmat: "28 mm", chatlieu: "Sapphire", chatlieuday: "Da tổng hợp", bomay: "Pin (Quartz)"
    },]

    $scope.pc = [{ img: "may-in-laser-brother-hl-l2321d-23-600x600.jpg", name: "Máy In laser Trắng Đen Brother HL L2321D", price: 3990000, soluong: 20, hang: "realme", namsx: 2020, cat: "pc", id: 1, uudai: "siêu sale 11.11" },
    { img: "may-in-laser-canon-lbp2900-16-600x600.jpg", name: "Máy In Laser Trắng Đen Canon LBP2900", price: 3490000, soluong: 20, hang: "realme", namsx: 2020, cat: "pc", id: 1, uudai: "siêu sale 11.11" },
    { img: "may-in-laser-trang-den-hp-107w-wifi-4zb78a-600x600.jpg", name: "Máy in Laser Trắng Đen HP 107w WiFi (4ZB78A)", price: 2790000, soluong: 20, hang: "realme", namsx: 2020, cat: "pc", id: 1, uudai: "siêu sale 11.11" },
    { img: "may-in-laser-canon-da-chuc-nang-mf241d-08-600x600.jpg", name: "Máy In Laser Trắng Đen Canon MF241d", price: 5690000, soluong: 20, hang: "realme", namsx: 2020, cat: "pc", id: 1, uudai: "Trả góp 0%" },
    { img: "may-in-phun-mau-da-nang-pixma-ts6370-wifi-06-600x600.jpg", name: "Máy In Ảnh Phun Màu Canon PIXMA TS6370 Wifi", price: 3590000, soluong: 20, hang: "oppo", namsx: 2020, cat: "pc", id: 1, uudai: "Trả góp 0%" },
    { img: "may-in-phun-mau-da-nang-pixma-ts6370-wifi-06-600x600.jpg", name: "Máy in phun màu Canon TR4570S đa năng WiFi", price: 3890000, soluong: 20, hang: "oppo", namsx: 2020, cat: "pc", id: 1, uudai: "Trả góp 0%" },
    { img: "man-hinh-may-tinhasus-lcd-proart-pa247cv-238-inch-full-hd-600x600.jpg", name: "Asus LCD ProArt PA247CV 23.8 inch Full HD", price: 5690000, soluong: 20, hang: "oppo", namsx: 2020, cat: "pc", id: 1, uudai: "siêu sale 11.11" },
    { img: "asus-aio-v241e-i5-ba010t-600x600.jpg", name: "Asus AIO V241E i5 1135G7 (BA010T)", price: 20990000, soluong: 20, hang: "oppo", namsx: 2020, cat: "pc", id: 1, uudai: "siêu sale 11.11" },
    { img: "asus-aio-v241e-i5-ba010t-600x600.jpg", name: "Asus AIO V241E i3 1115G4 (BA066T)", price: 17490000, soluong: 20, hang: "samsung", namsx: 2020, cat: "pc", id: 1, uudai: "siêu sale 11.11" },
    { img: "asus-expertcenter-aio-e5402wh-i5-ba042t-600x600.jpg", name: "Asus ExpertCenter AIO E5202WHAK i5 11500B", price: 10590000, soluong: 20, hang: "samsung", namsx: 2020, cat: "pc", id: 1, uudai: "siêu sale 11.11" },
    { img: "hp-aio-22-df1019d-i5-1135g7-4gb-512gb-215-fullhd-600x600.jpg", name: "HP AIO 22 df1020d i5 1135G7 21.5 inch (4B6D8PA)", price: 20990000, soluong: 20, hang: "samsung", namsx: 2020, cat: "pc", id: 1, uudai: "siêu sale 11.11" },
    { img: "hp-aio-22-df1019d-i5-1135g7-4gb-512gb-215-fullhd-600x600.jpg", name: "HP 205 Pro G4 AIO R5 4500U 21.5 inch (31Y60PA)", price: 17690000, soluong: 20, hang: "samsung", namsx: 2020, cat: "pc", id: 1, uudai: "siêu sale 11.11" },]
});

app.config($routeProvider => {
    $routeProvider
        .when("/dtdd", {
            templateUrl: "./view/dienthoaididong.html",
            controller: "dtdd"
        })
        .when("/laptop", {
            templateUrl: "./view/laptop.html",
            controller: "laptop"
        })
        .when("/tablet", {
            templateUrl: "./view/tablet.html",
            controller: "tablet"
        })
        .when("/phukien", {
            templateUrl: "./view/phukien.html",
            controller: "phukien"
        })
        .when("/dhtm", {
            templateUrl: "./view/donghothongminh.html",
            controller: "dhtm"
        })
        .when("/dhtt", {
            templateUrl: "./view/donghothoitrang.html",
            controller: "dhtt"
        })
        .when("/pc", {
            templateUrl: "./view/pc.html",
            controller: "pc"
        })
        .when("/maycu", {
            templateUrl: "./view/maycu.html",
            controller: "maycu"
        })
        .when("/trangchu", {
            templateUrl: "./view/trangchu.html",
            // controller: "thongtin"
        })
        .when("/register", {
            templateUrl: "./view/register.html",
            // controller: "thongtin"
        })
        .when("/login", {
            templateUrl: "./view/login.html",
            // controller: "thongtin"
        })
        .when("/chitietsanpham/:id/:name/:img/:price/:soluong/:hang/:namsx/:cat", {
            templateUrl: "./view/chitietsanpham.html",
            controller: "chitietsanpham"
        })
        .when("/thanhtoan/:name/:soluongmua/:img/:price/:mau", {
            templateUrl: "./view/thanhtoan.html",
            controller: "thanhtoan"
        })
        .when("/hoadon/:img/:name/:soluongmua/:tongtien/:genderchose/:username/:phonenumber/:diachi/:yeucau/:magiamgia/:mau/:giaohang",{
            templateUrl: "./view/hoadon.html",
            controller: "hoadon"
        })
        .when("/dathangthanhcong",{
            templateUrl: "./view/dathangthanhcong.html",
            controller: "dathangthanhcong"
        })
        .otherwise({
            redirectTo: "/trangchu"
        })
});
app.controller('dathangthanhcong', function($scope){
    $scope.now = new Date()
    $scope.ngaydukien = new Date('11/30/2021')
})
app.controller('hoadon', function($scope, $routeParams){
    $scope.img = $routeParams.img
    $scope.name = $routeParams.name
    $scope.tongtien = $routeParams.tongtien
    $scope.soluongmua = $routeParams.soluongmua
    $scope.genderchose = $routeParams.genderchose
    $scope.username = $routeParams.username
    $scope.phonenumber = $routeParams.phonenumber
    $scope.diachi = $routeParams.diachi
    $scope.yeucau = $routeParams.yeucau
    $scope.magiamgia = $routeParams.magiamgia
    $scope.mau = $routeParams.mau
    $scope.giaohang = $routeParams.giaohang
})
app.controller('chitietsanpham', function ($scope, $routeParams) {
    $scope.name = $routeParams.name
    $scope.img = $routeParams.img
    $scope.price = $routeParams.price
    $scope.soluong = $routeParams.soluong
    $scope.hang = $routeParams.hang
    $scope.namsx = $routeParams.namsx
    $scope.cat = $routeParams.cat

    $scope.mautrang = function () {
        $scope.mau = "Trắng"

    }
    $scope.mauden = function () {
        $scope.mau = "Đen"
    }
})
app.controller('thanhtoan', function ($scope, $routeParams) {
    $scope.name = $routeParams.name
    $scope.soluongmua = $routeParams.soluongmua
    $scope.img = $routeParams.img
    $scope.price = $routeParams.price
    $scope.mau = $routeParams.mau
    $scope.genderAnh = function () {
        $scope.genderchose = "anh"
    }
    $scope.genderChi = function () {
        $scope.genderchose = "chị"
    }
    $scope.cach1 = function () {
        $scope.giaohang = "Giao hàng tận nơi"
        $scope.diachi = ""
        $scope.diachi = $scope.diachi
    }
    $scope.cach2 = function () {
        $scope.giaohang = "Nhận tại siêu thị"
        $scope.diachi = "Nhận tại thế giới di động chi nhánh 1"
    }
})

app.controller('dtdd', function ($scope) {
    // phân chia trang
    $scope.begin = 0;
    $scope.pagesize = 8;
    //tính số trang
    $scope.sotrang = Math.ceil($scope.dtdd.length / $scope.pagesize);
    //begin
    $scope.first = () => {
        $scope.begin = 0;
    }
    //previous
    $scope.previous = () => {
        if ($scope.begin > 0)
            $scope.begin = $scope.begin - $scope.pagesize;
    }
    //next
    $scope.next = () => {
        if ($scope.begin < ($scope.sotrang - 1) * $scope.pagesize) {
            $scope.begin = $scope.begin + $scope.pagesize;
        }
    }
    //last
    $scope.last = () => {
        $scope.begin = ($scope.sotrang - 1) * $scope.pagesize;
    }
    //end phân chia trang
});

app.controller('laptop', function ($scope) {
    // phân chia trang
    $scope.begin = 0;
    $scope.pagesize = 8;
    //tính số trang
    $scope.sotrang = Math.ceil($scope.laptop.length / $scope.pagesize);
    //begin
    $scope.first = () => {
        $scope.begin = 0;
    }
    //previous
    $scope.previous = () => {
        if ($scope.begin > 0)
            $scope.begin = $scope.begin - $scope.pagesize;
    }
    //next
    $scope.next = () => {
        if ($scope.begin < ($scope.sotrang - 1) * $scope.pagesize) {
            $scope.begin = $scope.begin + $scope.pagesize;
        }
    }
    //last
    $scope.last = () => {
        $scope.begin = ($scope.sotrang - 1) * $scope.pagesize;
    }
    //end phân chia trang
});

app.controller('tablet', function ($scope) {
    // phân chia trang
    $scope.begin = 0;
    $scope.pagesize = 8;
    //tính số trang
    $scope.sotrang = Math.ceil($scope.tablet.length / $scope.pagesize);
    //begin
    $scope.first = () => {
        $scope.begin = 0;
    }
    //previous
    $scope.previous = () => {
        if ($scope.begin > 0)
            $scope.begin = $scope.begin - $scope.pagesize;
    }
    //next
    $scope.next = () => {
        if ($scope.begin < ($scope.sotrang - 1) * $scope.pagesize) {
            $scope.begin = $scope.begin + $scope.pagesize;
        }
    }
    //last
    $scope.last = () => {
        $scope.begin = ($scope.sotrang - 1) * $scope.pagesize;
    }
    //end phân chia trang
});

app.controller('phukien', function ($scope) {
    // phân chia trang
    $scope.begin = 0;
    $scope.pagesize = 8;
    //tính số trang
    $scope.sotrang = Math.ceil($scope.phukien.length / $scope.pagesize);
    //begin
    $scope.first = () => {
        $scope.begin = 0;
    }
    //previous
    $scope.previous = () => {
        if ($scope.begin > 0)
            $scope.begin = $scope.begin - $scope.pagesize;
    }
    //next
    $scope.next = () => {
        if ($scope.begin < ($scope.sotrang - 1) * $scope.pagesize) {
            $scope.begin = $scope.begin + $scope.pagesize;
        }
    }
    //last
    $scope.last = () => {
        $scope.begin = ($scope.sotrang - 1) * $scope.pagesize;
    }
    //end phân chia trang
});

app.controller('dhtm', function ($scope) {
    // phân chia trang
    $scope.begin = 0;
    $scope.pagesize = 8;
    //tính số trang
    $scope.sotrang = Math.ceil($scope.dhtm.length / $scope.pagesize);
    //begin
    $scope.first = () => {

        $scope.begin = 0;
    }

    //previous
    $scope.previous = () => {
        if ($scope.begin > 0)
            $scope.begin = $scope.begin - $scope.pagesize;
    }
    //next
    $scope.next = () => {
        if ($scope.begin < ($scope.sotrang - 1) * $scope.pagesize) {
            $scope.begin = $scope.begin + $scope.pagesize;
        }
    }
    //last
    $scope.last = () => {
        $scope.begin = ($scope.sotrang - 1) * $scope.pagesize;
    }
    //end phân chia trang
});

app.controller('dhtt', function ($scope) {
    // phân chia trang
    $scope.begin = 0;
    $scope.pagesize = 8;
    //tính số trang
    $scope.sotrang = Math.ceil($scope.dhtt.length / $scope.pagesize);
    //begin
    $scope.first = () => {

        $scope.begin = 0;
    }

    //previous
    $scope.previous = () => {
        if ($scope.begin > 0)
            $scope.begin = $scope.begin - $scope.pagesize;
    }
    //next
    $scope.next = () => {
        if ($scope.begin < ($scope.sotrang - 1) * $scope.pagesize) {
            $scope.begin = $scope.begin + $scope.pagesize;
        }
    }
    //last
    $scope.last = () => {
        $scope.begin = ($scope.sotrang - 1) * $scope.pagesize;
    }
    //end phân chia trang
});

app.controller('pc', function ($scope) {
    // phân chia trang
    $scope.begin = 0;
    $scope.pagesize = 8;
    //tính số trang
    $scope.sotrang = Math.ceil($scope.pc.length / $scope.pagesize);
    //begin
    $scope.first = () => {

        $scope.begin = 0;
    }

    //previous
    $scope.previous = () => {
        if ($scope.begin > 0)
            $scope.begin = $scope.begin - $scope.pagesize;
    }
    //next
    $scope.next = () => {
        if ($scope.begin < ($scope.sotrang - 1) * $scope.pagesize) {
            $scope.begin = $scope.begin + $scope.pagesize;
        }
    }
    //last
    $scope.last = () => {
        $scope.begin = ($scope.sotrang - 1) * $scope.pagesize;
    }
    //end phân chia trang
});
