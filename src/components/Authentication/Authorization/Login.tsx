import css from "./Login.module.scss";

const Login = () => {
  return (
    <div className="container">
      <div className={css.main_block}>
        <div className={css.block}>
          <h2>Войти</h2>
          <div className={css.gmail_adres}>
            <input type="text" placeholder="Электронная почта" />
          </div>
          <div className={css.gmail_password}>
            <input type="password" placeholder="Пароль" />
          </div>
          <a href="#">Забыли пароль?</a>
          <div className={css.agree}>
            <input type="checkbox" name="galka" id="1" />
            <p>Я принимаю условия использования сервиса</p>
          </div>
          <button>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
