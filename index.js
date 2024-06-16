let arrNumber = [];
document.querySelector(".btn-success").onclick = function () {
    let soN = document.getElementById("soN").value * 1;
    //phương thức push
    arrNumber.push(soN);
    // đưa dữ liệu có trong mảng lên giao diện
    document.getElementById("ketQua1").innerHTML = arrNumber;
    // demo phương thức pop
    // let phanTuCuoiCung = arrNumber.pop();
    // console.log(phanTuCuoiCung);
    console.log(arrNumber);
}
// -------------------------------------1. Tổng các số dương trong mảng.----------------------------------
document.querySelector(".btn-primary").onclick = () => {
    let tong = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            tong += arrNumber[i];
        }
    }
    console.log(tong);
    // đưa dữ liệu có trong mảng lên giao diện
    document.getElementById("ketQua2").innerHTML += tong;
}

//----------------------------------2. Đếm có bao nhiêu số dương trong mảng.-----------------------------
document.querySelector(".btn-danger").onclick = () => {
    let count = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            count++;
        }
    }
    console.log(count);
    // đưa dữ liệu có trong mảng lên giao diện
    document.getElementById("ketQua3").innerHTML = `Có tất cả ${count} số dương nằm trong mảng`;
}
//-----------------------------------3. Tìm số nhỏ nhất trong mảng.---------------------------------------
document.querySelector(".btn-secondary").onclick = () => {
    let soNhoNhat = arrNumber[0];
    for (let i = 1; i < arrNumber.length; i++) {
        if (soNhoNhat > arrNumber[i]) {
            soNhoNhat = arrNumber[i];
        }
        }
    
    console.log(soNhoNhat);
    // đưa dữ liệu có trong mảng lên giao diện
    document.getElementById("ketQua4").innerHTML =`Số nhỏ nhất trong mảng là: ${soNhoNhat}`;
}
//-------------------------------------4. Tìm số dương nhỏ nhất trong mảng.------------------------------

document.querySelector(".btn-dark").onclick = () => {
    let arrSoDuong = [];
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
        arrSoDuong.push(arrNumber[i]); 
        } 
        console.log(arrSoDuong);
    }
    if (arrSoDuong.length > 0) {
      
        let soDuongNhoNhat = arrSoDuong[0];
        for (let z = 1; z < arrSoDuong.length; z++) {
            if (soDuongNhoNhat > arrSoDuong[z]) {
                soDuongNhoNhat = arrSoDuong[z];
            }
        }
        console.log(soDuongNhoNhat);
        // đưa dữ liệu có trong mảng lên giao diện
        document.getElementById("ketQua5").innerHTML = `Số dương nhỏ nhất trong mảng là: ${soDuongNhoNhat}`;
    } else {
        document.getElementById("ketQua5").innerHTML = `Không có số dương trong mảng`;
        }
}

//--------------5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1--------
document.querySelector(".btn-warning").onclick = () => {
    let SoChanCuoi = -1;
    for (let i = 0; i <arrNumber.length; i++) {
        if (arrNumber[i] % 2 == 0) {
            SoChanCuoi = arrNumber[i];
        }
        console.log(SoChanCuoi);
    }   
    if (SoChanCuoi < 0) {
        document.getElementById("ketQua6").innerHTML = `Kết quả ${SoChanCuoi}`;
    } else {
        document.getElementById("ketQua6").innerHTML = `Số chẵn cuối cùng trong mảng là:${SoChanCuoi}`;
    }
}

//---------6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).-----
document.querySelector(".alert-danger").onclick = () => {
    let viTri1 = document.getElementById("viTri1").value * 1;
    let viTri2 = document.getElementById("viTri2").value * 1;
    swap(arrNumber, viTri1, viTri2);
    console.log(arrNumber);
    // đưa dữ liệu có trong mảng lên giao diện
    document.getElementById("ketQua7").innerHTML =`Mảng sau khi đổi chỗ 2 vị trí ${arrNumber}`;
}
//------------------------7. Sắp xếp mảng theo thứ tự tăng dần.------------------------------------------
document.querySelector(".alert-warning").onclick = () => {
    for (let i = 0; i < arrNumber.length; i++){
        for (let z = i + 1; z < arrNumber.length; z++){
            if (arrNumber[i] > arrNumber[z]) {
                swap(arrNumber, i, z);
            }
        }
    }
    console.log(arrNumber);
    // đưa dữ liệu có trong mảng lên giao diện
    document.getElementById("ketQua8").innerHTML =`Mảng sau khi sắp xếp theo thứ tự tăng dần: ${arrNumber}`;
}
//-----8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.------------
document.querySelector(".alert-secondary").onclick = () => {
    let soNguyenToDauTien = -1;
    for (let i = 1; i < arrNumber.length; i++) {
        if (kiemTraSoNguyenTo(arrNumber[i])) {
            soNguyenToDauTien = arrNumber[i];
            break;
        }
    }
    
    console.log(soNguyenToDauTien);
    // đưa dữ liệu có trong mảng lên giao diện
    document.getElementById("ketQua9").innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${soNguyenToDauTien}`;
}
//-----------------9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?----------------
//-----------Nhập mảng số thực R-------------
let newArrNumber = [];
document.querySelector(".bg-danger").onclick = function () {
    let soThucR = document.getElementById("soThucR").value * 1;
    //phương thức push
    newArrNumber.push(soThucR);
    // đưa dữ liệu có trong mảng lên giao diện
    document.getElementById("ketQua10").innerHTML = newArrNumber;
    // demo phương thức pop
    // let phanTuCuoiCung = arrNumber.pop();
    // console.log(phanTuCuoiCung);
    console.log(newArrNumber);
}
//-----------Đếm số nguyên---------------------
document.querySelector(".bg-primary").onclick = () => {
    let countSoNguyen = 0;
    for (let i = 0; i < newArrNumber.length; i++) {
        if (Number.isInteger(newArrNumber[i])) {
            countSoNguyen++;
        } 
    }
    console.log(countSoNguyen);
     // đưa dữ liệu có trong mảng lên giao diện
     document.getElementById("ketQua11").innerHTML = `Có tất cả ${countSoNguyen} số nguyên nằm trong mảng`;
}
//--------------10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.--------------
document.querySelector(".bg-warning").onclick = () => {
    
    let countSoDuong = 0;
    let countSoAm = 0;
    for (let i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] > 0) {
            countSoDuong++;
        } else if (arrNumber[i] < 0) {
            countSoAm++;
        }
    }
    let soSanh = "";
    if (countSoAm > countSoDuong) {
        soSanh = "Số âm > số dương";
    } else if (countSoAm < countSoDuong) {
        soSanh = "Số âm < số dương";
    } else {
        soSanh="Số âm = số dương"
    }
    console.log(countSoAm);
    console.log(countSoDuong);
    console.log(soSanh);
    // đưa dữ liệu có trong mảng lên giao diện
    document.getElementById("ketQua12").innerHTML = soSanh;
}
