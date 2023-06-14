<template>
    <v-card class="mx-auto" max-width="368" v-for="cal in appStore.data.data" :key="cal.index" :color="getActiveDay(cal)">
        <v-card-item :title="getWeekDay(cal)">
            <template v-slot:subtitle>
                <v-icon icon="mdi-book-clock" size="18" color="error" class="me-1 pb-1"></v-icon>

                <span>{{ year }}-{{ getMonthId(cal) }}-{{ cal.day }}</span>
            </template>
        </v-card-item>

        <v-card-text class="py-0">
            <v-row align="center">
                <v-col cols="6" class="custome-transform">
                    Sehri
                </v-col>
                <v-col class="custome-transform" cols="4">
                    {{ cal.sehri_time }}
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="6" class="custome-transform">
                    Fazar
                </v-col>
                <v-col class="custome-transform" cols="4">
                    {{ cal.fazr_time }}
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="6" class="custome-transform">
                    Johr
                </v-col>
                <v-col class="custome-transform" cols="4">
                    {{ cal.johr_time }}
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="6" class="custome-transform">
                    Asar
                </v-col>
                <v-col class="custome-transform" cols="4">
                    {{ cal.asr_time }}
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="6" class="custome-transform">
                    Magrib & Iftar
                </v-col>
                <v-col class="custome-transform" cols="4">
                    {{ cal.magrib_and_iftar_time }}
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="6" class="custome-transform">
                    Esha
                </v-col>
                <v-col class="custome-transform" cols="4">
                    {{ cal.esha_time }}
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
    </v-card>
</template>

<script>
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

export default {
    data: () => ({
        appStore: appStore,
        year: (new Date()).getFullYear(),
        weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    }),
    methods: {
        getWeekDay(cal) {
           let day = new Date(this.year, cal.month_id, cal.day).getDay();
           return this.weekday[day - 2]
        },
        getMonthId(cal) {
            //compare if single digit or double digit
            if (cal.month_id < 10) {
                return '0' + cal.month_id
            }
            return cal.month_id
        },
        getActiveDay(cal) {
            if (cal.day == (new Date()).getDate() && this.getMonthId(cal) == (new Date()).getMonth() + 1) {
                return 'indigo-lighten-3'
            }
            return 'indigo-lighten-5'
        },
    },
}
</script>
<style>
.mx-auto {
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    text-transform: uppercase;
}
.custome-transform {
    text-transform: uppercase;
}
</style>