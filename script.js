// Tempo das animações
const ANIM_TIME = 600;

// Função ao clicar em "COMEÇAR"
function expandLogin() {
    const loginBox = document.getElementById("loginBox");
    const imageBox = document.getElementById("imageBox");
    const title = document.getElementById("titleLogin");
    const btnStart = document.getElementById("btnStart");
    
    // Fade out do título e botão
    if (title) {
        title.classList.remove("fade-in","show");
        title.classList.add("fade-out");
    }
    if (btnStart) {
        btnStart.classList.remove("fade-in","show");
        btnStart.classList.add("fade-out");
    }
    
    // Expande layout
    setTimeout(() => {
        loginBox.classList.add("expanded");
        imageBox.classList.add("shrink");
        
        // Substitui conteúdo pelo formulário
        setTimeout(() => {
            loginBox.innerHTML = `
            
            <!-- Botão voltar -->
            <button class="btn-back animado fade-in" onclick="goBack()">
            <i class="bi bi-arrow-left"></i>
            </button>
            
            <!-- Formulário -->
            <form class="login-form fade-in flex-grow-1 d-flex flex-column justify-content-start">
            <h2 style="text-align:center; color:#fff;">LOGIN</h2>
            
            <!-- Campo email -->
            <div class="form-group">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control animado" id="email" placeholder="Digite seu e-mail">
            </div>
            
            <!-- Campo senha -->
            <div class="form-group">
            <label for="senha" class="form-label">Senha</label>
            <div class="password-wrapper">
            <input type="password" class="form-control animado" id="senha" placeholder="Digite sua senha">
            <button type="button" class="btn-eye animado" onclick="toggleSenha()">
            <i id="iconSenha" class="bi bi-eye-slash"></i>
            </button>
            </div>
            </div>
            
            <!-- Botão entrar -->
            <button type="submit" class="btn btn-login animado">ENTRAR</button>
            
            <!-- Link esqueceu senha sem mostrar # no canto -->
            <span class="text-secondary animado" onclick="alert('Enviaremos um e-mail com instruções para recuperar sua senha.')">
            Esqueceu a senha?
            </span>
            </form>
            `;
            
            const form = loginBox.querySelector(".login-form");
            const backBtn = loginBox.querySelector(".btn-back");
            
            // Fade in do formulário
            setTimeout(() => {
                form.classList.add("show");
                backBtn.classList.add("show");
            }, 50);
        
        }, ANIM_TIME);
    }, ANIM_TIME);
}

// Função voltar ao estado inicial
function goBack() {
    const loginBox = document.getElementById("loginBox");
    const imageBox = document.getElementById("imageBox");
    const form = loginBox.querySelector(".login-form");
    const backBtn = loginBox.querySelector(".btn-back");
    
    if (form && backBtn) {
        
        // Fade out
        form.classList.remove("show");
        backBtn.classList.remove("show");
        form.classList.add("fade-out");
        backBtn.classList.add("fade-out");
        
        setTimeout(() => {
            loginBox.classList.remove("expanded");
            imageBox.classList.remove("shrink");
            
            // Volta ao layout inicial
            setTimeout(() => {
                loginBox.innerHTML = `
                <h2 id="titleLogin" class="fade-in">FAZER<br>LOGIN</h2>
                <button id="btnStart" class="btn-expand animado fade-in" onclick="expandLogin()">COMEÇAR</button>
                `;
                
                const title = document.getElementById("titleLogin");
                const btnStart = document.getElementById("btnStart");
                
                setTimeout(() => {
                    title.classList.add("show");
                    btnStart.classList.add("show");
                }, 50);
            
            }, ANIM_TIME);
        }, ANIM_TIME);
    }
}

// Mostrar / ocultar senha
function toggleSenha() {
    const senhaInput = document.getElementById("senha");
    const icon = document.getElementById("iconSenha");
    
    if (senhaInput && icon) {
        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            icon.classList.remove("bi-eye-slash");
            icon.classList.add("bi-eye");
        } else {
            senhaInput.type = "password";
            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");
        }
    }
}
