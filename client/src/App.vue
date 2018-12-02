<template>
    <div>
        <h1>{{ message }}</h1>
        <input type="file" id="script" ref="script" @change="handleFileUpload">
        <button v-on:click="submitFile()" v-show="showSubmit" v-bind:disabled="compiling">{{ buttonText }}</button>
        <div v-if="compiled">
            <form action="/download" method="post">
                <input type="hidden" name="filename" v-bind:value="file.filename">
                <input type="hidden" name="originalname" v-bind:value="file.originalname">
                <button type="submit">Download</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'app',
    data() {
        return {
            message: 'Emscripten Playground',
            script: '',
            showSubmit: false,
            compiling: false,
            compiled: false,
            file: {},
        }
    },
    computed: {
        buttonText() {
            return this.compiling ? 'Compiling...' : 'Submit';
        }
    },
    methods: {
        handleFileUpload() {
            this.script = this.$refs.script.files[0];
            this.showSubmit = true;
        },
        submitFile() {
            let formData = new FormData();
            formData.append('script', this.script);

            this.compiling = true;
            
            axios.post(
                '/compile',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then((response) => {
                this.compiled = true;
                this.file = response.data.data.file;
            }).catch((error) => {
                if (error.response.status === 500) {
                    alert('A server error has occured and script could not be compiled, please make sure you have Emscripten installed.');
                }
            }).then((response) => {
                this.compiling = false;
            });
        }
    },
    mounted() {
        
    }
}
</script>