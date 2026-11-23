"use client";

import { useEffect, useState } from "react";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { GoPencil, GoTrash, GoChevronLeft } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { LuCircleFadingPlus, LuX, LuPercent, LuTrash2 } from "react-icons/lu";
import { FaQuestion } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";

export default function DiscountsPage() {
  // وضعیت باز و بسته بودن مودال
  const [open, setOpen] = useState(false);

  // اطلاعات فرم کد تخفیف
  const [code, setCode] = useState(["2", "E", "T", "1", "1"]);
  const [products, setProducts] = useState([
    "آزمایشی",
    "آزمایشی",
    "آزمایشی",
    "سنگ کلیه",
  ]);
  const [newProduct, setNewProduct] = useState("");

  const [form, setForm] = useState({
    minAmount: "200.000",
    maxAmount: "200.000",
    discountType: "آزمایشی",
    startDate: "1404/05/02",
    endDate: "1404/05/02",
    description: "",
    totalUsage: "2",
    userUsage: "1",
  });

  const change = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // بستن مودال با کلید Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const addProduct = () => {
    const product = newProduct.trim();
    if (!product) return;

    setProducts((prev) => [...prev, product]);
    setNewProduct("");
  };

  const removeProduct = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      ...form,
      code: code.join(""),
      products,
    };

    // فعلاً اطلاعات در کنسول نمایش داده می‌شود.
    // برای ذخیره دائمی، این قسمت را به API پروژه وصل کن.
    console.log("کد تخفیف ثبت شد:", data);
    setOpen(false);
  };

  const handleDelete = () => {
    const data = {
      ...form,
      code: code.join(""),
      products,
    };

    // فعلاً حذف در کنسول ثبت می‌شود و به بک‌اند وصل نیست.
    console.log("درخواست حذف کد تخفیف:", data);
    setOpen(false);
  };

  const inputStyle =
    "h-[29px] w-full rounded-lg border border-white bg-[#e5e5e5] px-2 text-center text-[10px] text-[#555] outline-none focus:border-[#23a9ef]";

  const labelStyle = "mb-1 block text-[10px] text-[#555]";

  return (
    <div  className="min-h-screen w-full pb-10">
      {/* سربرگ صفحه */}
      <div className="mt-5 mr-4 flex items-center justify-end gap-8 sm:mr-10">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl !font-bold">فیتنو</h1>
          <GoPencil className="h-[30px] w-[30px]" />
        </div>

        <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#EDF6FE] sm:h-[120px] sm:w-[120px]">
          <MdOutlinePhotoCamera className="h-[40px] w-[40px] text-[#668CAE]" />
        </div>
      </div>

      {/* دکمه ایجاد کد تخفیف و جستجو */}
      <div className="mt-8 flex flex-col justify-center gap-5 px-4 sm:flex-row sm:items-center sm:gap-10">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-[50px] w-[200px] cursor-pointer items-center justify-center gap-4 rounded-full bg-[#0088FF]"
          >
            <LuCircleFadingPlus className="h-[22px] w-[22px] text-white" />
            <span className="text-lg !font-semibold text-white">
              کد تخفیف جدید
            </span>
          </button>
        </div>

        <div className="relative w-full sm:max-w-[1068px]">
          <IoSearchOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-[#0832DE]" />
          <input
            placeholder="جستجو"
            className="h-[54px] w-full rounded-full border border-[#F4F4F4D9] bg-[#F4F4F4D9] pl-4 pr-12 text-right text-lg !font-semibold outline-none"
          />
        </div>
      </div>

      {/* فهرست کدهای تخفیف */}
      <section className="mx-4 mt-12 min-h-[650px] rounded-3xl border border-[#F4F4F4D9] bg-[#F2F2F2] p-4 sm:mx-auto sm:max-w-[1200px] sm:p-6">
        <h2 className="pt-2 text-center text-xl !font-semibold">
          کدهای تخفیف
        </h2>

        <div className="mx-auto mt-5 flex min-h-[80px] flex-wrap items-center justify-between gap-2 rounded-3xl bg-[#D6D6D6] p-3 sm:px-5">
          <div className="flex h-[40px] min-w-[150px] items-center justify-center rounded-full border border-[#F4F4F4D9] bg-[#289DFC] px-4">
            <p className="text-center text-base !font-semibold text-white">
              کدهای اختصاصی
            </p>
          </div>

          <div className="flex h-[40px] min-w-[150px] items-center justify-center rounded-full border border-[#F4F4F4D9] bg-[#289DFC] px-4">
            <p className="text-center text-base !font-semibold text-white">
              کدهای استفاده شده
            </p>
          </div>

          <div className="flex h-[40px] min-w-[150px] items-center justify-center rounded-full border border-[#F4F4F4D9] bg-[#289DFC] px-4">
            <p className="text-center text-base !font-semibold text-white">
              تخفیفات جدید
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-3 sm:p-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="mb-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5"
            >
              <div className="flex min-h-[80px] flex-1 flex-col justify-between gap-3 rounded-3xl bg-[#D6D6D6] p-3 sm:flex-row sm:items-center sm:px-5">
                {/* آیکون‌های عملیات */}
                <div className="flex flex-row items-center gap-1 self-start sm:order-3 sm:ml-5">
                  <button
                    type="button"
                    aria-label="نمایش جزئیات"
                    className="cursor-pointer text-[#2563EB]"
                  >
                    <GoChevronLeft className="h-[35px] w-[35px]" />
                  </button>
                  <button
                    type="button"
                    aria-label="حذف کد تخفیف"
                    onClick={() => console.log("حذف کد ردیف", item)}
                    className="cursor-pointer text-[#2563EB]"
                  >
                    <GoTrash className="h-[25px] w-[25px]" />
                  </button>
                  <button
                    type="button"
                    aria-label="ویرایش کد تخفیف"
                    onClick={() => setOpen(true)}
                    className="cursor-pointer text-[#2563EB]"
                  >
                    <LiaEditSolid className="mb-1 ml-1 h-[30px] w-[30px]" />
                  </button>
                </div>

                {/* تاریخ‌ها */}
                <div className="flex flex-wrap gap-2 sm:order-2">
                  <div className="rounded-full border border-[#3C3C43] bg-[#D6D6D6] px-3 py-2 text-xs">
                    تاریخ شروع: <span>1405/03/02</span>
                  </div>
                  <div className="rounded-full border border-[#3C3C43] bg-[#D6D6D6] px-3 py-2 text-xs">
                    تاریخ پایان: <span>1405/03/02</span>
                  </div>
                </div>

                {/* توضیحات تخفیف */}
                <div className="flex flex-col gap-1 p-1 text-right text-sm font-semibold leading-5 sm:order-1">
                  <p>75.000 تومان | کد تخفیف هدیه باشگاه فیتنو</p>
                  <p>اعمال روی حداقل ۷۰۰.۰۰۰ تومان | مهلت ۲ روز</p>
                </div>
              </div>

              <button
                type="button"
                aria-label="اطلاعات بیشتر"
                className="flex h-[60px] w-[60px] shrink-0 items-center justify-center self-end rounded-2xl border border-[#289DFC] bg-[#289DFC] sm:h-[80px] sm:w-[80px] sm:self-auto"
              >
                <FaQuestion className="h-[35px] w-[35px] text-[#F2F2F2]" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* مودال ایجاد و ویرایش کد تخفیف */}
      {open && (
        <div
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/40 p-3"
        >
          <div
            dir="rtl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="discount-modal-title"
            className="relative my-auto w-full max-w-[580px] rounded-[20px] border-2 border-[#c6cbd0] bg-[#d5e0e9] p-4 shadow-lg sm:min-h-[500px] sm:p-5"
          >
            {/* عنوان مودال */}
            <div className="mb-6 flex items-center justify-between">
              <h2
                id="discount-modal-title"
                className="text-[13px] font-medium text-[#343b49]"
              >
                ایجاد و ادیت کد تخفیف
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="بستن"
                className="cursor-pointer text-[#252b34]"
              >
                <LuX size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-4">
                {/* آیکون درصد */}
                <div className="flex justify-center">
                  <div
                    className="flex h-[150px] w-[150px] items-center justify-center bg-[#1710d9]"
                    style={{
                      clipPath:
                        "polygon(50% 0%,63% 6%,78% 3%,88% 13%,92% 27%,100% 40%,96% 54%,100% 68%,91% 81%,78% 87%,68% 100%,52% 95%,38% 100%,25% 91%,11% 88%,7% 74%,0% 60%,5% 45%,2% 30%,13% 18%,28% 14%,37% 2%)",
                    }}
                  >
                    <LuPercent
                      className="h-[90px] w-[90px] text-[#d5e0e9]"
                      strokeWidth={3}
                    />
                  </div>
                </div>

                {/* فیلدهای فرم */}
                <div className="min-w-0">
                  {/* کد تخفیف */}
                  <div className="mb-6 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#414957]">
                      کد تخفیف:
                    </span>

                    <div className="flex gap-1.5" dir="ltr">
                      {code.map((item, index) => (
                        <input
                          key={index}
                          maxLength={1}
                          value={item}
                          aria-label={`کاراکتر ${index + 1} کد تخفیف`}
                          onChange={(event) => {
                            const updated = [...code];
                            updated[index] = event.target.value.toUpperCase();
                            setCode(updated);
                          }}
                          className={`h-[46px] w-[40px] rounded-[10px] border text-center text-lg outline-none ${
                            index === 0
                              ? "border-[#43c4dc] bg-[#b6d6e7] text-white"
                              : "border-transparent bg-[#2110ed] text-white"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* حداقل و حداکثر مبلغ */}
                  <div className="mb-4 grid grid-cols-2 gap-3">
                    <div className="flex items-end gap-2">
                      <input
                        value={form.maxAmount}
                        onChange={(event) =>
                          change("maxAmount", event.target.value)
                        }
                        className={inputStyle}
                      />
                      <label className={labelStyle}>حداکثر مبلغ:</label>
                    </div>

                    <div className="flex items-end gap-2">
                      <input
                        value={form.minAmount}
                        onChange={(event) =>
                          change("minAmount", event.target.value)
                        }
                        className={inputStyle}
                      />
                      <label className={labelStyle}>حداقل مبلغ:</label>
                    </div>
                  </div>

                  {/* دسته‌بندی و تاریخ‌ها */}
                  <div className="mb-3 grid grid-cols-3 gap-2">
                    <div>
                      <label className={labelStyle}>دسته‌بندی:</label>
                      <select
                        value={form.discountType}
                        onChange={(event) =>
                          change("discountType", event.target.value)
                        }
                        className={inputStyle}
                      >
                        <option>آزمایشی</option>
                        <option>درصدی</option>
                        <option>مبلغی</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelStyle}>تاریخ پایان:</label>
                      <input
                        value={form.endDate}
                        onChange={(event) =>
                          change("endDate", event.target.value)
                        }
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>تاریخ شروع:</label>
                      <input
                        value={form.startDate}
                        onChange={(event) =>
                          change("startDate", event.target.value)
                        }
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  {/* متن شرایط تخفیف */}
                  <textarea
                    value={form.description}
                    onChange={(event) =>
                      change("description", event.target.value)
                    }
                    placeholder="متن شرایط کد تخفیف"
                    className="mb-3 h-[55px] w-full resize-none rounded-lg border border-white bg-[#e5e5e5] p-2 text-[11px] text-[#555] outline-none placeholder:text-[#888] focus:border-[#23a9ef]"
                  />

                  {/* تعداد دفعات استفاده */}
                  <div className="mb-5 grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelStyle}>
                        تعداد دفعات مجاز استفاده برای هر کاربر:
                      </label>
                      <input
                        value={form.userUsage}
                        onChange={(event) =>
                          change("userUsage", event.target.value)
                        }
                        type="number"
                        min="1"
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>
                        تعداد دفعات مجاز استفاده از کد:
                      </label>
                      <input
                        value={form.totalUsage}
                        onChange={(event) =>
                          change("totalUsage", event.target.value)
                        }
                        type="number"
                        min="1"
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  {/* محصولات مشمول تخفیف */}
                  <div className="mb-4 grid grid-cols-[minmax(0,1fr)_110px] items-center gap-2">
                    <div className="flex flex-wrap gap-1">
                      {products.map((product, index) => (
                        <span
                          key={`${product}-${index}`}
                          className="flex items-center gap-1 rounded-md bg-[#2110ed] px-2 py-1 text-[9px] text-white"
                        >
                          {product}
                          <button
                            type="button"
                            onClick={() => removeProduct(index)}
                            aria-label={`حذف ${product}`}
                            className="cursor-pointer"
                          >
                            <LuX size={10} />
                          </button>
                        </span>
                      ))}
                    </div>

                    <div className="text-[10px] text-[#555]">
                      لیست محصولات مجاز برای کد تخفیف:
                    </div>
                  </div>

                  {/* افزودن محصول */}
                  <div className="flex gap-1">
                    <input
                      value={newProduct}
                      onChange={(event) => setNewProduct(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          addProduct();
                        }
                      }}
                      placeholder="نام محصول جدید"
                      className={inputStyle}
                    />
                    <button
                      type="button"
                      onClick={addProduct}
                      className="shrink-0 rounded-lg bg-[#2110ed] px-3 text-[10px] text-white"
                    >
                      افزودن
                    </button>
                  </div>
                </div>
              </div>

              {/* دکمه‌های پایین مودال */}
              <div className="mt-5 flex items-center gap-1">
                <button
                  type="submit"
                  className="h-[30px] rounded-lg bg-[#219cf0] px-4 text-[11px] font-semibold text-white transition hover:bg-[#087fd5]"
                >
                  ایجاد کد تخفیف
                </button>

                <button
                  type="button"
                  onClick={handleDelete}
                  className="flex h-[30px] items-center gap-1 rounded-lg bg-[#ff592f] px-4 text-[11px] font-semibold text-white transition hover:bg-red-600"
                >
                  <LuTrash2 size={13} />
                  حذف کد
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
