import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Segment,Placeholder, Grid, Divider, Header, Button, Icon, Search, List, Table, Label, Menu } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>OR</Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                  Cari Dokumen
                </Header>
                <Search placeholder='Search Document...' />
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name='pdf file outline' />
                  Tambah Dokumen Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <br /><br />
        <Grid container columns={3} stackable>
          <Grid.Column width={4}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line></Placeholder.Line>
                  <Placeholder.Line></Placeholder.Line>
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={9}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line></Placeholder.Line>
                  <Placeholder.Line></Placeholder.Line>
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={2}>
            <p>Website Terkait</p>
            <List>
              <List.Item icon='linkify' content={<a href='https://google.com'>Google</a>} />
              <List.Item icon='linkify' content={<a href='https://facebook.com'>Facebook</a>} />
              <List.Item icon='linkify' content={<a href='http://http://www.semantic-ui.com'>Semantic UI</a>} />
              <List.Item icon='linkify' content={<a href='http://niomic.com'>Niomic</a>} />
              <List.Item icon='linkify' content={<a href='https://reactjs.org.com'>React</a>} />
            </List>
          </Grid.Column>
        </Grid>

        <Grid textAlign='center'>
          <Grid.Column style={{ maxWidth:900}}>
            <Table celled>
            <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="right" colSpan="3">
                {" "}
                <Search placeholder="Search document..." />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
              <Table.Body>
                <Table.Row active>
                  <Table.Cell>
                    <Label ribbon>Panduan Belajar Javascript</Label>
                  </Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Panduan Belajar CSS</Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Panduan Belajar React JS</Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                    <Menu floated='right'pagination>
                      <Menu.Item as='a'>
                        <Icon name='chevron left' />
                      </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a'>
                        <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>

            </Table>
          </Grid.Column>
        </Grid>
      </Segment.Group>
    );
  }
}

export default App;
