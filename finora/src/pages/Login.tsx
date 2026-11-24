import styles from "./Login.module.css";

import { FiMail, FiLock, FiEye } from "react-icons/fi";

import { FaChartSimple } from "react-icons/fa6";

import financas from "../assets/financas.png";

function Login() {
  return (
    <main className={styles.container}>
      {/* Lado esquerdo */}

      <section className={styles.ladoEsquerdo}>
        <div className={styles.formaSuperior}></div>
        <div className={styles.formaInferior}></div>

        <div className={styles.conteudoEsquerdo}>
          <h1>Controle suas finanças de forma simples e prática</h1>

          <p>Acompanhe seus gastos, receitas e seu saldo em um só lugar.</p>

          <img
            src={financas}
            alt="Ilustração de controle financeiro"
            className={styles.ilustracao}
          />
        </div>
      </section>

      <section className={styles.ladoDireito}>
        <div className={styles.conteudoDireito}>
          <div className={styles.areaLogo}>
            <div className={styles.iconeLogo}>
              <FaChartSimple />
            </div>

            <div>
              <h2>Finora</h2>
              <p>Controle Financeiro</p>
            </div>
          </div>

          <h2 className={styles.titulo}>Entrar na sua conta</h2>

          {/* Formulário */}

          <form className={styles.formulario}>
            <div className={styles.grupoCampo}>
              <label htmlFor="email">E-mail</label>

              <div className={styles.campo}>
                <FiMail />

                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>

            <div className={styles.grupoCampo}>
              <label htmlFor="senha">Senha</label>

              <div className={styles.campo}>
                <FiLock />

                <input
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                />

                <FiEye />
              </div>
            </div>

            <button type="button" className={styles.esqueceuSenha}>
              Esqueceu sua senha?
            </button>

            <button type="button" className={styles.botaoEntrar}>
              Entrar
            </button>
          </form>

          {/* Criar conta */}

          <div className={styles.divisor}>
            <span></span>
            <p>Ainda não tem uma conta?</p>
            <span></span>
          </div>

          <button type="button" className={styles.criarConta}>
            Criar conta
          </button>
        </div>
      </section>
    </main>
  );
}

export default Login;
