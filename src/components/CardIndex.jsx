export default function Information({ title, imageUrl, desc }) {
   return (
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center md:text-left bg-[#f5faff]">
         <div className="w-[90%] max-w-[600px]">
            <img src={imageUrl} alt={title} />
         </div>
         <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-5">{title}</h1>
            <p className="w-[80%] max-w-[800px] text-sm sm:text-base">{desc}</p>
         </div>
      </div>
   );
}
