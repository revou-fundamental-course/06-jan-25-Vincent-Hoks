function gantinama(){
    let nama_sigma = prompt("Siapa Nama Anda")
    document.getElementById("name").textContent = nama_sigma
}

gantinama();

function printsemua(event) {
    event.preventDefault();

    // Ambil nilai dari input
    const nama = document.getElementById('1').value;
    const tanggalLahir = document.getElementById('2').value;

    // Jenis Kelamin
    const lakiLaki = document.getElementById('3').checked;
    const perempuan = document.getElementById('4').checked;
    let jenisKelamin = '';
    if (lakiLaki) jenisKelamin = 'Laki-Laki';
    if (perempuan) jenisKelamin = 'Perempuan';

    const pesan = document.getElementById('5').value;

    // Buat output untuk ditampilkan di respond-box
    const output = `
        <h3>Hasil Form</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;

    // Tampilkan hasil ke respond-box
    const respondBox = document.querySelector('.respond-box');
    respondBox.innerHTML = output;
}
