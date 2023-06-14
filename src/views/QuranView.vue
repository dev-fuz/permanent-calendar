<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <h3 class="text-center">{{ appStore.quran.edition.name }}</h3>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-for="sura in appStore.quran.surahs" :key="sura.index">
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <h3 class="text-center">{{ sura.name }}</h3>
                    </v-card-title>
                    <v-card-subtitle>
                        <v-row>
                            <v-col>
                                English Name: {{ sura.englishName }}
                            </v-col>
                            <v-col>
                                English Meening: {{ sura.englishNameTranslation }}
                            </v-col>
                        </v-row>
                    </v-card-subtitle>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                Revelation Type: {{ sura.revelationType }}
                            </v-col>
                            <v-col>
                                Number of Ayahs: {{ sura.ayahs.length }}
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="text-right">
                        <v-list>
                            <v-list-item-group>
                                <v-list-item v-for="ayah in sura.ayahs" :key="ayah.number">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ ayah.text }} {{ ayah.numberInSurah >= 1 ? '(' + ayah.numberInSurah + ')' : '' }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card-text>
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