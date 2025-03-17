import Image from 'next/image';

export default function Loader() {
  return (
    <div id="global-loader">
      <Image 
        src="/template/img/loader.svg" 
        className="loader-img" 
        alt="Loader"
        width={50}
        height={50}
        priority
      />
    </div>
  );
}