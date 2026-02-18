import { Link } from "react-router-dom";
import Logo from "../../assets/جابـــــــسرا.png";
import registerLogo from "../../assets/1.png";   
import loginLogo from "../../assets/2.png";    

const Header = () => {
  return (
    <header className="w-full bg-[#00000005] shadow-2xs border-b border-gray-200" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-extrabold hover:scale-105 transition-all text-shadow-2xs font-bold text-[#1E3A8A] bg-cover bg-center" >
            
          جابـــــــسرا
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm text-[#545454]">
          <Link to="/jobs" className="hover:text-blue-500 hover:scale-105 font-extrabold transition">
            جستجوی مشاغل
          </Link>
          <Link to="/companies" className="hover:text-blue-500 hover:scale-105 font-extrabold transition">
            شرکت‌های برتر
          </Link>
          <Link to="/blog" className="hover:text-blue-500 hover:scale-105 font-extrabold transition">
            وبلاگ‌ها
          </Link>
          <Link to="/about" className="hover:text-blue-500 hover:scale-105 font-extrabold transition">
            درباره ما
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 relative">
            <Link to="/login" className="z-10 hover:scale-105 transition-all">
              <img
                src={loginLogo}
                alt="ورود"
                className="h-8 w-11 object-contain"
              />
            </Link>

            <Link to="/register" className="z-20 -mr-4 hover:scale-105 transition-all">
              <img
                src={registerLogo}
                alt="ثبت‌نام"
                className="h-8 w-14 object-contain"
              />
            </Link>
          </div>

          <div className="w-px h-6 bg-gray-300 hidden sm:block" />

          <Link
            to="/employer"
            className="text-sm text-gray-600 hover:scale-105 transition-all hover:text-gray-900 whitespace-nowrap"
          >
            بخش کارفرمایان / ثبت‌نام
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;