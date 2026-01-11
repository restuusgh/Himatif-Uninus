export default function Makrab() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">
        Makrab (Malam Keakraban)
      </h2>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Makrab merupakan kegiatan malam keakraban yang bertujuan untuk
        mempererat tali silaturahmi antar anggota HIMATIF, membangun
        rasa kebersamaan, serta meningkatkan solidaritas dan kekompakan.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold text-lg mb-2">🎯 Tujuan</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Mempererat hubungan antar anggota</li>
            <li>Meningkatkan rasa kekeluargaan</li>
            <li>Membangun komunikasi yang baik</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold text-lg mb-2">📅 Kegiatan</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Games kebersamaan</li>
            <li>Api unggun & sharing session</li>
            <li>Pentas seni dan hiburan</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold text-lg mb-2">🤝 Manfaat</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Meningkatkan solidaritas</li>
            <li>Mengenal anggota lebih dekat</li>
            <li>Menciptakan kenangan bersama</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
