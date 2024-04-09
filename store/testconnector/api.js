import axios from "axios"
import {
  CONNECTOR_TEST_CONNECTOR_PASSWORD,
  CONNECTOR_TEST_CONNECTOR_USERNAME
} from "react-native-dotenv"
const testconnector = axios.create({
  baseURL: "https://192.168.56.3/",
  auth: {
    username: CONNECTOR_TEST_CONNECTOR_PASSWORD,
    password: CONNECTOR_TEST_CONNECTOR_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function testconnector_post_get_all_computer_info_create(payload) {
  return testconnector.post(`/get_all_computer_info`)
}
export const apiService = { testconnector_post_get_all_computer_info_create }
