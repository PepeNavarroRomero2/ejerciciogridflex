import React from "react";

export default function GridLayout() {
    return (
        <div style={styles.gridContainer}>
            <div style={{ ...styles.gridItem, backgroundColor: "#ff9999", gridArea: "header" }}>
                Encabezado
            </div>
            <div style={{ ...styles.gridItem, backgroundColor: "#99ccff", gridArea: "sidebar" }}>
                Barra lateral Izquierda
            </div>
            <div style={{ ...styles.gridItem, backgroundColor: "#ffcc99", gridArea: "main" }}>
                Contenido principal
            </div>
            <div style={{ ...styles.gridItem, backgroundColor: "#99ff99", gridArea: "footer" }}>
                Pie de página
            </div>
            <div style={{ ...styles.gridItem, backgroundColor: "#ffccff", gridArea: "extra" }}>
                Barra lateral Derecha
            </div>
        </div>
    );
}

const styles = {
    gridContainer: {
        display: "grid",
        gridTemplateAreas: `
            "header header header"
            "sidebar main extra"
            "footer footer footer"
        `,
        gridTemplateColumns: "1fr 2fr 1fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "10px",
        height: "100vh",
        padding: "10px",
    },
    gridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        color: "#333",
        fontSize: "1.2rem",
        fontWeight: "bold",
        border: "1px solid #ccc",
        borderRadius: "5px",
    },
    
};
