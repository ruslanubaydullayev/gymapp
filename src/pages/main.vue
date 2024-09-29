<template>
  <div class="container mx-auto min-h-[70vh] flex items-center justify-center">
    <div class="container mx-auto items-center flex flex-col">
      <h2 class="text-2xl mt-12 text-blue-400 uppercase font-bold text-center px-4">
        Xush kelibsiz, GYM APP!
      </h2>
      <div
        class="grid grid-cols-2 items-center justify-center gap-4 mt-16 max-w-[400px]"
      >
        <router-link to="/home">
          <el-button type="primary" size="large" class="w-full !flex">
            <el-icon>
              <House />
            </el-icon>
            <span class="text-base">Asosiy</span>
          </el-button>
        </router-link>

        <router-link to="/athletes" class="w-full">
          <el-button type="primary" size="large" class="!w-full">
            <el-icon>
              <Histogram />
            </el-icon>
            <span class="text-base">Atletlar</span>
          </el-button>
        </router-link>

        <router-link to="/stats" class="w-full">
          <el-button type="primary" size="large" class="!w-full">
            <el-icon>
              <DataLine />
            </el-icon>
            <span class="text-base">Statistika</span>
          </el-button>
        </router-link>

        <router-link to="/profile" class="w-full">
          <el-button type="primary" size="large" class="!w-full">
            <el-icon>
              <Avatar />
            </el-icon>
            <span class="text-base">Profil</span>
          </el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Avatar, DataLine, Histogram, House } from '@element-plus/icons-vue'
</script>