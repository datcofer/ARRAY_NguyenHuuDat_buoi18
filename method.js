function swap(array,viTri1, viTri2) {
    let viTriTam = array[viTri1];
    array[viTri1] = array[viTri2];
        array[viTri2] = viTriTam;
}
//Kiểm tra số nguyên tố
function kiemTraSoNguyenTo(number) {
    // Kiểm tra nếu số nhỏ hơn hoặc bằng 1 thì không phải là số nguyên tố
    if (number <= 1) {
        return false;
    }
    // Kiểm tra từ 2 đến căn bậc hai của số
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; // Nếu không tìm thấy ước số thì là số nguyên tố
}

   
