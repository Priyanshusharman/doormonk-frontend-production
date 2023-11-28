import React from "react";
import Card from "./Card";

const ServiceList = ({ services }) => {
    return (
        <div style={{ marginBottom: "65px", marginTop: "65px" }}>
            {services.map((service, i) => {
                return <Card key={i} route={services[i].route} link={services[i].link} service={services[i].service} />
            })}
        </div>
    );
}

export default ServiceList;