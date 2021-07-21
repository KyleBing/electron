<template>
    <div class="container-fluid">
        <div class="btn btn-success" @click="showDialog">ShowDialog</div>
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
// import fs from 'fs'
export default {
    name: "DictUser",
    data() {
        return {
            codeDict: [
                {code: 'ggtt', word: '五笔'},
                {code: 'ggtt', word: '来来往往'},
                {code: 'ggtt', word: '开玩笑'},
            ],
        }
    },
    mounted() {
/*        let filePath = 'C:\\Users\\Administrator\\AppData\\Roaming\\Rime\\rime.lua'
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if(err){
                alert("An error ocurred reading the file :" + err.message);
                return;
            }

            // Change how to handle the file content
            console.log("The file content is : " + data);
        })*/

    },
    methods:{
        showDialog(){
            ipcRenderer.send('read-file', 'demo-ipcRender')
        }
    }
}

ipcRenderer.on('read-file', event => {
    console.log(event)
})

</script>