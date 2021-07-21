<template>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <div class="navbar-nav">
                <router-link class="nav-link" to="/dict/user">UserDict</router-link>
                <router-link class="nav-link" to="/about">About</router-link>
            </div>
        </div>
    </nav>
    <router-view/>
</template>

<style lang="scss">
@import "scss/reset";
</style>
