<template>
  <div class="bg-gradient-to-r from-fuchsia-500 to-fuchsia-900 h-screen relative overflow-y-auto">
    <!-- Навигация -->
    <Navbar />

    <!-- Основной контент -->
    <div class="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24 py-24 sm:py-32">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
        <h2 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold tracking-tight text-white">
          Work with us
        </h2>
        <p class="mt-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-gray-300 lg:leading-relaxed">
          Уже очень много я знаю, берите у меня заказы, застилизую и наворочу много новых функций. Обращайтесь не стесняйтесь
        </p>
      </div>

      <!-- Ссылки -->
      <div class="rounded-sm mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none  text-indigo-200 text-4xl text-white transition-transform duration-300 transform hover:scale-110 hover:bg-fuchsia-800 hover:shadow-lg hover:shadow-white text-xl p-4">
        <!-- Первая ссылка -->
        <a href="#" class="text-white transition duration-300 hover:bg-white hover:bg-opacity-20 p-2 text-xl md:text-2xl font-semibold">
          Моя инста
        </a>

        <!-- Вторая ссылка -->
        <a href="#" class="text-white transition duration-300 hover:bg-white hover:bg-opacity-20 p-2 text-xl md:text-2xl font-semibold">
          Мой телеграм-канал
        </a>

        <!-- Третья ссылка -->
        <a href="#" class="text-white transition duration-300 hover:bg-white hover:bg-opacity-20 p-2 text-xl md:text-2xl font-semibold">
          Личные сообщения
        </a>

        <!-- Четвертая ссылка -->
        <a href="#" class="text-white transition duration-300 hover:bg-white hover:bg-opacity-20 p-2 text-xl md:text-2xl font-semibold">
         Телефон
        </a>
      </div>

      <!-- Статистика -->
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse gap-1">
          <dt class="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300">
            {{ stat.name }}
          </dt>
          <dd class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold tracking-tight text-white">
            {{ stat.value }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

  
  <script setup>

  
  const stats = [
    { name: "Успешных заказов", value: "13+" },
    { name: "Проектов", value: "10+" },
    { name: "Месяцев обучения", value: "11+" },
    { name: "Скилла", value: "1000+" },
  ];
  </script>
  
  <style scoped>
  .size-full {
    width: 100%;
    height: 100%;
  }
  </style>
  
