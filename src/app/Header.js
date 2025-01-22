import React from "react";

export default function Navbar() {
    return (
        <nav style={styles.navbar}>
            <div style={styles.img}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOfQZ-LhkRa40zhwlae_IEqaqM1iFR21HAw&s" alt="Logo" height={"100px"} width={"auto"} display="flex" /></div>
            <ul style={styles.navMenu}>
                <li style={styles.navItem}><a href="#inicio" style={styles.navLink}>Inicio</a></li>
                <li style={styles.navItem}><a href="#servicios" style={styles.navLink}>Servicios</a></li>
                <li style={styles.navItem}><a href="#contacto" style={styles.navLink}>Contacto</a></li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f8f9fa",
        borderBottom: "2px solid #e0e0e0",
    },
    navMenu: {
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginLeft: "20px",
    },
    navLink: {
        textDecoration: "none",
        color: "#333",
        fontSize: "1rem",
        fontWeight: "500",
    },
};
