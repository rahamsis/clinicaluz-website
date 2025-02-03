import Link from "next/link";

const Billing = () => (
  <section className="relative overflow-hidden bg-slate-50 w-full border-b border-slate-900/5">
    <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('https://tailwindui.com/img/beams-templates-header.png')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block"></div>

    <div className="container max-w-screen-2xl mx-auto ss:px-12 px-6">
      <div className="mx-auto max-w-container pt-4 lg:flex ">
        <div className="relative max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
          <h1 className="text-base font-semibold leading-7 text-sky-500">Ultimas noticias</h1>
          <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">Ultimas Noticias.</p>
          <div className="flex flex-wrap mt-4">
            <div className="flex items-center text-sm font-medium text-slate-500">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 flex-none stroke-current text-slate-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="16" cy="16" rx="13" ry="5"></ellipse><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"></ellipse><ellipse rx="13" ry="5" transform="matrix(-.5 .86603 .86603 .5 16 16)"></ellipse><circle cx="16" cy="16" r="2"></circle></svg>
              <span className="ml-2.5">React</span>
            </div>
            <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 flex-none stroke-current text-slate-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="next-icon-gradient-a" x1="15.125" y1="18.25" x2="24.25" y2="27.375" gradientUnits="userSpaceOnUse"><stop offset=".24" stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient><linearGradient id="next-icon-gradient-b" x1="20.5" y1="11.25" x2="20.5" y2="18.25" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient></defs><path d="M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"></path><path d="M12 21.5V12l12.25 14.25" stroke="url(#next-icon-gradient-a)"></path><path d="M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z" fill="url(#next-icon-gradient-b)" strokeWidth="0"></path></svg>
              <span className="ml-2.5">Next.js</span>
            </div>
          </div>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Consulta las ultimas noticias; relacionadas al área de oftalmologia; en nuestro canal dedicado a la información é investiacion.            
          </p>
          <div className="mt-8 flex gap-4">
            <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer">
              <span>Browse <span className="hidden sm:inline">templates</span><span aria-hidden="true" className="text-slate-400 sm:inline">→</span></span>
            </a>
            <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 cursor-pointer">
              <span>Get <span className="hidden sm:inline">everything</span> with all-access <span aria-hidden="true" className="text-black/25 sm:inline">→</span></span>
            </a>
          </div>
        </div>

        <div className="relative z-5 hidden lg:block">
          <div className="mt-6 flex">
            <div className="relative flex-shrink-0 p-4">
              <div className="relative z-5 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 cursor-pointer">
                <Link href="https://retinatoday.com/articles/2021-nov-dec/an-aggressive-presentation-of-proliferative-retinopathy">
                  <a target="_blank">
                    <img className="h-[404px] w-[336px]" src="/images/noticia1.png" />
                  </a>
                  
                </Link>
              </div>
            </div>
            <div className="relative mt-14 flex-shrink-0 p-4">
              <div className="overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 cursor-pointer">
                <Link href="https://retinatoday.com/" target="_blank">
                  <a target="_blank">
                    <img className="h-[404px] w-[336px]" src="/images/noticia2.png" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 pb-16">

        <div className="flex">
          <div className="p-0.5">
            <svg className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]" viewBox="0 0 40 40" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z" className="fill-sky-50 stroke-sky-500"></path>
              <path opacity="0.4" d="M17.25 33.25h-8.5a2 2 0 01-2-2V8.75a2 2 0 012-2h22.5a2 2 0 012 2v1m-4 3h-18.5" className="stroke-sky-500/40"></path>
              <path d="M31.25 12.75h-8.5a2 2 0 00-2 2v16.5a2 2 0 002 2h8.5a2 2 0 002-2v-16.5a2 2 0 00-2-2z" className="fill-white stroke-sky-500"></path>
              <path d="M26.75 30.25h.5" className="stroke-sky-500"></path>
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="text-sm font-semibold leading-6 text-slate-900">Desde 1985</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">Más de 35 años prestando la mejor atención y calidad en nuestros servicios.</p>
          </div>
        </div>

        <div className="flex">
          <div className="p-0.5">
            <svg className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]" viewBox="0 0 40 40" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z" className="fill-sky-50 stroke-sky-500"></path>
              <path d="M24.847 33.25L19.82 20.113c-.324-.846.543-1.656 1.351-1.261L33.25 24.75l-6.426 2-1.977 6.5z" className="fill-white stroke-sky-500"></path>
              <path d="M33.25 20.25V9.75a3 3 0 00-3-3H9.75a3 3 0 00-3 3v20.5a3 3 0 003 3h10.5" className="stroke-sky-500/40"></path>
              <path d="M11.75 11.75v16.5" className="stroke-sky-500"></path>
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="text-sm font-semibold leading-6 text-slate-900">Medicos oftalmólogos</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">Más de 50 médicos oftalmólogos sub-especialistas con la mejor capacitación y educación.</p>
          </div>
        </div>

        <div className="flex">
          <div className="p-0.5">
            <svg className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]" viewBox="0 0 40 40" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z" className="fill-sky-50 stroke-sky-500"></path>
              <path d="M31.817 26a13.194 13.194 0 001.433-6c0-7.318-5.932-13.25-13.25-13.25S6.75 12.682 6.75 20c0 2.16.517 4.199 1.433 6" className="stroke-sky-500/40"></path>
              <path d="M15.75 18a4.25 4.25 0 108.5 0 4.25 4.25 0 00-8.5 0z" className="fill-white stroke-sky-500"></path>
              <path d="M28.982 29.74c-.994-2.29-4.638-3.99-8.982-3.99-4.344 0-7.989 1.7-8.982 3.99A13.202 13.202 0 0020 33.25c3.466 0 6.62-1.33 8.982-3.51z" className="fill-white stroke-sky-500"></path>
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="text-sm font-semibold leading-6 text-slate-900">Cirugías realizadas anualmente</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">mas de 19000 cirugías al año, con la tasa de complicaciones más baja.</p>
          </div>
        </div>


      </div>
    </div>
  </section>
);

export default Billing;