import "../pagination/Pagination.css"
import prew from "../../img/prew.png"
import glaz from "../../img/glaz.png"
import nalev from "../../img/nalev.png"
import azim from "../../img/azim.png"
import tel from "../../img/tel.png"
import telegram from "../../img/telegram.png"
import what from "../../img/what.png"
import magna from "../../img/magna.png"
import many from "../../img/many.png"
const Pagination =()=>{
return(
    <div className="container">
     <img src={prew}/>
     <p className="SF">Dota 2, Играем на SF, мид до 2 смертей или до падения т1</p>
    <h3 className="h3">Создано сегодня, 13:10</h3>
    <h1 className="kategoriya">Категория “Dota 2”</h1>
    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br/>
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non <br/>
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    <p className="timee">Игра начинается:</p><p className="timer">20:00, 05.06.21</p>
    <p className="stavka">Ставка:</p><p className="money">1000 сом</p>
   <img className="glaz" src={glaz}/><p className="pros">562 просмотров</p>
   <img className="nalev" src={nalev}/><p className="prosm">18 предложений</p>
   <button className="otclik">Откликнуться</button>
   <hr/>
   <div>
    <p className="zakaz">Заказчик</p>
    <img src={azim}/><p className="azi">Азим Д . appass1nato </p>
   <p className="p">-</p>
    <a href="709209723">  < img className="tel" src={tel}/></a><p className="tele">Телефон|</p>
    <a href="https://t.me/0709209723">  < img className="telegram" src={telegram}/></a><p className="telegramm">Telegram|</p>
    <a href="https://wa.me/0709209723">  < img className="what" src={what}/></a><p className="whats">WhatsApp|</p>
    <div>
        
         <p className="pp">Похожие задания</p>

        <div className="cart">
            <div className="cart__img">
                <img src={magna} alt="" />
            </div>

            <div className="desc">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi lorem orci, massa facilisis accumsan in. Mi dictum eu volutpat enim .</p>
            </div>

            <div className="price">
               <span>2500 c</span>
               <img src={many} alt="" />
            </div>
        </div>


        <div className="cart">
            <div className="cart__img">
                <img src={magna} alt="" />
            </div>

            <div className="desc">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi lorem orci, massa facilisis accumsan in. Mi dictum eu volutpat enim .</p>
            </div>

            <div className="price">
               <span>2500 c</span>
               <img src={many} alt="" />
            </div>
        </div>


        <div className="cart">
            <div className="cart__img">
                <img src={magna} alt="" />
            </div>

            <div className="desc">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi lorem orci, massa facilisis accumsan in. Mi dictum eu volutpat enim .</p>
            </div>

            <div className="price">
               <span>2500 c</span>
               <img src={many} alt="" />
            </div>
        </div>


        <div className="cart">
            <div className="cart__img">
                <img src={magna} alt="" />
            </div>

            <div className="desc">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi lorem orci, massa facilisis accumsan in. Mi dictum eu volutpat enim .</p>
            </div>

            <div className="price">
               <span>2500 c</span>
               <img src={many} alt="" />
            </div>
        </div>

        <div className="cart">
            <div className="cart__img">
                <img src={magna} alt="" />
            </div>

            <div className="desc">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi lorem orci, massa facilisis accumsan in. Mi dictum eu volutpat enim .</p>
            </div>

            <div className="price">
               <span>2500 c</span>
               <img src={many} alt="" />
            </div>
        </div>

        <div className="cart">
            <div className="cart__img">
                <img src={magna} alt="" />
            </div>

            <div className="desc">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi lorem orci, massa facilisis accumsan in. Mi dictum eu volutpat enim .</p>
            </div>

            <div className="price">
               <span>2500 c</span>
               <img src={many} alt="" />
            </div>
        </div>

        <div className="cart">
            <div className="cart__img">
                <img src={magna} alt="" />
            </div>

            <div className="desc">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi lorem orci, massa facilisis accumsan in. Mi dictum eu volutpat enim .</p>
            </div>

            <div className="price">
               <span>2500 c</span>
               <img src={many} alt="" />
            </div>
        </div>

        <div className="cart">
            <div className="cart__img">
                <img src={magna} alt="" />
            </div>

            <div className="desc">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi lorem orci, massa facilisis accumsan in. Mi dictum eu volutpat enim .</p>
            </div>

            <div className="price">
               <span>2500 c</span>
               <img src={many} alt="" />
            </div>
        </div>

        <div className="cart">
            <div className="cart__img">
                <img src={magna} alt="" />
            </div>

            <div className="desc">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi lorem orci, massa facilisis accumsan in. Mi dictum eu volutpat enim .</p>
            </div>

            <div className="price">
               <span>2500 c</span>
               <img src={many} alt="" />
            </div>
        </div>
  
    </div>
   </div>
   </div>
)
}
export default Pagination;