<template>
    <section class="section breadcrumb-area d-flex align-items-center bg-overlay">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Breamcrumb Content -->
                    <div class="breadcrumb-content d-flex flex-column align-items-center text-center">
                        <h3>{{ pageName }}</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a class="text-uppercase" href="/">Home</a></li>
                            <li class="breadcrumb-item active">{{ pageName }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Props {
    pageName: string
}

const props = withDefaults(defineProps<Props>(), {
    pageName: ''
})

</script>

<style>

</style>
