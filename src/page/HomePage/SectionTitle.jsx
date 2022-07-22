import React from "react";

export default function SectionTitle(props) {
    const title = props.title;
    return (
        <div className="p-2">
            <h1 className="uppercase text-center text-3xl font-bold p-4">
                {title}
            </h1>
        </div>
    );
}
