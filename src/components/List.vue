<template>
    <div>
        <li @dblclick="isEdit =true" :class="['list-group-item d-flex justify-content-between align-items-center createFadeInDown',{'animationInDelete':isDelete}]">
            <input v-if="isEdit" v-model="list.message" @keyup.enter="isEdit = false" type="text" class="custom-control">
            <div v-else class="form-inline">
                <input type="checkbox" v-model="list.isDone" class="custom-checkbox custom-control" :id="'input'+list.id">
                <label :for="'input'+list.id" :class="['custom-control', {'done':list.isDone}]">{{list.message}}</label>
            </div>
            <i @click="[isDelete=true, del(list.id)]" class="fas fa-trash-alt text-primary"></i>
        </li>
    </div>
</template>

<script>
    export default {
        name : "List",
        props : {
            list : {
                type : Object,
                required : true
            }
        },
        data() {
            return {
                isEdit : false,
                isDelete : false
            }
        },
        methods: {
            del(x) {
                this.$emit("del", x)
            }
        },
    }
</script>

<style>
    
</style>