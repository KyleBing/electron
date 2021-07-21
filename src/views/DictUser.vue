<template>
    <div class="container-fluid">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">code</th>
                <th scope="col">word</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(item, index) in codeDict" :key="index">
                <th scope="row">{{ index }}</th>
                <td>{{ item.code }}</td>
                <td>{{ item.word }}</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    name: "DictUser",
    data() {
        return {
            codeDict: [
                {code: 'ggtt', word: '五笔'},
                {code: 'ggtt', word: '来来往往'},
                {code: 'ggtt', word: '开玩笑'},
            ]
        }
    }
}
</script>