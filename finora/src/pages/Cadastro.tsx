import styles from "./Cadastro.module.css";
import financas from "../assets/financas.png";
import { FaChartSimple } from "react-icons/fa6";

function Cadastro() {
  return (
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
      </section>
    </main>
  );
}

export default Cadastro;
