<template>
    <div class="wrap_page_3" ref="page3">
        <div class='table-header-part'>
            <div class="text-left aolian-middle-margin-b">
            <el-button
                    type="primary aolian-body-content"
                    icon="el-icon-plus"
                    @click="newOrganizationType"
                    class="first-button"
            >
                新增
            </el-button>
        </div>
        </div>
        <el-table
                :row-style="tableRowClass"
                :header-cell-style="headerTableClass"
                :data="tableData"
                class="table-class"
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="28">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="组织类型"
                    min-width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="状态"
                    min-width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="操作">
                <template slot-scope="scope">
                    <span class="aolian-middle-margin-r" @click="handleEdit(scope.$index, scope.row)">
                        <el-button type="text">编辑</el-button>
                    </span>
                    <span @click="handleEdit(scope.$index, scope.row)">
                        <el-button type="text">禁用</el-button>
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagapart paga-part-block">
            <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, prev, pager, next,slot,sizes"
                    :total="400">
                <span class="">共100页</span>
            </el-pagination>
        </div>

        <!--弹框部分-->
        <el-dialog
                class="tankuang-part"
                title="提示"
                :visible.sync="dialogVisible"
                width="700px"
                :before-close="handleClose">
            <span slot="title" class="aolian-main-heading">
                {{changeWord}}组织类型
            </span>
            <div class="formPart">
                <div class="mb25"></div>

                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <div class="line-each-form mb40">
                        <el-form-item label="组织类型 : " prop="pass">
                            <el-input  placeholder="请输入组织类型" class="inp-350-36"  v-model="ruleForm.pass" autocomplete="off"></el-input><br/>
                            <span class="aolian-prompt-information ml30">支持英文、中文、数字，2-15数字</span>
                        </el-form-item>

                    </div>
                    <div class="line-each-for mb30">
                            <el-form-item label="状态 : " prop="resource">
                                <el-radio-group v-model="ruleForm.resource">
                                    <el-radio label="1">启用</el-radio>
                                    <el-radio label="2">禁用</el-radio>
                                </el-radio-group>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <span class="wearning-color">请输入密码</span>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                 <el-button @click="resetForm('ruleForm')">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "organization_type",
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error(' '));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                input:'',
                changeWord:'新增',
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: '',
                    resource:'1',
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                },
                dialogVisible: false,
                contentWidth:'1637px',
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                headerTableClass:this.$jsClass.headerTableClass,
                tableRowClass:this.$jsClass.tableRowClass,
                tableData: [{
                    date: '123',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            handleEdit(index,data){
                this.dialogVisible = true
                console.log(index,data)
                this.changeWord = '编辑'
            },
            sendMsg(){
                this.$post_json(
                    '/data2'
                ).then((res)=>{
                    console.log(res)
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            newOrganizationType(){
                this.dialogVisible = true
                this.changeWord = '新增'
            },
            handleClose() {
                this.dialogVisible = false
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            changeSizeContent(){
                if(document.body.offsetWidth<1920){
                    var deffValue = 1920 - document.body.offsetWidth
                    this.contentWidth = parseInt('1637px') - deffValue + 'px'
                    this.$refs.page3.style.width = this.contentWidth
                }
                if(document.body.offsetWidth == '1920'){
                    this.$refs.page3.style.width = '1637px'
                }
            }
        },
        mounted(){
            var that = this
            that.changeSizeContent()
            window.onresize = function () {
                that.changeSizeContent()
            }
        }
    }
</script>

<style scoped lang="less">
    .ml30{
        position: absolute;
        left: 56px;
        top: 30px;
    }
    .icon-add:before{
        color: transparent;
    }
    .icon-add-aolian{
        font-size: 30px;
    }
    .pagapart{
        margin-top: 40px;
    }
    .table-color{
    }
.wrap_page_3{
    width: 1637px;
    height: 857px;
    padding: 24px 15px 0px 16px;
    background: #fff;
    margin-left: 16px;
    box-sizing: border-box;
    background:rgba(255,255,255,1);
}
.xinzeng{
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    padding: 0 20px;
    height: 32px;
    background: #387EE8;
    color: #ffffff;
    border-radius: 2px;
}
.add-word{
    line-height: 20px;
}
.add-icon{
    font-size: 20px;
    margin-right: 5px;
}
</style>