import { test } from "@playwright/test";
import ENV from "../env";

import CommonHelperPage from "../common-helpers/commonHelperPage";

const accountNameManager = ENV.BASE_ACCOUNT_NAME_MANAGER;

const agentNameManager = ENV.BASE_USERNAME;
const pathStateManager = ENV.BASE_MANAGER_STORAGE_STATE_PATH;
const password = ENV.BASE_PASSWORD;

const accountNameRoot = ENV.BASE_ACCOUNT_NAME_ROOT;
const agentNameRoot = ENV.BASE_USERNAME_ROOT;
const pathStateRoot = ENV.BASE_ROOT_STORAGE_STATE_PATH;
const passwordRoot = ENV.BASE_PASSWORD_ROOT;

const agentNameHousekeeper = ENV.BASE_USERNAME_HOUSEKEEPER;
const pathStateHousekeeper = ENV.BASE_HOUSEKEEPER_STORAGE_STATE_PATH;

const userWithoutDefaultHotel = ENV.BASE_USERNAME_USER_WITHOUT_DEFAULT_HOTEL;
const pathStateUserWithoutDefaultHotel = ENV.BASE_USER_WITHOUT_DEFAULT_HOTEL_STORAGE_STATE_PATH;

const viewerPaymentGateways = ENV.BASE_USERNAME_VIEWER_PAYMENT_GATEWAYS;
const pathStateViewerPaymentGateways = ENV.BASE_VIEWER_PAYMENT_GATEWAYS_STORAGE_STATE_PATH;

const userPermissionName = ENV.BASE_USERNAME_PERMISSION;
const passwordUserPermission = ENV.BASE_PASSWORD_USERNAME_PERMISSION;
const pathStateUserPermission = ENV.BASE_USER_PERMISSION_STORAGE_STATE_PATH;

const testPermissionManagerName = ENV.BASE_USERNAME_TEST_PERMISSION_MANAGER;
const testPermissionManagerPassword = ENV.BASE_PASSWORD_TEST_PERMISSION_MANAGER;
const testPermissionManagerPathState = ENV.BASE_USER_TEST_PERMISSION_MANAGER_STORAGE_STATE_PATH;

test.describe.configure({mode: "parallel", timeout: 60_000});

test(`Update the state file for Manager @T6a833d12`, async ({ page }) => {
  const commonHelperPage = new CommonHelperPage(page);
  await commonHelperPage.savingStorageState(accountNameManager, agentNameManager, password, pathStateManager);
});

test(`Update the state file for Housekeeper @T97734b82`, async ({ page }) => {
  const commonHelperPage = new CommonHelperPage(page);
  await commonHelperPage.savingStorageState(accountNameManager, agentNameHousekeeper, password, pathStateHousekeeper);
});

test(`Update the state file for UserWithoutDefaultHotel @Ta92ad89f`, async ({ page }) => {
  const commonHelperPage = new CommonHelperPage(page);
  await commonHelperPage.savingStorageState(accountNameManager, userWithoutDefaultHotel, password, pathStateUserWithoutDefaultHotel);
});

test(`Update the state file for Viewer Payment Gateway @T5e62eb31`, async ({ page }) => {
  const commonHelperPage = new CommonHelperPage(page);
  await commonHelperPage.savingStorageState(accountNameManager, viewerPaymentGateways, password, pathStateViewerPaymentGateways);
});

test(`Update the state file for user root @T2246074f`, async ({ page }) => {
  const commonHelperPage = new CommonHelperPage(page);
  await commonHelperPage.savingStorageState(accountNameRoot, agentNameRoot, passwordRoot, pathStateRoot);
});

test(`Update the state file for userPermission @Tfa7fd4f2`, async ({ page }) => {
  const commonHelperPage = new CommonHelperPage(page);
  await commonHelperPage.savingStorageState(accountNameManager, userPermissionName, passwordUserPermission, pathStateUserPermission);
});

test(`Update the state file for test permission manager`, async ({ page }) => {
  const commonHelperPage = new CommonHelperPage(page);
  await commonHelperPage.savingStorageState(accountNameManager, testPermissionManagerName, testPermissionManagerPassword, testPermissionManagerPathState);
});