import React, {Component} from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment
} from 'semantic-ui-react'

export default class Homepage extends Component {

  render() {
    return (
        <div>
          <Segment
            inverted
            textAlign='center'
            style={{
            minHeight: 700,
            padding: '1em 0em'
          }}
            vertical>

            <Container text>
              <Header
                as='h1'
                content='ETF on Blockchain'
                inverted
                style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em'
              }}/>
              <Header
                as='h2'
                content='Safer Investment, Lower risky and More arbitrage opportunities'
                inverted
                style={{
                fontSize: '1.3em',
                fontWeight: 'lighter',
                'marginBottom': '2em'
              }}/>
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow'/>
              </Button>
            </Container>
          </Segment>
          <Segment vertical style={{
            padding: '8em 0em'
          }}>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header
                    as='h3'
                    style={{
                    fontSize: '2em'
                  }}>We Help Companies and Companions</Header>
                  <p style={{
                    fontSize: '1.33em'
                  }}>
                    We can give your company superpowers to do things that they never thought
                    possible. Let us delight your customers and empower your needs... through pure
                    data analytics.
                  </p>
                  <Header
                    as='h3'
                    style={{
                    fontSize: '2em'
                  }}>We Make Bananas That Can Dance</Header>
                  <p style={{
                    fontSize: '1.33em'
                  }}>
                    Yes that's right, you thought it was the stuff of dreams, but even bananas can
                    be bioengineered.
                  </p>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image
                    bordered
                    size='large'
                    src='https://semantic-ui.com/examples/assets/images/wireframe/white-image.png'/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Button size='huge'>Check Them Out</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{
            padding: '0em'
          }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column
                  style={{
                  paddingBottom: '5em',
                  paddingTop: '5em'
                }}>
                  <Header
                    as='h3'
                    style={{
                    fontSize: '2em'
                  }}>"What a Company"</Header >
                  <p style={{
                    fontSize: '1.33em'
                  }}>That is what they all say about us</p>
                </Grid.Column>
                <Grid.Column
                  style={{
                  paddingBottom: '5em',
                  paddingTop: '5em'
                }}>
                  <Header
                    as='h3'
                    style={{
                    fontSize: '2em'
                  }}>"I shouldn't have gone with their competitor."</Header >
                  <p style={{
                    fontSize: '1.33em'
                  }}>
                    <Image avatar src='https://semantic-ui.com/examples/assets/images/avatar/nan.jpg'/>
                    <b>Nan</b>
                    Chief Fun Officer Acme Toys
                  </p>
                </Grid.Column>
              </Grid.Row >
            </Grid>
          </Segment>

          <Segment style={{
            padding: '8em 0em'
          }} vertical>
            <Container text>
              <Header as='h3' style={{
                fontSize: '2em'
              }}>Breaking The Grid, Grabs Your Attention</Header >
              <p style={{
                fontSize: '1.33em'
              }}>
                Instead of focusing on content creation and hard work, we have learned how to
                master the art of doing nothing by providing massive amounts of whitespace and
                generic content that can seem massive, monolithic and worth your attention.
              </p>
              < Button as='a' size='large'>
                Read More
              </Button>

              <Divider
                as='h4'
                className='header'
                horizontal
                style={{
                margin: '3em 0em',
                textTransform: 'uppercase'
              }}>
                <a href='/'>Case Studies</a>
              </Divider>

              <Header as='h3' style={{
                fontSize: '2em'
              }}>Did We Tell You About Our Bananas?</Header >
              <p style={{
                fontSize: '1.33em'
              }}>
                Yes I know you probably disregarded the earlier boasts as non-sequitur filler
                content, but its really true. It took years of gene splicing and combinatory DNA
                research, but our bananas can really dance.
              </p>
              < Button as='a' size='large'>
                I 'm Still Quite Interested</Button>
            </Container>
          </Segment >

        </div>
    )
  }
}