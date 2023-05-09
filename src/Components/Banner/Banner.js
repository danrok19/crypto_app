import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const styles = {
    banner: {
        backgroundImage: "url(./bannerImg.jpg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height:  "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}
const Banner = () => {
    return (
        <div style={styles.banner}>
            <Container style={styles.bannerContent}>
                <div style={styles.tagline}>
                    <Typography variant="h2" style={{ fontWeight: "bold", marginBottom: 15 }}>
                        CryptoApp
                    </Typography>
                    <Typography varaint="subtitle2" style={{color: "lightgrey" }}>
                        Get all of your favorite crypto currencies
                    </Typography>
                </div>
            </Container>
        </div>
    )
}

export default Banner
