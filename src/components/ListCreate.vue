<template>
    <div>
        <div class="form-row mb-2">
            <div class="col-10">
                <input v-model="inputText" @keyup.enter="addText()" @keyup="showError = false" type="text" class="form-control" placeholder="Say Something">
            </div>
            <div class="col-2">
                <button @click="addText()" class="btn btn-primary w-100">
                    <i class="fas fa-plus-circle"></i>
                </button>
            </div>
            <div class="col-12">
                <small v-if="showError" class="text-danger font-weight-bold">{{errorMessage}}</small>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name : "ListCreate",
        data() {
            return {
                inputText : "",
                showError : false,
                errorMessage : ""
            }
        },
        methods: {
            addText() {
                if(this.inputText.length) {
                    this.$emit("create", this.inputText)
                    this.inputText = ""
                    this.showError = false
                }else{
                    this.showError = true;
                    this.errorMessage = "Type Something"
                }
               
            }
        },
        
    }

</script>

<style>

</style>