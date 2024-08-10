import Nylas from "nylas";

const NylasConfig = {
  apiKey: process.env.NYLAS_CLIENT_SECRET,
  apiUri: process.env.NYLAS_API_URI,
};

export const nylas = new Nylas(NylasConfig);

export const applicationDetails = await nylas.applications.getDetails();
