function RowRiwayat(props: any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-300 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.sebagai}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    )
  }

  export default function riwayatpekerjaan() {
    return (
      <section>
        {/* Riwayat Pendidikan */}
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pekerjaan</h2>

        <RowRiwayat sebagai="Guru SD" instansi="SDN 2 Pilangsari" tahun="2010" />
        <RowRiwayat sebagai="Akuntan" instansi="PT Spectra" tahun="2016" />
        <RowRiwayat sebagai="Perpajakan" instansi="PT Spectra Consultans" tahun="2019" />
        <RowRiwayat sebagai="Programer" instansi="CVGMedia" tahun="2022" />
        </div>
        {/* End Riwayat Pendidikan*/}
        </section>
    );
}