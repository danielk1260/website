import React from "react";
import { Grid, Image, Segment, Header, Divider } from "semantic-ui-react";
import "./styles.css";

const HeaderSite = () => {
  return (
    <>
      <Divider hidden clearing />
      <Segment>
        <Grid columns={2} stackable centered className="shadow">
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={8}>
              <Image src="https://i.stack.imgur.com/i6NG3.gif" centered />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header
                as="h2"
                content="Daniel Camacho"
                subheader="Desarrollador Front end"
                textAlign="center"
              />
              <Divider horizontal>
                <Header as="h4">
                  Sobre mi
                </Header>
              </Divider>
              Soy un desarrollador Front end apasionado por el desarrollo de
              software. Tengo la firme conviccion de querer ayudar a las
              personas a crecer y a crecer en su negocio, aportando lo mejor de
              mi y no dejar de aprender.
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default HeaderSite;
