import PageTemplate from "@/components/templates/PageTemplate";
import ProfilContainer from "@/components/templates/PageContainer/Container";

export default function KontrakBerjangkaOlein() {
  return (
    <PageTemplate title="Kontrak Berjangka Olein | Kontakperkasa Futures">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52 my-10">
        <ProfilContainer title="Kontrak Berjangka Olein">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontrak Berjangka Olein (OLE)</h2>
            <p className="text-gray-700 mb-4">
              Kontrak Berjangka Olein (OLE) adalah kontrak standar yang diperdagangkan di Bursa Berjangka Jakarta (BBJ) 
              untuk membeli atau menjual minyak goreng sawat (olein) dengan kualitas tertentu pada tanggal penyerahan yang telah disepakati.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Spesifikasi Kontrak</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Kode Kontrak: OLE</li>
                  <li>Ukuran Kontrak: 10 ton</li>
                  <li>Kualitas: Minyak Goreng Sawat (Oleum) Grade CP8</li>
                  <li>Penyerahan: FOB Indonesia</li>
                  <li>Mata Uang: Rupiah Indonesia (IDR)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Keuntungan Trading</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Hedging terhadap fluktuasi harga olein</li>
                  <li>Leverage hingga 1:20</li>
                  <li>Likuiditas tinggi</li>
                  <li>Transparansi harga</li>
                  <li>Regulasi BAPPEBTI</li>
                </ul>
              </div>
            </div>
          </div>
        </ProfilContainer>
      </div>
    </PageTemplate>
  );
}
