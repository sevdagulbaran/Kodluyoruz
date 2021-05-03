
import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      count: {
        totalCount: 0,
        yaziCount: 0,
        turaCount: 0,
      },
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.state.count.totalCount++;
    let randomFlip = Math.floor(Math.random() * 2);//random

    setTimeout(() => {
      if (randomFlip > 0) {
        this.setState({ side: "yazi" });
        this.state.count.yaziCount++;
      } else {
        this.setState({ side: "tura" });
        this.state.count.turaCount++;
      }
    }, 500);

    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    this.setState({ flipping: true });
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count.totalCount} </strong>
          atıştan
          <strong> {this.state.count.turaCount} </strong>ü tura
          <strong> {this.state.count.yaziCount} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;