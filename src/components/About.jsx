import vision from '../assets/images/vision.png';
import Footer from './footer';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-full min-h-screen flex flex-col font-sans">
      <div className="flex flex-row justify-center flex-1">
        <div className="flex-1 p-10 max-w-lg">
        <h1 className="font-bold text-4xl mb-4">
            Visi Kami 
          </h1>
          <p className="text-lg mb-8" style={{ textAlign: 'justify' }}>
            Menjadi ekosistem digital unggulan UMKM di seluruh Indonesia.
          </p>
          <h1 className="font-bold text-4xl mb-4">
            Misi Kami 
          </h1>
          <ul className="list-disc list-inside text-lg text-left mx-auto max-w-xl" style={{ textAlign: 'justify' }}>
            <li>Meningkatkan kualitas produk dan layanan UMKM.</li>
            <li>Memperluas akses pasar untuk UMKM melalui platform digital.</li>
            <li>Menghubungkan UMKM dengan perusahaan BUMN dan swasta.</li>
            <li>Mendorong inovasi dan daya saing UMKM di pasar global.</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={ vision } alt="Benefit" className="w-3/4 h-3/4 object-contain" />
        </div>
      </div><Footer />
    </div>
  );
};

export default About;
