function RowRiwayat(props: any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-300 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    )
  }

  export default function riwayatpendidikan() {
    return (
      <section>
        {/* Riwayat Pendidikan */}
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pendidikan</h2>

        <RowRiwayat jenjang="SD" sekolah="SDN 2 Pilangsari" tahun="2010" />
        <RowRiwayat jenjang="MTS" sekolah="Daarul Uluum Pui Majalengka" tahun="2016" />
        <RowRiwayat jenjang="SMA" sekolah="SMAS Islam Al-Mizan Jatiwangi" tahun="2019" />
        <RowRiwayat jenjang="Sarjana" sekolah="Masoem University" tahun="2022" />
        </div>
        {/* End Riwayat Pendidikan*/}
        </section>
    );
}