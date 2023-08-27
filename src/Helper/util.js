let length = 10;
let components = {
    lowercase: false,
    uppercase: true,
    numbers: true,
    specialcharacters: false
};


export const generatePass = () => {
    const obj = {
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789",
        specialcharacters: "!@#$%^&*()-_=+"
    }

    let charset = "";

    Object.entries(components).forEach(([key, value]) => {
        if (value)
            charset += obj[key]
    });

    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex]
    }
    return password
}


export const getComponents = (updatedComponents) => {
    components = updatedComponents
}

export const getLength = (updatedLength) => {
    length = updatedLength
}