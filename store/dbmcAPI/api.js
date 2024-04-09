import axios from "axios"
const dbmcAPI = axios.create({
  baseURL: "https://dbmc-47295.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return dbmcAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_connectors_testconnector_add_computer_create(payload) {
  return dbmcAPI.post(`/api/v1/connectors/testconnector/add_computer/`)
}
function api_v1_login_create(payload) {
  return dbmcAPI.post(`/api/v1/login/`, payload)
}
function api_v1_recipientinformation_list(payload) {
  return dbmcAPI.get(`/api/v1/recipientinformation/`)
}
function api_v1_recipientinformation_create(payload) {
  return dbmcAPI.post(`/api/v1/recipientinformation/`, payload)
}
function api_v1_recipientinformation_retrieve(payload) {
  return dbmcAPI.get(`/api/v1/recipientinformation/${payload.id}/`)
}
function api_v1_recipientinformation_update(payload) {
  return dbmcAPI.put(`/api/v1/recipientinformation/${payload.id}/`, payload)
}
function api_v1_recipientinformation_partial_update(payload) {
  return dbmcAPI.patch(`/api/v1/recipientinformation/${payload.id}/`, payload)
}
function api_v1_recipientinformation_destroy(payload) {
  return dbmcAPI.delete(`/api/v1/recipientinformation/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return dbmcAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return dbmcAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return dbmcAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return dbmcAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return dbmcAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return dbmcAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return dbmcAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return dbmcAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return dbmcAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return dbmcAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return dbmcAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return dbmcAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_connectors_testconnector_add_computer_create,
  api_v1_login_create,
  api_v1_recipientinformation_list,
  api_v1_recipientinformation_create,
  api_v1_recipientinformation_retrieve,
  api_v1_recipientinformation_update,
  api_v1_recipientinformation_partial_update,
  api_v1_recipientinformation_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
