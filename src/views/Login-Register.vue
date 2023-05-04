<template>
    <div class="container">
        <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Моля влезте в акаунта си</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" >
            <label for="inputPassword" class="sr-only">Парола</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password">
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Запомни ме
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Вход</button>
        </form>
        
    </div>
</template>

<style scoped>
.container {
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>