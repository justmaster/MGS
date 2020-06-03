import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


const Nav = () => {
    return(
            <div style={{height: '120px', position: 'relative'}}>
                <Layout style={{background: 'url(/navbar.jpg',
                                backgroundSize: "contain", 
                                backgroundPosition: "right", 
                                backgroundRepeat: "no-repeat",
                                backgroundColor: "black",}}>
                    <Header transparent title="Metal Gear Solid V Fan Page" style={{color: 'white'}}>
                        <Navigation style={{marginRight: "50px"}}>
                            <a href="/characters">Characters</a>
                            <a href="/contact">Contact</a>
                            <a href="/Error">Error</a>
                            <a href="/home">Home</a>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation style={{marginRight: "100px"}}>
                            <a style={{marginRight: "100px"}} href="/about">About</a>
                            <a href="/contact">Contact</a>
                            <a href="/Error">Error</a>
                            <a href="/home">Home</a>
                        </Navigation>
                    </Drawer>
                    <Content />
                </Layout>
            </div>
    )
}

export default Nav