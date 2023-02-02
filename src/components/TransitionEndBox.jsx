import { Col, Row } from 'antd'
import React from 'react'
import { useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';
function TransitionEndBox() {

  const normal = {
    border: "0",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "block",
    backgroundColor: "rgb(71, 169, 225)",
    fontWeight: "700",
    color: "aliceblue",
    paddingTop: "18px",
    textAlign: "center",
    transition: '1.5s',
    animation: "pulse-btn 2s ease-out",
    animationIterationCount: "infinite",
  }
  const transformed = {
    height: "200px",
    width: "400px",
    marginLeft: "-144px",
    paddingTop: "13vh",
    backgroundColor: "#43ce",
    border: "2px solid",
    color: "white",
    borderRadius: '10px',
    transition: '1.5s',
    boxShadow: "#9b83f5bd 0px 0px 80px 47px",
    outline: 'none',
  }
  const relative = {
    top: "30vh",
    position: "relative",
    textAlign: "center",
    width: "60px",
  }
  function showText() {
    return (
      <>
        <ReactTypingEffect
          text={["Welcome...", "To Cedcommerce"]}
          cursorRenderer={cursor => <h2 style={{fontSize:"30px"}}>{cursor}</h2>}
          displayTextRenderer={(text, i) => {
            return (
              <h2>
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      className="animatedText"
                      style={i % 2 === 0 ? { color: 'magenta' } : {}}
                    >{char}</span>
                  );
                })}
              </h2>
            );
          }}
          typingDelay={1000}
          eraseDelay={1000}
          speed={50}
          eraseSpeed={50}
        />
      </>
    );
  }
  const [buttonStyle, setButtonStyle] = useState(false)
  const [classIs, setClassIs] = useState(false)
  const handleClick = () => {
    setClassIs(!classIs)
    setButtonStyle(!buttonStyle)
  };
  return (
    <div>
      <Col>
        <Row justify="center">
          <Col span={1} >
            <div style={relative}>
              <div onClick={handleClick} style={buttonStyle ? transformed : normal}
              >
                {buttonStyle ? showText() : ""}
              </div>
              <div onClick={handleClick} className={classIs ? '' : 'customSpan'}></div>
              <div onClick={handleClick} className={classIs ? '' : 'customSpan'}></div>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  )
}

export default TransitionEndBox
