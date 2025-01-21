<template>
    <Navbar />
<div class=" h-full	 overflow-y-auto ">
   
    
      <h2 class="text-center text-base/7 font-semibold text-indigo-600">Моё портфолио</h2>
      <p class="mx-auto  mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Всё самое сокровенное здесь</p>
      <div class="mt-10 h-full	 overflow-y-auto no-scrollbar  grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Этот сайт</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Написан на тэйлвинде, вью и накст начинающей рукой юного мастера</p>
            </div>
            <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              <div class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                <img class="size-full object-cover object-top" src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png" alt="">
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
        </div>
        <div class="relative max-lg:row-start-1">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Мои проекты</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Будут автоматически подгружаться</p>
              <h2 class="text-3xl mt-[20px]">По <a href="https://github.com/oleskarr" class="hover:text-fuchsia-400  font-bold">этой ссылке на github</a></h2>
            </div>
            <div class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
              <img class="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png" alt="">
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>
        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div class="absolute inset-px rounded-lg bg-white"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Обо мне</p>
              <p class="mt-2 max-w-lg  text-gray-600 max-lg:text-center">Меня зовут Олеся, мне 15 лет и я начинающий программист,открыта к новым заказам и сотрудничеству</p>
            </div>
            <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
              <img class="h-[min(152px,40cqw)] object-cover" src="https://tailwindui.com/plus/img/component-images/bento-03-security.png" alt="">
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Powerful APIs</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.</p>
            </div>
            <div class="relative min-h-[30rem] w-full grow">
              <div class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">NotificationSetting.jsx</div>
                    <div class="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
      </div>
    
  </div></template>
  
  
  
