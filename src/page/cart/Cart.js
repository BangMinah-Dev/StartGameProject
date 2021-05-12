import "./cart.css"
import Layout from "../../layouts/Layout";

export default function Cart() {
  return (
    <Layout>
      <div>
        <div className="container yourOrder">
          <h2>Đơn hàng của bạn</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="leftBox col-xl-7 col-lg-7 col-md-12">
              <div className="_border">
                <div className="item mb-3">
                  <div className="image">
                    <img
                      src="./img/shoppingCart/e338d98a64b4a810c498bff53f4eea2f.png"
                      alt="image1"
                    />
                  </div>
                  <div className="info">
                    <div className="text">
                      <h3>Genshin Impact</h3>
                      <a href>Xóa</a>
                    </div>
                    <div className="price">
                      <p>$ 29.99</p>
                    </div>
                  </div>
                </div>
                <div className="item mb-3">
                  <div className="image">
                    <img src="./img/shoppingCart/11731.jpg" alt="image2" />
                  </div>
                  <div className="info">
                    <div className="text">
                      <h3>Bake 'n Switch</h3>
                      <a href>Xóa</a>
                    </div>
                    <div className="price">
                      <p>$ 4.99</p>
                    </div>
                  </div>
                </div>
                <div className="total mb-2">
                  {" "}
                  <span>Tất cả giá đã bao gồm VAT nếu có.</span>
                  <p>Tổng đơn hàng : $ 34.98</p>
                </div>
              </div>
            </div>
            <div className="rightBox col-xl-5 col-lg-5 col-md-12">
              <div className="payment">
                <h3>Nhập thông tin thanh toán</h3>
                <div className="info">
                  <div className="creditCard d-flex justify-content-between">
                    <div className="visa">
                      <svg
                        width={34}
                        height={24}
                        viewBox="0 0 34 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width={33}
                          height={23}
                          rx="3.5"
                          fill="white"
                          stroke="#D9D9D9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.7501 15.8583H8.69031L7.14576 9.79247C7.07245 9.51344 6.91679 9.26676 6.68782 9.1505C6.11639 8.85833 5.48672 8.6258 4.7998 8.50853V8.27499H8.11789C8.57583 8.27499 8.91929 8.6258 8.97653 9.03323L9.77793 13.4087L11.8367 8.27499H13.8392L10.7501 15.8583ZM14.984 15.8583H13.0388L14.6406 8.27499H16.5858L14.984 15.8583ZM19.1025 10.3758C19.1597 9.96738 19.5032 9.73384 19.9039 9.73384C20.5336 9.6752 21.2195 9.79248 21.7919 10.0836L22.1354 8.45091C21.5629 8.21737 20.9333 8.1001 20.3619 8.1001C18.4738 8.1001 17.1 9.1505 17.1 10.6083C17.1 11.7174 18.0731 12.2997 18.7601 12.6505C19.5032 13.0003 19.7894 13.2338 19.7322 13.5836C19.7322 14.1083 19.1597 14.3419 18.5883 14.3419C17.9014 14.3419 17.2145 14.167 16.5858 13.8748L16.2424 15.5086C16.9293 15.7997 17.6724 15.917 18.3594 15.917C20.4763 15.9746 21.7919 14.9252 21.7919 13.3501C21.7919 11.3666 19.1025 11.2503 19.1025 10.3758ZM28.5998 15.8583L27.0553 8.27499H25.3962C25.0528 8.27499 24.7093 8.50853 24.5948 8.85833L21.7347 15.8583H23.7372L24.1369 14.7503H26.5973L26.8263 15.8583H28.5998ZM25.6824 10.3172L26.2539 13.1752H24.6521L25.6824 10.3172Z"
                          fill="#172B85"
                        />
                      </svg>
                    </div>
                    <div className="masterCard">
                      <svg
                        width={34}
                        height={24}
                        viewBox="0 0 34 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width={33}
                          height={23}
                          rx="3.5"
                          fill="white"
                          stroke="#D9D9D9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.179 16.8295C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02972 9.03582 5.03003 12.7807 5.03003C14.459 5.03003 15.9949 5.63253 17.179 6.63057C18.363 5.63253 19.8989 5.03003 21.5773 5.03003C25.3221 5.03003 28.358 8.02972 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8295Z"
                          fill="#ED0006"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.1792 16.8295C18.6371 15.6006 19.5616 13.772 19.5616 11.73C19.5616 9.68807 18.6371 7.85947 17.1792 6.63057C18.3632 5.63253 19.8992 5.03003 21.5775 5.03003C25.3224 5.03003 28.3582 8.02972 28.3582 11.73C28.3582 15.4303 25.3224 18.43 21.5775 18.43C19.8992 18.43 18.3632 17.8275 17.1792 16.8295Z"
                          fill="#F9A000"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.1788 16.8295C18.6367 15.6006 19.5611 13.772 19.5611 11.7301C19.5611 9.68811 18.6367 7.85952 17.1788 6.63062C15.7208 7.85952 14.7964 9.68811 14.7964 11.7301C14.7964 13.772 15.7208 15.6006 17.1788 16.8295Z"
                          fill="#FF5E00"
                        />
                      </svg>
                    </div>
                    <div className="JCB">
                      <svg
                        width={35}
                        height={24}
                        viewBox="0 0 34 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width={33}
                          height={23}
                          rx="3.5"
                          fill="white"
                          stroke="#D9D9D9"
                        />
                        <path
                          d="M21.9823 11.9542C22.5135 11.9658 23.0478 11.9308 23.577 11.9724C24.1128 12.0724 24.242 12.8836 23.7659 13.1493C23.4411 13.3243 23.0552 13.2145 22.703 13.2454H21.9823V11.9542ZM23.8841 10.4928C24.0022 10.9095 23.6006 11.2835 23.1993 11.2262H21.9823C21.9908 10.8333 21.9656 10.4068 21.9946 10.0346C22.4822 10.0484 22.9742 10.0066 23.4589 10.0564C23.6672 10.1088 23.8415 10.28 23.8841 10.4928ZM26.8131 4.31448C26.8357 5.11012 26.8163 5.94781 26.8228 6.75959C26.8213 10.06 26.826 13.3603 26.8202 16.6609C26.7989 17.8978 25.7027 18.9726 24.4743 18.9972C23.2448 19.0022 22.0151 18.998 20.7854 18.9994V14.0099C22.1252 14.003 23.4657 14.0239 24.805 13.9994C25.4263 13.9604 26.1068 13.5505 26.1357 12.8668C26.2089 12.1801 25.5615 11.7051 24.9468 11.6301C24.7106 11.624 24.7175 11.5613 24.9468 11.5339C25.5331 11.4072 25.9934 10.8004 25.8209 10.1928C25.674 9.55368 24.9676 9.30631 24.38 9.30754C23.182 9.2994 21.9837 9.30641 20.7857 9.30404C20.7934 8.37256 20.7695 7.44008 20.7985 6.50928C20.8935 5.2947 22.0172 4.29307 23.2283 4.3148C24.4234 4.31462 25.6183 4.31462 26.8131 4.31457V4.31448Z"
                          fill="url(#paint0_linear)"
                        />
                        <path
                          d="M7.24671 6.63505C7.27731 5.40011 8.37818 4.33415 9.60494 4.3161C10.8299 4.31233 12.0551 4.31556 13.2801 4.31446C13.2767 8.44633 13.2867 12.5786 13.275 16.7103C13.2279 17.9302 12.139 18.9759 10.9256 18.9975C9.69828 19.0019 8.47083 18.9981 7.24348 18.9993V13.8416C8.43565 14.1232 9.68582 14.2431 10.902 14.0563C11.629 13.9393 12.4244 13.5823 12.6706 12.8281C12.8517 12.1829 12.7497 11.504 12.7767 10.8418V9.30402H10.6719C10.6624 10.3211 10.6913 11.3399 10.6567 12.3557C10.5999 12.9801 9.9816 13.3768 9.39272 13.3556C8.66241 13.3633 7.2152 12.8263 7.2152 12.8263C7.21157 10.9208 7.23639 8.53443 7.24671 6.63524V6.63505Z"
                          fill="url(#paint1_linear)"
                        />
                        <path
                          d="M14.0649 9.92427C13.9541 9.94778 14.0426 9.54689 14.0143 9.39482C14.0218 8.43328 13.9985 7.4707 14.0271 6.50985C14.1218 5.29014 15.2542 4.28601 16.4702 4.31456H20.0512C20.0478 8.44642 20.0578 12.5787 20.0461 16.7104C19.9989 17.9303 18.9099 18.9759 17.6965 18.9976C16.4691 19.0022 15.2417 18.9983 14.0142 18.9995V13.3485C14.8525 14.0363 15.9918 14.1433 17.0362 14.1452C17.8235 14.1449 18.6062 14.0235 19.3708 13.842V12.8067C18.5092 13.2361 17.4963 13.5089 16.5411 13.2622C15.8748 13.0963 15.3911 12.4524 15.4019 11.7648C15.3247 11.0497 15.7439 10.2947 16.4466 10.0822C17.3191 9.80903 18.27 10.0179 19.0878 10.373C19.263 10.4648 19.4408 10.5786 19.3708 10.2857V9.47197C18.003 9.14654 16.5474 9.0268 15.1732 9.38081C14.7755 9.49301 14.388 9.66318 14.0649 9.92436V9.92427Z"
                          fill="url(#paint2_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="20.7442"
                            y1="11.343"
                            x2="26.7848"
                            y2="11.343"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#58B03A" />
                            <stop offset={1} stopColor="#55B330" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear"
                            x1="7.11505"
                            y1="11.7975"
                            x2="13.1811"
                            y2="11.7975"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#0F6EB6" />
                            <stop offset={1} stopColor="#006DBA" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear"
                            x1="14.0054"
                            y1="11.4853"
                            x2="20.05"
                            y2="11.4853"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#DE0D3D" />
                            <stop offset={1} stopColor="#E30138" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="text">Thẻ tín dụng / ghi nợ</div>
                  </div>
                  <form action method="POST">
                    <div className="group">
                      <label htmlFor="input_1">Số thẻ</label>
                      <input
                        id="input_1"
                        type="text"
                        placeholder="1234 5678 8765 4321"
                      />
                    </div>
                    <div className="line2">
                      <div className="group">
                        <label htmlFor="input_2">Ngày hết hạn</label>
                        <input id="input_2" type="text" placeholder="MM/YY" />
                      </div>
                      <div className="group ml-4">
                        <label htmlFor="input_3">CVC/ CVV</label>
                        <input id="input_3" type="text" placeholder={123} />
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="input_4">Tên chủ thẻ</label>
                      <input
                        id="input_4"
                        type="text"
                        placeholder="Ex. Tran Van A"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="input_5">Địa chỉ email</label>
                      <input
                        id="input_5"
                        type="text"
                        placeholder="Ex. tranvana@email.com"
                      />
                    </div>
                    <div className="ckBox">
                      <input id="checkBox" type="checkbox" name />
                      <label htmlFor="checkBox">
                        Lưu cho lần thanh toán tiếp theo
                      </label>
                    </div>
                    <div className="policy mb-4 mt-4">
                      <p>
                        Mã thông báo thanh toán được mã hóa an toàn sẽ được tạo
                        sau khi ngân hàng của bạn chấp thuận giao dịch mua.
                        Chúng tôi không lưu trữ chi tiết thẻ của bạn trực tiếp
                        trong cơ sở dữ liệu của chúng tôi
                      </p>
                    </div>
                    <div className="total">
                      <p>$ 34.98</p>
                      <button className="btn confirm" type="button">
                        Thanh toán đơn hàng{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
