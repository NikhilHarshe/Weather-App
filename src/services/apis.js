const BASE_URL = process.env.REACT_APP_BASE_URL

//AUTH ENDPOINTS
export const endpoints = {
    CREATEUSER_API : BASE_URL + "/auth/signup",
    LOGIN_API : BASE_URL + "/auth/login",
    DELETEUSER_API : BASE_URL + "/auth/deleteUser",
    GET_USER_DETAILS_API : BASE_URL + "/auth/getUserDetails"
}

//EVENT ENDPOINTS
export const eventEndpoints = {
    CREATEEVENT_API : BASE_URL + "/createEvent",
    EDITEVENT_API : BASE_URL + "/editEvent",
    GET_ALL_EVENTS_API : BASE_URL + "/getAllEventes",
    GET_EVENT_DETAILS_API : BASE_URL + "/getEventDetails",
    DELETE_EVENT_API : BASE_URL + "/deleteEvent",
}

//MEMBERS ENDPOINTS
export const memberEndpoints = {
    CREATEMEMBER_API : BASE_URL + "/create_member",
    GET_MEMBER_DETAILS : BASE_URL + "/get_member_details",
    GET_ALL_MEMBERS_DETAILS : BASE_URL + "/getAllMembersDetails",
    DELETE_MEMBER_API : BASE_URL + "/deleteMember",
}