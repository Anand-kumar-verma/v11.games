export const rupees = "₹";
// https://admin.bngwin.live/

export const baseUrl = "https://admin.v11.games";
// export const baseUrl = "https://api.bngwin.live";
export const fron_end_main_domain = "https://v11.games";

export const newdomain1 = "https://api.v11.games";
export const newdomain = "https://api.v11.games";
export const newdomainn = "https://api.v11.games";


// export const dummy_aviator = "http://192.168.18.183:9999";
// export const domain = "http://192.168.18.183:9999";
export const dummy_aviator = "https://v11-timer.onrender.com";
export const domain = "https://v11-timer.onrender.com";
export const support_mail = "";
export const telegram_url = "https://t.me/+MOBF6OxBH1oyZGU1";
export const facebook_url = "";
export const instagram_url = "";

export const endpoint = {
  //node login api

  login: `${newdomain}/api/v1/user_login`,
  send_otp: `${baseUrl}/api/forget-password`,
  veryfy_otp: `${baseUrl}/api/user-otp-verify`,
  signup: `${newdomain}/api/v1/signup`,
  get_name_by_referral_code: `${newdomain}/api/v1/get-sponsor-name`,
  ticket_raised: `${newdomain}/api/v1/ticket-raised`,
  ticket_raised_history: `${newdomain}/api/v1/ticket-raised-history`,
  attendence_income: `${newdomain1}/api/v1/get-welcome-bonus`,
  claim_income: `${newdomain}/api/v1/clame-bonus`,
  invitation_income: `${newdomain}/api/v1/inivitation-bonus`,
  vip_income: `${newdomain}/api/v1/vip-bonus`,
  deposit_bonus: `${newdomain}/api/v1/get-deposit-bonus-income/`,
  daily_income: `${newdomain}/api/v1/daily-salary-income`,
  forget_pass: `${newdomain}/api/v1/forget-password-send-otp`,
  otp_verify: `${newdomain}/api/v1/forget-password-veryfy-otp`,
  change_password: `${newdomain}/api/v1/forget-password-change-pass`,
  forget_password: `${newdomain}/api/v1/change-password`,

  userwallet: `${newdomain1}/api/v1/userwallet`,
  get_yesterday_deposit_withdrawl_by_treamFn: `${newdomain1}/api/v1/get_yesterday_deposit_withdrawl_by_treamFn`,
  top11winner: `${newdomain1}/api/v1/get-top-winners`,
  openbannerUrl: `${baseUrl}/popup`,
  profiledata: `${newdomain}/api/v1/profileapi`,
  get_level: `${newdomain}/api/v1/get-level`,
  promotion_data: `${newdomain}/api/v1/promotiondata`,
  applybet: `${newdomain}/api/v1/bet`,
  game_history: `${newdomain}/api/v1/colour_result`,
  my_history_all: `${newdomain}/api/v1/getbet-game-results`,
  get_status: `${newdomain}/api/v1/get-status`,
  cashback_report: `${newdomain1}/api/v1/getCashBack-report`,
  Qr_address: `${newdomain1}/api/v1/admin-qr-address`,

  //payment
  payment: `${newdomain1}/api/v1/payment`,
  deposit_history_usdt: `${newdomain1}/api/v1/deposit-history-usdt`,
  withdrawal_request_usdt: `${newdomain1}/api/v1/payout-request`,
  withdrawal_address_usdt: `${newdomain1}/api/v1/add-usdt-address`,
  get_address_list: `${newdomain1}/api/v1/usdt-address-record`,
  withdrawl_usdt_history: `${newdomain1}/api/v1/withdrawal-history-usdt`,

  check_result: `${baseUrl}/api/checkresult`,
  color_winning: `${baseUrl}/api/colour_winning`,
  cash_deposit: `${baseUrl}/api/deposit`,
  payment_url: "https://vpayout.com/Upi_controller/insert_fund_request_online",
  withdraw_payment: `${baseUrl}/api/payout-request`,

  payment_request: `${baseUrl}/api/deposit-request`,
  registration_bonus: `${baseUrl}/api/welcom-bonus`,
  deposit_history: `${newdomain}/api/v1/deposit-history-inr`,
  withdrawl_history: `${newdomain}/api/v1/withdrawal-history-inr`,
  payment_deposite: `${newdomain}/api/v1/payin-request`,

  // deposit_bonus: `${baseUrl}/api/deposit-bonus`,
  // referral_bonus: `${baseUrl}/api/refral-bonus`,

  daily_self_bet_income: `${baseUrl}/api/daily-self-bet-income`,
  daily_wallet_income: `${baseUrl}/api/daily-wallet-income`,
  daily_salary_income: `${newdomain1}/api/v1/daily-salary-icome`,
  weekly_salary_income: `${newdomain1}/api/v1/weekly-salary-icome`,
  team_reward_bonus: `${baseUrl}/api/team-reward-bonus`,
  team_trading_bonus: `${newdomain}/api/v1/level-income`,
  add_bank_details: `${newdomain}/api/v1/bank-add`,
  get_bank_list: `${newdomain}/api/v1/user-bank-details`,
  all_withdrawl_user_list: `${baseUrl}/api/widthrol-user-list`,
  recharge_call_bakc: `${baseUrl}/api/deposits-user-request`,
  cricket_get_url_id_pass: `${baseUrl}/api/cricket-details`,

  trx_game_history: `${newdomain}/api/v1/trx-auto-genrated-result`,
  my_history_all_trx: `${newdomain}/api/v1/trx-getColourBets`,
  my_history_all_trx_temp: `${newdomain}/api/v1//trx-getColourBets-temp`,
  trx_game_bet: `${newdomain}/api/v1/trx-bet`,

  // aviator api's
  aviator_login: `${domain}/api/aviator/login`,
  // get_data_by_user_id: `${domain}/api/userProfile`,
  aviator_result: `${domain}/api/aviator/result_cron`,
  total_bet_history: `${domain}/api/aviator/total-bet-histroy`,
  bet_history: `${domain}/api/aviator/bet_histroy`,
  result: `${domain}/api/aviator/result`,
  wallet_data: `${domain}/api/aviator/userwallet`,
  bet_now: `${domain}/api/aviator/bet_now`,
  cash_out: `${domain}/api/aviator/cash_out`,

  // change_password: `${newdomain}/api/v1/change-password`,
  // deposit_bonus: `${newdomain}/api/v1/self-deposit-bonus`,
  referral_bonus: `${newdomain}/api/v1/sponsor-income`,
  need_to_bet: `${newdomain}/api/v1/need-to-bet`,
  //income
  subordinate_data: `${newdomain1}/api/v1/get-subordinate-data-funx`,
  commission_data: `${newdomain1}/api/v1/get-commisssion-data-funx`,
  tranfer_wallet: `${newdomain1}/api/v1/transfer-amount-from-working-wallet-to-main-wallet`,
  transfer_wallet_history: `${newdomain1}/api/v1/transfer-history-from-working-wallet-to-main-wallet`,
  yesterday_income: `${newdomain}/api/v1/get-total-betA-ad-income-yesterday`,
  recharge_income: `${newdomainn}/api/v1/getDirectReferral_Recharge_salary`,
  refferral_recharge_income: `${newdomainn}/api/v1/getDirectReferral_Recharge_salary`,
  get_level_general: `${newdomain1}/api/v1/get_level_general_data`,
  get_team_refferal: `${newdomain1}/api/v1/getTeamReferral_First_Recharge_salary`,
  
  
  node_api:{
    get_leder_data:`${dummy_aviator}/api/v1/get-ledger-data`,
    my_history: `${dummy_aviator}/api/v1/my-history-by-user-id`,
    login_with_node:`${dummy_aviator}/api/v1/createuser`,
    main_wallet:`${dummy_aviator}/main-wallet-to-aviator`,
    aviator_main:`${dummy_aviator}/aviator-to-main-wallet`,
    get_top_users: `${dummy_aviator}/api/v1/get-top-users`,
  }

};
