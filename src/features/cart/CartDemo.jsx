function CartDemo() {
  return (
    <div className="max-w-3xl px-2">
      <div className="mt-4 rounded-md border-2 p-6" dir="rtl">
        <h2 className="text-xl font-semibold text-stone-900">
          صفحه پرداخت فاکتور
        </h2>
        <ul className="mt-3 text-lg">
          <li className="mb-2 flex items-center justify-between border-b">
            <span>مبلغ</span>
            <span>4000</span>
          </li>
          <li className="mb-2 flex items-center justify-between border-b">
            <span>زون کوین دریافتی</span>
            <span>4</span>
          </li>
          <li className="mb-2 flex items-center justify-between border-b">
            <span>کاربر</span>
            <span>Mtin</span>
          </li>
        </ul>

        <div className="mt-6 space-x-2">
          <a
            className="cursor-pointer rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-stone-100 shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-none sm:px-5 sm:py-2.5 sm:text-base"
            href="#"
          >
            رفتن به درگاه پرداخت
          </a>
        </div>
      </div>
    </div>
  );
}

export default CartDemo;
