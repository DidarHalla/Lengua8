import "./style/Body.css";
import Frame from "../assets/Frame.png";
import Group_1049 from "../assets/Group 1049.png";
import image310 from "../assets/image 310.png";
import image4google from "../assets/image 4google.png";
import IMG_350615 from "../assets/IMG_3506 15.png";
import IMG_350616 from "../assets/IMG_3506 16.png";
import IMG_350617 from "../assets/IMG_3506 17.png";
import IMG_350618 from "../assets/IMG_3506 18 (1).png";
import Курсы12 from "../assets/Курсы 12.png";
import Курсы13 from "../assets/Курсы 13.png";
import Курсы14 from "../assets/Курсы 14.png";

export function Body() {
  return (
    <>
      <div className="wrapper-body-blocks">
        <div className="double-img-panda-mobile">
          <img src={Frame} alt="phone" />
        </div>
        <div className="text-block">
          <span className="span-big-text">Приложение для изучения языков</span>
          <span>
            Изучайте языки с нами
            <div className="speaking-club">
              <li>игры</li>
              <li>библиотека</li>
              <li>Speaking club</li>
            </div>
          </span>
          <div className="wrapper-button-ios-android img-download-top">
            <img id="dowland" src={image310} alt="" />
            <img src={image4google} alt="" />
          </div>
        </div>
        <div>
          <img className="img-panda" src={Frame} alt="phone" />
        </div>
      </div>
      <div className="wrapper-body-blocks">
        <img className="img-panda-mobile" src={Курсы12} alt="" />
        <div className="text-block">
          <span className="span-big-text">Курсы</span>
          <span>
            это специально разработанные программы обучения, предлагаемые в
            рамках приложения, чтобы помочь пользователям освоить определенный
            язык. Они могут включать в себя различные уровни сложности, начиная
            с основных основ языка и постепенно продвигаясь к более сложным
            темам и концепциям
          </span>
        </div>
        <img className="img-panda" src={Курсы12} alt="" />
      </div>
      <div className="wrapper-body-blocks">
        <img className="img-panda img-panda-mobile" src={Курсы13} alt="" />
        <img className="img-panda" src={Курсы13} alt="" />
        <div className="text-block">
          <span className="span-big-text">Игры</span>
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
        <img className="img-panda-mobile" src={Курсы14} alt="" />
        <div className="text-block">
          <span className="span-big-text">Библиотека</span>
          <span>
            коллекция ресурсов, материалов и контента, предоставляемых в рамках
            приложения для помощи пользователям в изучении языка.
          </span>
        </div>
        <img className="img-panda" src={Курсы14} alt="" />
      </div>
      <div id="wrapper-main-language-and-icons" className="wrapper-body-blocks">
        <div>
          <span className="main-language-in-platform">
            Основные языки, которые изучаются в приложении:
          </span>
        </div>
        <div className="wrapper-body-main-icons">
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://cdn-icons-png.flaticon.com/512/197/197374.png)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACnCAMAAAAPIrEmAAAAMFBMVEUNXq////95ptMocLhelMpDgsH2+fyUuNzk7favyuVwoNCdvt85e72Yut3c6POOtNrdcYWaAAABI0lEQVR4nO3dS07EQAxF0UBDQ/Pd/24RM5pMjFBhk3fu3FJOKSMrn22rdL753kNp7gCho6NnhI6OnhE6OnpG6OjoGaH/lP5yO7ml9Kfd2KTQ0dHR0dGvQ0dHR0dHHxs6OnoI/bHSfu5cGXs9TW5bea7PtXuqK3R0dHR0dHR0dHR0dHT0sQXTL5X2qrfK2Pvd5Grnc8zdHDo6Ojo6+lXo6Ojo6OhjQ0dHR/81/XQ/uaX0I4SOjp4ROjp6Rujo6Bmho6P/+0oLjT39sniF8gctfXhsduiJoSeGnhh6YuiJoSeGnhh6Ysn07rfN+upeDUqSJEmSJH2t+8vNfSXv5rovoC/0xNATQ08MPTH0xNATQ08MPbGt9cf3rXWvBiVJkiRJkvTZBzdBZUmA5Y01AAAAAElFTkSuQmCC)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://cdn.countryflags.com/thumbs/spain/flag-round-250.png)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://cdn-icons-png.flaticon.com/512/323/323301.png)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://cdn.countryflags.com/thumbs/turkey/flag-round-250.png)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://cdn.countryflags.com/thumbs/russia/flag-round-250.png)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://cdn-icons-png.flaticon.com/512/197/197375.png)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://www.countryflags.com/wp-content/uploads/japan-flag-png-xl.png)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://www.countryflags.com/wp-content/uploads/italy-flag-png-xl.png)",
            }}
          ></div>
          <div
            className="body-main-icons"
            style={{
              backgroundImage:
                "url(https://cdn-icons-png.flaticon.com/512/197/197560.png)",
            }}
          ></div>
        </div>
      </div>
      <div id="lengua8-it-is" className="wrapper-body-blocks">
        <div>
          <span id="about" className="span-big-text">
            Lengua8 - это...
          </span>
        </div>
        <div className="text-of-lengua8-it-is">
          <div className="text-in-lengua8">
            <div className="little-pandas-mobile">
              <img src={IMG_350615} alt="" />
            </div>{" "}
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
            <div className="little-pandas little-bottom-pandas">
              <img src={IMG_350615} alt="" />
            </div>{" "}
          </div>
          <div className="text-in-lengua8">
            <div className="little-pandas">
              <img src={IMG_350616} alt="" />
            </div>{" "}
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
            <div className="little-pandas-mobile">
              <img src={IMG_350617} alt="" />
            </div>{" "}
            <span className="span-middle-text">
              3 - Словарный запас и грамматика
            </span>
            <span>
              Приложение предлагает доступ к обширной базе данных слов и фраз, а
              также грамматическим правилам. Это помогает пользователям
              расширить свой словарный запас, изучить правильное использование
              слов и фраз, а также понять основы грамматики языка.
            </span>
            <div id="panda3" className="little-pandas little-bottom-pandas">
              <img src={IMG_350617} alt="" />
            </div>{" "}
          </div>
          <div className="text-in-lengua8">
            <div className="little-pandas">
              <img src={IMG_350618} alt="" />
            </div>{" "}
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
          <span className="span-big-text">Изучайте языки с нами!</span>
          <div>
            <img className="img-panda-mobile" src={Group_1049} alt="" />
          </div>
          <div className="wrapper-button-ios-android img-download-mobile">
            <img src={image310} alt="" />
            <img src={image4google} alt="" />
          </div>
          <span>
            Убери запишитесь на бесплатные онлайн языковые курсы потому что у
            нас не школа мы приложение все построено на ии
          </span>
          <div className="wrapper-button-ios-android img-download">
            <img src={image310} alt="" />
            <img src={image4google} alt="" />
          </div>
        </div>
        <div>
          <img className="img-panda" src={Group_1049} alt="" />
        </div>
      </div>
      <div className="wrapper-body-blocks wrapper-body-last-blocks">
        <span id="questions" className="span-big-text">
          Вопросы и ответы
        </span>
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
