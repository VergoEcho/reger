<template>
    <article class="product">
        <header class="product-header">
            <div class="product-title">
                <h1>Product title</h1>

            </div>
            <div class="product-info">
                <small>
                    {{ new Date().toLocaleString()}}
                </small>
                <small>
                    42
                </small>
            </div>
            <div class="product-img">
                <img src="/img1.jpg" alt="product img">
            </div>
        </header>
        <main class="product-content">
            <p>Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. Reiciendis dolorum eius aliquam? Incidunt
                 ratione temporibus, sequi deleniti 
                 et pariatur repellat?</p>
            <p>Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. Reiciendis dolorum eius aliquam? Incidunt
                 ratione temporibus, sequi deleniti 
                 et pariatur repellat?</p>
            <p>Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. Reiciendis dolorum eius aliquam? Incidunt
                 ratione temporibus, sequi deleniti 
                 et pariatur repellat?</p>
        </main>
        <footer>
            <app-comment-form
                v-if="canAddComment"
                @created="createCommentHandler"
            />

            <div class="comments" v-if="true">
                <app-comment
                    v-for="comment in 4"
                    :key="comment"
                    :comment="comment"
             />
            </div>
            <div class="text-center" v-else>Коментариев нет</div>
        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
    validate({params}){
        return Boolean(params.id)
    },
    data() {
        return{
            canAddComment: true
        }
    },
    methods: {
        createCommentHandler() {
            this.canAddComment = false
        }
    },
    components: {AppComment , AppCommentForm}
}
</script>

<style lang="scss" scoped>
    .product {
        max-width: 600px;
        margin: 0 auto;
    }

    .product-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .product-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .5rem;
    }

    .product-img img{
        width: 100%;
        height: auto;
    }

    .product-header{
        margin-bottom: 1.5rem;
    }

    .product-content{
        margin-bottom: 2rem;
    }
</style>