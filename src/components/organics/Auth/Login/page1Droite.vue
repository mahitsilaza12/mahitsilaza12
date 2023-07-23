<template>
    <div>
        <h2 id="textLogin">
            <TextPage
                color="black"
                fontSize="30px"
                fontWeight="50px"
                lineHeight="20px"
                class="mt-5"
            >
                Login
            </TextPage>
        </h2>
        <p id="textLogin1">
            <TextPage
                color="black"
                fontSize="15px"
                fontWeight="50px"
            >
                Lorem ipsum dolor sit emet conseteur
            </TextPage>
        </p>
    </div>
    <div>
        <Buttom
            label="Facebook"
            color="#25362E"
            backgroundColor="#F6F6F6"
            id="facebookButtom"
        >
        <img id="image_facebook" src="../../../../assets/facebok.png" alt="">
        </Buttom>
        <Buttom
            label="Google"
            color="#25362E"
            backgroundColor="#F6F6F6"
            id="googleButtom"
            @click="login"
        >
        <img id="image_google" src="../../../../assets/google.png" alt="">
        </Buttom>
    </div>
    <div id="form">   
        <form @submit.prevent="Submit">
            <Label
                color="black"
                fontSize="14px"
                fontWeight="400"
                lineHeight="24px"
            >
                Email
            </Label>
            <Input
                typeInput="text"
                className="form-control {mx_empty: !email}"
                placeholderName="Enter Email here"
                modelName="email"
                :modelValue="username"
                @update:modelValue="username = $event"
                :class="loginErrorClass"
            />
            <br />
            <Label
                color="black"
                fontSize="14px"
                fontWeight="400"
                lineHeight="24px"
            >
                Password
            </Label>
            <Input
                typeInput="password"
                className="form-control {mx_empty: !password"
                placeholderName="Enter password here"
                :modelValue="password"
                @update:modelValue="password = $event"
                :class="loginErrorClass"
            />
            <Label
                id="labelForget"
                color="black"
                fontSize="14px"
                fontWeight="400"
                lineHeight="24px"
            >
               <b> Forget password?</b>
            </Label>
            <div>
                <Buttom
                    label="Login"
                    color="white"
                    backgroundColor="#5036CF"
                    id="Login"
                />
            </div>
        </form>
        <div>
            <Label
                color="black"
                fontSize="14px"
                fontWeight="400"
                lineHeight="24px"
                id="label_register"
            >
                Don't have an account?   
                <router-link  to="/register" style="color:black" class="text-decoration-none register">
                <b>
                    <b>Register</b>  
                </b>    
                </router-link>
            </Label>
        </div>
    </div>
</template>

<script >
import TextPage from '@/components/atoms/textPage/TextPage.vue'
import Input from '@/components/atoms/input/Input.vue'
import Label from '@/components/atoms/label/Label.vue'
import Buttom from '@/components/atoms/fButton/fButton.vue'
import { accountService } from "@/services"

export default {
    name:'page1Droite',
    data() {
        return {
            formInv: false,
            isLogin: false,
            username: '',
            password: '',
            loginError: false,
            loginErrorClass: '',
            usernameError: false,
            passwordError: false,
        }
    },
    components: {
        Input,
        TextPage,
        Label,
        Buttom
    },
    methods: {
        Submit() {
                const data = {
                    username: this.username,
                    password: this.password,
                };
                console.log(data)
                accountService
                    .login(data)
                    .then(res => {
                        res
                    })
                    .catch(err =>{
                        console.log(err)
                        this.loginError = true;
                        this.loginErrorClass = this.loginError ? 'is-invalid' : '';
                        this.passwordError = true;
                        this.usernameError = true;
                    })
            },
    }
}
</script>
<script setup>
import { googleTokenLogin } from "vue3-google-login"
    const login = () => {
        googleTokenLogin().then((response) => {
            console.log("Handle the response", response)
    })
}
</script>

<style scoped>
small {
    color: red;
    display: none;
}
#textLogin {
    margin-top: 5rem;
    color: black;
}
#googleButtom {
    margin-left: 10px;
}
#form {
    margin-top: 5%;
}
#labelForget {
    margin-left: 70%;
    margin-top: 5%;
}
#Login {
    width: 100%;
    height: 45px;
    margin-top: 1%;
    border-radius: 50px;
}
#label_register {
    width: 100%;
    height: 45px;
    margin-top: 5%;
    margin-left: 28%;
}
#recaptcha {
    margin-top: 1%;
}
.mx_empty ~ small {
    color: red;
    display: none;
}
.mx_formInv .mx_empty ~ small{
    display: block;
}
.mx_formInv .mx_recaptcha_failed ~ small {
    display: block;
}
#googleButtom {
    border-color: transparent;
    font-size: 13px;
    font-family:Verdana, Geneva, Tahoma, sans-serif ;
    padding-right: 33px;
    padding-top: 8px;
    border-radius: 5px;
}
#facebookButtom {
    border-color: transparent;
    font-family:Verdana, Geneva, Tahoma, sans-serif ;
    font-size: 13px;
    padding-right: 27px;
    padding-bottom: 1px;
    border-radius: 5px;
}
#image_google {
    width: 25px;
    margin-top: -4px;
    margin-right: 4px;
}
#image_facebook {
    width: 25px;
    margin-top: -4px;
    margin-right: 4px;
}
.is-invalid {
border: 1px solid red;
}
.error {
    color: red;
    font-size: 12px
}
</style>