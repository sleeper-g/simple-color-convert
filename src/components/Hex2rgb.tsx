import React,{ useState } from "react"

export const Hex2rbg = () => {
    const [color, setColor] = useState('#eeeeee');

    const [isValid, setIsValid] = useState(true);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(value);
        setColor(value);
        setIsValid(isValidHex);
        if (isValidHex) {
            document.body.style.backgroundColor = value;
        } else {
            document.body.style.backgroundColor = 'red';
        }
    }
    const hexToRgb = (hex: string): string | null => {
    if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return null;
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
};
    return (
        <div className="widget">
            <input type="text" value={color} onChange={handleChange} />
            {!isValid 
                ? <div>Invalid color!</div> 
                : <div>{hexToRgb(color)}</div>}
        </div>
    );
};
