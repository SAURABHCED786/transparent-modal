import { Button, List, Text } from "@shopify/polaris";
import { Row, Col, Modal, Collapse, Avatar, Image } from "antd";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function TransparentModal(admin) {
  const { Panel } = Collapse;
  // console.log(admin, "userData");
  const [open, setOpen] = useState(false);
  const [openCollaps, setOpenCollaps] = useState();
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Row gutter={[24, 16]}>
        <Col span={8} />
        <Col span={8}>
          <div style={{ marginTop: "30px" }}>
            {window.innerWidth < 768 ? (
              <>
                <center>
                  <p className="userWork">Scroll Down</p>
                </center>
                <div
                  style={{
                    height: "600px",
                    textAlign: "center",
                  }}
                >
                  {[admin].map((allusr, i) => {
                    return (
                      <div key={i}>
                        {allusr.admin.map((usrs, ui) => {
                          return (
                            <div
                              key={ui}
                              style={{ float: "left" }}
                              data-aos-delay={1000 + ui * 200}
                              data-aos-once="false"
                              className="item"
                              data-aos="flip-left"
                            >
                              <div className="cardData">
                                <div className="avtarImg">
                                  <Avatar
                                    shape="square"
                                    src={usrs.imgUrl}
                                    size={90}
                                  />
                                </div>
                                <div className="colappsData">
                                  <Collapse
                                    accordion
                                    key={ui}
                                    activeKey={openCollaps}
                                    defaultActiveKey={ui}
                                    onChange={() => {
                                      setOpenCollaps(ui);
                                    }}
                                  >
                                    <Panel
                                      header={
                                        <span className="userName">
                                          {usrs.username}
                                        </span>
                                      }
                                      key={ui}
                                    >
                                      <List type="bullet">
                                        <List.Item>{usrs.userId}</List.Item>
                                        <List.Item>{usrs.contact}</List.Item>
                                        <List.Item>{usrs.office}</List.Item>
                                        <List.Item>{usrs.address}</List.Item>
                                      </List>
                                    </Panel>
                                  </Collapse>
                                </div>
                                {openCollaps === ui ? (
                                  <></>
                                ) : (
                                  <h2 className="userWork">{usrs.work}</h2>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Open Modal
                </Button>
                <div style={{ marginTop: "30px" }}>
                  <Modal
                    title={<center>Instagram Users</center>}
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => {
                      setOpen(false);
                    }}
                    width={900}
                  >
                    <div
                      style={{
                        height: "600px",
                        textAlign: "center",
                      }}
                    >
                      {[admin].map((allusr, i) => {
                        return (
                          <div key={i}>
                            {allusr.admin.map((usrs, ui) => {
                              return (
                                <div
                                  key={ui}
                                  style={{ float: "left" }}
                                  data-aos-delay={1000 + ui * 200}
                                  className="item"
                                  data-aos="flip-left"
                                >
                                  <div className="cardData">
                                    <div className="avtarImg">
                                      <Avatar
                                        shape="square"
                                        src={usrs.imgUrl}
                                        size={90}
                                      />
                                    </div>
                                    <div className="colappsData">
                                      <Collapse
                                        accordion
                                        key={ui}
                                        activeKey={openCollaps}
                                        defaultActiveKey={ui}
                                        onChange={() => {
                                          setOpenCollaps(ui);
                                        }}
                                      >
                                        <Panel
                                          header={
                                            <span className="userName">
                                              {usrs.username}
                                            </span>
                                          }
                                          key={ui}
                                        >
                                          <List type="bullet">
                                            <List.Item>{usrs.userId}</List.Item>
                                            <List.Item>
                                              {usrs.contact}
                                            </List.Item>
                                            <List.Item>{usrs.office}</List.Item>
                                            <List.Item>
                                              {usrs.address}
                                            </List.Item>
                                          </List>
                                        </Panel>
                                      </Collapse>
                                    </div>
                                    {openCollaps === ui ? (
                                      <></>
                                    ) : (
                                      <h2 className="userWork">{usrs.work}</h2>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </Modal>
                </div>
              </>
            )}
          </div>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Row gutter={[24, 16]}>
        <Col span={8} />
        {/* <Col span={8}>
          <div style={{ marginTop: "30px" }}>
            <Modal
              title={<center>Instagram Users</center>}
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => {
                setOpen(false);
              }}
              width={900}
            >
              <div
                style={{
                  height: window.innerWidth < 1000 ? "600px" : "450px",
                  textAlign: "center",
                }}
              >
                {[admin].map((allusr, i) => {
                  return (
                    <div key={i}>
                      {allusr.admin.map((usrs, ui) => {
                        return (
                          <div
                            key={ui}
                            style={{ float: "left" }}
                            data-aos-delay={1000 + ui * 200}
                            className="item"
                            data-aos="flip-left"
                          >
                            <div className="cardData">
                              <div className="avtarImg">
                                <Avatar
                                  shape="square"
                                  src={usrs.imgUrl}
                                  size={90}
                                />
                              </div>
                              <div className="colappsData">
                                <Collapse
                                  accordion
                                  key={ui}
                                  activeKey={openCollaps}
                                  defaultActiveKey={ui}
                                  onChange={() => {
                                    setOpenCollaps(ui);
                                  }}
                                >
                                  <Panel
                                    header={
                                      <span className="userName">
                                        {usrs.username}
                                      </span>
                                    }
                                    key={ui}
                                  >
                                    <List type="bullet">
                                      <List.Item>{usrs.userId}</List.Item>
                                      <List.Item>{usrs.contact}</List.Item>
                                      <List.Item>{usrs.office}</List.Item>
                                      <List.Item>{usrs.address}</List.Item>
                                    </List>
                                  </Panel>
                                </Collapse>
                              </div>
                              {openCollaps === ui ? (
                                <></>
                              ) : (
                                <h2 className="userWork">{usrs.work}</h2>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </Modal>
          </div>
        </Col> */}
        <Col span={8} />
      </Row>
    </>
  );
}

export default TransparentModal;
