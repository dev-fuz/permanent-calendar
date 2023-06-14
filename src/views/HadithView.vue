<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>
                        <h3>Hadith of Niat</h3>
                    </v-card-title>
                    <v-card-text>
                        // niat hadith
                        
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>
                        <h3>Hadith</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="hadith in hadiths" :key="hadith.id">
                                <v-list-item-content>
                                    <v-list-item-title>{{ hadith.text }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>