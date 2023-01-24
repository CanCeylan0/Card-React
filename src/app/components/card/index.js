import React from "react";

const Card = ({
    title,
    age,
    position,
    img
}) => {
    return <div style={{
        display: "flex",
        flexDirection : "row",
        backgroundColor : "#fff",
        boxShadow : "0 5px 5px #0006",
        padding : "10px 20px",
        marginBottom : "20px",
        borderRadius: "10px",
        width: "400px"
    }}>
        <div>
            <img src={img}
                alt= "no" 
                style={{
                    borderRadius: "50%",
                    marginRight: "20px",
                    width: "80px",
                    height: "80px"
                }}
            />
        </div>
        <div style= {{
              display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <span>{title}</span>
                <span>{position}</span>
            </div>
            <span>{age}</span>
        </div>
    </div>
}

export default Card;

