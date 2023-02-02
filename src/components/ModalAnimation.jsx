import { Button, Card, Modal, TextContainer } from '@shopify/polaris'
import React, { useState } from 'react';
import { useEffect } from 'react';
function ModalAnimation() {
  const [active, setActive] = useState(false);
  // Instantiate new modal
  let modalDialog = document.getElementsByClassName("Polaris-Modal-Dialog__Container");
  // let backDrop = document.getElementsByClassName(".Polaris-Backdrop");

  // useEffect(() => {
  //   if (modalDialog[0]) {
  //     modalDialog[0].style.transform = "scale(0)"
  //     modalDialog[0].style.transition = ".3s ease"
  //     if (active === true && modalDialog[0]) {
  //       console.log(modalDialog[0]);
  //       modalDialog[0].style.transform = "scale(1)"
  //       modalDialog[0].style.transition = ".3s ease-in"
  //     }
  //   }

  // }, [active])

  return (
    <div>
      <Button  onClick={() => setActive(!active)}>
        Open Modal
      </Button>

      <div style={{ transform: active ? "scale(1)" : "scale(0)", transition: ".3s ease" }} >

        <div style={{ height: "300px", width: "500px", textAlign: "center", margin: "auto", marginTop:"20px" }}>
          <Card title="Online store dashboard" sectioned>
            <p>View a summary of your online store’s performance
              View a summary of your online store’s performance
              View a summary of your online store’s performance
              View a summary of your online store’s performance
              View a summary of your online store’s performance
            </p>
            <p>View a summary of your online store’s performance
              View a summary of your online store’s performance
              View a summary of your online store’s performance
            </p>
          </Card>
        </div>
      </div>
      {/* <Modal
        activator={active}
        open={active}
        onClose={() => setActive(false)}
        title="Reach more shoppers with Instagram product tags"
        primaryAction={{
          content: 'Add Instagram',
        }}
        secondaryActions={[
          {
            content: 'Learn more',
            // onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
              Use Instagram posts to share your products with millions of
              people. Let shoppers buy from your store without leaving
              Instagram.
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal> */}
    </div>
  )
}

export default ModalAnimation
