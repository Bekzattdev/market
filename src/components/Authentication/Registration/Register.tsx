import css from "./Register.module.scss";

const Register = () => {
  return (
    <div className="container">
      <div className={css.main_block}>
        <div className={css.block}>
          <h2>Регистрация</h2>
          <div className={css.user_name}>
            <input type="text" placeholder="Имя" />
          </div>
          <div className={css.user_lastName}>
            <input type="text" placeholder="Фамилия" />
          </div>
          <div className={css.gmail_adres}>
            <input type="text" placeholder="Электронная почта" />
          </div>
          <div className={css.gmail_password}>
            <input type="password" placeholder="Придумайте пароль" />
          </div>
          <div className={css.agree}>
            <input type="checkbox" name="galka" id="1" />
            <p>Я принимаю условия использования сервиса</p>
          </div>

          <button>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
