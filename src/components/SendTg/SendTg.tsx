import Telegram from "miku-web-app"
import { Button } from "react-bootstrap"

export const SendTg = () => {
  
  const dt = new Date()
  const datenow = +dt

  let text_to_message = 'text'

  let tg = Telegram.WebApp
  //let tgchat
  let tguser = 'Дорогой друг'
  let tguserid = 936578907
  let tgusername:any = '@antikonst'

  if (tg.initDataUnsafe.user) {
    tguser = tg.initDataUnsafe.user.first_name
    tgusername = tg.initDataUnsafe.user.username
    tguserid = +tg.initDataUnsafe.user.id
  }

  const sendtg = () => {
    alert(' Отправка сообщения: '+ text_to_message +' @GerArtBot')
    const photo = 'http://rolline.ru/img/newimage' + datenow + '.png'
    const token = "2014855978:AAHAhsOzobqHZxHsmvnc4e4hFsSahRKJS00";
    const chat_id = -686182842; //сайт GerArt
    const chat_id_user = +tguserid
    const chat_id_me = 936578907; //me
    const url = 'https://api.telegram.org/bot' + token + '/sendPhoto?chat_id=' + chat_id + '&photo=' + photo + '&caption=' + text_to_message
    const url_user = 'https://api.telegram.org/bot' + token + '/sendPhoto?chat_id=' + chat_id_user + '&photo=' + photo + '&caption=' + text_to_message
    const url_me = 'https://api.telegram.org/bot' + token + '/sendPhoto?chat_id=' + chat_id_me + '&photo=' + photo + '&caption=' + text_to_message + ' ' + tgusername + ' ' + tguserid
    const oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
    const toUser = new XMLHttpRequest();
    toUser.open("GET", url_user, true);
    toUser.send();
    const toMe = new XMLHttpRequest();
    toMe.open("GET", url_me, true);
    toMe.send();
  }

return (
  <Button 
  className="btn btn-primary"
  onClick={sendtg}
  >Отправить</Button>
)

}