import React from 'react'
import { Container, Header } from "semantic-ui-react";
import paper from './paper.png'
import rock from './rock.png'
import scissors from './scissors.png'


class UserChoice extends React.Component {
state = { showResult: false, choices:["rock", "paper", "scissors"]}


  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "25px", paddingBottom: "25px" }}>RPS REACT</h1>
        <h3 style={{ textAlign: "center", paddingBottom: "25px"}}>Make your Choice</h3>
        <Container style={styles.container}>
          <br />
          <br />
          <img src={rock} alt="rock"></img>
          <img src={paper} alt="paper"></img>
          <img src={scissors} alt="scissors"></img>
        </Container>
      </div>
    )
  }
}

const styles = {
  container: {
    cursor: "pointer",
    alignText: "center",
    display: "flex",
    justifyContent: "space-between"
  },

}

export default UserChoice
