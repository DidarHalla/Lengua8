import "./style/Body.css";

export function Body() {
  return (
    <>
      <div className="wrapper-body-blocks">
        <div className="text-block">
          <span className="span-big-text">Онлайн-языковой курс</span>
          <span>
            Изучайте языки по привычке с помощью увлекательных уроков размером с
            кусочек! Запишитесь на бесплатные онлайн-языковые курсы на Lengua8,
            чтообы улучшить свои навыки
          </span>
        </div>
        <div>
          <img
            className="img-panda"
            src="https://cdn.pixabay.com/photo/2023/05/07/04/47/panda-7975538_640.png"
            alt=""
          />
          <input
            className="try-free"
            value="Попробуйте бесплатно"
            type="button"
          />
        </div>
      </div>
      <div className="wrapper-body-blocks">
        <div className="text-block">
          <span className="span-big-text">
            Курсы для приложения по изучению языка
          </span>
          <span>
            это специально разработанные программы обучения, предлагаемые в
            рамках приложения, чтобы помочь пользователям освоить определенный
            язык. Они могут включать в себя различные уровни сложности, начиная
            с основных основ языка и постепенно продвигаясь к более сложным
            темам и концепциям
          </span>
        </div>
        <img
          className="img-panda"
          src="https://cdn.pixabay.com/photo/2023/05/07/04/47/panda-7975538_640.png"
          alt=""
        />
      </div>
      <div className="wrapper-body-blocks">
        <img
          className="img-panda"
          src="https://cdn.pixabay.com/photo/2023/05/07/04/47/panda-7975538_640.png"
          alt=""
        />
        <div className="text-block">
          <span className="span-big-text">
            Игры для приложения по изучению языка
          </span>
          <span>
            это интерактивные развлекательные задания или активности,
            разработанные для помощи пользователям в улучшении своих языковых
            навыков. Они предлагают игровой подход к обучению, предоставляя
            пользователям возможность практиковать и закреплять свои знания
            через разнообразные игровые задачи и упражнения.
          </span>
        </div>
      </div>
      <div className="wrapper-body-blocks">
        <div className="text-block">
          <span className="span-big-text">
            Библиотека для приложения по изучению языка
          </span>
          <span>
            коллекция ресурсов, материалов и контента, предоставляемых в рамках
            приложения для помощи пользователям в изучении языка.
          </span>
        </div>
        <img
          className="img-panda"
          src="https://cdn.pixabay.com/photo/2023/05/07/04/47/panda-7975538_640.png"
          alt=""
        />
      </div>
      <div id="wrapper-main-language-and-icons" className="wrapper-body-blocks">
        <div>
          <span className="main-language-in-platform">
            Основные языки, которые изучаются в приложении:
          </span>
        </div>
        <div className="wrapper-body-main-icons">
          <div className="body-main-icons" style={{
            backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/197/197374.png)"
          }}></div>
          <div className="body-main-icons" style={{
            backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png)"
          }}></div>
          <div className="body-main-icons" style={{
            backgroundImage: "url(https://cdn.countryflags.com/thumbs/spain/flag-round-250.png)"
          }}></div>
          <div className="body-main-icons" style={{
            backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/323/323301.png)"
          }}></div>
          <div className="body-main-icons" style={{
            backgroundImage: "url(https://cdn.countryflags.com/thumbs/turkey/flag-round-250.png)"
          }}></div>
          <div className="body-main-icons" style={{
            backgroundImage: "url(https://cdn.countryflags.com/thumbs/russia/flag-round-250.png)"
          }}></div>
          <div className="body-main-icons" style={{
            backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/197/197375.png)"
          }}></div>
          <div className="body-main-icons" style={{
            border: "1px solid grey",
            backgroundImage: "url(https://www.countryflags.com/wp-content/uploads/japan-flag-png-xl.png)"
          }}></div>
          <div className="body-main-icons" style={{
            backgroundImage: "url(https://www.countryflags.com/wp-content/uploads/italy-flag-png-xl.png)"
          }}></div>
          <div className="body-main-icons" style={{
            backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/197/197560.png)"
          }}></div>
        </div>
      </div>
      <div id="lengua8-it-is" className="wrapper-body-blocks">
        <div>
          <span className="span-big-text">Lengua8 - это...</span>
        </div>
        <div className="text-of-lengua8-it-is">
          <div className="text-in-lengua8">
            <span className="span-middle-text">
              1 - Предоставление структурированных курсов
            </span>
            <span>
              Приложение для изучения языков предлагает структурированные курсы,
              которые позволяют пользователям последовательно изучать язык от
              базовых до более сложных уровней. Это помогает пользователям
              понять логику языка, освоить грамматику, улучшить свой словарный
              запас и развить навыки говорения, чтения и понимания на слух.
            </span>
          </div>
          <div className="div-margen-top text-in-lengua8">
            <span className="span-middle-text">
              2 - Интерактивные упражнения и задания
            </span>
            <span>
              Приложение предлагает разнообразные интерактивные упражнения и
              задания, которые способствуют активному и практическому обучению
              языку. Игровые задания, вопросы-ответы, составление предложений и
              другие упражнения помогают пользователю закрепить свои знания и
              навыки.
            </span>
          </div>
          <div className="text-in-lengua8">
            <span className="span-middle-text">
              3 - Словарный запас и грамматика
            </span>
            <span>
              Приложение предлагает доступ к обширной базе данных слов и фраз, а
              также грамматическим правилам. Это помогает пользователям
              расширить свой словарный запас, изучить правильное использование
              слов и фраз, а также понять основы грамматики языка.
            </span>
          </div>
          <div className="div-margen-top text-in-lengua8">
            <span className="span-middle-text">
              4 - Проверка и коррекция ошибок
            </span>
            <span>
              Приложение предлагает функцию проверки и коррекции ошибок
              пользователя в письменной и устной форме. Такой инструмент
              позволяет пользователям улучшать свои навыки и избегать повторения
              ошибок, а также получать более точную обратную связь.
            </span>
          </div>
        </div>
      </div>
      <div className="wrapper-body-blocks">
        <div className="text-block text-block-penultimate-child">
          <span className="span-big-text">
            Скачивайте приложение прямо сейчас!
          </span>
          <span>
            Изучайте языки по привычке с помощью увлекательных уроков размером с
            кусочек! Запишитесь на бесплатные онлайн-языковые курсы на Lengua8,
            чтообы улучшить свои навыки
          </span>
        </div>
        <div>
          <div className="phone-interface"></div>
          <div className="wrapper-button-ios-android">
            <input className="button-ios" value="IOS" type="button" />
            <input className="button-android" value="ANDROID" type="button" />
          </div>
        </div>
      </div>
      <div className="wrapper-body-blocks wrapper-body-last-blocks">
        <span className="span-big-text">Вопросы и ответы</span>
        <div>
          <span>1</span>
          <span>
            Вопрос на который мне срочно нужен ответ, иначе я не скачаю ваше
            приложение и вы разоритесь!
          </span>
        </div>
        <div>
          <span>2</span>
          <span>
            Вопрос на который мне срочно нужен ответ, иначе я не скачаю ваше
            приложение и вы разоритесь!
          </span>
        </div>
        <div>
          <span>3</span>
          <span>
            Вопрос на который мне срочно нужен ответ, иначе я не скачаю ваше
            приложение и вы разоритесь!
          </span>
        </div>
        <div>
          <span>4</span>
          <span>
            Вопрос на который мне срочно нужен ответ, иначе я не скачаю ваше
            приложение и вы разоритесь!
          </span>
        </div>
      </div>
    </>
  );
}
