<div style="text-align: center;">
now = new Date();
if (now.getTimezoneOffset() == 0) (a=now.getTime() + (7*60*60*1000))
else (a=now.getTime());
now.setTime(a);
var tahun=now.getFullYear()
var hari=now.getDay()
var bulan=now.getMonth()
var tanggal=now.getDate()
var hariarray=new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,","Jum'at,","Sabtu,")
var bulanarray=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember")
document.write(hariarray[hari]+" "+tanggal+" "+bulanarray[bulan]+" "+tahun)
</div>
