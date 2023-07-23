import router from "@/router"

export function authGuard(to) {
    // si j'ai token dans le localStorage jai de l'access
    let token = localStorage.getItem('token')
    console.log(token)

    if(token) {
        return true
    }

    router.push('/login')
}