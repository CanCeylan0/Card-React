import React from "react";
import Button from "./components/button"
import Input from "./components/input"
import Card from "./components/card"

const DATA = [
    {
        id: 0,
        title: "Furkan Atakan BOZKURT",
        age: "26",
        position: "NİBGAT® | Root",
        img: "https://media.licdn.com/dms/image/C4E03AQEPTh5YozZd6g/profile-displayphoto-shrink_400_400/0/1652701612470?e=1677110400&v=beta&t=NkpTO_f71Bfct0VnW9oqL4KFdfTJ_oxGtVM-2syEV8U"
    },
    {
        id: 1,
        title: "Osman Can CEYLAN",
        age: "21",
        position: "NİBGAT® | Developer",
        img: "https://media.licdn.com/dms/image/C4D03AQHrzHvuEZFPow/profile-displayphoto-shrink_200_200/0/1659703574112?e=1678320000&v=beta&t=BV_kTMZ7f24_Hu_l71TxK_lsf6phWUNATMYb-4BL75Y"
    },
    {
        id: 2,
        title: "Sevinç TANIŞ",
        age: "23",
        position: "Developer",
        img: "https://avatars.githubusercontent.com/u/49745570?v=4"
    },
    {
        id: 3,
        title: "İrem DEMİR",
        age: "21",
        position: "Developer",
        img: "https://www.ozeldersalani.com/images/teachers/1666163536.jpg"
    },
    {
        id: 4,
        title: "Bilal Enes CANDEMİR",
        age: "21",
        position: "Developer",
        img: "https://avatars.githubusercontent.com/u/123306660?v=4"
    },
];

const App = () => {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }}>
        
        {DATA.map((item) => { 
            return <Card
            {...item}
            >
            </Card>
    })}
    </div>;
}

export default App;