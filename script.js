"use strict";

/* =========================
   RUANG MBTI 2.0
   DATA 16 TIPE KEPRIBADIAN
========================= */

const types = [
    {
        code: "INTJ",
        name: "The Architect",
        group: "analysts",
        intro: "Strategis, mandiri, dan suka mencari cara untuk memperbaiki sistem.",
        overview: "INTJ sering digambarkan sebagai pemikir strategis yang senang memahami sistem, menemukan pola, dan menyusun rencana jangka panjang. Mereka mungkin lebih menyukai waktu untuk berpikir sebelum bertindak.",
        traits: ["Strategis", "Mandiri", "Analitis", "Berorientasi masa depan"],
        strengths: ["Mampu melihat gambaran besar", "Suka menyusun strategi", "Senang belajar secara mendalam", "Berusaha meningkatkan efisiensi"],
        challenges: ["Bisa terlalu fokus pada rencana", "Mungkin terlihat terlalu kritis", "Kadang lupa menjelaskan proses berpikirnya kepada orang lain"],
        communication: "INTJ mungkin menyukai komunikasi yang jelas, langsung, dan memiliki tujuan. Mereka bisa terbantu dengan mengingat bahwa cara penyampaian sama pentingnya dengan isi pesan.",
        relationships: "Dalam pertemanan, mereka mungkin lebih nyaman dengan hubungan yang memiliki kepercayaan dan percakapan bermakna. Mereka tetap dapat belajar menunjukkan perhatian melalui hal-hal sederhana.",
        learning: ["Pahami alasan di balik suatu konsep", "Buat kerangka materi sebelum menghafal detail", "Hubungkan teori dengan masalah nyata", "Berikan ruang untuk bertanya dan mengeksplorasi"],
        growth: ["Latih fleksibilitas ketika rencana berubah", "Terima bahwa tidak semua persoalan memiliki satu jawaban terbaik", "Dengarkan perspektif sebelum menyimpulkan"],
        work: "Lingkungan yang memberi ruang untuk analisis, perencanaan, pemecahan masalah, dan kemandirian mungkin menarik bagi sebagian orang dengan preferensi ini.",
        reflection: "Apakah kamu menikmati menyusun strategi sebelum memulai sesuatu?"
    },
    {
        code: "INTP",
        name: "The Thinker",
        group: "analysts",
        intro: "Penasaran, logis, dan senang menjelajahi berbagai ide.",
        overview: "INTP sering digambarkan sebagai pemikir yang menikmati pertanyaan abstrak, teori, dan kemungkinan baru. Mereka mungkin ingin memahami bagaimana dan mengapa sesuatu bekerja.",
        traits: ["Penasaran", "Analitis", "Terbuka pada ide", "Mandiri dalam berpikir"],
        strengths: ["Mampu melihat hubungan antargagasan", "Senang mengeksplorasi konsep", "Mempertanyakan asumsi", "Mencari penjelasan yang konsisten"],
        challenges: ["Bisa terlalu lama menganalisis", "Kadang sulit memulai tugas rutin", "Mungkin lupa bahwa orang lain membutuhkan penjelasan yang sederhana"],
        communication: "INTP mungkin menyukai diskusi terbuka, pertanyaan mendalam, dan kesempatan untuk mempertimbangkan ide sebelum menjawab.",
        relationships: "Mereka mungkin menunjukkan perhatian dengan berbagi ide, membantu memecahkan masalah, atau menikmati aktivitas yang merangsang rasa ingin tahu.",
        learning: ["Mulai dari pertanyaan yang ingin kamu jawab", "Buat peta konsep", "Uji teori melalui contoh atau latihan", "Tetapkan batas waktu agar tidak terjebak menganalisis"],
        growth: ["Ubah ide menjadi tindakan kecil", "Latih menjelaskan konsep secara sederhana", "Perhatikan kebutuhan emosional dalam percakapan"],
        work: "Kegiatan yang melibatkan penelitian, pemecahan masalah, eksperimen, atau eksplorasi konsep mungkin menarik.",
        reflection: "Pertanyaan apa yang akhir-akhir ini membuatmu penasaran?"
    },
    {
        code: "ENTJ",
        name: "The Commander",
        group: "analysts",
        intro: "Tegas, terarah, dan menikmati proses mengatur tujuan.",
        overview: "ENTJ sering digambarkan sebagai pribadi yang menyukai tujuan jelas, pengorganisasian, dan penyelesaian masalah. Mereka mungkin terdorong untuk mengubah rencana menjadi tindakan.",
        traits: ["Terarah", "Tegas", "Terorganisasi", "Berorientasi tujuan"],
        strengths: ["Mampu mengatur langkah kerja", "Nyaman mengambil tanggung jawab", "Memperhatikan efisiensi", "Berani menghadapi tantangan"],
        challenges: ["Bisa terlalu terburu-buru", "Mungkin kurang sabar terhadap proses lambat", "Perlu memastikan suara orang lain tetap didengar"],
        communication: "ENTJ mungkin menyukai pembicaraan yang langsung, terstruktur, dan berorientasi solusi. Menyediakan waktu untuk mendengarkan dapat memperkuat komunikasi.",
        relationships: "Mereka mungkin menunjukkan perhatian dengan membantu membuat rencana atau mendukung orang lain mencapai tujuan.",
        learning: ["Tetapkan target yang realistis", "Gunakan jadwal dan daftar prioritas", "Evaluasi kemajuan secara berkala", "Sisihkan waktu untuk memahami konsep, bukan hanya mengejar hasil"],
        growth: ["Latih kesabaran", "Berikan ruang untuk perbedaan pendapat", "Ingat bahwa kerja sama bukan hanya tentang kecepatan"],
        work: "Lingkungan dengan koordinasi, perencanaan, pengambilan keputusan, dan tujuan yang jelas mungkin menarik.",
        reflection: "Bagaimana kamu menyeimbangkan pencapaian tujuan dengan kebutuhan orang lain?"
    },
    {
        code: "ENTP",
        name: "The Debater",
        group: "analysts",
        intro: "Kreatif, cepat menangkap kemungkinan, dan suka menguji gagasan.",
        overview: "ENTP sering digambarkan sebagai penjelajah ide yang senang berdiskusi, bereksperimen, dan mempertanyakan cara lama. Mereka mungkin menikmati tantangan intelektual dan pendekatan baru.",
        traits: ["Kreatif", "Adaptif", "Argumentatif dalam arti diskusi", "Penuh kemungkinan"],
        strengths: ["Menghasilkan banyak gagasan", "Cepat melihat alternatif", "Nyaman menghadapi perubahan", "Senang menguji asumsi"],
        challenges: ["Bisa kehilangan minat setelah tahap awal", "Mungkin berdebat tanpa menyadari dampaknya", "Perlu memperhatikan detail pelaksanaan"],
        communication: "ENTP mungkin menikmati percakapan spontan, humor, dan pertukaran ide. Memastikan diskusi terasa aman bagi semua pihak membantu menjaga hubungan.",
        relationships: "Mereka mungkin membangun kedekatan melalui obrolan menarik, eksplorasi bersama, dan kesempatan saling bertukar pandangan.",
        learning: ["Gunakan pertanyaan dan diskusi", "Bandingkan beberapa pendekatan", "Buat proyek kecil untuk menguji ide", "Selesaikan satu tugas sebelum beralih ke ide lain"],
        growth: ["Latih konsistensi", "Belajar menerima bahwa tidak setiap percakapan adalah debat", "Catat detail penting agar ide dapat diwujudkan"],
        work: "Aktivitas yang memberi ruang untuk inovasi, diskusi, eksperimen, dan penyelesaian masalah mungkin menarik.",
        reflection: "Bagaimana kamu memastikan ide kreatifmu benar-benar selesai dikerjakan?"
    },
    {
        code: "INFJ",
        name: "The Advocate",
        group: "diplomats",
        intro: "Reflektif, penuh pertimbangan, dan tertarik pada makna.",
        overview: "INFJ sering digambarkan sebagai pribadi reflektif yang tertarik pada nilai, tujuan, dan pemahaman terhadap manusia. Mereka mungkin senang melihat hubungan antara pengalaman saat ini dan kemungkinan masa depan.",
        traits: ["Reflektif", "Berorientasi nilai", "Penuh pertimbangan", "Memperhatikan makna"],
        strengths: ["Mampu memikirkan dampak jangka panjang", "Memperhatikan perasaan orang lain", "Memiliki visi pribadi", "Mencari makna dalam pengalaman"],
        challenges: ["Bisa terlalu banyak memikirkan masalah", "Mungkin sulit menyampaikan kebutuhan sendiri", "Berpotensi memiliki harapan terlalu tinggi"],
        communication: "INFJ mungkin menyukai percakapan yang tulus dan bermakna. Menyampaikan kebutuhan dengan jelas dapat membantu mencegah kesalahpahaman.",
        relationships: "Mereka mungkin menghargai kepercayaan, perhatian, dan kedalaman hubungan. Waktu pribadi juga dapat membantu menjaga keseimbangan.",
        learning: ["Hubungkan materi dengan tujuan yang bermakna", "Gunakan catatan reflektif", "Buat ringkasan setelah belajar", "Beri batas waktu untuk merenung lalu mulai bertindak"],
        growth: ["Latih menetapkan batas pribadi", "Terima bahwa perubahan tidak selalu berjalan sesuai rencana", "Sampaikan kebutuhan tanpa merasa harus menebak kebutuhan semua orang"],
        work: "Kegiatan yang melibatkan perencanaan, komunikasi bermakna, pemahaman manusia, atau pengembangan gagasan mungkin menarik.",
        reflection: "Nilai apa yang paling ingin kamu bawa ke dalam keputusan sehari-hari?"
    },
    {
        code: "INFP",
        name: "The Mediator",
        group: "diplomats",
        intro: "Imajinatif, reflektif, dan menghargai nilai pribadi.",
        overview: "INFP sering digambarkan sebagai pribadi yang tertarik pada makna, kreativitas, dan kesesuaian tindakan dengan nilai pribadi. Mereka mungkin menikmati ruang untuk membayangkan berbagai kemungkinan.",
        traits: ["Imajinatif", "Peka terhadap nilai", "Reflektif", "Terbuka pada kemungkinan"],
        strengths: ["Mampu melihat banyak sudut pandang", "Menghargai keunikan", "Senang mengekspresikan ide", "Memikirkan makna personal"],
        challenges: ["Bisa kesulitan memulai tugas yang terasa tidak bermakna", "Mungkin menghindari konflik", "Perlu memisahkan kritik terhadap karya dari penilaian terhadap diri"],
        communication: "INFP mungkin lebih nyaman dengan percakapan yang tulus dan tidak menghakimi. Menyampaikan batasan dengan tenang dapat membantu hubungan.",
        relationships: "Mereka mungkin menghargai penerimaan, kejujuran, dan kesempatan untuk menjadi diri sendiri tanpa harus selalu sepakat.",
        learning: ["Hubungkan materi dengan contoh yang relevan", "Gunakan menulis atau gambar untuk menjelaskan ide", "Pecah proyek menjadi langkah kecil", "Gunakan tenggat yang jelas"],
        growth: ["Latih menghadapi konflik secara konstruktif", "Ubah nilai menjadi tindakan nyata", "Terima bahwa pekerjaan yang baik tidak harus selalu sempurna"],
        work: "Aktivitas kreatif, komunikasi, refleksi, atau pekerjaan yang terasa selaras dengan nilai pribadi mungkin menarik.",
        reflection: "Bagaimana kamu bisa mengubah hal yang kamu anggap penting menjadi tindakan kecil?"
    },
    {
        code: "ENFJ",
        name: "The Protagonist",
        group: "diplomats",
        intro: "Komunikatif, suportif, dan tertarik membantu orang berkembang.",
        overview: "ENFJ sering digambarkan sebagai pribadi yang menikmati interaksi, kerja sama, dan upaya membantu kelompok bergerak menuju tujuan bersama.",
        traits: ["Komunikatif", "Kooperatif", "Berorientasi pada orang", "Menyemangati"],
        strengths: ["Mampu membangun kerja sama", "Memperhatikan kebutuhan kelompok", "Senang mendukung perkembangan orang", "Mampu mengomunikasikan visi"],
        challenges: ["Bisa terlalu bertanggung jawab atas orang lain", "Mungkin mengabaikan kebutuhan pribadi", "Perlu menerima bahwa tidak semua orang membutuhkan bantuan yang sama"],
        communication: "ENFJ mungkin menyukai dialog dua arah dan komunikasi yang memberi semangat. Menanyakan kebutuhan orang sebelum menawarkan solusi bisa membantu.",
        relationships: "Mereka mungkin menunjukkan perhatian melalui dukungan, koordinasi, dan kehadiran. Menjaga batas pribadi tetap penting.",
        learning: ["Belajar bersama teman", "Jelaskan materi kepada orang lain", "Gunakan jadwal kelompok", "Sisihkan waktu belajar mandiri untuk mengukur pemahaman sendiri"],
        growth: ["Latih mengatakan tidak saat perlu", "Jangan mengambil tanggung jawab atas semua keputusan orang lain", "Berikan ruang bagi orang lain untuk belajar mandiri"],
        work: "Kegiatan yang melibatkan kolaborasi, komunikasi, pengembangan orang, atau koordinasi mungkin menarik.",
        reflection: "Bagaimana kamu membantu orang lain tanpa melupakan kebutuhanmu sendiri?"
    },
    {
        code: "ENFP",
        name: "The Campaigner",
        group: "diplomats",
        intro: "Antusias, imajinatif, dan suka mengeksplorasi kemungkinan.",
        overview: "ENFP sering digambarkan sebagai pribadi yang antusias terhadap ide, pengalaman baru, dan hubungan dengan orang lain. Mereka mungkin senang menemukan berbagai kemungkinan sebelum memilih arah.",
        traits: ["Antusias", "Imajinatif", "Terbuka", "Berorientasi kemungkinan"],
        strengths: ["Mudah menghasilkan gagasan", "Tertarik pada perspektif berbeda", "Mampu memberi semangat", "Adaptif terhadap hal baru"],
        challenges: ["Bisa mengambil terlalu banyak proyek", "Mungkin kesulitan mempertahankan rutinitas", "Perlu memberi waktu untuk menyelesaikan detail"],
        communication: "ENFP mungkin menyukai percakapan ekspresif, ide baru, dan pertukaran pengalaman. Menyimak secara aktif membantu menjaga keseimbangan percakapan.",
        relationships: "Mereka mungkin menghargai keaslian, antusiasme bersama, dan ruang untuk berkembang. Konsistensi kecil dapat membantu menjaga kedekatan.",
        learning: ["Gunakan variasi metode belajar", "Hubungkan materi dengan contoh menarik", "Buat target kecil dan terukur", "Kurangi gangguan ketika perlu menyelesaikan tugas"],
        growth: ["Latih konsistensi", "Prioritaskan proyek yang paling penting", "Beri ruang untuk rutinitas yang mendukung tujuan"],
        work: "Kegiatan yang melibatkan kreativitas, komunikasi, eksplorasi ide, atau kerja sama mungkin menarik.",
        reflection: "Ide mana yang paling penting untuk kamu selesaikan terlebih dahulu?"
    },
    {
        code: "ISTJ",
        name: "The Logistician",
        group: "sentinels",
        intro: "Teliti, bertanggung jawab, dan menghargai keteraturan.",
        overview: "ISTJ sering digambarkan sebagai pribadi yang menghargai fakta, tanggung jawab, dan prosedur yang jelas. Mereka mungkin lebih nyaman ketika harapan dan langkah kerja dapat dipahami.",
        traits: ["Teliti", "Konsisten", "Praktis", "Bertanggung jawab"],
        strengths: ["Memperhatikan detail", "Menepati komitmen", "Mampu mengikuti proses", "Menyukai hasil yang dapat diperiksa"],
        challenges: ["Bisa kurang nyaman dengan perubahan mendadak", "Mungkin terlalu terpaku pada cara yang sudah dikenal", "Perlu mempertimbangkan alternatif ketika kondisi berubah"],
        communication: "ISTJ mungkin menghargai informasi konkret, instruksi yang jelas, dan janji yang ditepati.",
        relationships: "Mereka mungkin menunjukkan perhatian melalui bantuan nyata, keandalan, dan tindakan yang konsisten.",
        learning: ["Gunakan catatan terstruktur", "Buat jadwal realistis", "Latihan secara berkala", "Periksa kesalahan untuk memahami pola"],
        growth: ["Latih fleksibilitas", "Coba metode baru dalam skala kecil", "Ingat bahwa perubahan dapat memberi informasi baru"],
        work: "Kegiatan yang membutuhkan ketelitian, konsistensi, pengorganisasian, atau pemeriksaan informasi mungkin menarik.",
        reflection: "Kapan terakhir kali kamu mencoba cara baru yang ternyata membantu?"
    },
    {
        code: "ISFJ",
        name: "The Defender",
        group: "sentinels",
        intro: "Penuh perhatian, praktis, dan menghargai dukungan yang konsisten.",
        overview: "ISFJ sering digambarkan sebagai pribadi yang memperhatikan kebutuhan konkret, mengingat detail, dan menghargai hubungan yang dapat diandalkan.",
        traits: ["Penuh perhatian", "Teliti", "Kooperatif", "Praktis"],
        strengths: ["Memperhatikan kebutuhan sehari-hari", "Menghargai tanggung jawab", "Mengingat detail penting", "Mendukung kerja sama"],
        challenges: ["Bisa sulit menolak permintaan", "Mungkin terlalu mengutamakan kenyamanan orang lain", "Perlu menyampaikan kebutuhan sendiri"],
        communication: "ISFJ mungkin menghargai komunikasi yang sopan, jelas, dan mempertimbangkan perasaan orang lain.",
        relationships: "Mereka mungkin menunjukkan perhatian melalui bantuan praktis, mengingat hal kecil, dan menjaga komitmen.",
        learning: ["Gunakan contoh konkret", "Buat rangkuman teratur", "Latih materi secara bertahap", "Belajar bersama teman bila membantu"],
        growth: ["Latih menetapkan batas", "Jangan merasa harus selalu menyenangkan semua orang", "Terima bahwa meminta bantuan juga merupakan pilihan"],
        work: "Kegiatan yang melibatkan ketelitian, dukungan praktis, koordinasi, atau pelayanan mungkin menarik.",
        reflection: "Bagaimana kamu bisa merawat kebutuhanmu sambil tetap peduli kepada orang lain?"
    },
    {
        code: "ESTJ",
        name: "The Executive",
        group: "sentinels",
        intro: "Terorganisasi, tegas, dan menyukai tujuan yang jelas.",
        overview: "ESTJ sering digambarkan sebagai pribadi yang menghargai struktur, tanggung jawab, dan koordinasi untuk mencapai tujuan bersama.",
        traits: ["Terorganisasi", "Praktis", "Tegas", "Berorientasi tugas"],
        strengths: ["Mampu mengatur pekerjaan", "Memperjelas tanggung jawab", "Menjaga konsistensi", "Memperhatikan hasil"],
        challenges: ["Bisa terlalu terpaku pada prosedur", "Mungkin mengharapkan orang bekerja dengan cara yang sama", "Perlu memberi ruang untuk pendekatan alternatif"],
        communication: "ESTJ mungkin menyukai komunikasi yang jelas, konkret, dan langsung menuju inti persoalan.",
        relationships: "Mereka mungkin menunjukkan perhatian dengan membantu menyelesaikan masalah dan menjaga tanggung jawab bersama.",
        learning: ["Buat jadwal dan daftar tugas", "Gunakan latihan terstruktur", "Ukur pemahaman melalui soal", "Sediakan waktu untuk konsep yang belum jelas"],
        growth: ["Latih mendengarkan sebelum memberi arahan", "Terima cara kerja yang berbeda", "Sesuaikan rencana ketika bukti baru muncul"],
        work: "Aktivitas yang membutuhkan pengorganisasian, koordinasi, prosedur, atau pelaksanaan rencana mungkin menarik.",
        reflection: "Bagaimana kamu menyesuaikan rencana ketika anggota kelompok memiliki cara kerja berbeda?"
    },
    {
        code: "ESFJ",
        name: "The Consul",
        group: "sentinels",
        intro: "Ramah, kooperatif, dan memperhatikan suasana kelompok.",
        overview: "ESFJ sering digambarkan sebagai pribadi yang menghargai hubungan sosial, kerja sama, dan rasa saling mendukung.",
        traits: ["Ramah", "Kooperatif", "Terorganisasi", "Peka terhadap suasana kelompok"],
        strengths: ["Mampu mengoordinasikan kegiatan", "Memperhatikan kebutuhan orang", "Menghargai kerja sama", "Membantu menciptakan keteraturan"],
        challenges: ["Bisa terlalu memikirkan penilaian orang", "Mungkin sulit berbeda pendapat", "Perlu menyadari bahwa konflik sehat kadang diperlukan"],
        communication: "ESFJ mungkin menyukai komunikasi yang hangat, jelas, dan melibatkan semua pihak.",
        relationships: "Mereka mungkin menghargai kebersamaan, perhatian praktis, dan upaya menjaga hubungan tetap baik.",
        learning: ["Belajar dalam kelompok kecil", "Gunakan diskusi dan latihan", "Buat jadwal bersama bila sesuai", "Sisihkan waktu untuk menguji pemahaman mandiri"],
        growth: ["Latih menyampaikan pendapat berbeda", "Jangan menjadikan persetujuan orang sebagai satu-satunya ukuran", "Tetapkan waktu untuk diri sendiri"],
        work: "Aktivitas yang melibatkan koordinasi, komunikasi, dukungan, atau kerja sama mungkin menarik.",
        reflection: "Bagaimana kamu tetap jujur pada pendapatmu saat kelompok tidak sepakat?"
    },
    {
        code: "ISTP",
        name: "The Virtuoso",
        group: "explorers",
        intro: "Praktis, mandiri, dan senang memahami cara kerja sesuatu.",
        overview: "ISTP sering digambarkan sebagai pribadi yang suka mengamati, mencoba, dan memecahkan masalah praktis. Mereka mungkin lebih menikmati eksplorasi langsung daripada penjelasan yang terlalu abstrak.",
        traits: ["Praktis", "Observatif", "Mandiri", "Adaptif"],
        strengths: ["Mampu mencari solusi langsung", "Nyaman bereksperimen", "Memperhatikan cara kerja sistem", "Dapat tetap tenang ketika menghadapi masalah"],
        challenges: ["Bisa cepat bosan dengan rutinitas", "Mungkin kurang menjelaskan prosesnya kepada orang lain", "Perlu mempertimbangkan dampak jangka panjang"],
        communication: "ISTP mungkin menyukai komunikasi yang ringkas, konkret, dan relevan dengan situasi.",
        relationships: "Mereka mungkin menunjukkan perhatian melalui bantuan praktis atau aktivitas bersama, meskipun cara mengekspresikan perhatian berbeda pada setiap orang.",
        learning: ["Lakukan latihan langsung", "Gunakan demonstrasi", "Pecahkan masalah menjadi langkah kecil", "Catat prinsip yang dipelajari dari percobaan"],
        growth: ["Latih menjelaskan pikiran dan kebutuhan", "Pertimbangkan konsekuensi sebelum bertindak", "Bangun kebiasaan menyelesaikan tugas penting"],
        work: "Kegiatan yang melibatkan praktik, analisis teknis, eksperimen, atau pemecahan masalah konkret mungkin menarik.",
        reflection: "Apa yang paling kamu sukai ketika mempelajari cara kerja suatu benda?"
    },
    {
        code: "ISFP",
        name: "The Adventurer",
        group: "explorers",
        intro: "Observatif, fleksibel, dan menghargai pengalaman pribadi.",
        overview: "ISFP sering digambarkan sebagai pribadi yang memperhatikan pengalaman langsung, nilai pribadi, dan kebebasan untuk mengekspresikan diri.",
        traits: ["Observatif", "Fleksibel", "Peka terhadap pengalaman", "Menghargai keaslian"],
        strengths: ["Memperhatikan detail lingkungan", "Terbuka pada pengalaman baru", "Menghargai keunikan", "Mampu menyesuaikan diri"],
        challenges: ["Bisa menghindari konflik yang perlu dibicarakan", "Mungkin sulit merencanakan jauh ke depan", "Perlu menjaga konsistensi pada tujuan penting"],
        communication: "ISFP mungkin lebih nyaman dengan percakapan yang tulus, tenang, dan tidak memaksa.",
        relationships: "Mereka mungkin menghargai penerimaan, pengalaman bersama, dan kebebasan menjadi diri sendiri.",
        learning: ["Gunakan contoh nyata", "Coba metode visual atau praktik", "Bagi proyek menjadi langkah kecil", "Buat pengingat untuk tenggat"],
        growth: ["Latih menyampaikan ketidaksetujuan secara sehat", "Susun rencana sederhana", "Jangan menunggu suasana hati sempurna untuk memulai"],
        work: "Kegiatan yang memberi ruang untuk praktik, kreativitas, pengalaman langsung, atau fleksibilitas mungkin menarik.",
        reflection: "Bagaimana kamu bisa memberi ruang bagi kreativitas sekaligus menyelesaikan tanggung jawab?"
    },
    {
        code: "ESTP",
        name: "The Entrepreneur",
        group: "explorers",
        intro: "Spontan, tanggap, dan menyukai pengalaman langsung.",
        overview: "ESTP sering digambarkan sebagai pribadi yang tanggap terhadap keadaan sekitar, praktis, dan menikmati tantangan yang membutuhkan respons langsung.",
        traits: ["Tanggap", "Praktis", "Spontan", "Adaptif"],
        strengths: ["Cepat memperhatikan perubahan", "Mau mencoba pendekatan baru", "Mampu berpikir dalam situasi langsung", "Belajar melalui pengalaman"],
        challenges: ["Bisa bertindak sebelum mempertimbangkan semua konsekuensi", "Mungkin kurang menikmati rutinitas panjang", "Perlu memberi waktu untuk rencana jangka panjang"],
        communication: "ESTP mungkin menyukai percakapan langsung, aktif, dan berfokus pada situasi nyata.",
        relationships: "Mereka mungkin menikmati aktivitas bersama, humor, dan pengalaman yang dilakukan secara langsung.",
        learning: ["Gunakan simulasi dan latihan", "Kerjakan contoh soal", "Belajar melalui demonstrasi", "Buat target jangka pendek untuk tugas yang panjang"],
        growth: ["Berhenti sejenak sebelum keputusan penting", "Pertimbangkan akibat jangka panjang", "Latih konsistensi pada pekerjaan rutin"],
        work: "Aktivitas yang melibatkan tindakan langsung, adaptasi, komunikasi, atau pemecahan masalah praktis mungkin menarik.",
        reflection: "Kapan kamu perlu bertindak cepat, dan kapan lebih baik berhenti untuk berpikir?"
    },
    {
        code: "ESFP",
        name: "The Entertainer",
        group: "explorers",
        intro: "Ekspresif, spontan, dan menikmati pengalaman bersama.",
        overview: "ESFP sering digambarkan sebagai pribadi yang memperhatikan suasana saat ini, menikmati pengalaman bersama, dan mengekspresikan diri dengan terbuka.",
        traits: ["Ekspresif", "Ramah", "Spontan", "Berorientasi pengalaman"],
        strengths: ["Mampu menghidupkan suasana", "Memperhatikan pengalaman konkret", "Terbuka untuk mencoba hal baru", "Menikmati kerja sama"],
        challenges: ["Bisa mudah terdistraksi", "Mungkin kurang tertarik pada rencana yang terlalu kaku", "Perlu menyediakan waktu untuk persiapan"],
        communication: "ESFP mungkin menikmati percakapan yang hangat, ekspresif, dan melibatkan pengalaman nyata.",
        relationships: "Mereka mungkin menghargai kebersamaan, kegiatan menyenangkan, dan ekspresi perhatian yang terlihat.",
        learning: ["Gunakan aktivitas interaktif", "Diskusikan materi dengan teman", "Pakai contoh yang dekat dengan kehidupan", "Buat jadwal singkat untuk persiapan"],
        growth: ["Latih mengatur waktu", "Sediakan ruang untuk tugas yang membutuhkan konsentrasi", "Pikirkan tujuan jangka panjang sebelum membuat komitmen"],
        work: "Kegiatan yang melibatkan interaksi, kreativitas, pengalaman langsung, atau lingkungan yang dinamis mungkin menarik.",
        reflection: "Bagaimana kamu menjaga semangat sambil menyelesaikan tugas yang membutuhkan waktu lama?"
    }
];

/* =========================
   HELPER: CREATE ELEMENTS
========================= */

function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

/* =========================
   PERSONALITY CARDS
========================= */

const typeGrid = document.getElementById("typeGrid");
const searchType = document.getElementById("searchType");
const filterButtons = document.querySelectorAll(".filter-button");

let activeFilter = "all";

const groupColors = {
    analysts: "#B6C8A9",
    diplomats: "#E99A91",
    sentinels: "#C7D9BE",
    explorers: "#F0B8A7"
};

function renderTypes() {
    if (!typeGrid) return;

    const query = (searchType?.value || "").trim().toLowerCase();

    const filteredTypes = types.filter(type => {
        const matchesFilter =
            activeFilter === "all" || type.group === activeFilter;

        const searchableText = [
            type.code,
            type.name,
            type.intro,
            type.group
        ].join(" ").toLowerCase();

        return matchesFilter && searchableText.includes(query);
    });

    typeGrid.replaceChildren();

    if (filteredTypes.length === 0) {
        typeGrid.appendChild(
            createElement(
                "p",
                "empty-state",
                "Tipe tidak ditemukan. Coba kata kunci lain, ya!"
            )
        );
        return;
    }

    filteredTypes.forEach(type => {
        const card = createElement("article", "type-card");
        card.style.setProperty("--type-accent", groupColors[type.group]);

        card.appendChild(
            createElement("span", "type-card-code", type.code)
        );

        card.appendChild(
            createElement("h3", "", type.name)
        );

        card.appendChild(
            createElement("p", "", type.intro)
        );

        const detailButton = createElement("button", "", "Kenali tipe ini ");
        detailButton.appendChild(createElement("span", "", "↗"));
        detailButton.type = "button";
        detailButton.setAttribute(
            "aria-label",
            `Baca detail tipe ${type.code}, ${type.name}`
        );

        detailButton.addEventListener("click", () => {
            openTypeDetail(type.code);
        });

        card.appendChild(detailButton);
        typeGrid.appendChild(card);
    });
}

if (searchType) {
    searchType.addEventListener("input", renderTypes);
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter || "all";

        filterButtons.forEach(item => {
            const isActive = item === button;
            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        renderTypes();
    });

    button.setAttribute(
        "aria-pressed",
        String(button.classList.contains("active"))
    );
});

/* =========================
   PERSONALITY DETAIL DIALOG
========================= */

const typeDialog = document.getElementById("typeDialog");
const typeDetail = document.getElementById("typeDetail");
const closeDialog = document.getElementById("closeDialog");

function appendDetailList(container, heading, items) {
    container.appendChild(createElement("h3", "", heading));

    const list = document.createElement("ul");

    items.forEach(item => {
        list.appendChild(createElement("li", "", item));
    });

    container.appendChild(list);
}

function appendDetailParagraph(container, heading, paragraph) {
    container.appendChild(createElement("h3", "", heading));
    container.appendChild(createElement("p", "", paragraph));
}

function openTypeDetail(code) {
    const type = types.find(item => item.code === code);

    if (!type || !typeDialog || !typeDetail) return;

    typeDetail.replaceChildren();

    typeDetail.appendChild(
        createElement("span", "detail-code", type.code)
    );

    typeDetail.appendChild(
        createElement("h2", "", type.name)
    );

    typeDetail.appendChild(
        createElement("p", "", type.intro)
    );

    appendDetailParagraph(
        typeDetail,
        "Gambaran umum",
        type.overview
    );

    appendDetailList(
        typeDetail,
        "Karakteristik yang mungkin terlihat",
        type.traits
    );

    appendDetailList(
        typeDetail,
        "Kekuatan",
        type.strengths
    );

    appendDetailList(
        typeDetail,
        "Tantangan untuk diperhatikan",
        type.challenges
    );

    appendDetailParagraph(
        typeDetail,
        "Gaya komunikasi",
        type.communication
    );

    appendDetailParagraph(
        typeDetail,
        "Pertemanan dan hubungan",
        type.relationships
    );

    appendDetailList(
        typeDetail,
        "Ide belajar yang bisa dicoba",
        type.learning
    );

    appendDetailList(
        typeDetail,
        "Pengembangan diri",
        type.growth
    );

    appendDetailParagraph(
        typeDetail,
        "Lingkungan kerja",
        type.work
    );

    appendDetailParagraph(
        typeDetail,
        "Pertanyaan refleksi",
        type.reflection
    );

    const note = createElement(
        "p",
        "detail-note",
        "Ingat: ini adalah gambaran umum, bukan definisi mutlak. Kamu tetap dapat memiliki karakteristik yang berbeda dari deskripsi ini."
    );

    typeDetail.appendChild(note);

    if (typeof typeDialog.showModal === "function") {
        typeDialog.showModal();
    } else {
        typeDialog.setAttribute("open", "");
    }
}

if (closeDialog && typeDialog) {
    closeDialog.addEventListener("click", () => {
        if (typeof typeDialog.close === "function") {
            typeDialog.close();
        } else {
            typeDialog.removeAttribute("open");
        }
    });

    typeDialog.addEventListener("click", event => {
        if (event.target === typeDialog) {
            if (typeof typeDialog.close === "function") {
                typeDialog.close();
            } else {
                typeDialog.removeAttribute("open");
            }
        }
    });
}

/* =========================
   FUN FACTS
========================= */

const facts = [
    "MBTI menggunakan empat pasangan preferensi untuk membentuk 16 tipe kepribadian.",
    "Introversion tidak otomatis berarti pemalu. Seseorang bisa menikmati interaksi sosial sekaligus membutuhkan waktu sendiri.",
    "Extraversion tidak berarti seseorang harus selalu ramai atau selalu ingin menjadi pusat perhatian.",
    "Preferensi Thinking dan Feeling membahas kecenderungan saat mempertimbangkan keputusan, bukan apakah seseorang memiliki perasaan.",
    "Sensing dan Intuition menggambarkan kecenderungan memperhatikan informasi, bukan perbedaan antara orang pintar dan tidak pintar.",
    "Tidak ada satu tipe MBTI yang secara otomatis lebih baik daripada tipe lainnya.",
    "Orang dengan kode MBTI yang sama pun dapat memiliki kebiasaan, nilai, dan pengalaman hidup yang sangat berbeda.",
    "MBTI bisa menjadi titik awal refleksi, tetapi sebaiknya tidak dipakai untuk memberi label permanen kepada seseorang.",
    "Preferensi kepribadian tidak menentukan mata pelajaran yang pasti kamu kuasai.",
    "Cara belajar yang efektif sebaiknya diuji berdasarkan pengalaman dan hasil belajarmu, bukan hanya berdasarkan tipe kepribadian."
];

let previousFactIndex = -1;

const factText = document.getElementById("factText");
const nextFact = document.getElementById("nextFact");

function showNextFact() {
    if (!factText) return;

    if (facts.length === 1) {
        factText.textContent = facts[0];
        return;
    }

    let nextIndex;

    do {
        nextIndex = Math.floor(Math.random() * facts.length);
    } while (nextIndex === previousFactIndex);

    previousFactIndex = nextIndex;
    factText.textContent = facts[nextIndex];
}

if (nextFact) {
    nextFact.addEventListener("click", showNextFact);
}

showNextFact();

/* =========================
   SIMPLE REFLECTION QUIZ
========================= */

const questions = [
    {
        text: "Setelah hari yang melelahkan, kamu biasanya lebih suka...",
        options: [
            { text: "Mengobrol atau melakukan kegiatan bersama orang lain", dimension: "EI", value: "E" },
            { text: "Mengambil waktu sendiri untuk memulihkan energi", dimension: "EI", value: "I" }
        ]
    },
    {
        text: "Ketika mempelajari hal baru, kamu lebih tertarik pada...",
        options: [
            { text: "Fakta, contoh nyata, dan detail yang bisa diamati", dimension: "SN", value: "S" },
            { text: "Pola, ide, dan kemungkinan yang bisa dikembangkan", dimension: "SN", value: "N" }
        ]
    },
    {
        text: "Ketika membuat keputusan sulit, kamu cenderung memulai dengan...",
        options: [
            { text: "Menganalisis logika, alasan, dan konsistensi", dimension: "TF", value: "T" },
            { text: "Mempertimbangkan nilai dan dampak pada orang-orang", dimension: "TF", value: "F" }
        ]
    },
    {
        text: "Saat mengerjakan tugas, kamu lebih nyaman jika...",
        options: [
            { text: "Ada rencana dan urutan kerja yang jelas", dimension: "JP", value: "J" },
            { text: "Ada fleksibilitas untuk mengubah cara di tengah jalan", dimension: "JP", value: "P" }
        ]
    },
    {
        text: "Dalam diskusi kelompok, kamu biasanya...",
        options: [
            { text: "Menyampaikan ide sambil berdiskusi", dimension: "EI", value: "E" },
            { text: "Memikirkan ide dahulu sebelum menyampaikannya", dimension: "EI", value: "I" }
        ]
    },
    {
        text: "Saat membaca instruksi, kamu cenderung memperhatikan...",
        options: [
            { text: "Langkah konkret dan informasi yang disebutkan", dimension: "SN", value: "S" },
            { text: "Gagasan umum dan hubungan antarbagian", dimension: "SN", value: "N" }
        ]
    },
    {
        text: "Ketika teman meminta pendapat tentang masalahnya, kamu cenderung...",
        options: [
            { text: "Membantu menganalisis masalah dan mencari solusi", dimension: "TF", value: "T" },
            { text: "Mendengarkan perasaannya dan mempertimbangkan kebutuhannya", dimension: "TF", value: "F" }
        ]
    },
    {
        text: "Ketika rencana akhir pekan berubah mendadak, kamu cenderung...",
        options: [
            { text: "Ingin menyusun ulang rencana dengan cepat", dimension: "JP", value: "J" },
            { text: "Melihat pilihan baru dan menyesuaikan diri", dimension: "JP", value: "P" }
        ]
    }
];

const quizContainer = document.getElementById("quizContainer");
const questionCounter = document.getElementById("questionCounter");
const quizProgressText = document.getElementById("quizProgressText");
const quizProgress = document.getElementById("quizProgress");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuestion = document.getElementById("nextQuestion");
const restartQuiz = document.getElementById("restartQuiz");

let currentQuestion = 0;
let selectedAnswer = null;
let quizAnswers = [];
let quizFinished = false;

function renderQuestion() {
    if (!questionText || !answerOptions) return;

    quizFinished = false;
    selectedAnswer = null;

    const question = questions[currentQuestion];
    const progress = Math.round(
        (currentQuestion / questions.length) * 100
    );

    questionCounter.textContent =
        `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;

    quizProgressText.textContent = `${progress}% selesai`;
    quizProgress.style.width = `${progress}%`;

    questionText.textContent = question.text;
    answerOptions.replaceChildren();

    question.options.forEach((option, index) => {
        const button = createElement(
            "button",
            "answer-option",
            option.text
        );

        button.type = "button";
        button.setAttribute("aria-pressed", "false");

        button.addEventListener("click", () => {
            selectedAnswer = option;

            answerOptions.querySelectorAll(".answer-option").forEach(
                item => {
                    const isSelected = item === button;

                    item.classList.toggle("selected", isSelected);
                    item.setAttribute(
                        "aria-pressed",
                        String(isSelected)
                    );
                }
            );

            quizFeedback.textContent = "Jawaban dipilih. Kamu bisa melanjutkan.";
            nextQuestion.disabled = false;
        });

        answerOptions.appendChild(button);
    });

    quizFeedback.textContent = "";
    nextQuestion.disabled = true;
    nextQuestion.hidden = false;
    nextQuestion.innerHTML = currentQuestion === questions.length - 1
        ? 'Lihat hasil <span>→</span>'
        : 'Lanjut <span>→</span>';

    restartQuiz.hidden = true;
}

function calculateQuizResult() {
    const scores = {
        EI: { E: 0, I: 0 },
        SN: { S: 0, N: 0 },
        TF: { T: 0, F: 0 },
        JP: { J: 0, P: 0 }
    };

    quizAnswers.forEach(answer => {
        scores[answer.dimension][answer.value] += 1;
    });

    const result =
        (scores.EI.E >= scores.EI.I ? "E" : "I") +
        (scores.SN.S >= scores.SN.N ? "S" : "N") +
        (scores.TF.T >= scores.TF.F ? "T" : "F") +
        (scores.JP.J >= scores.JP.P ? "J" : "P");

    return result;
}

function showQuizResult() {
    quizFinished = true;

    const resultCode = calculateQuizResult();
    const resultType = types.find(type => type.code === resultCode);

    questionCounter.textContent = "Kuis selesai!";
    quizProgressText.textContent = "100% selesai";
    quizProgress.style.width = "100%";

    questionText.textContent = "Terima kasih sudah menjawab!";

    answerOptions.replaceChildren();

    const resultCard = createElement("div", "result-type");

    resultCard.appendChild(
        createElement("span", "type-card-code", resultType.code)
    );

    resultCard.appendChild(
        createElement("h3", "", resultType.name)
    );

    resultCard.appendChild(
        createElement("p", "", resultType.intro)
    );

    resultCard.appendChild(
        createElement(
            "p",
            "",
            "Hasil ini hanya gambaran awal berdasarkan delapan jawaban. Hasilnya bukan tes resmi dan tidak menggambarkan seluruh kepribadianmu."
        )
    );

    const detailButton = createElement(
        "button",
        "button button-secondary",
        "Baca profil tipe ini ↗"
    );

    detailButton.type = "button";
    detailButton.style.marginTop = "15px";
    detailButton.addEventListener("click", () => {
        openTypeDetail(resultType.code);
    });

    resultCard.appendChild(detailButton);
    answerOptions.appendChild(resultCard);

    quizFeedback.textContent = "Kamu boleh mengulangi kuis untuk berefleksi kembali.";
    nextQuestion.hidden = true;
    restartQuiz.hidden = false;
}

if (nextQuestion) {
    nextQuestion.addEventListener("click", () => {
        if (!selectedAnswer || quizFinished) return;

        quizAnswers.push(selectedAnswer);
        selectedAnswer = null;

        if (currentQuestion < questions.length - 1) {
            currentQuestion += 1;
            renderQuestion();
        } else {
            showQuizResult();
        }
    });
}

function resetQuiz() {
    currentQuestion = 0;
    selectedAnswer = null;
    quizAnswers = [];
    quizFinished = false;
    renderQuestion();
}

if (restartQuiz) {
    restartQuiz.addEventListener("click", resetQuiz);
}

/* =========================
   CREATOR PROFILE
========================= */

const creatorForm = document.getElementById("creatorForm");
const creatorName = document.getElementById("creatorName");
const creatorHobby = document.getElementById("creatorHobby");
const creatorAbout = document.getElementById("creatorAbout");
const creatorResult = document.getElementById("creatorResult");

if (creatorForm) {
    creatorForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = creatorName.value.trim();
        const hobby = creatorHobby.value.trim();
        const about = creatorAbout.value.trim();

        if (!name) {
            creatorName.focus();
            return;
        }

        creatorResult.replaceChildren();

        creatorResult.appendChild(
            createElement("h4", "", `Halo, aku ${name}!`)
        );

        if (hobby) {
            creatorResult.appendChild(
                createElement("p", "", `Hobi: ${hobby}`)
            );
        }

        if (about) {
            creatorResult.appendChild(
                createElement("p", "", about)
            );
        }

        creatorResult.appendChild(
            createElement(
                "p",
                "",
                "Terima kasih sudah berkenalan di Ruang MBTI."
            )
        );

        creatorResult.classList.add("visible");
    });
}

/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
        );

        menuToggle.textContent = isOpen ? "×" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu navigasi");
            menuToggle.textContent = "☰";
        });
    });
}

/* =========================
   INITIALIZE WEBSITE
========================= */

renderTypes();
renderQuestion();
