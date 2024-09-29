<template>
    <div class="container mx-auto flex items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-4 mt-16 max-w-[400px]">
            <el-text type="primary" size="large" class="text-xl font-bold">Tizimga kirish </el-text>
            <el-input v-model="form.name" style="width: 240px" size="large" placeholder="Telefon raqamni kiriting" />
            <el-input v-model="form.password" style="width: 240px" size="large" type="password"
                placeholder="Parolni kiriting" />
            <el-button type="primary" :loading="loading" @click="submit">Kirish</el-button>
            <div class="flex items-end justify-end w-full">
                <el-button type="text">Parolni unutdim</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const loading = ref(false)
const form = ref({
    name: '',
    password: ''
})

function submit() {
    loading.value = true
    setTimeout(() => {
        loading.value = false
        router.push('/')
    }, 1000)
}
</script>