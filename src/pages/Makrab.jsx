export default function Makrab() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/momen.jpeg')" }}
    >
      {/* OVERLAY GELAP */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Makrab (Malam Keakraban)
        </h2>

        <p className="text-gray-200 text-center max-w-3xl mx-auto mb-12">
          Makrab merupakan kegiatan malam keakraban yang bertujuan untuk
          mempererat tali silaturahmi antar anggota HIMATIF, membangun
          rasa kebersamaan, serta meningkatkan solidaritas dan kekompakan.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white">
            <h3 className="font-semibold text-lg mb-3">🎯 Tujuan</h3>
            <ul className="list-disc list-inside text-gray-200">
              <li>Mempererat hubungan antar anggota</li>
              <li>Meningkatkan rasa kekeluargaan</li>
              <li>Membangun komunikasi yang baik</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white">
            <h3 className="font-semibold text-lg mb-3">📅 Kegiatan</h3>
            <ul className="list-disc list-inside text-gray-200">
              <li>Games kebersamaan</li>
              <li>Api unggun & sharing session</li>
              <li>Pentas seni dan hiburan</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white">
            <h3 className="font-semibold text-lg mb-3">🤝 Manfaat</h3>
            <ul className="list-disc list-inside text-gray-200">
              <li>Meningkatkan solidaritas</li>
              <li>Mengenal anggota lebih dekat</li>
              <li>Menciptakan kenangan bersama</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
