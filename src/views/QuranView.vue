<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>
                        <h3 class="text-center">Quran</h3>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
export default {
    data: () => ({
        appStore
    }),
}
</script>