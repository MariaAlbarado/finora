import styles from "./Cadastro.module.css";
import financas from "../assets/financas.png";
import { FaChartSimple } from "react-icons/fa6";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className={styles.pagina}>
      <main className={styles.containerPrincipal}>
        <section className={styles.ladoEsquerdo}>
          <h1>Transforme sua vida financeira</h1>

          <p>
            Crie sua conta e tenha o controle dos seus gastos, receitas e
            objetivos financeiros.
          </p>

          <img
            src={financas}
            alt="Ilustração de controle financeiro"
            className={styles.imagem}
          />
        </section>

        <section className={styles.ladoDireito}>
          <div className={styles.logo}>
            <FaChartSimple className={styles.iconeLogo} />

            <div>
              <h2>AlbarFin</h2>
              <p>Controle Financeiro</p>
            </div>
          </div>

          <h1>Crie sua conta</h1>

          <p className={styles.aviso}>Todos os campos são obrigatórios.</p>

          <form
            className={styles.formulario}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={styles.campo}>
              <label htmlFor="nome">
                Nome completo <span>*</span>
              </label>

              <div className={styles.inputContainer}>
                <FiUser className={styles.iconeInput} />

                <input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            <div className={styles.campo}>
              <label htmlFor="email">
                E-mail <span>*</span>
              </label>

              <div className={styles.inputContainer}>
                <FiMail className={styles.iconeInput} />

                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className={styles.campo}>
              <label htmlFor="senha">
                Senha <span>*</span>
              </label>

              <div className={styles.inputContainer}>
                <FiLock className={styles.iconeInput} />

                <input
                  id="senha"
                  type="password"
                  placeholder="Crie sua senha"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            <div className={styles.campo}>
              <label htmlFor="confirmarSenha">
                Confirmar senha <span>*</span>
              </label>

              <div className={styles.inputContainer}>
                <FiLock className={styles.iconeInput} />

                <input
                  id="confirmarSenha"
                  type="password"
                  placeholder="Confirme sua senha"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.botaoCadastro}>
              Criar conta
            </button>
          </form>

          <div className={styles.divisor}>
            <span>Já possui uma conta?</span>
          </div>

          <Link to="/" className={styles.linkLogin}>
            Entrar
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Cadastro;
