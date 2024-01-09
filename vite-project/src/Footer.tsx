import "./style/Footer.css";
import "./style/Body.css";

export function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="span-middle-text">О компании:</div>
        <div>О компании</div>
        <div>О компании</div>
        <div>О компании</div>
        <div>О компании</div>
        <div>О компании</div>
        <div>О компании</div>
      </div>
      <div>
        <div className="span-middle-text">Мы в соцсетях:</div>
        <div>
          <img src="/dist/icons SM13.png" alt="" />
          Instagram
        </div>
        <div>
          <img src="/dist/vkwk.png" alt="" />
          Wkontakte
        </div>
        <div>
          <img
            src="/dist/icons SM14.png"
            alt=""
          />
          Facebook
        </div>
        <div>
          <img src="/dist/icons SM15.png" alt="" />
          TikTok
        </div>
      </div>
      <div>
        <div className="span-middle-text">Скачивайте тут:</div>
        <div>
          <img className="download-icon" src="/assets/image 310.png" alt="" />
        </div>
        <div>
          <img className="download-icon" src="/assets/image 4google.png" alt="" />
        </div>
      </div>
    </div>
  );
}
