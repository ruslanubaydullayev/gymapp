<template>
    <div>
        <div class="containter mx-auto px-4">
            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <router-link to="/">
                        <el-button type="primary">
                            Orqaga
                        </el-button>
                    </router-link>
                    <router-link to="/auction/add">
                        <el-button type="success">
                            Auksion qo'shish
                        </el-button>
                    </router-link>
                </div>
                <h5 class="text-2xl mt-4 font-semibold text-center">Barcha auksionlar</h5>

                <div class="flex items-center flex-wrap gap-2 mt-3">
                    <el-select v-model="form.type" placeholder="Turni tanlang" size="medium" style="width: 240px"
                        class="!w-full">
                        <el-option v-for="item in types" :key="item.value" :value="item.name" />
                    </el-select>

                    <el-select v-model="form.product" placeholder="Mahsulotni tanlang" size="medium" style="width: 240px"
                        class="!w-full">
                        <el-option v-for="item in products" :key="item.value" :value="item.name" />
                    </el-select>

                    <div class="flex items-center justify-between gap-2 max-w-full">
                        <el-date-picker v-model="form.start_date" type="date" placeholder="Boshlanish kuni" size="medium" />
                        <el-date-picker v-model="form.end_date" type="date" placeholder="Tugash kuni" size="medium" />
                    </div>

                    <el-select v-model="form.seller" placeholder="Sotuvchini tanlang" size="medium" style="width: 240px"
                        class="!w-full">
                        <el-option v-for="item in sellers" :key="item.value" :value="item.name" />
                    </el-select>

                    <el-select v-model="form.buyer" placeholder="Sotib oluvchini tanlang" size="medium" style="width: 240px"
                        class="!w-full">
                        <el-option v-for="item in buyers" :key="item.value" :value="item.name" />
                    </el-select>
                </div>

                <div class="grid grid-cols-1 gap-3 mt-3">
                    <router-link to="/auction/4">
                        <el-card v-for="i in 3" :key="i" style="max-width: 350px">
                            <template #header>
                                <img src="https://idsb.tmgrup.com.tr/2015/01/25/HaberDetay/1422217702151.jpg?v=1422224262"
                                    style="width: 100%" />
                            </template>
                            <h4 class="text-xl text-gray-400">Qirmizi pomidor</h4>
                            <div class="flex flex-col">
                                <div class="flex items-center justify-between">
                                    <h4 class="font-semibold text-lg text-gray-500">Narxi</h4>
                                    <el-tag size="medium">1850 so'm</el-tag>
                                </div>
                                <div class="flex items-center justify-between">
                                    <h4 class="font-semibold text-lg text-gray-500">Miqdori</h4>
                                    <el-tag size="medium">2500 kg</el-tag>
                                </div>
                                <el-button type="primary" class="!mt-4">Taklif qilish</el-button>
                            </div>
                        </el-card>
                    </router-link>
                </div>

                <div class="flex items-center justify-center my-4">
                    <el-button type="primary">Yana yuklash</el-button>
                </div>
            </div>
        </div>
    </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
    product: '',
    type: '',
    start_date: '',
    end_date: '',
    seller: '',
    buyer: ''
})

const products = [
    {
        name: 'Pomidor',
        value: 1
    },
    {
        name: 'Bodring',
        value: 2
    },
    {
        name: 'Kartoshka',
        value: 3
    },
    {
        name: 'Piyoz',
        value: 4
    },
]
const types = [
    {
        name: 'Poliz',
        value: 1
    },
    {
        name: 'Meva',
        value: 2
    },
    {
        name: 'Sabzavot',
        value: 3
    },
    {
        name: 'Ko\'kat',
        value: 4
    },
]
const sellers = [
    {
        name: 'Abdulla',
        value: 1
    },
    {
        name: 'Abbos',
        value: 2
    },
    {
        name: 'Shahzod',
        value: 3
    },
    {
        name: 'Marjona',
        value: 4
    },
]
const buyers = [
    {
        name: 'Nozim',
        value: 1
    },
    {
        name: 'Nazokat',
        value: 2
    },
    {
        name: 'Fozil',
        value: 3
    },
    {
        name: 'Asad',
        value: 4
    },
]

</script>