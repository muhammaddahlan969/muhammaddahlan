/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    const skillList = document.querySelectorAll('.keahlian-list li[data-skill]');
    const skillDetail = document.getElementById('skill-detail');
    
    // Peta detail keahlian
    const skillDetailsMap = {
        'Networking': 'Mampu merancang, mengkonfigurasi, dan mengelola perangkat jaringan seperti router (Mikrotik) dan switch.',
        'Server OS': 'Terampil dalam instalasi, konfigurasi, dan pemeliharaan server berbasis Linux (Debian/Ubuntu) menggunakan Command Line Interface (CLI).',
        'Hardware': 'Mahir dalam perakitan, instalasi OS, dan identifikasi serta perbaikan masalah pada PC dan laptop.',
        'Virtualisasi': 'Pengalaman dalam membuat lingkungan virtual menggunakan VirtualBox dan VMWare untuk simulasi server dan jaringan.',
        'Tools': 'Familiar dengan alat simulasi jaringan (Packet Tracer) dan analisis lalu lintas (Wireshark) untuk pembelajaran dan troubleshooting.',
        'Web Dasar': 'Memahami dasar-dasar HTML dan CSS untuk keperluan maintenance atau proyek web sederhana.'
    };

    // Fungsi untuk menampilkan detail
    skillList.forEach(skillItem => {
        skillItem.addEventListener('click', () => {
            const skillType = skillItem.getAttribute('data-skill');
            const detailText = skillDetailsMap[skillType] || 'Detail tidak tersedia.';
            
            // Mengubah konten tooltip
            skillDetail.innerHTML = `<strong>${skillType}</strong>: ${detailText}`;
            
            // Memberikan efek visual pada item yang diklik
            skillList.forEach(item => item.style.backgroundColor = '#ffffff');
            skillItem.style.backgroundColor = '#d1e7ff';
        });
    });

    // Reset tooltip saat halaman dimuat
    skillDetail.innerHTML = `Klik Keahlian di atas untuk melihat detail!`;
});