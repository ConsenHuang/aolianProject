<template>
    <div class="wrap_page_3" ref="page3">
        <div class="wrap-authentication">
            <div class="authentication-header aolian-middle-margin-b">
                <span class="left">用户认证配置</span>
                <span class="right right-word">收起配置</span>
            </div>
            <div class="content-part">
                <el-form label-width="180px" :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                    <el-form-item label="用户认证方式配置 ：" prop="name">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <div class="mb40">
                        <el-form-item class="" label="多因子认证方式配置 ：" prop="name">
                            <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="线上品牌商赞助"></el-radio>
                                <el-radio label="线下场地免费"></el-radio>
                            </el-radio-group>
                            <br/>
                            <span class="tishi-word aolian-prompt-information">使用扫码认证、UKEY认证、短信验证码认证登录时不需要多因子认证</span>
                        </el-form-item>
                    </div>
                    <el-form-item label="活动时间" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送" prop="delivery">
                        <el-switch v-model="ruleForm.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "organization_type",
        data() {
            return {
                labelPosition:'right',
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        methods:{
            changeSizeContent(){
                if(document.body.offsetWidth<1920){
                    var deffValue = 1920 - document.body.offsetWidth
                    this.contentWidth = parseInt('1637px') - deffValue + 'px'
                    this.$refs.page3.style.width = this.contentWidth
                }
                if(document.body.offsetWidth == '1920'){
                    this.$refs.page3.style.width = '1637px'
                }
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
            }
        },
        mounted(){
            var that = this
            that.changeSizeContent()
            window.onresize = function () {
                that.changeSizeContent()
            }
        },
    }
</script>

<style scoped lang="less">
    .tishi-word{
        position: absolute;
        left: 183px;
        top: 24px;
    }
    .right-word{
        color: @normalColor;
    }
    .wrap_page_3{
        width: 1637px;
        height: 857px;
        padding: 24px 15px 0px 16px;
        background: @whiteColor;
        margin-left: 16px;
        box-sizing: border-box;
        background:rgba(255,255,255,1);
    }
    .authentication-header{
        font-size: 14px;
        height: 46px;
        width: 100%;
        border-bottom: 1px solid @cutLineColor;
        line-height: 46px;
    }
    .wrap-authentication{
        text-align: left;
        margin-left: 25px;
        width: 74%;
    }
</style>