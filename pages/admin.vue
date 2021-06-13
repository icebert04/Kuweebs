<template>
    <div class="p-4">
        <h1 class="text-2xL font-bold">Admin</h1> 
        <div class="bg-gray-400-p2">
            <nuxt-link to="/admin/homes/">Homes</nuxt-link>
        </div>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
import Cookie from 'js-cookie'

    export default {
        asyncData({ $config, redirect }){
            if(!Cookie.get($config.auth.cookieName)){
                redirect('/no-access/')
                return
            }
        }
    }
</script>