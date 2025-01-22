import React from "react";

export default function CenteredContent() {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                Footer Centrado
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    content: {
        padding: "20px",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "10px",
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
};
