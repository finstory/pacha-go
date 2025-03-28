
const exaple_payload = [
    {
        "parameter": "internal",
        "from": null,
        "property": "password",
        "constraints": {
            "internal": "Error al ingresar su 'Password'."
        }
    }
];

const translatePayloadEs = (payload: any) => {
    return payload.map((item: any) => {
        if (item.property === "password")
            if (item.constraints.internal === "Error al ingresar su 'Password'.") {
                const constraints = { internal: "Error al ingresar su Contraseña." };
                return { ...item, constraints }
            }
        return item;
    })
};


export const checkApi = async <T>(data: T, setErrorList: any, printErrors: boolean = false) => {
    try {
        const response = await data;
        return response;
    } catch (error) {
        const axiosError = error.response?.data;
        if (axiosError?.message)
            printErrors && console.error(error.response.data.message);
        else if (error.message)
            printErrors && console.error(error.message);
        if (axiosError?.payload) {
            printErrors && console.log(axiosError.payload)
            setErrorList(translatePayloadEs(axiosError.payload))
        }
        else if (error.payload) {
            printErrors && console.log(error.payload)
            setErrorList(error.payload)
        }

        throw error;
    }
}