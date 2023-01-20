toastr.options = {
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function randomPrivateKeyToElem(elem) {
  document.getElementById(elem).value = Window.randomPrivateKey();
}

function randomSeedToElem(elem) {
  document.getElementById(elem).value = Window.randomSeed();
}

function CopyElem(elem) {
  copyT(document.getElementById(elem).value);
}

function copyT(text) {
  if (text.length < 1) {
    toastr.error('There is nothing to copy ');
    return
  }
  var input = document.createElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand('copy');
  document.body.removeChild(input);
  toastr.success('Copied successfully');
  return result;
}

function Eblock2() {
  if (document.getElementById('block2-pk').value.length == 120) {
    Window.Wblock2();
  } else {
    toastr.error('Error : The Encrypted PrivateKey is not 120 length');
  }
}

function Eblock1() {
  if (document.getElementById('block1-pk').value.length == 64) {
    Window.Wblock1();
  } else {
    toastr.error('Error : PrivateKey is not 64 length');
  }
}

function Eblock3() {
  Window.Wblock3();
}

function Eblock4() {
  Window.Wblock4();
}

function Eblock5() {
  Window.Wblock5();
}

function Eblock6() {
  Window.Wblock6();
}

function Eblock7() {
  Window.Wblock7();
}

function Eblock8() {
  Window.Wblock8();
}

function Eblock9() {
  Window.Wblock9();
}

function Eblock10() {
  Window.Wblock10();
}

function Eblock11() {
  Window.Wblock11();
}
