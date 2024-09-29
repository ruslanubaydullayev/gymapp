<template>
  <div>
    <div class="containter mx-auto px-4">
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <el-button type="primary" @click="routeBack"> Orqaga </el-button>
        </div>
        <h5 class="text-2xl mt-4 font-semibold text-center">Sotuv qo'shish</h5>
        <el-select
          v-model="form.type"
          placeholder="Turni tanlang"
          size="medium"
          style="width: 240px"
          class="!w-full mt-2"
        >
          <el-option
            v-for="item in types"
            :key="item.value"
            :value="item.name"
          />
        </el-select>
        <el-input
          v-model="form.product"
          placeholder="Mahsulot nomini kiriting"
          class="mt-2"
        />
        <el-input
          v-model="form.price"
          type="number"
          placeholder="Mahsulot narxini kiriting"
          class="mt-2"
        />
        <el-input
          v-model="form.amount"
          type="number"
          placeholder="Mahsulot miqdorini kiriting"
          class="mt-2"
        />
        <div class="flex items-center flex-wrap gap-2 mt-3">
          <el-select
            v-model="form.seller"
            placeholder="Sotuvchini tanlang"
            size="medium"
            style="width: 240px"
            class="!w-full"
          >
            <el-option
              v-for="item in sellers"
              :key="item.value"
              :value="item.name"
            />
          </el-select>

          <el-select
            v-model="form.buyer"
            placeholder="Sotib oluvchini tanlang"
            size="medium"
            style="width: 240px"
            class="!w-full"
          >
            <el-option
              v-for="item in buyers"
              :key="item.value"
              :value="item.name"
            />
          </el-select>
        </div>

        <el-upload
          v-model:file-list="fileList"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="3"
        >
          <el-button type="primary" class="!mx-auto mt-2"
            >Rasm jo'natish</el-button
          >
          <template #tip>
            <div class="el-upload__tip">
              Hajmi 500Kb dan ortmaydigan rasm jo'nata olasiz.
            </div>
          </template>
        </el-upload>

        <div class="flex items-center justify-center my-4">
          <el-button type="primary">Jo'natish</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = ref({
  product: '',
  type: '',
  price: '',
  amount: '',
  seller: '',
  buyer: '',
})

function routeBack() {
  router.back()
}

import type { UploadProps, UploadUserFile } from 'element-plus'
import { ElMessageBox } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`,
  ).then(
    () => true,
    () => false,
  )
}

const types = [
  {
    name: 'Poliz',
    value: 1,
  },
  {
    name: 'Meva',
    value: 2,
  },
  {
    name: 'Sabzavot',
    value: 3,
  },
  {
    name: 'Ko\'kat',
    value: 4,
  },
]
const sellers = [
  {
    name: 'Abdulla',
    value: 1,
  },
  {
    name: 'Abbos',
    value: 2,
  },
  {
    name: 'Shahzod',
    value: 3,
  },
  {
    name: 'Marjona',
    value: 4,
  },
]
const buyers = [
  {
    name: 'Nozim',
    value: 1,
  },
  {
    name: 'Nazokat',
    value: 2,
  },
  {
    name: 'Fozil',
    value: 3,
  },
  {
    name: 'Asad',
    value: 4,
  },
]
</script>
