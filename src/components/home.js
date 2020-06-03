import React from "react"
import {Grid, Cell} from 'react-mdl';

const Home = () => {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="main">
                <Cell col={12}>
                  <img
                    src="https://i.pinimg.com/564x/48/78/e4/4878e405a49b78a87d38be32e97c46d8.jpg"
                    alt="kojima"
                    className="kojima-img">
                  </img>

                  <div className="banner-text">
                      <h1>What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                  </div>
                </Cell>
            </Grid>
        </div>
    )
  }

export default Home


