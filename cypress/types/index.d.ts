import UI_ENDPOINTS from "../enums/ui-endpoints.enum";  

declare namespace TemplateTypes {
    export type UIEndpoints = keyof typeof UI_ENDPOINTS;
}

export default TemplateTypes;