<template>
    <div>
        <h2 id="textLogin">
            <TextPage
                color="black"
                fontSize="30px"
                fontWeight="50px"
                lineHeight="20px"
            >
                Register
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
                className="form-control"
                placeholderName="Enter Email here"
                modelName="email"
                :modelValue="email"
                @update:modelValue="email = $event"
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
                className="form-control"
                placeholderName="Enter password here"
                modelName="password"
                :modelValue="password"
                @update:modelValue="password = $event"
            />
            <div>
                <Buttom
                    label="Sign Up"
                    color="white"
                    backgroundColor="#5036CF"
                    id="Register"
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
                Already have an account? <b>Login</b>    
            </Label>
        </div>
    </div>
</template>

<script>
import TextPage from '@/components/atoms/textPage/TextPage.vue'
import Input from '@/components/atoms/input/Input.vue'
import Label from '@/components/atoms/label/Label.vue'
import Buttom from '@/components/atoms/fButton/fButton.vue'
import { VueRecaptcha } from 'vue-recaptcha'
import { accountService } from "@/services"

export default {
    name:'page1Droite',
    data() {
        return {
            email: null,
            password: null,
        }
    },
    components: {
        Input,
        TextPage,
        Label,
        Buttom,
        VueRecaptcha
    },
    methods: {
        Submit() {
            const data = {
                email: this.email,
                password: this.password,
            }
            console.log(data)
            accountService
                .register(data)
                .then(res =>{
                    res.data
                }) 
                .catch(err => { 
                    console.log(err)
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
#Register {
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
</style>