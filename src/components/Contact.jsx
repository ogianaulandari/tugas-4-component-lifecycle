import Footer from "./footer";
import facebook from "../assets/images/contact/facebook.jpg";
import twitter from "../assets/images/contact/twitter.jpg";
import instagram from "../assets/images/contact/instagram.jpg";
import youtube from "../assets/images/contact/youtube.jpg";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-cusKontak dark:text-white w-full min-h-screen font-sans flex flex-col">
      <div className="flex flex-col justify-center flex-1">
        <div className=" mb-8">
          <h1 className="text-4xl font-bold text-center">Hubungi Kami</h1>
          <p className="text-base text-center">
            Memiliki pertanyaan lebih lanjut seputar PaDI UMKM?<br/>
            Silahkan menghubungi Kami secara langsung.</p>
        </div>

        <div className="flex justify-center space-x-8">
          
          <div className="border border-gray-500 rounded-lg p-6 text-left w-96">
            <h2 className="text-2xl font-bold mb-4">Layanan Informasi Pengguna</h2>
            <h3 className="text-lg font-bold">Email</h3>
            <p className="text-sm mb-4">
              cs@padiumkm.id
            </p>
            <h3 className="text-lg font-bold">Whatsapp</h3>
            <p className="text-sm mb-4">
              +62 812 9000 7820
            </p>
            <h3 className="text-lg font-bold">Senin-Jumat | 08.00 - 17.00 WIB</h3>
          </div>
          <div className="border border-gray-500 rounded-lg p-6 text-left w-96">
            <h2 className="text-2xl font-bold mb-4">Kantor Kami</h2>
            <h3 className="text-base font-semibold">PaDI UMKM Headquarters<br />Gedung Telkom Direktorat Business aand Technology</h3>
            <p className="text-sm">
              Jln. Prof. Dr. Soepomo No. 139. Jakarta Selatan, DKI Jakarta, 12810 Indonesia
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-2">Ikuti Media Sosial Kami</h2>
            <div className="flex items-center space-x-3">
            <img src={ facebook } alt="Facebook"/>
            <img src={ twitter } alt="Twitter" />
            <img src={ instagram } alt="Instagram" />
            <img src={ youtube } alt="Youtube" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
