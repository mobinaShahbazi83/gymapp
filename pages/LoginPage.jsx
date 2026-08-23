
function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className="
          relative
          w-[600px]
          h-screen
          overflow-hidden
          bg-[#C9DEFA]
          flex
          flex-col
          items-center
          justify-center
          px-6
          sm:px-12
        "
      >
        {/* ================= TOP PATTERNS ================= */}

        {/* Top Left */}
        <div className="absolute -top-1 left-[54px] h-[42px] w-[32px] rounded-br-[8px] border-r-[6px] border-b-[6px] border-[#A9C9F7]" />

        {/* Top Center */}
        <div className="absolute -top-5 left-[112px] h-[44px] w-[45px] rounded-bl-[8px] border-l-[6px] border-b-[6px] border-[#A9C9F7]" />

        {/* Top Right */}
        <div className="absolute top-[35px] right-[-4px] h-[35px] w-[48px] rounded-tl-[8px] border-l-[6px] border-t-[6px] border-[#A9C9F7]" />

        {/* Right Middle */}
        <div className="absolute top-[82px] right-[-8px] h-[30px] w-[30px] rounded-bl-[8px] border-l-[6px] border-b-[6px] border-[#A9C9F7]" />

        {/* Right Line */}
        <div className="absolute top-[252px] right-0 h-[6px] w-[19px] bg-[#A9C9F7]" />

        {/* ================= LEFT / BOTTOM PATTERNS ================= */}

        {/* Left Middle Line */}
        <div className="absolute top-[251px] left-0 h-[6px] w-[19px] bg-[#A9C9F7]" />

        {/* Bottom Left Curve */}
        <div className="absolute bottom-[42px] left-[-5px] h-[47px] w-[47px] rounded-tr-[10px] border-r-[6px] border-t-[6px] border-[#A9C9F7]" />

        {/* Bottom Left Second Curve */}
        <div className="absolute bottom-[5px] left-[14px] h-[35px] w-[34px] rounded-tr-[9px] border-r-[6px] border-t-[6px] border-[#A9C9F7]" />

        {/* Bottom Center */}
        <div className="absolute bottom-[-3px] left-[45px] h-[38px] w-[35px] rounded-tr-[9px] border-r-[6px] border-t-[6px] border-[#A9C9F7]" />

        {/* Bottom Right */}
        <div className="absolute bottom-[2px] right-[51px] h-[38px] w-[35px] rounded-tl-[9px] border-l-[6px] border-t-[6px] border-[#A9C9F7]" />

        {/* Small Bottom Left Square */}
        <div className="absolute bottom-0 left-[16px] h-[6px] w-[6px] bg-[#A9C9F7]" />

        {/* ================= LOGIN CONTENT ================= */}

        {/* Gym Bag */}
        

        {/* Title */}
        <img src="./images/Dumbbell.png" className="w-[250px] h-[150px] "/>
        <div className="relative z-10 w-full flex text-center flex-col gap-4 pr-5 mt-10">
          <h1 className="text-1xl sm:text-3xl !font-bold text-gray-800">
            ورود
          </h1>

          <p className="text-base sm:text-lg !font-bold text-gray-600 leading-relaxed ئف-2">
            برای ورود اطلاعات خود را وارد نمایید.
          </p>
        </div>

        {/* Phone Number */}
        <div className="relative z-10 w-full flex flex-col items-center gap-2 mt-10">
          <label className="text-center w-full max-w-[300px]">
            شماره همراه
          </label>

          <input
            type="text"
            className="
              w-full
              max-w-[350px]
              h-[50px]
              bg-[#C9DEFA]
              outline-none
              hover:border-[#289DFC]
              border
              border-[#000000]
              rounded-2xl
              px-4
            "
          />
        </div>

        {/* Button */}
        <div className="relative z-10 w-full flex flex-col items-center gap-2 mt-6">
          <button
            className="
              w-full
              max-w-[350px]
              h-[50px]
              bg-[#289DFC]
              border
              border-[#289DFC]
              outline-none
              hover:border-[#289DFC]
              rounded-2xl
            text-gray-800
            !font-bold
              text-xl
            "
          >
            تایید
          </button>

          {/* Gym */}
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;