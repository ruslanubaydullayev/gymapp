<template>
    <div>
        <div class="container px-4 mx-auto mt-4">
            <div class="flex items-center justify-between">
                <router-link to="/">
                    <el-button type="primary">
                        Orqaga
                    </el-button>
                </router-link>
            </div>
            <h5 class="text-2xl mt-4 font-semibold text-center">Mening profilim</h5>
            <img src="/user.jpg" class="rounded-full max-w-40 max-h-40 object-cover w-full h-full mx-auto" alt="user">
            <div class="flex flex-col gap-2">
                <el-input v-model="form.name" placeholder="Ismingiz" class="mt-2" />
                <el-input v-model="form.phone" placeholder="Telefon raqam" class="mt-2" />
                <el-input v-model="form.password" placeholder="Parol" class="mt-2" type="password"/>
                <el-button type="primary">O'zgartirish</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {ref} from 'vue'
    const form = ref({
        name: 'Qodirali',
        phone: '+998992234422',
        password: '12345678'
    })
</script>