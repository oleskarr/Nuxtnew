<template class="">
    <Navbar/>
    <div class="relative overflow-x-hidden  overflow-y-auto no-scrollbar bg-gray-900 ">
      <!-- Изображение на фоне -->
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt="Background"
        class="absolute inset-0 -z-10 size-full object-cover object-right lg:object-center"
      />
  
      <!-- Элементы размытых фигур -->
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl lg:right-1/3 lg:mr-20"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 lg:top-[-32rem] lg:ml-24"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
  
      <!-- Основной контент -->
      <div class="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24 py-24 sm:py-32">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
          <h2 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold tracking-tight text-white">
            Work with us
          </h2>
          <p
            class="mt-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-gray-300 lg:leading-relaxed"
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
            Elit sunt amet fugiat veniam occaecat fugiat.
          </p>
        </div>
  
        <!-- Ссылки -->
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            class="grid grid-cols-1 gap-y-6 sm:gap-y-8 lg:gap-y-12 xl:gap-y-16 text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-12 xl:gap-x-16"
          >
            <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }}
              <span aria-hidden="true">&rarr;</span></a>
          </div>
  
          <!-- Статистика -->
          <dl class="mt-16 grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="stat in stats"
              :key="stat.name"
              class="flex flex-col-reverse gap-1"
            >
              <dt class="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300">
                {{ stat.name }}
              </dt>
              <dd
                class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold tracking-tight text-white"
              >
                {{ stat.value }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const links = [
    { name: "Our Team", href: "#" },
    { name: "Our Work", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact Us", href: "#" },
  ];
  
  const stats = [
    { name: "Clients", value: "120+" },
    { name: "Projects", value: "50+" },
    { name: "Awards", value: "30+" },
    { name: "Years of Experience", value: "10+" },
  ];
  </script>
  
  <style scoped>
  .size-full {
    width: 100%;
    height: 100%;
  }
  </style>
  
