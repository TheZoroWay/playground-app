export const exceptions = [
  {
    type: "KYC_Documentation",
    issuanceType: "Passport_Verification",
    issuanceSite: "Paris_Office",
    addressType: "Residential",
    supportedMarkets: ["FR", "BE"],
  },
  {
    type: "AML_Screening",
    issuanceType: "Sanctions_Check",
    issuanceSite: "NewYork_Center",
    addressType: "Business",
    supportedMarkets: ["CA"],
  },
  {
    type: "KYC_Documentation",
    issuanceType: "Driver_License_Check",
    issuanceSite: "Madrid_Hub",
    addressType: "Permanent",
    supportedMarkets: ["ES", "PT"],
  },
  {
    type: "AML_Screening",
    issuanceType: "PEP_List_Screening",
    issuanceSite: "Berlin_Branch",
    addressType: "Business",
    supportedMarkets: ["DE", "AT"],
  },
  {
    type: "KYC_Documentation",
    issuanceType: "National_ID_Verification",
    issuanceSite: "NewYork_Center",
    addressType: "Temporary",
    supportedMarkets: ["US", "FR"],
  },
  {
    type: "AML_Screening",
    issuanceType: "Adverse_Media_Check",
    issuanceSite: "Paris_Office",
    addressType: "Business",
    supportedMarkets: ["FR", "CH"],
  },
  {
    type: "KYC_Documentation",
    issuanceType: "Utility_Bill_Verification",
    issuanceSite: "Berlin_Branch",
    addressType: "Residential",
    supportedMarkets: ["DE", "BE"],
  },
  {
    type: "AML_Screening",
    issuanceType: "Blacklist_Verification",
    issuanceSite: "Madrid_Hub",
    addressType: "Business",
    supportedMarkets: ["ES", "PT", "FR"],
  },
  {
    type: "KYC_Documentation",
    issuanceType: "Bank_Statement_Verification",
    issuanceSite: "Paris_Office",
    addressType: "Permanent",
    supportedMarkets: ["FR", "DE", "CH"],
  },
  {
    type: "AML_Screening",
    issuanceType: "OFAC_List_Check",
    issuanceSite: "NewYork_Center",
    addressType: "Business",
    supportedMarkets: ["CA", "BE"],
  },
];

export const IssuanceTypeMap = {
  Passport_Verification: "Passport Verification",
  Sanctions_Check: "Sanctions Check",
  Driver_License_Check: "Driver License Check",
  PEP_List_Screening: "Politically Exposed Persons (PEP) List Screening",
  National_ID_Verification: "National ID Verification",
  Adverse_Media_Check: "Adverse Media Check",
  Utility_Bill_Verification: "Utility Bill Verification",
  Blacklist_Verification: "Blacklist Verification",
  Bank_Statement_Verification: "Bank Statement Verification",
  OFAC_List_Check: "OFAC (Office of Foreign Assets Control) List Check",
};

export const IssuanceSiteMap = {
  Paris_Office: "Paris Office",
  NewYork_Center: "New York Center",
  Madrid_Hub: "Madrid Hub",
  Berlin_Branch: "Berlin Branch",
};

export const ExceptionTypeMap = {
  KYC_Documentation: "KYC Documentation",
  AML_Screening: "AML Screening",
  Address_Verification: "Address Verification",
  Identity_Verification: "Identity Verification",
  Document_Validation: "Document Validation",
};

export const Markets = [
  { id: "FR", market: "France", FR: "France" },
  { id: "DE", market: "Germany", DE: "Germany" },
  { id: "BE", market: "Belgium", BE: "Belgium" },
  { id: "US", market: "United States", US: "United States" },
  { id: "CA", market: "Canada", CA: "Canada" },
  { id: "ES", market: "Spain", ES: "Spain" },
  { id: "PT", market: "Portugal", PT: "Portugal" },
  { id: "CH", market: "Switzerland", CH: "Switzerland" },
  { id: "AT", market: "Austria", AT: "Austria" },
];
