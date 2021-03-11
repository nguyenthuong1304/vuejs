<template>
  <nav class="border-b border-gray-800">
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between px-4 py-6"
    >
      <ul class="flex flex-col md:flex-row items-center">
        <li>
          <router-link to="/" href="" class="text-3xl">Trang chủ</router-link>
        </li>
        <li class="md:ml-16 mt-3 md:mt-0">
          <a href="https://movies.andredemos.ca" class="hover:text-gray-300"
            >Movies</a
          >
        </li>
        <li class="md:ml-6 mt-3 md:mt-0">
          <a href="https://movies.andredemos.ca/tv" class="hover:text-gray-300"
            >TV Shows</a
          >
        </li>
        <li class="md:ml-6 mt-3 md:mt-0">
          <a
            href="https://movies.andredemos.ca/actors"
            class="hover:text-gray-300"
            >Actors</a
          >
        </li>
      </ul>
      <div class="flex flex-col md:flex-row items-center">
        <div
          wire:id="HzDHWUvoQO9LqbvBPAGV"
          class="relative mt-3 md:mt-0"
          x-data="{ isOpen: true }"
        >
          <input
            wire:model.debounce.500ms="search"
            type="text"
            class="bg-gray-800 text-sm rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline"
            placeholder="Search (Press '/' to focus)"
            x-ref="search"
          />
          <div class="absolute top-0">
            <svg
              class="fill-current w-4 text-gray-500 mt-2 ml-2"
              viewBox="0 0 24 24"
            >
              <path
                class="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
              ></path>
            </svg>
          </div>
          <div wire:loading="" class="spinner top-0 right-0 mr-4 mt-3"></div>
          <div
            class="z-50 absolute bg-gray-800 text-sm rounded w-64 mt-4"
            v-if="isOpen"
          >
            <ul>
              <li class="border-b border-gray-700">
                <a
                  href="https://movies.andredemos.ca/movies/60181"
                  class="block hover:bg-gray-700 px-3 py-3 flex items-center transition ease-in-out duration-150"
                >
                  <img
                    src="https://image.tmdb.org/t/p/w92//w8NRzyVyZSLlyW7b1cOWiQCe1jh.jpg"
                    alt="poster"
                    class="w-8"
                  />
                  <span class="ml-4">Borsalino and Co.</span>
                </a>
              </li>
              <li class="border-b border-gray-700">
                <a
                  href="https://movies.andredemos.ca/movies/120653"
                  class="block hover:bg-gray-700 px-3 py-3 flex items-center transition ease-in-out duration-150"
                >
                  <img
                    src="https://image.tmdb.org/t/p/w92//9jh2dEmg5n9xOKDRjaeq3pvhxJU.jpg"
                    alt="poster"
                    class="w-8"
                  />
                  <span class="ml-4">Zee and Co.</span>
                </a>
              </li>
              <li class="border-b border-gray-700">
                <a
                  href="https://movies.andredemos.ca/movies/402125"
                  class="block hover:bg-gray-700 px-3 py-3 flex items-center transition ease-in-out duration-150"
                >
                  <img
                    src="https://image.tmdb.org/t/p/w92//gwnH7dDj5oiLGyYflawdPkISg3V.jpg"
                    alt="poster"
                    class="w-8"
                  />
                  <span class="ml-4">Sammy and Co: Turtle Reef</span>
                </a>
              </li>
              <li class="border-b border-gray-700">
                <a
                  href="https://movies.andredemos.ca/movies/21542"
                  class="block hover:bg-gray-700 px-3 py-3 flex items-center transition ease-in-out duration-150"
                >
                  <img
                    src="https://image.tmdb.org/t/p/w92//cMsXL9hK6yFIgWtHef0wbKzO4Ix.jpg"
                    alt="poster"
                    class="w-8"
                  />
                  <span class="ml-4">Love Don't Co$t a Thing</span>
                </a>
              </li>
              <li class="border-b border-gray-700">
                <a
                  href="https://movies.andredemos.ca/movies/4397"
                  class="block hover:bg-gray-700 px-3 py-3 flex items-center transition ease-in-out duration-150"
                >
                  <img
                    src="https://image.tmdb.org/t/p/w92//sZYhH6NYyAGhLdWawia9dRLcbAm.jpg"
                    alt="poster"
                    class="w-8"
                  />
                  <span class="ml-4">Casanova &amp; Co.</span>
                </a>
              </li>
              <li class="border-b border-gray-700">
                <a
                  href="https://movies.andredemos.ca/movies/222517"
                  class="block hover:bg-gray-700 px-3 py-3 flex items-center transition ease-in-out duration-150"
                >
                  <img
                    src="https://image.tmdb.org/t/p/w92//bolbWev8y34XPXclBr3xNOHpUg3.jpg"
                    alt="poster"
                    class="w-8"
                  />
                  <span class="ml-4">Snow White and 7 Wise Men</span>
                </a>
              </li>
              <li class="border-b border-gray-700">
                <a
                  href="https://movies.andredemos.ca/movies/460598"
                  class="block hover:bg-gray-700 px-3 py-3 flex items-center transition ease-in-out duration-150"
                  @keydown.tab="isOpen = false"
                >
                  <img
                    src="https://image.tmdb.org/t/p/w92//4Qjqfaxfx101jS1wQnAbP2Ckg2e.jpg"
                    alt="poster"
                    class="w-8"
                  />
                  <span class="ml-4">Peter Cook &amp; Co.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:ml-4 mt-3 md:mt-0">
          <a href="#">
            <img
              src="https://image.tmdb.org/t/p/w92//w8NRzyVyZSLlyW7b1cOWiQCe1jh.jpg"
              alt="avatar"
              class="rounded-full w-8 h-8"
            />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  }
};
</script>

<style></style>
