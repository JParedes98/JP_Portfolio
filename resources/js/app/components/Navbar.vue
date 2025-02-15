<template>
    <nav class="w-full bg-theme-50 fixed top-0 p-2 z-50">
        <div class="navbar max-w-6xl mx-auto">
            <div class="navbar-start">
                <router-link to="/" tabindex="0" role="button">
                    <div class="w-14 rounded-full">
                        <img
                            alt=""
                            class="rounded-full border border-white border-4 hover:border-theme-100 transition duration-150"
                            src="/img/Side_JP.ico"/>
                    </div>
                </router-link>

                <router-link to="/" class="text-gray-700 text-md font-bold mx-2 transition duration-150 hover:text-theme-500">
                    JP
                </router-link>
            </div>

            <div class="navbar-end">
                <div class="dropdown dropdown-end lg:hidden">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle text-gray-700 text-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>

                    <ul class="flex flex-col space-y-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <router-link to="/" class="p-1.5 rounded-lg hover:bg-theme-100 hover:text-theme-300 transition duration-150 font-bold">
                            HOME
                        </router-link>

                        <router-link to="/projects" class="p-1.5 rounded-lg hover:bg-theme-100 hover:text-theme-300 transition duration-150 font-bold">
                            PROJECTS
                        </router-link>

                        <router-link to="/experience" class="p-1.5 rounded-lg hover:bg-theme-100 hover:text-theme-300 transition duration-150 font-bold">
                            EXPERIENCE
                        </router-link>
                    </ul>
                </div>

                <div class="hidden lg:inline-block">
                    <ul class="flex flex-row space-x-4">
                        <router-link to="/" class="p-2 rounded-lg hover:bg-theme-100 hover:text-theme-300 transition duration-150 font-bold cursor-pointer">
                            HOME
                        </router-link>

                        <router-link to="/projects" class="p-2 rounded-lg hover:bg-theme-100 hover:text-theme-300 transition duration-150 font-bold cursor-pointer">
                            PROJECTS
                        </router-link>

                        <router-link to="/experience" class="p-2 rounded-lg hover:bg-theme-100 hover:text-theme-300 transition duration-150 font-bold cursor-pointer">
                            EXPERIENCE
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
