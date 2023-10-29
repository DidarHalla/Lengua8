import "./style/Footer.css";
import "./style/Body.css";

export function Footer(){
  return (
    <div className="footer">
      <div>
        <div className="span-middle-text">О компании</div>
        <div>О компании</div>
        <div>О компании</div>
        <div>О компании</div>
        <div>О компании</div>
        <div>О компании</div>
        <div>О компании</div>
      </div>
      <div>
        <div className="span-middle-text">Мы в соцсетях</div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png" alt="" />Instagram</div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png" alt="" />Vkontakte</div>
        <div><img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />Facebook</div>
        <div><img src="https://www.investopedia.com/thmb/vE2Lmd5C8dUW_7G75XDyKzQDc6A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tiktok-b003064e1dfa4459bd31c37e7db390a1.jpg" alt="" />TikTok</div>
      </div>
      <div>
        <div className="span-middle-text">Скачивайте тут</div>
        <div>
          <input className="button-ios" value="IOS" type="button" />
        </div>
        <div>
          <input className="button-android" value="ANDROID" type="button" />
        </div>
        <div>
          <input className="button-android" value="Huawei" type="button" />
        </div>
      </div>
    </div>
  );
}
