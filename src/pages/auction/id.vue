<template>
    <div>
        <div class="containter mx-auto px-4">
            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <router-link to="/auction">
                        <el-button type="primary">
                            Orqaga
                        </el-button>
                    </router-link>
                </div>
                <h5 class="text-2xl mt-4 font-semibold text-center text-gray-700">Qizil pomidor</h5>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-gray-400">Tugashgacha qolgan vaqt</h4>
                    <el-tag size="medium"><el-countdown format="HH:mm:ss" :value="countDownTime" /></el-tag>
                </div>
                <el-image class="mt-4" style="width: 100%; height: auto" :src="url" :zoom-rate="1.2" :max-scale="7"
                    :min-scale="0.2" :preview-src-list="srcList" :initial-index="4" fit="cover" />

                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-gray-400">Nomi</h4>
                    <el-tag size="medium">Qizil shaftoli</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-gray-400">Turi</h4>
                    <el-tag size="medium">Sabzavot</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-gray-400">Yaratilgan vaqti</h4>
                    <el-tag size="medium">12.07.2024 05:04:00</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-gray-400">Tugash vaqti</h4>
                    <el-tag size="medium">13.07.2024 05:04:00</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-gray-400">Miqdori</h4>
                    <el-tag size="medium">1200 kg</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-gray-400">Narxi</h4>
                    <el-tag size="medium">2500 so'm/kg</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-gray-400">Sotuvchi</h4>
                    <el-tag size="medium">Hasan Husanov</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-gray-400">Yetkazib berish</h4>
                    <el-tag size="medium">Tasdiqlangan</el-tag>
                </div>

            </div>

            <div class="flex items-center justify-between gap-2 mt-4">
                <el-input v-model="price" placeholder="Narxni kiriting" type="number" />
                <el-button type="primary">Taklif qilish</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const price = ref('')

const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const countDownTime = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)

</script>

<style scoped>
.demo-image__error .image-slot {
    font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
    font-size: 30px;
}

.demo-image__error .el-image {
    width: 100%;
    height: 200px;
}
</style>