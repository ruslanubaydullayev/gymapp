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
            <h5 class="text-2xl mt-4 font-semibold text-center">Statistika</h5>
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

            </div>

            <el-table class="!mt-3" :data="productsTable" stripe style="width: 100%">
                <el-table-column prop="type" label="Turi" width="100" />
                <el-table-column prop="product" label="Mahsulot" width="100" />
                <el-table-column prop="date" label="Vaqti" sortable width="130" />
                <el-table-column prop="amount" label="Miqdori" sortable width="110" />
                <el-table-column prop="price" label="Narxi" sortable width="90" />
                <el-table-column prop="price" label="Amallar">
                    <template #default="scope">
                        <el-button type="info" size="small" @click="handleEdit(scope.$index)">
                            Batafsil
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>

            <div class="flex items-center justify-center my-4">
                <el-button type="primary">Yana yuklash</el-button>
            </div>

            <Bar :data="data" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
const handleEdit = (index: number) => {
    console.log(index);

}
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const form = ref({
    product: '',
    type: '',
    start_date: '',
    end_date: '',
    seller: '',
    buyer: ''
})
const productsTable = [
    {
        id: 1,
        date: '2016-05-03 12:00:00',
        type: 'Poliz',
        product: 'Qovun',
        amount: 1000,
        price: 15000,
    },
    {
        id: 2,
        date: '2016-05-03 12:00:00',
        type: 'Poliz',
        product: 'Tarvuz',
        amount: 1000,
        price: 15000,
    },
    {
        id: 3,
        date: '2016-05-03 12:00:00',
        type: 'Meva',
        product: 'Olma',
        amount: 2000,
        price: 5000,
    },
    {
        id: 4,
        date: '2016-05-03 12:00:00',
        type: 'Meva',
        product: 'Kartoshka',
        amount: 2000,
        price: 3500,
    },
    {
        id: 1,
        date: '2016-05-03 12:00:00',
        type: 'Poliz',
        product: 'Qovun',
        amount: 1000,
        price: 15000,
    },
    {
        id: 2,
        date: '2016-05-03 12:00:00',
        type: 'Poliz',
        product: 'Tarvuz',
        amount: 1000,
        price: 15000,
    },
    {
        id: 3,
        date: '2016-05-03 12:00:00',
        type: 'Meva',
        product: 'Olma',
        amount: 2000,
        price: 5000,
    },
    {
        id: 4,
        date: '2016-05-03 12:00:00',
        type: 'Meva',
        product: 'Kartoshka',
        amount: 2000,
        price: 3500,
    },
]
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
const data = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 100, 39, 80, 40, 20, 12, 11]
        }
    ]
}

</script>