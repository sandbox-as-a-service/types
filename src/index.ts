export type FraudDetectionRequestBody = {
  email: string;
  ip: string;
  phone: string;
  session_id: string;
  password_hash: string;
  user_id: string;
  billing: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };

  shipping: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };

  device_fingerprint: string;
  card_bin: string;
  amount: number;
  currency: string;
  custom_fields: {
    login_attempts: number;
    referral_code: string;
  };
};

export type FraudDetectionResponse = {
  score: number;
  score_level: string;
  fraud_tags: string[];
  ip: {
    geo: {
      country: string;
      region: string;
      city: string;
    };
    is_tor: boolean;
    is_proxy: boolean;
    risk_score: number;
  };
  email: {
    domain: string;
    first_seen_days: number;
    disposable: boolean;
    risk_score: number;
  };
  phone: {
    valid: boolean;
    carrier: string | null;
    risk_score: number;
  };
  device: {
    fingerprint: string;
    risk_score: number;
  };
  custom_fields: {
    login_attempts: {
      value: number;
      risk_modifier: number;
    };
    referral_code: {
      value: string;
      risk_modifier: number;
    };
  };
  details_url: string;
};
