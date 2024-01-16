import "./style/Footer.css";
import "./style/Body.css";
import icons_SM13 from "../assets/icons SM13.png";
import icons_SM14 from "../assets/icons SM14.png";
import icons_SM15 from "../assets/icons SM15.png";
import vkwk from "../assets/vkwk.png";
import image4google from "../assets/image 4google.png";
import image310 from "../assets/image 310.png";

export function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="span-middle-text">О компании:</div>
        <div>Главное</div>
        <div>О приложении</div>
        <div>Скачать приложение</div>
        <div>Вопросы</div>
      </div>
      <div>
        <div className="span-middle-text">Мы в соцсетях:</div>
        <div>
          <img src={icons_SM13} alt="" />
          Instagram
        </div>
        <div>
          <img src={vkwk} alt="" />
          Wkontakte
        </div>
        <div>
          <img src={icons_SM14} alt="" />
          Facebook
        </div>
        <div>
          <img src={icons_SM15} alt="" />
          TikTok
        </div>
      </div>
      <div>
        <div className="span-middle-text">Скачать приложение</div>
        <div className="wrapper-footer-download-icon">
          <div>
            <img className="download-icon" src={image310} alt="" />
          </div>
          <div>
            <img className="download-icon" src={image4google} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
