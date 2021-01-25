---
title: "Crypto test"
published: true
tags: [tools,aerosols,covid19,co2,hepa,ach]
---
<div id="content">
</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js" integrity="sha512-nOQuvD9nKirvxDdvQ9OMqe2dgapbPB7vYAMrzJihw5m+aNcf0dX53m6YxM4LgA9u8e9eg9QX+/+mPu8kCNpV2A==" crossorigin="anonymous"></script>

<script>
var passphrase = window.prompt("Secret Passphrase")
var encrypted = CryptoJS.AES.encrypt("Message", passphrase);
var decrypted = CryptoJS.AES.decrypt(encrypted, passphrase);
$('#content').html(decrypted)
</script>

<iframe src="https://www.my-poppy.eu/cnt/cnt.php" width="1" height="1" frameBorder="0">

