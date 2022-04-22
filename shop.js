$(document).ready(() =>{
    var shop =[{
        id: 1,
        name: 'YORK DUMBBELL',
        price: 450,
        img: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.15752-9/278493247_653270612444719_6300105654915429062_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFIRM2UY3zV3bbpxoelP1V0blg91DuhMjRuWD3UO6EyNLIRHkciBDG6-4nrTF5lK4TD3-P93nZ2kbPi2ykp00x8&_nc_ohc=3Z7w2IjcM20AX-HmD5d&tn=Blh-vbWTPsCjw510&_nc_ht=scontent.fbkk2-6.fna&oh=03_AVJllQout47UJB9nfi4teBlOwzrYNfWrXIwxkdv92i3OfQ&oe=628513B3'
    },{
        id: 2,
        name: 'YOKA BALL',
        price: 599,
        img: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.15752-9/278669542_4995194430566000_6088269000879354852_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFHcldw-CM-AuUxcgru7b7iBFr082ShJfQEWvTzZKEl9BemJwZ105mV36J7OCRpFTOqxqIX3JGWKeN5fEdkgvB2&_nc_ohc=2VQME01J3mIAX9pM2n8&_nc_ht=scontent.fbkk2-6.fna&oh=03_AVLALYQOMdrjrse6211i7T9Fbkvn1QJ2jc7lvScJLrXqYw&oe=62854E25'
    },{
        id: 3,
        name: 'YOKA MAT',
        price: 1290,
        img: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.15752-9/278462644_1005886926969874_2165644160165609758_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFcPMXhtW9l4MPqppZ78RjorY4fsc5LZTytjh-xzktlPDXcxJxJR2yYvNLidh38y7tQp3we1C0HsJYdfy__WLqd&_nc_ohc=tPbW6wS6ZokAX96Wm_T&_nc_ht=scontent.fbkk2-5.fna&oh=03_AVIumjsAMhMEy7rs46PkNN65j1x6llbK3tZJKBXT2RV8qQ&oe=62865082'
    },{
        id: 4,
        name: 'HOOLA-HOOP',
        price: 300,
        img: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.15752-9/278184770_531383591710382_7966959952127277086_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFQ_L_HOICTfdflr7bFa7PNQTfCQCbhJ5ZBN8JAJuEnlriPgpLnrj_5-BQL1-F2krNrEFNqJN4m8RMhzmLq55Dl&_nc_ohc=FnQEnqqoihgAX8DzRGw&_nc_ht=scontent.fbkk2-7.fna&oh=03_AVJktpjmErHkA61tH2L6hIgyWxUvfv5W9hWzOocXCE-geg&oe=6283A6DE'
    },{
        id: 5,
        name: 'SKIPPING ROPE',
        price: 250,
        img: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.15752-9/277962807_315266757421017_3854233290062973151_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFPNtmFp7r2WMi8O3qaRb7phG9DuSr9cGuEb0O5Kv1wawQT4AI5R9AM484W5eSe3ue4uEP0gb4CbaPxlIiTTxOl&_nc_ohc=WEUcqNilFKYAX_r80Tb&_nc_ht=scontent.fbkk2-7.fna&oh=03_AVJBvXjO75fWfrLsjVYSxof-PjxUt1Y2Fg_STyvvz_FiFg&oe=62880834'
    },{
        id: 6,
        name: 'TWIST DISC',
        price: 250,
        img: 'https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.15752-9/278127377_953354858695932_635951796874842933_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGlYF0eI5DrRlYiWpUO5qDbty9_A9vC6W-3L38D28Lpb7YAUU838GogyxtNYpBbI4sFRFT_JHfAqmdvj5M7s0BW&_nc_ohc=ZZ8izU0OMr0AX-k996z&tn=Blh-vbWTPsCjw510&_nc_ht=scontent.fbkk2-4.fna&oh=03_AVLmPbK0VL8rJ3hpMXjNDpgyAh9YunMIEBXcPxCspiG-Pw&oe=6287C9DD'
    },{
        id: 7,
        name: 'STOPWATCH',
        price: 500,
        img: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.15752-9/277930615_513569580306952_4275231669880455914_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGE1BZGR8-2a5ekrO2IzJAYOx1E6491vzw7HUTrj3W_PHqmRh2ZRHWffgFIM8hLDju1dJwV65xkEIMRvbnUHDq_&_nc_ohc=QsxRsi2jUWoAX_6MZd6&_nc_ht=scontent.fbkk2-7.fna&oh=03_AVLG82aVFJYiluILVXj5MLayqp8QONvQzDuzhILIBfLWSQ&oe=6287BB27'
    },{
        id: 8,
        name: 'MARKER CONES',
        price: 10,
        img: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.15752-9/278773229_538367697645339_5377450940126853723_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeG9w3tRy2erSXcQoS3xW4vkDFAB31VRChgMUAHfVVEKGEqUsmoSeQUen3hvYtdWws4M8YJ0iyUJFeUWAKnIL0xH&_nc_ohc=NMhWM8ozyK0AX8acfjr&_nc_ht=scontent.fbkk2-6.fna&oh=03_AVIVDwf0HxYsYY60zk7RXH_aQRm-1A51-uiNEfan1Yk2eg&oe=6286D34F'
    },{
        id: 9,
        name: 'ABS WHEEL',
        price: 790,
        img: 'https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/278785238_1169536177142001_3197912311275437581_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGfWHuqjQQQLp-KgycRC3S7mWKq3DV5SPGZYqrcNXlI8XBM3PVoBBaJh9BuGp5xS9D3g8jDP6p3KvaBF22G0SLj&_nc_ohc=M8FPWYVBbJUAX_2e-yW&_nc_ht=scontent.fbkk2-8.fna&oh=03_AVILYcWPAYYWu8-_KbjqGEDW5LfcxNdrDfJ9L0MeSsqyLg&oe=62854174'
    },{
        id: 10,
        name: 'RESISTANCE BAND',
        price: 200,
        img: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.15752-9/277970095_525924245810103_11309578271858914_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeED0erRaocgV3k6caYRSugxmb6hocUVj3yZvqGhxRWPfFvthtHddpmcAw19E6a7AeOryIrXItWXLF6w7_A-ZpE7&_nc_ohc=NiiAqRDqgjYAX-2-RZo&_nc_ht=scontent.fbkk2-5.fna&oh=03_AVITfVm3-oe3btrmY1HU8B1QBTCUoNgeJzB_OgnAf5F8pw&oe=62857E9B'
    
    }]

    var html = '';
    for (let i = 0; i < shop.length; i++){
        html += `
        <div onclick="selectproduct(${shop[i].id},'${shop[i].name}',${shop[i].price})" class="product-items">
        <br><img src="${shop[i].img}">
        <div class="product-info">
            <h3>${shop[i].name}</h3>
            <p>${shop[i].price} THB</p>
        </div>
    </div>
        `;
    }
    $("#productbox").html(html)
})

var list = [];
function selectproduct(mid, mname, mprice) {
    console.log(mid, mname, mprice)
    var pass = true;

    for (let i = 0; i < list.length; i++) {
        if(list[i].id == mid) {
            list[i].count++;
            pass = false;
        }
    }

    if(pass) {
        list.push({
            id: mid,
            name: mname,
            price: mprice,
            count: 1
        })
    }
    var html ='';
    var sumprice = 0;
    for (let i = 0; i < list.length; i++) {
        sumprice += list[i].price * list[i].count;
        html +=`
        <div class="list-items">
                <p> [x${list[i].count}] ${list[i].name}</p>
                <p>${numcom(list[i].price * list[i].count)} THB</p>
            </div>
        `;
    }
    html +=`
    <div class="list-items list-summary">
    <p>ยอดชำระทั้งหมด</p>
    <p>${numcom(sumprice)} THB</p>
</div>
    `;
    $("#listbox").html(html)
}
function numcom(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function clearlist() {
    list = [];
    $("#listbox").html(`<p>โปรดเลือดรายการสินค้า</p>`)
}

function printlist() {
    var gotolist = JSON.stringify(list)
    localStorage.setItem('menulist',gotolist )
    //window.location.href = 'page.html'
}