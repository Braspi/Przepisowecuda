<template>
    <section class="relative">
        <div class="bg-main-color h-screen w-24 flex items-start justify-center z-10">
            <button class="w-10 text-4xl mt-5" @click="toggleNavbar">
                <font-awesome-icon icon="fa-solid fa-bars" class="fai"/>
            </button>
            <section class="flex flex-col justify-center items-center cursor-pointer fixed bottom-0 w-full mb-12">
                <a href="https://ycode.ovh"><font-awesome-icon icon="fa-solid fa-laptop-code" class="fai mt-6 text-3xl hover:text-gray-800 transition-colors duration-300"/></a>
                <a href="https://github.com/Braspi"><font-awesome-icon icon="fa-brands fa-github" class="fai mt-6 text-3xl hover:text-gray-800 transition-colors duration-300"/></a>
                <a href="https://www.instagram.com/jeremiasz_cz.bsd/"><font-awesome-icon icon="fa-brands fa-instagram" class="fai mt-6 text-3xl hover:text-gray-800 transition-colors duration-300"/></a>
            </section>
        </div>
    </section>
    <nav id="navbar" :class="{'translate-x-0': !isNavbarHidden, '-translate-x-full' : isNavbarHidden}" class="absolute bg-main-color h-screen w-64 z-20 top-0 left-0 transition-transform duration-300 ease-in-out">
        <button @click="toggleNavbar">
            <img src="src/assets/icon/logo/logo.png">
        </button>
        <section class="flex flex-col items-center cursor-pointer flex-grow">
            <router-link to="/przepisy" class="mt-8 text-2xl font-medium hover:text-gray-800">Przepisy</router-link>
            <router-link to="/ulubione" class="mt-8 text-2xl font-medium hover:text-gray-800">Ulubione</router-link>
            <router-link to="/dodajprzepis" class="mt-8 text-2xl font-medium hover:text-gray-800">Dodaj Przepis</router-link>
        </section>
        <section class="flex justify-center items-center cursor-pointer fixed bottom-0 w-full mb-16">
            <a href="https://github.com/Braspi" class="mr-4"><font-awesome-icon icon="fa-solid fa-laptop-code" class="fai mt-8 text-3xl hover:text-gray-800 transition-colors duration-300"/></a>
            <a href="https://github.com/Braspi" class="mr-4"><font-awesome-icon icon="fa-brands fa-github" class="fai mt-8 text-3xl hover:text-gray-800 transition-colors duration-300"/></a>
            <a href="https://www.instagram.com/jeremiasz_cz.bsd/"><font-awesome-icon icon="fa-brands fa-instagram" class="fai mt-8 text-3xl hover:text-gray-800 transition-colors duration-300"/></a>
        </section>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showNavbar: false,
            isNavbarHidden: true
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarHidden = !this.isNavbarHidden;
        }
    }
};
</script>
