<template>
  <footer>
    <div class="footer_block container  my-5">
      <div class="all_footer d-flex flex-wrap my-4">
        <div class="footer_info col-md-6 col-xs-12 col-sm-6 p-0 my-3">
          <div class="footer_wrapper mr-0 mr-md-5">
            <div class="support_text mb-3 ">
              Подать заявку на поддержку или разработку сайта
            </div>
            <div class="support_text2 pb-2 pb-md-5">Вам нужно доработать функционал готового
              Drupal-сайта
              или создать новый? Оценить стоимость разработки под ваши запросы? Просто
              свяжитесь с нами, и наш менеджер поможет вам!
            </div>
            <div class="contacts pt-2 pt-md-5">
              <a href="tel:">+8(918)641-70-**</a> <br>
              <a href="mailto:">mur@meow.kot</a>
            </div>
          </div>
        </div>
        <div class="footer_form col-md-6 col-xs-12 col-sm-6 p-0 my-3">
          <div class="footer_wrapper ml-0 ml-md-5">
            <form id="popupForm" class="popupForm d-flex flex-column align-items-stretch"
                  accept-charset="UTF-8">
              <label>
                <input class="form_elem form_name" id="formName" name="field_name"
                       placeholder="Ваше имя" required>
              </label>
              <label>
                <input class="form_elem form_number" id="formName" name="field_name"
                       placeholder="Ваш номер" required>
              </label>
              <label>
                <input class="form_elem form_email" id="formEmail" name="field_email" type="email"
                       placeholder="Ваш email" required>
              </label>
              <label>
                                <textarea class="form_elem form_message" id="formMessage" name="field_review"
                                          placeholder="Ваш коментарий" rows="3"></textarea>
              </label>
              <label>
                <input class="form_check" id="formCheck" name="field_check" type="checkbox">
                Отправляя заявку, я
                соглашаюсь на <a href="/privacy-policy">обработку моих персональных данных</a>
              </label>
              <input class="btn" type="submit" value="Отправить">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="underline">
      <div class="container">
        <div class="lower_part">
          <p>Copyright &copy; Initlab, LLC <br> Drupal is a registered trademark of Dries Buytaert.</p>
        </div>
      </div>
    </div>
    <img class="footer_paw paw1" src="../img/right_paw.png" alt="paw" />
    <img class="footer_paw paw2" src="../img/right_paw.png" alt="paw" />
  </footer>
</template>

<script>
export default {

}
</script>

<style>
/*-------------------FOOTER-----------------------*/

footer {
  position: relative;
  background-color: #394047;
  color: #ffffff;
  overflow: hidden;
  z-index: 2;
}

.all_footer {
  position: relative;
  z-index: 10;
}

footer a {
  color: white;
}

.lower_part {
  padding-bottom: 50px;
  padding-top: 30px;
}

.underline {
  position: relative;
  border-top: 2px solid gray;
  margin-top: 10px;
  z-index: 10;
}

input {
  background: transparent;
  border: none;
}

.footer_paw {
  position: absolute;
  transform: rotate(-40deg);
  z-index: 3;
}

footer .paw1 {
  top: -10%;
  left: 50%;
}

footer .paw2 {
  bottom: -10%;
  right: 5%;
  scale: 1.4;
}


/* form */
form .btn {
  background-color: coral;
  color: black;
}

form .btn:hover {
  background-color: transparent;
  color: rgb(255, 255, 255);
}

form a {
  color: coral;
}

.form_elem {
  padding: 13px 15px;
  color: white;
  position: relative;
  width: 100%;
  border-style: solid;
  border-color: #151618;
  border-radius: 5px;
  border-width: 2px;
  background-color: transparent;
}
</style>