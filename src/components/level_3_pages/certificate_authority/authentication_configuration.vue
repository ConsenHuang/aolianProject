<template>
    <div class="wrap_page_3" ref="page3">
        <div class="wrap-authentication">
            <div class="authentication-header aolian-bigm-margin-b">
                <span class="left" @click="send">用户认证配置</span>
                <div class="right poiter" @click="openUserConfig">
                    <span class="right right-word">收起配置</span>
                    <img :class="{'jiantouClassClick':isOpenUserConfig}" class="jiantouClass" src="../../../assets/svg/jiantou.svg"/>
                </div>
            </div>
            <el-collapse-transition>
                <div v-show="isOpenUserConfig">
            <div class="content-part">
                <el-form label-width="180px" :label-position="labelPosition" :model="ruleFormUser" ref="ruleFormUser"  class="demo-ruleForm">
                    <div style="margin-bottom: 72px;">
                        <!--用户认证方式配置-->
                        <el-form-item label="用户认证方式配置 ：" prop="name">
                            <el-checkbox-group v-model="ruleFormUser.userLoginType" @change="getChecks">
                                <el-checkbox label="1" name="type">账号密码认证</el-checkbox>
                                <el-checkbox label="2" name="type">短信验证码认证</el-checkbox>
                                <el-checkbox label="3" name="type">扫码认证</el-checkbox>
                                <el-checkbox label="4" name="type">UKEY认证</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <!--管理员认证方式配置-->
                        <el-form-item label="管理员认证方式配置 ：" prop="name">
                            <el-checkbox-group v-model="ruleFormUser.adminLoginType" @change="getChecks">
                                <el-checkbox label="1" name="type">账号密码认证</el-checkbox>
                                <el-checkbox label="2" name="type">短信验证码认证</el-checkbox>
                                <el-checkbox label="3" name="type">扫码认证</el-checkbox>
                                <el-checkbox label="4" name="type">UKEY认证</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>


                        <!--多因子认证方式配置-->
                        <div class="mb30">
                            <el-form-item class="" label="多因子认证方式配置 ：" prop="name">
                                <el-radio-group @change="getMultipleFactor" v-model="ruleFormUser.loginFactor">
                                    <el-radio label="1">短信验证码认证</el-radio>
                                    <el-radio label="2">图形验证码认证</el-radio>
                                </el-radio-group>
                                <br/>
                                <span class="tishi-word aolian-prompt-information">使用扫码认证、UKEY认证、短信验证码认证登录时不需要多因子认证</span>
                            </el-form-item>
                        </div>


                        <el-form-item class="" label="规则配置 ：" prop="name">
                            <div class="clearfix aolian-bigm-margin-b">
                                <span class="form-word-aolian left aolian-small-margin-r">身份认证失败</span>
                                <el-input class="left inp-96-36 aolian-small-margin-r" v-model="ruleFormUser.loginRule.maxFactor" placeholder=""></el-input>
                                <span class="form-word-aolian left aolian-small-margin-r">次（大于等于0的整数），开启二次认证</span>
                            </div>
                            <div class="clearfix aolian-bigm-margin-b" style="margin-left: 180px;">
                                <span class="form-word-aolian left aolian-small-margin-r">身份认证失败</span>
                                <el-input class="left inp-96-36 aolian-small-margin-r" v-model="ruleFormUser.loginRule.maxLock" placeholder=""></el-input>
                                <span class="form-word-aolian left aolian-small-margin-r">次（1~20之间），账户锁定</span>
                                <el-input class="left inp-96-36 aolian-small-margin-r" v-model="ruleFormUser.loginRule.lockExpire" placeholder=""></el-input>
                                <span class="form-word-aolian left aolian-small-margin-r">分钟（大于等于20）</span>
                            </div>
                        </el-form-item>


                        <!--用户登录控制-->
                        <el-form-item class="mb30 clearfix" label="用户登录控制 ：" prop="name">
                            <div class="clearfix aolian-bigm-margin-b">
                                <span class="form-word-aolian left aolian-small-margin-r">允许登录时间    ：   </span>
                                <el-select class="left inp-96-36 aolian-small-margin-r" v-model="ruleFormUser.userLoginLimit.allowBeginTime" placeholder="请选择">
                                    <el-option
                                            v-for="item in timeOption"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <span class="left aolian-small-margin-r">至</span>
                                <el-select class="left inp-96-36 aolian-small-margin-r" v-model="ruleFormUser.userLoginLimit.allowEndTime" placeholder="请选择">
                                    <el-option
                                            v-for="item in timeOption"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <span class="tishi-word aolian-prompt-information aolian-small-margin-t ">结束时间包括 59分59秒，例：23点包括 23:59:59</span>
                            </div>
                            <div class="clearfix aolian-bigm-margin-b" style="margin-left: 180px;margin-top: 44px;">
                                <span class="form-word-aolian left aolian-small-margin-r">允许登录IP    ：   </span>
                                <el-input style="width: 520px" class="left inp-96-36 aolian-small-margin-r" v-model="ruleFormUser.userLoginLimit.allowIp" placeholder=""></el-input>
                                <span class="tishi-word2 aolian-prompt-information aolian-small-margin-t ">请输入正确的IP地址,为空时不限制</span>
                            </div>
                        </el-form-item>

                        <!--管理员登录控制-->
                        <el-form-item class="mb30 aolian-big-margin-t" label="管理员登录控制 ：" prop="name">
                            <div class="clearfix aolian-bigm-margin-b">
                                <span class="form-word-aolian left aolian-small-margin-r">允许登录时间    ：   </span>
                                <el-select class="left inp-96-36 aolian-small-margin-r" v-model="ruleFormUser.adminLoginLimit.allowBeginTime" placeholder="请选择">
                                    <el-option
                                            v-for="item in timeOption"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <span class="left aolian-small-margin-r">至</span>
                                <el-select class="left inp-96-36 aolian-small-margin-r" v-model="ruleFormUser.adminLoginLimit.allowEndTime" placeholder="请选择">
                                    <el-option
                                            v-for="item in timeOption"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <span class="tishi-word aolian-prompt-information aolian-small-margin-t ">结束时间包括 59分59秒，例：23点包括 23:59:59</span>
                            </div>
                            <div class="clearfix aolian-bigm-margin-b" style="margin-left: 180px;margin-top: 44px;">
                                <span class="form-word-aolian left aolian-small-margin-r">允许登录IP    ：   </span>
                                <el-input style="width: 520px" class="left inp-96-36 aolian-small-margin-r" v-model="ruleFormUser.adminLoginLimit.allowIp" placeholder=""></el-input>
                                <span class="tishi-word2 aolian-prompt-information aolian-small-margin-t ">请输入正确的IP地址,为空时不限制</span>
                            </div>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
                </div>
            </el-collapse-transition>
        </div>
        <div class="baocunPart">
            <el-button class="btnSave" type="primary" @click="submitForm('ruleForm')">保存</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "organization_type",
        data() {
            return {
                value:"",
                timeOption:[
                ],
                isOpenAdminConfig:true,
                isOpenUserConfig:true,
                value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                value2: '',
                labelPosition:'right',
                input:'',
                ruleFormUser: {
                    loginRule:{
                        "maxFactor": "",
                        "maxLock": "",
                        "lockExpire": ""
                    },
                    userLoginLimit:{
                        "allowBeginTime": "",
                        "allowEndTime": "",
                        "allowIp": ""
                    },
                    adminLoginLimit:{
                        "allowBeginTime": "",
                        "allowEndTime": "",
                        "allowIp": ""
                    },
                    loginFactor:'1',
                    userLoginType: ['1','2','3','4'],
                    adminLoginType: ['1','2','3','4']
                },
                rules: {
                    name: [
                        {  message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        {  message: '请选择活动区域', trigger: 'change' }
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
                        { message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        methods:{
            initTimeForm(){
                for(var i=0;i<24;i++){
                    var item = {}
                    item.value = i
                    item.label = i
                    this.timeOption.push(item)
                }
            },
            openUserConfig(){
                this.isOpenUserConfig = !this.isOpenUserConfig
            },
            openAdminConfig(){
                console.log('出来吗')
                this.isOpenAdminConfig = !this.isOpenAdminConfig
            },
            getMultipleFactor(data){
                console.log(data)
            },
            getChecks(data){
                console.log(data)
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
            },
            submitForm(formName) {
                // this.$refs[formName].validate((valid) => {
                //     if (valid) {
                //         alert('submit!');
                //     } else {
                //         console.log('error submit!!');
                //         return false;
                //     }
                // });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            send(){
                console.log(this.ruleFormUser)
                console.log()
                // this.$post_json(
                //     // GET 开发完成 https://192.168.1.70:8443/platform_auth/config/login_type
                //     '/platform_auth/config/login_save',
                //     JSON.stringify(
                //         {
                //             userLoginType:this.ruleFormUser.userLoginType,
                //             adminLoginType:this.ruleFormUser.adminLoginType,
                //             loginFactor:this.ruleFormUser.loginFactor,
                //             loginRule:{
                //                 "maxFactor": this.ruleFormUser.maxFactor,
                //                 "maxLock": this.ruleFormUser.maxLock,
                //                 "lockExpire": this.ruleFormUser.lockExpire
                //             },
                //             userLoginLimit:{
                //                 "allowBeginTime": this.ruleFormUser.userLoginLimit.allowBeginTime,
                //                 "allowEndTime": this.ruleFormUser.userLoginLimit.allowEndTime,
                //                 "allowIp": this.ruleFormUser.userLoginLimit.allowIp
                //             },
                //             adminLoginLimit:{
                //                 "allowBeginTime": this.ruleFormUser.adminLoginLimit.allowBeginTime,
                //                 "allowEndTime": this.ruleFormUser.adminLoginLimit.allowEndTime,
                //                 "allowIp": this.ruleFormUser.adminLoginLimit.allowIp
                //             }
                //         }
                //     )
                // ).then((res)=>{
                //     console.log(res)
                // }).catch(e => {
                //
                // })
            }
        },
        mounted(){
            var that = this
            that.changeSizeContent()
            window.onresize = function () {
                that.changeSizeContent()
            }
        },
        created(){
            this.initTimeForm()
        }
    }
</script>

<style scoped lang="less">
    .jiantouClass{
        transition: 0.5s;
        width: 10px;
        height: 9px;
        margin-right: 6px;
        font-size: 12px;
        color: @normalColor;
    }
    .jiantouClassClick{
        transform: rotate(180deg);
    }
    .btnSave{
        margin-top: 14px;
    }
    .baocunPart{
        vertical-align: middle;
        text-align: left;
        height: 56px;
        background: #F5F7FA;
    }
    .tishi-word{
        position: absolute;
        left: 183px;
        top: 24px;
    }
    .tishi-word2{
        position: absolute;
        left: 183px;
        top: 110px;
    }
    .right-word{
        color: @normalColor;
    }
    .wrap_page_3{
        width: 1637px;
        padding: 24px 15px 95px 16px;
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