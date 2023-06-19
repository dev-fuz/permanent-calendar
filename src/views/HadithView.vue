<template>
    <v-container>
    <v-row class="ma-5">
        <v-col cols="6" md="3">
            <v-select
                :items="appStore.hadithBookList"
                item-text="nameBengali"
                label="Select Book"
                v-model="appStore.selectedHadithBook"
                outlined
                return-object
            ></v-select>
        </v-col>
        <!-- <v-col cols="6" md="3">
            <v-select
                :items="appStore.hadithChapter"
                item-text="nameBengali"
                item-value="id"
                label="Select Chapter"
                v-model="appStore.selectedHadithChapter"
                outlined
            ></v-select>
        </v-col>
        <v-col cols="6" md="3">
            <v-select
                :items="appStore.hadithHadithList"
                item-text="nameBengali"
                item-value="id"
                label="Select Hadith"
                v-model="appStore.selectedHadithHadith"
                outlined
            ></v-select>
        </v-col>
        <v-col cols="6" md="3">
            <v-btn color="primary" @click="appStore.getHadithHadithList">
                Show Hadith
            </v-btn>
        </v-col> -->
    </v-row>
    <v-row class="ma-5">
        <v-col cols="12" md="4" max-width="344px" class="hadith-book-list" v-for="(item, i) in appStore.hadithBookList" :key="i" >
            <v-card >
                <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                            {{ item.nameBengali }}
                        </div>
                        <div class="text-h6 mb-1">
                            {{ item.nameEnglish }}
                        </div>
                        <div class="text-caption">Toal Hadiths: {{ item.hadith_number }}</div>
                    </div>
                </v-card-item>

                <v-card-actions>
                    <v-btn variant="outlined">
                        Show Cahpters
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>

import { useAppStore } from "@/store/app";
const appStore = useAppStore();
 
export default{
    data() {
        return {
            appStore,
            states: [
                'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                'Arkansas', 'California', 'Colorado', 'Connecticut',
                'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
                'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada',
                'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
                'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
                'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
            ],
        }
    },
    onMounted() {
        appStore.getHadithBookList;
    },
};


</script>
<style>
.hadith-book-list {
    margin-top: 10px;
}
</style>