<template>
    <el-table
        data="codeDict"
    >
        <el-table-column prop="code" label="编码"></el-table-column>
        <el-table-column prop="word" label="词条"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="primary">上移</el-button>
                <el-button type="primary">下移</el-button>
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
            </template>
        </el-table-column>

    </el-table>
</template>

<script>
export default {
    name: "DictUser",
    data(){
        return {
            codeDict: []
        }
    }
}
</script>

<style scoped>

</style>