import foto from "../../sunoo.jpg";


function Profile() {
  return <img src={foto.src} alt="Sunoo" className="fotoku" />;
}

export default function hero() {
    return (
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-400 font-bold">CV ONLINE</h1>
          <h2 className="text-3x1">Aena Farhatul Lael</h2>
          <Profile />
          <p>I'm a Computerized Accounting student at Masoem University</p>
        </div>
    );
}

