import BackgroundForLight from "../../assets/Rectangle 207.png";
import SearchFilter from "../../assets/prouduct/Search.png";

export default function HeroSection() {
  return (
    <div className=" w-full h-[518px]">
      <img
        src={BackgroundForLight}
        alt="Background for light mode"
        className="w-full h-full object-cover"
      />
      <div
        dir="rtl"
        className=" text-5xl font-extrabold absolute top-[-150px] right-0 w-full h-full flex items-center justify-center"
      >
        <span className="text-[#F59E0B]">6537</span>
         آگـــهی استخدام فعال در 
        <span className="text-[#F59E0B]">1432</span>
         شرکت ایرانــــی
      </div>
      <div
        dir="rtl"
        className=" leading-tight text-2xl font-extrabold absolute top-[-50px] right-0 w-full h-full flex items-center justify-center"
      >
        فضایی برای رشد کسب و کار شما - پرداخت نهایی پس از رضایت از نتیجه کار
      </div>

      <div className=" font-extrabold absolute top-[95px] right-0 w-full h-full flex items-center justify-center">
        <div className="w-[80%] h-4 flex justify-center items-center gap-[20px] xl:gap-[20px] lg:gap-[20px] md:gap-[10px] sm:gap-[10px] xs:gap-[10px]  ">
          <button className="w-[210px] h-[61px] bg-[#38BDF8] rounded-[8px] text-black font-bold ">
            جستجو در مشاغل
          </button>

          <input
            type="text"
            placeholder="نام شهر"
            className="w-[210px] h-[61px] p-3 border border-[#545454] text-right rounded-[8px] pr-[5px]"
          />

          <input
            type="text"
            placeholder="گروه شغلی"
            className="w-[210px] h-[61px] p-3 border border-[#545454] text-right rounded-[8px] pr-[5px]"
          />

          <input
          dir="rtl"
            type="text"
            placeholder="عنوان شغل با نام شرکت..."
            className="w-[456px] p-3 h-[61px] border border-[#545454] rounded-[8px] pr-[5px]"
          />
        </div>
      </div>
    </div>
  );
}
