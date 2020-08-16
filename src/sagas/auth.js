import { takeLatest, put, call } from "redux-saga/effects";
import { LOGIN, LOGIN_OK, LOGIN_NOT_OK } from "../action-types";
import { USER_DATA_KEY } from "../utils/config";
import { loginUserService } from "../utils/api";
import history from "../utils/history";

let login = function* ({ payload }) {
  console.log("Payload", JSON.stringify(payload));
  try {
    const response = yield call(loginUserService, payload);
    const expTime = Math.floor(Date.now() / 1000) + 60 * 4320;
    console.log("Responce", JSON.stringify(response));
    localStorage.setItem("token", response.token);
    localStorage.setItem("tokenExp", expTime);
    localStorage.setItem("user", response.user);
    yield put({ type: LOGIN_OK, payload: response });
    history.push("/home");
  } catch (error) {
    yield put({ type: LOGIN_NOT_OK, payload: error });
  }
};

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}
