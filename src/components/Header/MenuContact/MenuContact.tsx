import React from "react"
import './MenuContact.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const MenuContact = () => {

  return(
    <nav className="nav d-flex flex-nowrap m-2">
      
        <div className="ico_menu">
            <a title="WhatsApp" href="https://api.whatsapp.com/send?phone=79215927107" target="_blank" rel="noopener noreferrer">
              <div className="ico_top ico_whats_app" >
                <svg className="swg" width="50" height="50">
                  <rect className="rect" width="15" height="60" fill="white">
                    <animate attributeName="x" from="-10" to="1000"
                      dur="5s" fill="freeze" repeatCount="indefinite" />
                  </rect>
                </svg>
              </div>
            </a>
        </div >
        <div className="ico_menu">
          <a title="e-mail" href="mailto:ooo.gerart@mail.ru" target="_blank" rel="noopener noreferrer">
            <div className="ico_top ico_mail">
              <svg className="swg" width="50" height="50">
                <rect className="rect" width="15" height="60" fill="white">
                  <animate attributeName="x" from="-60" to="950"
                    dur="5s" fill="freeze" repeatCount="indefinite" />
                </rect>
              </svg>
            </div>
          </a>
        </div>
        <div className="ico_menu">
          <a title="позвонить" href="tel:+79215927107" target="_blank" rel="noopener noreferrer">
            <div className="ico_top ico_tel">
              <svg className="swg" width="50" height="50">
                <rect className="rect" width="15" height="60" fill="white">
                  <animate attributeName="x" from="-110" to="900" dur="5s" fill="freeze" repeatCount="indefinite" />
                </rect>
              </svg>
            </div>
          </a>
        </div>
        <div className="ico_menu">
          <a title="SMS" href="sms:+79215927107?body=Здравствуйте! Я хочу сделать заказ." target="_blank" rel="noopener noreferrer">
            <div className="ico_top ico_chat">
              <svg className="swg" width="50" height="50">
                <rect className="rect" width="15" height="60" fill="white">
                  <animate attributeName="x" from="-160" to="850"
                    dur="5s" fill="freeze" repeatCount="indefinite" />
                </rect>
              </svg>
            </div>
          </a>
        </div>
    </nav>
  )
}