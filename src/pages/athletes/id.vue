<template>
    <div>
        <div class="containter mx-auto px-4">
            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <el-button type="primary" @click="routeBack">
                        Orqaga
                    </el-button>
                </div>
                <h5 class="text-2xl mt-4 font-semibold text-center">Qizil pomidor</h5>
                <el-image class="mt-4" style="width: 100%; height: auto" :src="url" :zoom-rate="1.2" :max-scale="7"
                    :min-scale="0.2" :preview-src-list="srcList" :initial-index="4" fit="cover" />

                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-blue-800">Turi</h4>
                    <el-tag size="medium">Sabzavot</el-tag>
                </div>

                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-blue-800">Nomi</h4>
                    <el-tag size="medium">Qizil shaftoli</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-blue-800">Miqdori</h4>
                    <el-tag size="medium">1200 kg</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-blue-800">Narxi</h4>
                    <el-tag size="medium">2500 so'm/kg</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-blue-800">Sotuvchi</h4>
                    <el-tag size="medium">Hasan Husanov</el-tag>
                </div>
                <div class="flex items-center justify-between">
                    <h4 class="font-semibold text-lg text-blue-800">Sotib oluvchi</h4>
                    <el-tag size="medium">Abdulla Qodirov</el-tag>
                </div>

            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
const router = useRouter()
function routeBack() {
    router.back()
}
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