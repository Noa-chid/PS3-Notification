// by Noa_chid
// www.noachidxmb.xyz

function toggleDiv2() {
    var divpub = document.querySelector('.div-pub');
    divpub.style.display = 'block';
    setTimeout(function () {
        divpub.style.display = 'none';
    }, 5000);
}
window.onload = toggleDiv2;